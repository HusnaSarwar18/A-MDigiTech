import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Code,
  Smartphone,
  Search,
  Database,
  Palette,
  TrendingUp,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "20 days", subtitle: "saved", detail: "on daily builds.", logo: "NETFLIX" },
                { number: "98%", subtitle: "faster", detail: "time to market.", logo: "TripAdvisor" },
                { number: "300%", subtitle: "increase", detail: "in SEO.", logo: "box" },
                { number: "6x", subtitle: "faster", detail: "to build + deploy.", logo: "ebay" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number} <span className="text-muted-foreground text-lg">{stat.subtitle}</span>
                  </div>
                  <div className="text-muted-foreground text-sm mb-4">{stat.detail}</div>
                  <div className="text-xs font-semibold text-muted-foreground tracking-wider">{stat.logo}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-semibold tracking-wider uppercase">Collaboration</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Faster iteration.
                  <br />
                  More innovation.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The platform for rapid progress. Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
                </p>
              </div>

              <div className="relative">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-4">
                    Make teamwork seamless. Tools for your team and stakeholders to share feedback and iterate faster.
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Search...</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">Query ("queryEngine")</span>
                      <span>×</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Mobile App Development",
                  description: "Implementing interfaces and interactions.",
                  icon: Smartphone,
                  features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
                },
                {
                  title: "Web Development",
                  description: "Modern web applications and experiences.",
                  icon: Code,
                  features: ["React/Next.js", "E-commerce", "CMS Integration", "Performance Optimization"],
                },
                {
                  title: "SEO Services",
                  description: "Boost visibility and search rankings.",
                  icon: Search,
                  features: ["Keyword Research", "On-page SEO", "Link Building", "Analytics & Reporting"],
                },
                {
                  title: ".NET Development",
                  description: "Enterprise-grade applications.",
                  icon: Database,
                  features: ["Web APIs", "Desktop Apps", "Cloud Integration", "Database Design"],
                },
                {
                  title: "WordPress Design",
                  description: "Custom themes and functionality.",
                  icon: Palette,
                  features: ["Custom Themes", "Plugin Development", "WooCommerce", "Site Migration"],
                },
                {
                  title: "Digital Marketing",
                  description: "Complete marketing solutions.",
                  icon: TrendingUp,
                  features: ["Social Media", "Content Marketing", "PPC Campaigns", "Brand Strategy"],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of successful projects and digital transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { title: "E-commerce Platform", category: "Web Development", image: "/modern-ecommerce-website.png" },
                { title: "Mobile Banking App", category: "Mobile Development", image: "/mobile-banking-app.png" },
                { title: "SaaS Dashboard", category: "UI/UX Design", image: "/saas-dashboard-analytics.jpg" },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-card border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{project.category}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">{project.title}</h3>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      View Project <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                <Link href="/portfolio" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Trusted by businesses worldwide to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechStart Inc.",
                  role: "CEO",
                  rating: 5,
                  text: "A&M DigiTech transformed our digital presence completely. Their mobile app increased our user engagement by 300% and revenue by 150%.",
                },
                {
                  name: "Ahmed Rahman",
                  company: "E-Commerce Plus",
                  role: "CTO",
                  rating: 5,
                  text: "Outstanding web development services. Our new website loads 5x faster and conversions have doubled. The team's expertise is unmatched.",
                },
                {
                  name: "Lisa Chen",
                  company: "Marketing Pro",
                  role: "Marketing Director",
                  rating: 5,
                  text: "Their SEO services helped us rank #1 for our target keywords within 3 months. ROI has been incredible - 400% increase in organic traffic.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="p-8 bg-card border border-border rounded-xl">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-10" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Want to be a techie too?</h2>
            <p className="text-xl mb-8 text-background/80 max-w-2xl mx-auto">
              We are the tech collective of experienced Certified Gurus, a leading management consultancy helping
              countless organizations succeed in their most important and strategic transformations.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
              Join the collective
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
