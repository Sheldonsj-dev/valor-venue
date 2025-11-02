# Deploy Valor Venue site to GitHub Pages
Write-Host "🚀 Building project..." -ForegroundColor Cyan
npm run build

Write-Host "📂 Deploying dist/ to GitHub Pages..." -ForegroundColor Yellow
npx gh-pages -d dist -r https://github.com/Sheldonsj-dev/valor-venue.git -m "Automated deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

Write-Host "✅ Deployment complete! Check https://thevalorvenue.com" -ForegroundColor Green
