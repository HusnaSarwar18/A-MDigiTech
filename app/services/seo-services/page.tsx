import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  BarChart,
  Globe,
  Users,
  CheckCircle,
  Star,
  Zap,
  Shield,
} from "lucide-react"

export default function SEOServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Search className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              SEO <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Boost your online visibility and drive organic traffic with our comprehensive SEO strategies and
              optimization techniques that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Improve Your Rankings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Get SEO Audit
              </Button>
            </div>
          </div>
        </section>

        {/* SEO Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive SEO Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our full-service SEO approach covers every aspect of search engine optimization to maximize your online
                presence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Keyword Research & Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    In-depth keyword analysis to identify high-value opportunities and target the right audience.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Competitor Keyword Analysis</li>
                    <li>• Long-tail Keyword Research</li>
                    <li>• Search Intent Analysis</li>
                    <li>• Keyword Difficulty Assessment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">On-Page SEO Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    Optimize your website content, structure, and technical elements for better search engine
                    visibility.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Title Tag & Meta Description Optimization</li>
                    <li>• Header Tag Structure</li>
                    <li>• Internal Linking Strategy</li>
                    <li>• Content Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <BarChart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed performance tracking with comprehensive monthly reports and actionable insights.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Analytics Setup</li>
                    <li>• Ranking Tracking</li>
                    <li>• Traffic Analysis</li>
                    <li>• ROI Measurement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
                  <p className="text-muted-foreground mb-4">
                    Improve your website's technical foundation for better crawling, indexing, and user experience.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Site Speed Optimization</li>
                    <li>• Mobile Responsiveness</li>
                    <li>• XML Sitemap Creation</li>
                    <li>• Schema Markup Implementation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Local SEO</h3>
                  <p className="text-muted-foreground mb-4">
                    Dominate local search results and attract customers in your geographic area.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google My Business Optimization</li>
                    <li>• Local Citation Building</li>
                    <li>• Review Management</li>
                    <li>• Local Content Strategy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Link Building</h3>
                  <p className="text-muted-foreground mb-4">
                    Build high-quality backlinks to improve your domain authority and search rankings.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quality Link Acquisition</li>
                    <li>• Guest Posting</li>
                    <li>• Broken Link Building</li>
                    <li>• Competitor Link Analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our SEO Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A data-driven approach that delivers sustainable results and long-term growth for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "SEO Audit & Analysis",
                  desc: "Comprehensive website analysis to identify opportunities and technical issues.",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  desc: "Custom SEO strategy based on your business goals and competitive landscape.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Execute on-page, technical, and off-page optimizations according to the strategy.",
                },
                {
                  step: "04",
                  title: "Monitor & Optimize",
                  desc: "Continuous monitoring, reporting, and optimization for sustained growth.",
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

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our SEO Services?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Proven Results",
                  desc: "Track record of improving rankings and driving organic traffic growth.",
                },
                {
                  icon: Zap,
                  title: "White Hat Techniques",
                  desc: "Ethical SEO practices that comply with search engine guidelines.",
                },
                {
                  icon: BarChart,
                  title: "Data-Driven Approach",
                  desc: "Decisions based on comprehensive data analysis and performance metrics.",
                },
                {
                  icon: Users,
                  title: "Experienced Team",
                  desc: "Certified SEO professionals with years of industry experience.",
                },
                {
                  icon: Star,
                  title: "Transparent Reporting",
                  desc: "Regular, detailed reports showing progress and ROI.",
                },
                {
                  icon: Target,
                  title: "Custom Strategies",
                  desc: "Tailored SEO strategies designed for your specific business needs.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
                  <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We have experience optimizing websites across various industries and business types.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "E-commerce",
                "Healthcare",
                "Real Estate",
                "Legal Services",
                "Technology",
                "Education",
                "Finance",
                "Hospitality",
                "Manufacturing",
                "Non-Profit",
                "Automotive",
                "Food & Beverage",
              ].map((industry) => (
                <div
                  key={industry}
                  className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-sm font-medium text-foreground">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's analyze your website and create a custom SEO strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free SEO Audit</Button>
              <Button size="lg" variant="outline">
                Schedule SEO Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
