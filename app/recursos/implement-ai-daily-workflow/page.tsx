import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SafeImage from "@/components/safe-image"

export const metadata: Metadata = {
  title: "How to Implement AI in Your Daily Workflow (2025 Guide) | NeuroWorkAI",
  description:
    "Learn how to integrate artificial intelligence into your business or project. Practical examples, recommended tools, and easy steps to start.",
  openGraph: {
    title: "How to Implement AI in Your Daily Workflow (2025 Guide) | NeuroWorkAI",
    description:
      "Learn how to integrate artificial intelligence into your business or project. Practical examples, recommended tools, and easy steps to start.",
    images: [
      {
        url: "/interconnected-ai-workflow.png",
        width: 1200,
        height: 630,
        alt: "How to Implement AI in Your Daily Workflow",
      },
    ],
  },
}

export default function ImplementAIWorkflowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-gray-50 to-violet-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Guía práctica
              </span>
              <span className="text-xs text-gray-500 flex items-center">
                <Clock className="h-3 w-3 mr-1" />8 min de lectura
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              🧠 How to Implement AI in Your Daily Workflow (2025 Guide)
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Artificial intelligence (AI) is no longer a futuristic concept: today, it's a practical tool any business
              — big or small — can integrate into daily operations. Whether you run a small business, an e-commerce
              store, or a growing project, this guide is for you.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              In this article, you'll learn how to implement AI easily without being a technical expert.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
              <SafeImage
                src="/interconnected-ai-workflow.png"
                alt="AI integrated workflow diagram showing how artificial intelligence connects different business processes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
              What Does It Really Mean to Implement AI in Your Business?
            </h2>

            <p>
              Many people believe integrating AI means building complex systems like ChatGPT, Gemini, or Stable
              Diffusion. In reality, you already use AI every day without noticing it.
            </p>

            <p className="font-medium">Everyday examples:</p>

            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Gmail automatically sorting emails into "Primary" or "Spam".
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Netflix recommending shows.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Banks detecting suspicious transactions.
              </li>
            </ul>

            <p>
              Implementing AI doesn't always mean building huge models; it can simply mean optimizing specific tasks
              with available tools.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Where Should You Start Using AI in Your Workflow?
            </h2>

            <p>Before installing any tool, ask yourself:</p>

            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Which tasks consume the most time?
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Which processes are repetitive?
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Where can I be more efficient?
              </li>
            </ul>

            <p>AI must solve real problems, not be a shiny new toy.</p>

            <p className="font-medium">Practical examples:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Use Case
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      AI Solution
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Email classification</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Intelligent filters</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Customer service</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">AI chatbots</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sales forecasting</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Regression models</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Content marketing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Copy generators like Jasper</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data analysis</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Automation with Notion AI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* First CTA - after approximately 35% of content */}
            <div className="my-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="font-medium text-lg text-secondary mb-4">
                🔥 Looking for the right AI tools for your business?
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/herramientas" className="flex items-center">
                  Explore our AI Tools for Productivity
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">What Type of AI Is Best for You?</h2>

            <p>Not every solution needs a large language model.</p>

            <p className="font-medium">Recommendations by provider:</p>

            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>Google Workspace users:</strong> Explore Vertex AI and Gemini.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>Azure users:</strong> Use OpenAI Services to integrate GPT-4.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>E-commerce:</strong> Implement sales forecasting and customer service automation.
              </li>
            </ul>

            <div className="my-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p className="font-medium">
                💡 Tip: Always check if your current provider offers easy-to-integrate AI solutions before seeking
                external options.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Practical AI Tools to Start Using Today</h2>

            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>Canva AI:</strong> Automate design for marketing campaigns.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>Notion AI:</strong> Document and manage workflows more efficiently.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>ChatGPT:</strong> Generate copywriting, summaries, and content ideas.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>GitHub Copilot:</strong> Help developers write code faster.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>HubSpot CRM + AI:</strong> Automate sales and marketing processes.
              </li>
            </ul>

            <p>Even classic tools like Excel now allow advanced data analysis with AI support.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">How to Choose Which AI to Implement</h2>

            <p>Don't rush to adopt AI just because it's trendy. Instead:</p>

            <ol className="list-decimal pl-5 space-y-2">
              <li>Define your real business need.</li>
              <li>Review your current tech stack.</li>
              <li>Find scalable and integrable AI solutions.</li>
              <li>Start small and expand step-by-step.</li>
            </ol>

            <p>AI should solve specific problems for your business.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Real-World Examples of Simple AI Implementation
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Duolingo:</strong> Personalized study challenges using AI.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Stripe:</strong> Fraud detection with machine learning.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Platzi:</strong> "Ada" chatbot assisting students.
                </div>
              </li>
            </ul>

            <p className="font-medium mt-4">Even a simple online store can:</p>

            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Automate customer service responses.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Predict monthly or yearly sales.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Segment customers for better marketing.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Conclusion: AI Is Within Your Reach</h2>

            <p>
              Implementing artificial intelligence is not exclusive to large corporations. With the right tools, any
              business can use AI to save time, optimize processes, and make smarter decisions.
            </p>

            <p>It's not about following hype — it's about solving real needs.</p>

            {/* Final CTA */}
            <div className="my-10 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <p className="font-medium text-lg text-secondary mb-4">🚀 Start optimizing your workflow with AI today</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/herramientas" className="flex items-center">
                  View Recommended AI Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mb-6">Recommended AI Tools</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4">
                    <SafeImage src="/notion-ai-blue.png" alt="Notion AI" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Notion AI</h3>
                    <p className="text-sm text-gray-600">Escritura IA</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Asistente de escritura y organización con IA integrada en Notion.</p>
                <Button asChild className="w-full">
                  <Link
                    href="https://notion.so/product/ai?ref=neuroworkai"
                    target="_blank"
                    rel="noopener sponsored"
                    className="flex items-center justify-center"
                  >
                    Ver Notion AI
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4">
                    <SafeImage src="/abstract-ai-icon.png" alt="ChatGPT" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">ChatGPT</h3>
                    <p className="text-sm text-gray-600">Escritura IA</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Modelo de lenguaje avanzado para generar texto y responder preguntas.
                </p>
                <Button asChild className="w-full">
                  <Link href="/herramientas" className="flex items-center justify-center">
                    Ver más herramientas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
