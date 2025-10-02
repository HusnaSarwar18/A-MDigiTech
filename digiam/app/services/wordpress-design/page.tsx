import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Palette,
  Sparkles,
  Code,
  Layout,
  Globe,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function WordpressDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Palette className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              WordPress <span className="text-primary">Design & Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Custom WordPress solutions that combine stunning design with robust functionality to elevate your online
              presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View WordPress Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* WordPress Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our WordPress Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive WordPress solutions designed to deliver high-performance, secure, and user-friendly
                websites.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Layout className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom Theme Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Building unique, pixel-perfect WordPress themes tailored to your brand identity and business needs.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bespoke Design</li>
                    <li>• Responsive & Mobile-First</li>
                    <li>• Performance Optimized</li>
                    <li>• SEO-Friendly Structure</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Plugin Development & Customization</h3>
                  <p className="text-muted-foreground mb-4">
                    Developing custom plugins or customizing existing ones to extend your WordPress website's
                    functionality.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom Plugin Development</li>
                    <li>• Third-Party Plugin Integration</li>
                    <li>• API Integrations</li>
                    <li>• Performance & Security Audits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">E-commerce with WooCommerce</h3>
                  <p className="text-muted-foreground mb-4">
                    Setting up and customizing powerful online stores using WooCommerce for seamless sales and management.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• WooCommerce Setup & Configuration</li>
                    <li>• Payment Gateway Integration</li>
                    <li>• Product Management</li>
                    <li>• Secure Shopping Cart</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Website Migration & Maintenance</h3>
                  <p className="text-muted-foreground mb-4">
                    Smooth migration of your existing website to WordPress and ongoing maintenance services.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Seamless Data Migration</li>
                    <li>• Regular Backups</li>
                    <li>• Security Updates</li>
                    <li>• Performance Monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    Optimizing your WordPress website for speed, SEO, and an excellent user experience.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Speed Optimization</li>
                    <li>• Image Optimization</li>
                    <li>• Database Optimization</li>
                    <li>• Caching Implementation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security & Malware Removal</h3>
                  <p className="text-muted-foreground mb-4">
                    Ensuring your WordPress site is secure from threats and cleaning up any malware infections.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Firewall Setup</li>
                    <li>• Regular Security Scans</li>
                    <li>• Malware Removal</li>
                    <li>• SSL Certificate Integration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WordPress Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose WordPress?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                WordPress is a powerful, flexible, and user-friendly platform perfect for a wide range of websites.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Ease of Use",
                  desc: "Intuitive interface for content management and updates.",
                },
                {
                  icon: Star,
                  title: "Flexibility & Scalability",
                  desc: "Adaptable to various business needs and scales with your growth.",
                },
                {
                  icon: Users,
                  title: "Large Community Support",
                  desc: "Vast resources and a strong community for continuous improvement.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a Stunning WordPress Website?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss your vision and create a powerful, beautiful WordPress site that stands out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline">
                View Our WordPress Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
