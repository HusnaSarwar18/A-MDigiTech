import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Shield, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 tech-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            <span className="text-glow">Digital Solutions</span> That
            <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            A&M DigiTech delivers comprehensive digital services from mobile app development to SEO optimization. We
            transform your ideas into powerful digital experiences that engage users and drive business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>📍 Taman Danau Desa, Kuala Lumpur Malaysia 58100</span>
              <span>📞 +60174738779</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group animate-pulse-glow">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
              Get Free Consultation
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Smartphone className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Mobile First</h3>
            <p className="text-muted-foreground">
              Responsive designs that work perfectly on all devices with cutting-edge technology
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Cpu className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Tech</h3>
            <p className="text-muted-foreground">
              Latest technologies and frameworks for superior performance and scalability
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Secure & Fast</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with lightning-fast performance optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
