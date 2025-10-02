"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Rocket, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 tech-grid opacity-20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 leading-tight md:leading-[1.1] text-balance">
            Your Vision, Our <span className="text-primary-gradient bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Digital Craft</span>.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge web, mobile, and digital marketing solutions that drive innovation and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-16">
            <Button size="lg" asChild className="text-lg px-8 py-4 h-auto w-full sm:w-auto transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <Link href="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 h-auto bg-transparent w-full sm:w-auto transform transition-all duration-300 hover:scale-105 border-2 border-primary/50 hover:bg-primary/10">
              <Link href="/portfolio">
                Explore Our Work
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground text-sm">Crafting unique digital experiences for your success.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Rocket className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Rapid Development</h3>
              <p className="text-muted-foreground text-sm">Delivering high-quality projects on time and budget.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Client-Centric Approach</h3>
              <p className="text-muted-foreground text-sm">Your goals are our priority, every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
