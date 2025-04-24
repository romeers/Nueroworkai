import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Author {
  name: string
  role: string
  avatarUrl: string
  bio: string
}

interface ExpertAuthorProps {
  author: Author
}

export default function ExpertAuthor({ author }: ExpertAuthorProps) {
  if (!author) return null

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center cursor-help">
            <div className="relative h-8 w-8 flex-shrink-0">
              <Image
                className="rounded-full"
                src={author.avatarUrl || "/placeholder.svg?height=32&width=32&query=person"}
                alt={author.name}
                fill
                sizes="32px"
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-secondary">{author.name}</p>
              <p className="text-xs text-gray-500">{author.role}</p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs max-w-xs">{author.bio}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
