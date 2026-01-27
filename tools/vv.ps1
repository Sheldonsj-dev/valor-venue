Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# --- Repo config
$global:VV_REPO = "C:\Users\henry\valor-venue"
$global:VV_SITE = "https://thevalorvenue.com"

function vv-cd {
  Set-Location $global:VV_REPO
}

function vv-refresh-path {
  $env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User")
}

function vv-write([string]$path, [string]$text) {
  $full = Join-Path $global:VV_REPO $path
  $dir = Split-Path -Parent $full
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  $text = $text -replace "`r`n","`n"
  [System.IO.File]::WriteAllText($full, $text, (New-Object System.Text.UTF8Encoding($false)))
}

function vv-status {
  vv-cd
  git status -sb
  git log -1 --oneline
}

function vv-clean {
  vv-cd
  if (Test-Path .\dist) { Remove-Item .\dist -Recurse -Force }
}

function vv-build {
  vv-cd
  vv-clean
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "Build failed" }

  $m = Select-String -Path .\dist\index.html -Pattern '\./assets/' -AllMatches
  if (-not $m) { throw "dist/index.html missing ./assets/ (GitHub Pages base regression)" }

  # useful asset sanity checks (non-fatal if missing)
  if (-not (Test-Path .\dist\CNAME)) { Write-Host "WARN: dist\CNAME missing" -ForegroundColor Yellow }
  if (-not (Test-Path .\dist\brand\logo-cropped.png)) { Write-Host "WARN: dist\brand\logo-cropped.png missing" -ForegroundColor Yellow }
  if (-not (Test-Path .\dist\brand\hero.jpg)) { Write-Host "NOTE: dist\brand\hero.jpg missing (hero won't show)" -ForegroundColor Yellow }

  Write-Host "Ã¢Å“â€¦ Build OK + ./assets verified" -ForegroundColor Green
}

function vv-prepush {
  vv-cd
  if (Test-Path .\tools\prepush.ps1) {
    powershell -ExecutionPolicy Bypass -File .\tools\prepush.ps1
  } else {
    Write-Host "No tools\prepush.ps1 found (skipping)." -ForegroundColor Yellow
  }
}

function vv-commit([string]$message) {
  if (-not $message) { throw "vv-commit requires a message" }
  vv-cd

  git add -A

  # Safety: never commit .env.local
  $stagedEnvLocal = git diff --cached --name-only | Select-String -SimpleMatch ".env.local" -ErrorAction SilentlyContinue
  if ($stagedEnvLocal) { throw ".env.local is staged. Run: git reset HEAD -- .env.local" }

  git commit -m $message
}

function vv-push {
  vv-cd
  git push origin main
}

function vv-deploy {
  vv-cd
  npx gh-pages -d dist -b gh-pages
  Write-Host "Ã¢Å“â€¦ Published to gh-pages" -ForegroundColor Green
}

# Curl helper that avoids your CRYPT_E_NO_REVOCATION_CHECK
function vv-http([string]$path) {
  if (-not $path.StartsWith("http")) {
    if (-not $path.StartsWith("/")) { $path = "/" + $path }
    $url = $global:VV_SITE + $path
  } else {
    $url = $path
  }
  $ts = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
  $url2 = if ($url -match "\?") { "${url}&v=$ts" } else { "${url}?v=$ts" }

  $code = & curl.exe --ssl-no-revoke -s -o NUL -w "%{http_code}" "$url2"
  [pscustomobject]@{ Url = $url2; StatusCode = $code }
}

function vv-verify-live {
  vv-cd

  $ts = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
  $root = (& curl.exe --ssl-no-revoke --compressed -s -L "$global:VV_SITE/?v=$ts") -join "`n"

  if (-not [regex]::IsMatch($root, "\./assets/")) {
    # Helpful debug: show any assets-like lines
    Write-Host "DEBUG: first 25 lines of live root HTML:" -ForegroundColor Yellow
    ($root -split "`n" | Select-Object -First 25) | ForEach-Object { Write-Host $_ }
    throw "LIVE root missing ./assets/"
  }

  if ([regex]::IsMatch($root, '="/assets/')) {
    throw "LIVE root contains /assets/ (bad for GitHub Pages)"
  }

  $ts = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
  $nf = (& curl.exe --ssl-no-revoke --compressed -s -L "$global:VV_SITE/404.html?v=$ts") -join "`n"
  if (-not [regex]::IsMatch($nf, "\./assets/")) { throw "LIVE 404 missing ./assets/" }

  vv-http "/brand/logo-cropped.png" | Format-Table -AutoSize
  vv-http "/brand/hero.jpg" | Format-Table -AutoSize
  vv-http "/gallery/1.jpg" | Format-Table -AutoSize

  Write-Host "✅ Live checks passed (assets paths + key files reachable)" -ForegroundColor Green
}

function vv-release([string]$message) {
  if (-not $message) { throw "vv-release requires a message" }
  vv-build
  vv-prepush
  vv-commit $message
  vv-push
  vv-deploy
  vv-verify-live
  Write-Host "Ã¢Å“â€¦ Release complete" -ForegroundColor Green
}