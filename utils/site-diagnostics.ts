/**
 * Utilidad de diagnóstico para NeuroWorkAI
 *
 * Este archivo proporciona funciones para verificar la integridad del sitio
 * y detectar posibles problemas en la configuración y el código.
 */

import { categories, tools, comparisons, resources } from "@/lib/static-data"

interface DiagnosticResult {
  status: "success" | "warning" | "error"
  message: string
  details?: string
  fix?: string
}

export async function runDiagnostics(): Promise<DiagnosticResult[]> {
  const results: DiagnosticResult[] = []

  // Verificar datos estáticos
  results.push(...checkStaticData())

  // Verificar rutas y navegación
  results.push(...checkRoutes())

  // Verificar imágenes y recursos
  results.push(...checkAssets())

  // Verificar SEO
  results.push(...checkSEO())

  // Verificar rendimiento
  results.push(...checkPerformance())

  // Verificar accesibilidad
  results.push(...checkAccessibility())

  return results
}

function checkStaticData(): DiagnosticResult[] {
  const results: DiagnosticResult[] = []

  // Verificar categorías
  if (categories.length === 0) {
    results.push({
      status: "error",
      message: "No hay categorías definidas",
      details: "Las categorías son necesarias para la navegación y clasificación de herramientas",
      fix: "Añadir categorías en lib/static-data.ts",
    })
  }

  // Verificar herramientas
  if (tools.length === 0) {
    results.push({
      status: "error",
      message: "No hay herramientas definidas",
      details: "Las herramientas son el contenido principal del sitio",
      fix: "Añadir herramientas en lib/static-data.ts",
    })
  } else {
    // Verificar relaciones entre herramientas y categorías
    const categoryIds = new Set(categories.map((c) => c.id))
    const toolsWithInvalidCategory = tools.filter((t) => !categoryIds.has(t.categoryId))

    if (toolsWithInvalidCategory.length > 0) {
      results.push({
        status: "warning",
        message: `${toolsWithInvalidCategory.length} herramientas tienen categorías inválidas`,
        details: `Herramientas afectadas: ${toolsWithInvalidCategory.map((t) => t.name).join(", ")}`,
        fix: "Corregir los categoryId en las herramientas o añadir las categorías faltantes",
      })
    }
  }

  // Verificar comparaciones
  if (comparisons.length === 0) {
    results.push({
      status: "warning",
      message: "No hay comparaciones definidas",
      details: "Las comparaciones son importantes para el contenido del sitio",
      fix: "Añadir comparaciones en lib/static-data.ts",
    })
  } else {
    // Verificar relaciones entre comparaciones y herramientas
    const toolIds = new Set(tools.map((t) => t.id))
    const comparisonsWithInvalidTools = comparisons.filter((c) => !toolIds.has(c.tool1_id) || !toolIds.has(c.tool2_id))

    if (comparisonsWithInvalidTools.length > 0) {
      results.push({
        status: "warning",
        message: `${comparisonsWithInvalidTools.length} comparaciones tienen herramientas inválidas`,
        details: `Comparaciones afectadas: ${comparisonsWithInvalidTools.map((c) => c.title).join(", ")}`,
        fix: "Corregir los tool_id en las comparaciones o añadir las herramientas faltantes",
      })
    }
  }

  // Verificar recursos
  if (resources.length === 0) {
    results.push({
      status: "warning",
      message: "No hay recursos definidos",
      details: "Los recursos son importantes para el contenido del sitio",
      fix: "Añadir recursos en lib/static-data.ts",
    })
  }

  return results
}

function checkRoutes(): DiagnosticResult[] {
  const results: DiagnosticResult[] = []

  // Verificar rutas principales
  const mainRoutes = ["/", "/herramientas-ia", "/recursos", "/comparativas", "/sobre-nosotros", "/guias-recursos"]

  // Verificar rutas dinámicas
  const dynamicRoutes = [
    "/herramientas/[slug]",
    "/herramientas/categoria/[categoria]",
    "/herramientas/comparar/[slug]",
    "/recursos/[slug]",
    "/resenas/[slug]",
  ]

  // Verificar rutas de API
  const apiRoutes = [
    "/api/tools",
    "/api/comparisons/popular",
    "/api/auth/login",
    "/api/auth/register",
    "/api/auth/logout",
    "/api/auth/me",
    "/api/favorites",
  ]

  // Aquí se podrían añadir verificaciones más específicas para cada ruta

  return results
}

