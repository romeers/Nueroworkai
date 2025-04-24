/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Redirecciones de la sección de comparativas
      {
        source: '/comparativas',
        destination: '/herramientas/comparar',
        permanent: true,
      },
      {
        source: '/comparativas/:slug*',
        destination: '/herramientas/comparar/:slug*',
        permanent: true,
      },
      
      // Redirecciones de la sección de reseñas
      {
        source: '/resenas',
        destination: '/herramientas',
        permanent: true,
      },
      {
        source: '/resenas/:slug',
        destination: '/herramientas/:slug',
        permanent: true,
      },
      
      // Redirecciones de la sección de recursos
      {
        source: '/recursos',
        destination: '/guias-recursos',
        permanent: true,
      },
      
      // Redirecciones de la sección de cómo funciona
      {
        source: '/como-funciona',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      
      // Redirecciones de contacto
      {
        source: '/contacto',
        destination: '/sobre-nosotros#contacto',
        permanent: true,
      },
      
      // Redirección para la página de newsletter
      {
        source: '/newsletter',
        destination: '/guias-recursos#newsletter',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['v0.blob.com'],
    unoptimized: true,
  },
}

export default nextConfig
