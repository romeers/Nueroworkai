import KitDownloadForm from "@/components/kit-download-form"

export default function KitDigitalPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Kit Digital de Productividad con IA</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">¿Qué incluye nuestro Kit Digital?</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Plantillas para optimizar tu flujo de trabajo con IA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Guía de prompts para maximizar herramientas de IA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Checklist de implementación de IA en tu trabajo diario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Recursos exclusivos para automatizar tareas repetitivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Acceso a actualizaciones futuras del kit</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <KitDownloadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
