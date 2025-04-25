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
      // Redirect old herramientas routes to new herramientas-ia
      {
        source: '/herramientas',
        destination: '/herramientas-ia',
        permanent: true,
      },
      // Eliminada la redirección redundante de /herramientas/todas
      
      // Redirección de categorías
      {
        source: '/herramientas/categoria/:slug*',
        destination: '/herramientas-ia?categoria=:slug*',
        permanent: true,
      },
      
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
        destination: '/herramientas-ia',
        permanent: true,
      },
      {
        source: '/resenas/:slug',
        destination: '/herramientas/:slug',
        permanent: true,
      },
      
      // Redirecciones de la sección de recursos
      {
        source: '/guias-recursos',
        destination: '/recursos',
        permanent: true,
      },
      {
        source: '/guias-recursos/:slug*',
        destination: '/recursos/:slug*',
        permanent: true,
      },
      {
        source: '/recursos/guias',
        destination: '/recursos?categoria=guias',
        permanent: true,
      },
      {
        source: '/recursos/prompts',
        destination: '/recursos?categoria=prompts',
        permanent: true,
      },
      {
        source: '/recursos/automatizacion',
        destination: '/recursos?categoria=automatizacion',
        permanent: true,
      },
      {
        source: '/recursos/plantillas',
        destination: '/recursos?categoria=plantillas',
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
        destination: '/recursos#kit-gratuito',
        permanent: true,
      },
      
      // Redirects from blog to recursos
      {
        source: '/blog',
        destination: '/recursos',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/recursos/:slug*',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['v0.blob.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
}

export default nextConfig
