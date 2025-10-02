import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Share2,
  Target,
  Megaphone,
  BarChart,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Share2 className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Social Media <span className="text-primary">Marketing Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Boost your brand's online presence, engage your audience, and drive growth with our comprehensive social
              media marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Growing Your Brand
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* SMM Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Social Media Marketing Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a full suite of social media marketing services designed to maximize your impact across all key
                platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Social Media Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    Developing data-driven strategies to define your target audience, goals, and content approach.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Audience Analysis</li>
                    <li>• Competitive Research</li>
                    <li>• Content Calendar Planning</li>
                    <li>• Platform Selection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Megaphone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Content Creation & Curation</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating engaging visual and written content tailored for each social media platform.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Graphic Design for Social</li>
                    <li>• Video Production</li>
                    <li>• Copywriting & Hashtag Research</li>
                    <li>• User-Generated Content Campaigns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <BarChart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Social Media Advertising</h3>
                  <p className="text-muted-foreground mb-4">
                    Targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter to reach new
                    audiences.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Campaign Strategy & Setup</li>
                    <li>• Ad Creative Development</li>
                    <li>• A/B Testing & Optimization</li>
                    <li>• Performance Reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Building and nurturing your online community, responding to comments, and fostering engagement.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comment & Message Moderation</li>
                    <li>• Engagement Campaigns</li>
                    <li>• Crisis Management</li>
                    <li>• Influencer Outreach</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SMM Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Social Media Marketing Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A strategic and iterative approach to ensure your social media efforts yield significant returns.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Strategy",
                  desc: "Analyzing your current social presence and developing a tailored marketing strategy.",
                },
                {
                  step: "02",
                  title: "Content & Campaign",
                  desc: "Creating compelling content and launching targeted social media campaigns.",
                },
                {
                  step: "03",
                  title: "Engagement & Growth",
                  desc: "Actively managing your community and implementing tactics for audience growth.",
                },
                {
                  step: "04",
                  title: "Analysis & Optimization",
                  desc: "Monitoring performance, analyzing data, and optimizing strategies for continuous improvement.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Social Media Presence?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's craft a winning social media strategy that engages your audience and drives measurable results for
              your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline">
                Explore Our Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
