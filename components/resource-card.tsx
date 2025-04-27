import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  imageUrl?: string | null
  downloadUrl: string
  type: string
  icon?: React.ReactNode
}

export default function ResourceCard({ title, description, imageUrl, downloadUrl, type, icon }: ResourceCardProps) {
  const fallbackImage = `/placeholder.svg?height=160&width=320&query=${encodeURIComponent("Resource: " + title)}`

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <span className="text-sm text-gray-400">{`Recurso: ${title}`}</span>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-secondary line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-2 text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-sm text-gray-500">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="font-medium">{type}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full gap-2 bg-primary hover:bg-primary/90 h-11">
          <Link href={downloadUrl} className="flex items-center justify-center">
            <Download className="mr-2 h-4 w-4" />
            Descargar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
