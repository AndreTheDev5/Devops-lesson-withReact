/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configurazione NEXT per siti statici con la possibilità di HOST su GitHub Actions/Pages
  output:"export",
  basePath:"/Devops-lesson.withReact",  //Nome repository GitHub 
  images: {
    unoptimized:true
  }
}

module.exports = nextConfig
