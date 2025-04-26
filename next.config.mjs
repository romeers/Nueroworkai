import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize image loading
  images: {
    domains: ['v0.blob.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Add performance headers with fixed patterns
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect old herramientas routes to new herramientas-ia
      {
        source: '/:locale/herramientas',
        destination: '/:locale/herramientas-ia',
        permanent: true,
      },
      
      // Redirección de categorías
      {
        source: '/:locale/herramientas/categoria/:slug*',
        destination: '/:locale/herramientas-ia?categoria=:slug*',
        permanent: true,
      },
      
      // Redirecciones de la sección de comparativas
      {
        source: '/:locale/comparativas',
        destination: '/:locale/herramientas/comparar',
        permanent: true,
      },
      {
        source: '/:locale/comparativas/:slug*',
        destination: '/:locale/herramientas/comparar/:slug*',
        permanent: true,
      },
      
      // Redirecciones de la sección de reseñas
      {
        source: '/:locale/resenas',
        destination: '/:locale/herramientas-ia',
        permanent: true,
      },
      {
        source: '/:locale/resenas/:slug',
        destination: '/:locale/herramientas/:slug',
        permanent: true,
      },
      
      // Redirecciones de la sección de recursos
      {
        source: '/:locale/guias-recursos',
        destination: '/:locale/recursos',
        permanent: true,
      },
      {
        source: '/:locale/guias-recursos/:slug*',
        destination: '/:locale/recursos/:slug*',
        permanent: true,
      },
      {
        source: '/:locale/recursos/guias',
        destination: '/:locale/recursos?categoria=guias',
        permanent: true,
      },
      {
        source: '/:locale/recursos/prompts',
        destination: '/:locale/recursos?categoria=prompts',
        permanent: true,
      },
      {
        source: '/:locale/recursos/automatizacion',
        destination: '/:locale/recursos?categoria=automatizacion',
        permanent: true,
      },
      {
        source: '/:locale/recursos/plantillas',
        destination: '/:locale/recursos?categoria=plantillas',
        permanent: true,
      },
      
      // Redirecciones de la sección de cómo funciona
      {
        source: '/:locale/como-funciona',
        destination: '/:locale/sobre-nosotros',
        permanent: true,
      },
      
      // Redirecciones de contacto
      {
        source: '/:locale/contacto',
        destination: '/:locale/sobre-nosotros#contacto',
        permanent: true,
      },
      
      // Redirección para la página de newsletter
      {
        source: '/:locale/newsletter',
        destination: '/:locale/recursos#kit-gratuito',
        permanent: true,
      },
      
      // Redirects from blog to recursos
      {
        source: '/:locale/blog',
        destination: '/:locale/recursos',
        permanent: true,
      },
      {
        source: '/:locale/blog/:slug*',
        destination: '/:locale/recursos/:slug*',
        permanent: true,
      },
    ]
  },
};

export default withNextIntl(nextConfig);
