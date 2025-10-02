"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Eye } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import AADetailing from "@/lib/A-A Detailing.png"
import BareeraWalk from "@/lib/Bareera Walk.png"
 

const projects = [
  {
    title: "Asma Shakeel — Marketing Strategist & Brand Specialist",
    url: "https://asma-shakeel.vercel.app/",
    category: "Marketing & Branding",
    date: "2024",
    description:
      "Portfolio highlighting marketing strategy, brand development, and audience engagement expertise.",
    image: "/placeholder.svg?height=300&width=400&text=Asma+Shakeel+Portfolio",
    tags: ["Marketing", "Branding", "Strategy"],
  },
  {
    title: "A-A Detailing",
    url: "https://a-adetailing.ca/",
    category: "Automotive",
    date: "2023",
    description: "Full-service auto detailing company offering interior/exterior detailing, ceramic coating, paint protection film, and online booking services.",
    image: AADetailing.src,
    noEmbed: true,
    tags: ["Automotive", "Service Booking", "Detailing"],
  },
  {
    title: "Bareera Walk",
    url: "https://bareerawalk.com/",
    category: "E-commerce",
    date: "2021",
    description: "Footwear e-commerce store featuring casual, daily wear, festive, and formal collections.",
    image: BareeraWalk.src,
    noEmbed: true,
    tags: ["E-commerce", "Footwear", "Shopify"],
  },
  {
    title: "Masons Exterior Services",
    url: "https://masonsexteriorservices.ca/",
    category: "Service Business",
    date: "2024",
    description: "Professional exterior services company website with window cleaning, pressure washing, and landscaping services.",
    image: "/placeholder.svg?height=300&width=400&text=Masons+Exterior+Services",
    tags: ["Window Cleaning", "Pressure Washing", "Landscaping"],
  },
  {
    title: "Alishba Tayyab — Sustainable Leadership Expert",
    url: "https://alishba-tayyab.vercel.app/",
    category: "Leadership & Consulting",
    date: "2025",
    description:
      "Personal brand site showcasing sustainable leadership, women entrepreneurship, and organizational transformation services.",
    image: "/placeholder.svg?height=300&width=400&text=Alishba+Tayyab+Site",
    tags: ["Sustainable Leadership", "Women Empowerment", "Corporate Training"],
  },
  {
    title: "Minhal Fatima — HR & Agriculture Professional",
    url: "https://minahil-fatima.vercel.app/",
    category: "Professional Portfolio",
    date: "2024",
    description:
      "Senior HR Executive & Agriculture Professional portfolio covering HR, operations, and sustainable agriculture.",
    image: "/placeholder.svg?height=300&width=400&text=Minhal+Fatima+Portfolio",
    tags: ["HR", "Operations", "Agriculture"],
  },
  {
    title: "UAE Glass Works",
    url: "https://uaeglassworks.com/",
    category: "E-commerce",
    date: "March 2024",
    description: "Professional glass works company website with service showcase and contact integration.",
    image: "/placeholder.svg?height=300&width=400&text=UAE+Glass+Works+Website",
    tags: ["WordPress", "E-commerce", "Responsive Design"],
  },
  {
    title: "Trotter General Contracting",
    url: "https://trottergeneralcontracting.com/",
    category: "Construction",
    date: "September 2023",
    description: "Construction company website featuring project galleries and service information.",
    image: "/placeholder.svg?height=300&width=400&text=Trotter+Construction+Website",
    tags: ["Construction", "Project Gallery", "Professional"],
  },
  {
    title: "Lalabai",
    url: "https://lalabai.com/de-de/",
    category: "Health & Wellness",
    date: "July 2023",
    description: "Multilingual health and wellness platform with localized content and user engagement.",
    image: "/placeholder.svg?height=300&width=400&text=Lalabai+Health+Platform",
    tags: ["Multilingual", "Health", "User Experience"],
  },
  {
    title: "MakanMate",
    url: "https://makanmate.com/",
    category: "Food & Delivery",
    date: "May 2023",
    description: "Food delivery platform with restaurant listings and order management system.",
    image: "/placeholder.svg?height=300&width=400&text=MakanMate+Food+Delivery",
    tags: ["Food Delivery", "Restaurant", "Mobile App"],
  },
  {
    title: "705 Contracting",
    url: "https://705contracting.ca/",
    category: "Construction",
    date: "March 2023",
    description: "Canadian contracting company website with service showcase and project portfolio.",
    image: "/placeholder.svg?height=300&width=400&text=705+Contracting+Canada",
    tags: ["Construction", "Canadian Business", "Portfolio"],
  },
  {
    title: "Auto Detailing Master",
    url: "https://autodetailingmaster.com/",
    category: "Automotive",
    date: "November 2022",
    description: "Comprehensive auto detailing platform with advanced booking and service management.",
    image: "/placeholder.svg?height=300&width=400&text=Auto+Detailing+Master",
    tags: ["Automotive", "Booking System", "Service Management"],
  },
  {
    title: "ArtSobo App",
    url: "https://app.artsobo.com/",
    category: "Creative Platform",
    date: "September 2022",
    description: "Creative arts platform web application with user portfolios and artwork showcase.",
    image: "/placeholder.svg?height=300&width=400&text=ArtSobo+Creative+Platform",
    tags: ["Web App", "Creative", "Portfolio Platform"],
  },
  {
    title: "BizMatch Live",
    url: "https://bizmatch.live",
    category: "Business Networking",
    date: "March 2022",
    description: "Business networking platform connecting entrepreneurs and professionals.",
    image: "/placeholder.svg?height=300&width=400&text=BizMatch+Networking+Platform",
    tags: ["Business Networking", "Professional", "Matching Platform"],
  },
  {
    title: "MZML Platform",
    url: "https://mzml.vercel.app",
    category: "Web Application",
    date: "January 2022",
    description: "Modern web application built with cutting-edge technologies and responsive design.",
    image: "/placeholder.svg?height=300&width=400&text=MZML+Web+Application",
    tags: ["Web App", "Modern Tech", "Responsive"],
  },
  {
    title: "KM Truck Trailer",
    url: "https://kmtrucktrailer.com/",
    category: "Transportation",
    date: "November 2021",
    description: "Truck and trailer services company website with fleet showcase and service information.",
    image: "/placeholder.svg?height=300&width=400&text=KM+Truck+Trailer+Services",
    tags: ["Transportation", "Fleet Management", "Services"],
  },
  {
    title: "Trusted Visa Help",
    url: "https://www.trustedvisahelp.com/",
    category: "Immigration Services",
    date: "September 2021",
    description: "Immigration and visa services platform with application tracking and consultation booking.",
    image: "/placeholder.svg?height=300&width=400&text=Trusted+Visa+Help+Services",
    tags: ["Immigration", "Visa Services", "Consultation"],
  },
  {
    title: "AIMS Discount",
    url: "https://aimsdiscount.com/",
    category: "E-commerce",
    date: "May 2021",
    description: "Discount retail platform with product catalog and promotional features.",
    image: "/placeholder.svg?height=300&width=400&text=AIMS+Discount+E-commerce",
    tags: ["E-commerce", "Retail", "Discounts"],
  },
  {
    title: "AIMS Dispatch",
    url: "https://aimsdispatch.com/",
    category: "Logistics",
    date: "March 2021",
    description: "Dispatch and logistics management system with tracking and route optimization.",
    image: "/placeholder.svg?height=300&width=400&text=AIMS+Dispatch+Logistics",
    tags: ["Logistics", "Dispatch", "Management System"],
  },
  {
    title: "Webex Enterprises",
    url: "https://webexenterprises.com/",
    category: "Corporate",
    date: "January 2021",
    description: "Enterprise solutions company website with service portfolio and client showcase.",
    image: "/placeholder.svg?height=300&width=400&text=Webex+Enterprise+Solutions",
    tags: ["Enterprise", "Corporate", "Business Solutions"],
  },
]

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-card border-border"
        >
          <LivePreview url={project.url} title={project.title} fallbackImage={project.image} noEmbed={(project as any).noEmbed} />
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {project.category}
              </span>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {project.date}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Project
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function LivePreview({ url, title, fallbackImage, noEmbed }: { url: string; title: string; fallbackImage?: string; noEmbed?: boolean }) {
  const [canEmbed, setCanEmbed] = useState<boolean | null>(null)

  useEffect(() => {
    if (noEmbed) {
      setCanEmbed(false)
      return
    }
    const controller = new AbortController()
    const check = async () => {
      try {
        // Lightweight HEAD to see if site is reachable; embedding may still be blocked by X-Frame-Options
        await fetch(url, { method: "HEAD", mode: "no-cors", signal: controller.signal as any })
        setCanEmbed(true)
      } catch {
        setCanEmbed(false)
      }
    }
    check()
    return () => controller.abort()
  }, [url, noEmbed])

  return (
    <div className="aspect-video overflow-hidden relative bg-muted">
      {canEmbed ? (
        <iframe
          src={url}
          title={`${title} live preview`}
          className="w-full h-full scale-100 origin-top-left"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-popups allow-forms"
          referrerPolicy="no-referrer"
        />
      ) : canEmbed === false ? (
        <div className="w-full h-full relative">
          <img
            src={fallbackImage || "/placeholder.svg?height=300&width=400&text=Website+Preview"}
            alt={`${title} preview placeholder`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 text-center">
            <div>
              <p className="text-sm text-white/90 mb-3">This site blocks embedding. Open in a new tab to view.</p>
              <Link href={url} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Open Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">Loading preview…</div>
      )}
    </div>
  )
}
