$ErrorActionPreference = "Stop"
function Fail($msg) { Write-Error $msg; exit 1 }

# PostCSS duplicates: forbid any alt file if we keep postcss.config.cjs
$dupPostCandidates = @(".postcssrc",".postcssrc.json",".postcssrc.cjs","postcss.config","postcss.config.json","postcss.config.js","postcss.config.mjs","postcss.config.ts")
$dupPost = @()
foreach ($f in $dupPostCandidates) {
  if ((Test-Path $f -PathType Leaf) -and ($f -ne "postcss.config.cjs")) { $dupPost += $f }
}
if ($dupPost.Count -gt 0) { Fail "Remove duplicate PostCSS configs: $($dupPost -join ', ')" }

# Tailwind duplicates: keep tailwind.config.cjs only
$dupTwCandidates = @("tailwind.config.js","tailwind.config.mjs","tailwind.config.ts","tailwind.config.json")
$dupTw = @()
foreach ($f in $dupTwCandidates) {
  if ((Test-Path $f -PathType Leaf) -and ($f -ne "tailwind.config.cjs")) { $dupTw += $f }
}
if ($dupTw.Count -gt 0) { Fail "Remove duplicate Tailwind configs: $($dupTw -join ', ')" }

# UTF-8 without BOM guard
function Test-Bom([string]$path) {
  if (-not (Test-Path $path)) { return }
  $b = [IO.File]::ReadAllBytes((Resolve-Path $path))
  if ($b.Length -ge 3 -and $b[0] -eq 0xEF -and $b[1] -eq 0xBB -and $b[2] -eq 0xBF) {
    throw "BOM detected in $path. Save as UTF-8 without BOM."
  }
}
"postcss.config.cjs","tailwind.config.cjs","vite.config.ts",".gitattributes",".editorconfig" | ForEach-Object { Test-Bom $_ }

# Optional CRLF guard on tracked text files
$crlfFiles = @()
foreach ($f in (& git ls-files)) {
  try {
    if (Test-Path $f -PathType Leaf) {
      $s = Get-Content -Raw -ErrorAction Stop $f
      if ($s -match "`r`n") { $crlfFiles += $f }
    }
  } catch { }
}
if ($crlfFiles.Count -gt 0) { Fail "CRLF found in: $($crlfFiles -join ', '). Run: git add --renormalize . && git commit -m 'chore: normalize LF'" }

# Install, optional typecheck, build
npm ci
$pkg = Get-Content package.json -Raw
if ($pkg -match '"typecheck"\s*:\s*"') { npm run typecheck }
npm run build

# SPA 404: only create if missing
if (-not (Test-Path "dist/404.html")) { Copy-Item -Force "dist/index.html" "dist/404.html" }

# Basic output validation
$idx = Get-Content dist/index.html -Raw
if ($idx -match "/src/") { Fail "dist/index.html references /src/. Check Vite base './'." }
if ($idx -notmatch "\./assets/") { Fail "Expected ./assets/ references in dist/index.html" }

Write-Host "Pre-push checks passed" -ForegroundColor Green