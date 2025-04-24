import { Check, X, Minus } from "lucide-react"
import SafeImage from "./safe-image"

interface Tool {
  name: string
  imageUrl?: string
  features?: Record<string, boolean | null>
}

interface FeatureComparisonProps {
  mainTool: Tool
  competitors: Tool[]
  features: string[]
}

export default function FeatureComparison({ mainTool, competitors, features }: FeatureComparisonProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full divide-y divide-gray-200 rounded-lg border">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Característica
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 bg-primary/5"
            >
              <div className="flex items-center">
                <div className="relative h-6 w-6 flex-shrink-0 mr-2">
                  <SafeImage
                    src={mainTool.imageUrl}
                    alt={mainTool.name}
                    width={24}
                    height={24}
                    className="rounded-full object-contain"
                  />
                </div>
                {mainTool.name}
              </div>
            </th>
            {competitors.map((competitor) => (
              <th
                key={competitor.name}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                <div className="flex items-center">
                  <div className="relative h-6 w-6 flex-shrink-0 mr-2">
                    <SafeImage
                      src={competitor.imageUrl}
                      alt={competitor.name}
                      width={24}
                      height={24}
                      className="rounded-full object-contain"
                    />
                  </div>
                  {competitor.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {features.map((feature) => (
            <tr key={feature} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{feature}</td>
              <td className="whitespace-nowrap px-6 py-4 bg-primary/5">
                {mainTool.features && mainTool.features[feature] === true ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : mainTool.features && mainTool.features[feature] === false ? (
                  <X className="h-5 w-5 text-red-500" />
                ) : (
                  <Minus className="h-5 w-5 text-gray-400" />
                )}
              </td>
              {competitors.map((competitor) => (
                <td key={`${competitor.name}-${feature}`} className="whitespace-nowrap px-6 py-4">
                  {competitor.features && competitor.features[feature] === true ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : competitor.features && competitor.features[feature] === false ? (
                    <X className="h-5 w-5 text-red-500" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
