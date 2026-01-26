$ErrorActionPreference = "Stop"

Write-Host "== (1) cd repo ==" -ForegroundColor Cyan
Set-Location "C:\Users\henry\valor-venue"

Write-Host "`n== (2) git status -sb ==" -ForegroundColor Cyan
git status -sb

Write-Host "`n== (3) git log -1 --oneline ==" -ForegroundColor Cyan
git log -1 --oneline

Write-Host "`n== (4) dir .\public\brand ==" -ForegroundColor Cyan
dir .\public\brand

Write-Host "`n== (5) App.jsx imports Home ==" -ForegroundColor Cyan
Select-String -Path .\src\App.jsx -Pattern 'import Home' -Context 0,2

Write-Host "`n== (6) Home.jsx logoSrc/BASE_URL ==" -ForegroundColor Cyan
Select-String -Path .\src\pages\Home.jsx -Pattern 'logoSrc|logo-cropped|BASE_URL' -Context 0,2

Write-Host "`n== (7) vite.config.js base ==" -ForegroundColor Cyan
Select-String -Path .\vite.config.js -Pattern 'base' -Context 0,2

Write-Host "`n== (8) npm run build ==" -ForegroundColor Cyan
npm run build

Write-Host "`n== (9) dist index.html has ./assets/ ==" -ForegroundColor Cyan
$matches = Select-String -Path .\dist\index.html -Pattern '\./assets/' -AllMatches
if (-not $matches) { throw "dist/index.html does NOT contain ./assets/ (base path regression)" }
$matches | Select-Object -First 3

Write-Host "`nOK: Verification complete." -ForegroundColor Green