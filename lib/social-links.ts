import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

// Updated social links array with all requested platforms
export const socialLinks = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/neuroworkai",
    icon: Facebook,
    ariaLabel: "Facebook de NeuroWorkAI",
    hoverColor: "hover:text-blue-700",
  },
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
    icon: FaTiktok,
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