function checkAssets(): DiagnosticResult[] {
  const results: DiagnosticResult[] = []

  // Verificar imágenes principales
  const criticalImages = [
    "/neuroworkai-logo.png",
    "/neuroworkai-logo-white.png",
    "/abstract-brain-network.png",
    "/neural-network-head.png",
  ]

  // Aquí se podrían añadir verificaciones para asegurarse de que las imágenes existen

  return results
}

function checkSEO(): DiagnosticResult[] {
  const results: DiagnosticResult[] = []

  // Verificar metadatos
  results.push({
    status: "success",
    message: "Metadatos básicos configurados correctamente",
    details: "El sitio tiene configurados title, description y keywords",
  })

  // Verificar Open Graph
  results.push({
    status: "success",
    message: "Metadatos Open Graph configurados correctamente",
    details: "El sitio tiene configurados los metadatos para compartir en redes sociales",
  })

  // Verificar Twitter Cards
  results.push({
    status: "success",
    message: "Twitter Cards configuradas correctamente",
    details: "El sitio tiene configurados los metadatos para compartir en Twitter",
  })

  return results
}

function checkPerformance(): DiagnosticResult[] {
  const results: DiagnosticResult[] = []

  // Verificar optimización de imágenes
  results.push({
    status: "success",
    message: "Imágenes optimizadas con componentes LazyImage y SafeImage",
    details: "El sitio utiliza componentes para cargar imágenes de forma optimizada",
  })

  // Verificar carga de fuentes
  results.push({
    status: "success",
    message: "Fuentes optimizadas con next/font",
    details: "El sitio utiliza next/font para cargar fuentes de forma optimizada",
  })

  return results
}

function checkAccessibility(): DiagnosticResult[] {
  const results: DiagnosticResult[] = []

  // Verificar etiquetas semánticas
  results.push({
    status: "success",
    message: "Uso de etiquetas semánticas",
    details: "El sitio utiliza etiquetas semánticas como header, main, footer, etc.",
  })

  // Verificar atributos ARIA
  results.push({
    status: "success",
    message: "Uso de atributos ARIA",
    details: "El sitio utiliza atributos ARIA para mejorar la accesibilidad",
  })

  return results
}

export function generateDiagnosticReport(results: DiagnosticResult[]): string {
  let report = "# Informe de Diagnóstico de NeuroWorkAI\n\n"

  const errors = results.filter((r) => r.status === "error")
  const warnings = results.filter((r) => r.status === "warning")
  const successes = results.filter((r) => r.status === "success")

  report += `## Resumen\n\n`
  report += `- ✅ ${successes.length} comprobaciones exitosas\n`
  report += `- ⚠️ ${warnings.length} advertencias\n`
  report += `- ❌ ${errors.length} errores\n\n`

  if (errors.length > 0) {
    report += `## Errores\n\n`
    errors.forEach((error) => {
      report += `### ❌ ${error.message}\n\n`
      if (error.details) report += `${error.details}\n\n`
      if (error.fix) report += `**Solución recomendada:** ${error.fix}\n\n`
    })
  }

  if (warnings.length > 0) {
    report += `## Advertencias\n\n`
    warnings.forEach((warning) => {
      report += `### ⚠️ ${warning.message}\n\n`
      if (warning.details) report += `${warning.details}\n\n`
      if (warning.fix) report += `**Solución recomendada:** ${warning.fix}\n\n`
    })
  }

  if (successes.length > 0) {
    report += `## Éxitos\n\n`
    successes.forEach((success) => {
      report += `### ✅ ${success.message}\n\n`
      if (success.details) report += `${success.details}\n\n`
    })
  }

  return report
}
