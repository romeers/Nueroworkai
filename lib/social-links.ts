import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

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
    // Fixed the TikTok icon to use proper JSX syntax
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
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
