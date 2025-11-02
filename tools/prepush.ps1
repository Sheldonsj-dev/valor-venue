$ErrorActionPreference = "Stop"

function Fail($msg) { Write-Error $msg; exit 1 }

# Duplicate PostCSS configs (safe existence checks)
$dupPost = @(
  ".postcssrc",".postcssrc.json",".postcssrc.cjs",
  "postcss.config","postcss.config.json","postcss.config.js","postcss.config.mjs","postcss.config.ts"
) | Where-Object { Test-Path $_ -PathType Leaf -and $_ -ne "postcss.config.cjs" }
if ($dupPost.Count -gt 0) { Fail "Remove duplicate PostCSS configs: $($dupPost -join ', ')" }

# Duplicate Tailwind configs (safe)
$dupTw = @("tailwind.config.js","tailwind.config.mjs","tailwind.config.ts","tailwind.config.json") |
  Where-Object { Test-Path $_ -PathType Leaf -and $_ -ne "tailwind.config.cjs" }
if ($dupTw.Count -gt 0) { Fail "Remove duplicate Tailwind configs: $($dupTw -join ', ')" }

# UTF-8 without BOM guard
function Test-Bom([string]$path) {
  if (-not (Test-Path $path)) { return }
  $b = [IO.File]::ReadAllBytes((Resolve-Path $path))
  if ($b.Length -ge 3 -and $b[0] -eq 0xEF -and $b[1] -eq 0xBB -and $b[2] -eq 0xBF) { throw "BOM detected in $path. Save as UTF-8 without BOM." }
}
"postcss.config.cjs","tailwind.config.cjs","vite.config.ts",".gitattributes",".editorconfig" | ForEach-Object { Test-Bom $_ }

# Optional CRLF guard for tracked text files (safe, skips binaries and errors)
$crlfFiles = @()
foreach ($f in (git ls-files)) {
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
if (Test-Path "tsconfig.json" -and ((Get-Content package.json -Raw) -match '"typecheck"')) { npm run typecheck }
npm run build

# SPA 404: only create if missing (do not overwrite custom)
if (-not (Test-Path "dist/404.html")) { Copy-Item -Force "dist/index.html" "dist/404.html" }

# Basic output validation
$idx = Get-Content dist/index.html -Raw
if ($idx -match "/src/") { Fail "dist/index.html references /src/. Check Vite base './'." }
if ($idx -notmatch "\./assets/") { Fail "Expected ./assets/ references in dist/index.html" }

Write-Host "Pre-push checks passed" -ForegroundColor Green