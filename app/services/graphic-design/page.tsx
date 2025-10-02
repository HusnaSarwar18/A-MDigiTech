import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Brush,
  Sparkles,
  Palette,
  Feather,
  Layout,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Brush className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Creative Graphic <span className="text-primary">Design Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Transform your brand with stunning visuals. We provide comprehensive graphic design solutions that capture
              attention and communicate effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Design Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Graphic Design Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Graphic Design Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From logo design to complete brand identity, we craft visuals that resonate with your audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Palette className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Logo & Brand Identity Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating unique and memorable logos and comprehensive brand guidelines that define your presence.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom Logo Design</li>
                    <li>• Brand Style Guides</li>
                    <li>• Typography Selection</li>
                    <li>• Color Palette Definition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Layout className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Marketing Collateral Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Designing impactful marketing materials including brochures, flyers, and business cards.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brochure & Flyer Design</li>
                    <li>• Business Card Design</li>
                    <li>• Presentation Design</li>
                    <li>• Infographic Design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Feather className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Social Media Graphics</h3>
                  <p className="text-muted-foreground mb-4">
                    Engaging visuals for all your social media platforms to boost your online presence and engagement.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Post & Story Graphics</li>
                    <li>• Banner & Cover Photos</li>
                    <li>• Ad Creatives</li>
                    <li>• Animated GIFs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Designing intuitive and aesthetically pleasing user interfaces and experiences for web and mobile apps.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Wireframing & Prototyping</li>
                    <li>• User Flows</li>
                    <li>• Interaction Design</li>
                    <li>• Usability Testing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Graphic Design Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Graphic Design Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collaborative and creative process to deliver designs that truly represent your vision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Briefing",
                  desc: "Understanding your brand, target audience, and design objectives.",
                },
                {
                  step: "02",
                  title: "Concept & Ideation",
                  desc: "Brainstorming and creating initial design concepts and directions.",
                },
                {
                  step: "03",
                  title: "Design & Refinement",
                  desc: "Developing the chosen concepts and refining them based on your feedback.",
                },
                {
                  step: "04",
                  title: "Final Delivery & Support",
                  desc: "Delivering high-resolution files and providing support for implementation.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Brand with Design?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create impactful visuals that tell your story and captivate your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
