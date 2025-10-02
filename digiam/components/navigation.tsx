"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Logo from "@/lib/Pink and Green Modern Health Care Logo.png"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const services = [
    { href: "/services/mobile-app-development", label: "Mobile App Development", desc: "iOS & Android apps" },
    { href: "/services/net-development", label: ".NET Development", desc: "Enterprise solutions" },
    { href: "/services/web-development", label: "Web Development", desc: "Modern web applications" },
    { href: "/services/wordpress-design", label: "WordPress Design", desc: "Custom WordPress sites" },
    { href: "/services/seo-services", label: "SEO Services", desc: "Search optimization" },
    { href: "/services/video-editing", label: "Video Editing", desc: "Professional video content" },
    { href: "/services/2d-animation", label: "2D Animation", desc: "Engaging animations" },
    { href: "/services/social-media-marketing", label: "Social Media Marketing", desc: "Social presence" },
    { href: "/services/graphic-design", label: "Graphic Design", desc: "Visual branding" },
    { href: "/services/content-writing", label: "Content Writing", desc: "Quality content creation" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border z-50 shadow-sm navbar-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="A&M DigiTech Logo" className="h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-md hover:bg-muted group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-2300 ease-out"></span>
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 md:w-[500px] lg:w-[600px] bg-card border border-border rounded-lg shadow-xl p-4 md:p-6 origin-top-left animate-in fade-in-0 zoom-in-95 data-[state=open]:slide-in-from-left-2 data-[state=closed]:slide-out-to-left-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block p-3 rounded-md hover:bg-muted transition-colors group"
                      >
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {service.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{service.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button size="sm" className="ml-4 glow-effect bg-primary hover:bg-primary/90">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border animate-in slide-in-from-top-2 data-[state=open]:slide-in-from-top-0 data-[state=closed]:slide-out-to-top-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <details className="group">
                  <summary className="cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-200">
                    Services
                  </summary>
                  <Separator className="my-2" />
                  <div className="mt-2 ml-4 space-y-3 animate-in slide-in-from-top-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-sm text-foreground hover:bg-muted rounded-md px-3 py-2 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
