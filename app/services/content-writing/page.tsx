import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Feather,
  BookOpen,
  Sparkles,
  Target,
  FileText,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function ContentWritingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Feather className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Professional Content <span className="text-primary">Writing Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Engage your audience and drive results with high-quality, SEO-optimized content tailored to your brand and
              objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Content Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Content Writing Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Content Writing Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide a wide range of content writing solutions to boost your online presence and engage your
                audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Website Content & Copywriting</h3>
                  <p className="text-muted-foreground mb-4">
                    Crafting compelling website copy that converts visitors into customers and ranks high on search
                    engines.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SEO-Optimized Web Pages</li>
                    <li>• Landing Page Copy</li>
                    <li>• Product Descriptions</li>
                    <li>• About Us/Services Pages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Blog Writing & Article Creation</h3>
                  <p className="text-muted-foreground mb-4">
                    High-quality, engaging blog posts and articles that drive organic traffic and establish thought
                    leadership.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SEO Blog Posts</li>
                    <li>• Industry Articles</li>
                    <li>• Guest Post Content</li>
                    <li>• Evergreen Content</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">SEO Content Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    Developing a comprehensive content strategy focused on keywords, audience intent, and measurable
                    results.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Keyword Research</li>
                    <li>• Content Gap Analysis</li>
                    <li>• Content Calendar</li>
                    <li>• Competitor Content Analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Technical Writing & Whitepapers</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating clear, concise, and accurate technical documentation, whitepapers, and reports.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• User Manuals & Guides</li>
                    <li>• Whitepapers & Ebooks</li>
                    <li>• Case Studies</li>
                    <li>• Product Documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Writing Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Content Writing Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to deliver high-quality content that meets your objectives and resonates with your
                audience.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategy & Research",
                  desc: "Defining your content goals, target audience, and conducting in-depth research.",
                },
                {
                  step: "02",
                  title: "Content Creation",
                  desc: "Crafting engaging and informative content based on the approved strategy and research.",
                },
                {
                  step: "03",
                  title: "Review & Optimization",
                  desc: "Reviewing content for quality, SEO, and refining based on feedback.",
                },
                {
                  step: "04",
                  title: "Publishing & Promotion",
                  desc: "Assisting with content publishing and recommending promotion strategies.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create compelling content that captivates your audience and achieves your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline">
                Discuss Your Content Needs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
