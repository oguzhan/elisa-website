import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: 49,
      features: ["Basic design concepts", "Up to 3 revisions", "Basic file formats", "Email support"],
    },
    {
      name: "Advanced",
      price: 99,
      popular: true,
      features: [
        "Advanced design concepts",
        "Up to 10 revisions",
        "All file formats",
        "Priority support",
        "Basic branding package",
      ],
    },
    {
      name: "Enterprise plan",
      price: 149,
      features: [
        "Custom design solutions",
        "Unlimited revisions",
        "All file formats",
        "Dedicated support",
        "Complete branding package",
        "Development consultation",
      ],
    },
  ]

  // Pricing section intentionally disabled per request
  return null
}
