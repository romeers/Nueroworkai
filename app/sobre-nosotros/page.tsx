import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Conoce más sobre NeuroWorkAI y nuestra misión de ayudar a los profesionales remotos a ser más productivos
              con IA.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <Image src="/logo.png" alt="NeuroWorkAI Logo" width={200} height={60} className="mx-auto h-auto w-48" />
            </div>

            <div className="prose prose-lg mx-auto max-w-none">
              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestra Historia</h2>
              <p>
                NeuroWorkAI nació de una simple observación: el trabajo remoto está aquí para quedarse, y la
                inteligencia artificial está transformando rápidamente cómo trabajamos. Sin embargo, con tantas
                herramientas de IA disponibles, encontrar las soluciones adecuadas puede ser abrumador.
              </p>
              <p>
                Fundamos NeuroWorkAI con la misión de ayudar a los profesionales remotos a navegar por este nuevo
                panorama, proporcionando reseñas imparciales, comparativas detalladas y recursos prácticos sobre las
                mejores herramientas de productividad con IA.
              </p>

              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestra Misión</h2>
              <p>En NeuroWorkAI, nos dedicamos a:</p>
              <ul>
                <li>Simplificar la búsqueda de herramientas de IA para profesionales remotos</li>
                <li>Proporcionar información objetiva y basada en pruebas reales</li>
                <li>Ayudar a los trabajadores remotos a aumentar su productividad y reducir el estrés</li>
                <li>Mantenernos al día con las últimas innovaciones en IA para el trabajo remoto</li>
                <li>Crear una comunidad de profesionales remotos que comparten conocimientos y mejores prácticas</li>
              </ul>

              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestros Valores</h2>
              <p>Nuestro trabajo se guía por estos principios fundamentales:</p>
              <ul>
                <li>
                  <strong>Transparencia:</strong> Siempre divulgamos nuestras relaciones de afiliados y cómo monetizamos
                  nuestro contenido.
                </li>
                <li>
                  <strong>Objetividad:</strong> Evaluamos cada herramienta de forma imparcial, destacando tanto sus
                  fortalezas como sus debilidades.
                </li>
                <li>
                  <strong>Utilidad:</strong> Nos centramos en proporcionar información práctica y accionable que
                  realmente ayude a nuestros lectores.
                </li>
                <li>
                  <strong>Comunidad:</strong> Valoramos la retroalimentación de nuestra comunidad y la incorporamos en
                  nuestro contenido.
                </li>
              </ul>

              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestro Equipo</h2>
              <p>
                Somos un equipo de profesionales remotos apasionados por la tecnología y la productividad. Combinamos
                experiencia en diversas áreas, desde desarrollo de software hasta marketing digital y gestión de
                proyectos, para ofrecer una perspectiva completa sobre las herramientas de IA para el trabajo remoto.
              </p>
              <p>
                Todos los miembros de nuestro equipo utilizan activamente las herramientas que reseñamos en su trabajo
                diario, lo que nos permite proporcionar información basada en experiencia real.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contacto">Contacta con nosotros</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Únete a nuestra comunidad</h2>
            <p className="mt-4 text-lg text-white/90">
              Suscríbete a nuestro newsletter para recibir las últimas noticias, reseñas y recursos sobre herramientas
              de IA para trabajo remoto.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                required
              />
              <Button className="bg-secondary hover:bg-secondary/90">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
