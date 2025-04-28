import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import type { FC } from "react"

// Create a simple TikTok icon component
const TikTokIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <span className="font-bold text-lg">TT</span>
    </div>
  )
}

export const socialLinks = [
  {
    platform: "Instagram",
    href: "https://www.instagram.com/neuroworkai",
    icon: Instagram,
    ariaLabel: "Instagram de NeuroWorkAI",
    hoverColor: "hover:text-pink-500",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/neuroworksai/",
    icon: Linkedin,
    ariaLabel: "LinkedIn de NeuroWorkAI",
    hoverColor: "hover:text-blue-600",
  },
  {
    platform: "TikTok",
    href: "https://www.tiktok.com/@neuroworkai",
    // Using a simple text-based icon instead of SVG
    icon: TikTokIcon,
    ariaLabel: "TikTok de NeuroWorkAI",
    hoverColor: "hover:text-black",
  },
  {
    platform: "X",
    href: "https://x.com/Neuroworkai",
    icon: Twitter,
    ariaLabel: "X (Twitter) de NeuroWorkAI",
    hoverColor: "hover:text-blue-400",
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/@Neuroworkai",
    icon: Youtube,
    ariaLabel: "YouTube de NeuroWorkAI",
    hoverColor: "hover:text-red-600",
  },
]
