import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Video,
  Camera,
  Film,
  Sparkles,
  MonitorPlay,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function VideoEditingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Video className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Professional Video <span className="text-primary">Editing Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Transform your raw footage into captivating stories with our expert video editing and post-production
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Video Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Video Editing Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Video Editing Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From corporate videos to social media content, we offer a full range of video editing solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Film className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Promotional & Marketing Videos</h3>
                  <p className="text-muted-foreground mb-4">
                    Engaging videos for product launches, brand promotion, and digital marketing campaigns.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Product Showcase Videos</li>
                    <li>• Explainer Videos</li>
                    <li>• Social Media Ads</li>
                    <li>• Testimonial Videos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <MonitorPlay className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Corporate & Event Videos</h3>
                  <p className="text-muted-foreground mb-4">
                    High-quality videos for corporate communications, internal training, and live event coverage.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Corporate Profile Videos</li>
                    <li>• Event Highlights</li>
                    <li>• Training & Onboarding Videos</li>
                    <li>• Conference Coverage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Camera className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Documentary & Short Films</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional editing services for independent filmmakers and documentary creators.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Narrative Editing</li>
                    <li>• Color Grading & Correction</li>
                    <li>• Sound Design & Mixing</li>
                    <li>• Visual Effects Integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Vlog & YouTube Video Editing</h3>
                  <p className="text-muted-foreground mb-4">
                    Fast-paced and dynamic editing for content creators, ensuring high engagement and viewership.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Jump Cuts & Transitions</li>
                    <li>• Text Overlays & Graphics</li>
                    <li>• Intro/Outro Creation</li>
                    <li>• Audience Retention Optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Editing Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Video Editing Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined workflow to ensure your video project is completed efficiently and to your satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Planning",
                  desc: "Discussing your vision, objectives, and specific requirements for the video project.",
                },
                {
                  step: "02",
                  title: "Footage Review & Selection",
                  desc: "Careful selection of the best footage and sequence planning for the narrative.",
                },
                {
                  step: "03",
                  title: "Editing & Refinement",
                  desc: "Assembling the cuts, adding effects, audio, and refining based on your feedback.",
                },
                {
                  step: "04",
                  title: "Final Delivery & Export",
                  desc: "Delivering the high-quality final video in your preferred formats for various platforms.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Videos to Life?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's transform your raw footage into a compelling video that captures attention and delivers your message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Quote</Button>
              <Button size="lg" variant="outline">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
