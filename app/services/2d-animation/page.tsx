import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Sparkles,
  Brush,
  Film,
  SquareStack,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function TwoDAnimationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Sparkles className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              2D Animation <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Bring your ideas to life with captivating 2D animations, perfect for explainers, marketing, and engaging
              storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Animation Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* 2D Animation Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our 2D Animation Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We create a variety of 2D animated content tailored to your specific needs and target audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Film className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Explainer Videos</h3>
                  <p className="text-muted-foreground mb-4">
                    Simplify complex ideas and showcase your products/services with engaging animated explainers.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Concept Development</li>
                    <li>• Scriptwriting</li>
                    <li>• Voiceover & Sound Design</li>
                    <li>• Character Animation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <SquareStack className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Marketing & Promotional Animations</h3>
                  <p className="text-muted-foreground mb-4">
                    Catchy animations for social media, ads, and presentations to boost your brand awareness.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Social Media Animations</li>
                    <li>• Animated Logos</li>
                    <li>• Product Demos</li>
                    <li>• Infographics Animation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Brush className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Illustrative & Character Animation</h3>
                  <p className="text-muted-foreground mb-4">
                    Custom character design and expressive animations to tell your story in a unique way.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Character Design</li>
                    <li>• Storyboarding</li>
                    <li>• Lip Sync Animation</li>
                    <li>• Scene Composition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Educational & Training Animations</h3>
                  <p className="text-muted-foreground mb-4">
                    Simplifying complex concepts for educational content, online courses, and training modules.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• E-learning Animations</li>
                    <li>• Interactive Modules</li>
                    <li>• Motion Graphics for Education</li>
                    <li>• Compliance Training Videos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 2D Animation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our 2D Animation Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach from concept to final delivery, ensuring high-quality and engaging animations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Concept & Scripting",
                  desc: "Developing the core idea and writing a compelling script for your animation.",
                },
                {
                  step: "02",
                  title: "Storyboarding & Design",
                  desc: "Visualizing the animation flow and designing characters and backgrounds.",
                },
                {
                  step: "03",
                  title: "Animation & Sound",
                  desc: "Bringing characters and scenes to life with motion, voiceovers, and sound effects.",
                },
                {
                  step: "04",
                  title: "Review & Delivery",
                  desc: "Finalizing the animation based on your feedback and delivering in desired formats.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Animate Your Ideas?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create a captivating 2D animation that tells your story and engages your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Quote</Button>
              <Button size="lg" variant="outline">
                Discuss Your Animation Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
