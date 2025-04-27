import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Lightbulb } from "lucide-react"
import SafeImage from "@/components/safe-image"

export const metadata = {
  title: "How to Implement AI in Your Daily Workflow (2025 Guide) | NeuroWorkAI",
  description:
    "Learn how to integrate artificial intelligence into your business or project. Practical examples, recommended tools, and easy steps to start.",
  openGraph: {
    title: "How to Implement AI in Your Daily Workflow (2025 Guide)",
    description:
      "Learn how to integrate artificial intelligence into your business or project. Practical examples, recommended tools, and easy steps to start.",
    images: [{ url: "/ai-productivity-kit-ebook.png", width: 1200, height: 630 }],
  },
}

export default function ImplementAIWorkflowPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">2025 Guide</Badge>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl mb-6">
              🧠 How to Implement AI in Your Daily Workflow
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Artificial intelligence (AI) is no longer a futuristic concept: today, it's a practical tool any business
              — big or small — can integrate into daily operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <SafeImage
                src="/ai-productivity-kit-ebook.png"
                alt="Artificial intelligence in workflow"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <p className="text-lg font-medium mb-4">
                  Whether you run a small business, an e-commerce store, or a growing project, this guide is for you.
                </p>
                <p>In this article, you'll learn how to implement AI easily without being a technical expert.</p>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                What Does It Really Mean to Implement AI in Your Business?
              </h2>
              <p>
                Many people believe integrating AI means building complex systems like ChatGPT, Gemini, or Stable
                Diffusion. In reality, you already use AI every day without noticing it.
              </p>

              <p className="font-medium mt-6 mb-4">Everyday examples:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gmail automatically sorting emails into "Primary" or "Spam".</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Netflix recommending shows.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Banks detecting suspicious transactions.</span>
                </li>
              </ul>

              <p className="mt-6">
                Implementing AI doesn't always mean building huge models; it can simply mean optimizing specific tasks
                with available tools.
              </p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                Where Should You Start Using AI in Your Workflow?
              </h2>
              <p>Before installing any tool, ask yourself:</p>

              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Which tasks consume the most time?</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Which processes are repetitive?</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Where can I be more efficient?</span>
                </li>
              </ul>

              <p className="font-medium mt-6">AI must solve real problems, not be a shiny new toy.</p>
              <p>Practical examples:</p>

              <div className="overflow-x-auto mt-6">
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Email classification
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intelligent filters</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Customer service
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AI chatbots</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sales forecasting
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regression models</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Content marketing
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Copy generators like Jasper</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Data analysis</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automation with Notion AI</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* First CTA (30-40% into the article) */}
              <Card className="bg-primary/10 p-6 rounded-lg my-8 border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-4">
                  🔥 Looking for the right AI tools for your business?
                </h3>
                <Button asChild size="lg" className="mt-2">
                  <Link href="/herramientas" className="flex items-center">
                    Explore our AI Tools for Productivity
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </Card>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">What Type of AI Is Best for You?</h2>
              <p>Not every solution needs a large language model.</p>

              <p className="font-medium mt-6 mb-4">Recommendations by provider:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Google Workspace users: Explore Vertex AI and Gemini.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Azure users: Use OpenAI Services to integrate GPT-4.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>E-commerce: Implement sales forecasting and customer service automation.</span>
                </li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8 flex">
                <Lightbulb className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary">Tip:</p>
                  <p>
                    Always check if your current provider offers easy-to-integrate AI solutions before seeking external
                    options.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">Practical AI Tools to Start Using Today</h2>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Canva AI:</span> Automate design for marketing campaigns.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Notion AI:</span> Document and manage workflows more efficiently.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">ChatGPT:</span> Generate copywriting, summaries, and content ideas.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">GitHub Copilot:</span> Help developers write code faster.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">HubSpot CRM + AI:</span> Automate sales and marketing processes.
                  </div>
                </li>
              </ul>

              <p className="mt-6">Even classic tools like Excel now allow advanced data analysis with AI support.</p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">How to Choose Which AI to Implement</h2>
              <p>Don't rush to adopt AI just because it's trendy. Instead:</p>

              <ol className="list-decimal pl-6 space-y-4 mt-6">
                <li>
                  <span className="font-medium">Define your real business need.</span>
                </li>
                <li>
                  <span className="font-medium">Review your current tech stack.</span>
                </li>
                <li>
                  <span className="font-medium">Find scalable and integrable AI solutions.</span>
                </li>
                <li>
                  <span className="font-medium">Start small and expand step-by-step.</span>
                </li>
              </ol>

              <p className="mt-4">AI should solve specific problems for your business.</p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                Real-World Examples of Simple AI Implementation
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Duolingo:</span> Personalized study challenges using AI.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Stripe:</span> Fraud detection with machine learning.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Platzi:</span> "Ada" chatbot assisting students.
                  </div>
                </li>
              </ul>

              <p className="mt-6 font-medium">Even a simple online store can:</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automate customer service responses.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Predict monthly or yearly sales.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Segment customers for better marketing.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">Conclusion: AI Is Within Your Reach</h2>
              <p>
                Implementing artificial intelligence is not exclusive to large corporations. With the right tools, any
                business can use AI to save time, optimize processes, and make smarter decisions.
              </p>

              <p className="mt-4">It's not about following hype — it's about solving real needs.</p>

              {/* Final CTA */}
              <Card className="bg-primary/10 p-6 rounded-lg my-8 border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-4">🚀 Start optimizing your workflow with AI today</h3>
                <Button asChild size="lg" className="mt-2">
                  <Link href="/herramientas" className="flex items-center">
                    View Recommended AI Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
