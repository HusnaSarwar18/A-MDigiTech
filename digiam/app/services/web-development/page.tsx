import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Globe, Code, Smartphone, Database, Zap, Shield, Users, CheckCircle, Star } from "lucide-react"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Globe className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Professional Web <span className="text-primary">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Build modern, responsive websites and web applications with cutting-edge technologies and exceptional user
              experiences that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Web Development Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From simple websites to complex web applications, we deliver solutions that meet your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Modern, responsive user interfaces using React, Next.js, Vue.js, and cutting-edge CSS frameworks.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• React & Next.js Applications</li>
                    <li>• Responsive Design</li>
                    <li>• Progressive Web Apps</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Robust server-side solutions with Node.js, Python, .NET, and modern database technologies.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• API Development & Integration</li>
                    <li>• Database Design & Management</li>
                    <li>• Cloud Infrastructure</li>
                    <li>• Security Implementation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Mobile-first approach ensuring perfect display and functionality across all devices and screen
                    sizes.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mobile-First Development</li>
                    <li>• Cross-Browser Compatibility</li>
                    <li>• Touch-Friendly Interfaces</li>
                    <li>• Accessibility Standards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete online store development with payment integration, inventory management, and analytics.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom Shopping Carts</li>
                    <li>• Payment Gateway Integration</li>
                    <li>• Inventory Management</li>
                    <li>• Order Tracking Systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">CMS Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Custom content management systems and WordPress solutions for easy content updates.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom CMS Solutions</li>
                    <li>• WordPress Development</li>
                    <li>• Content Strategy</li>
                    <li>• User Management Systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
                  <p className="text-muted-foreground mb-4">
                    Complex web applications with advanced functionality, user authentication, and real-time features.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Single Page Applications</li>
                    <li>• Real-time Features</li>
                    <li>• User Authentication</li>
                    <li>• Third-party Integrations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technologies We Use</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We work with the latest technologies to ensure your website is fast, secure, and scalable.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "React",
                "Next.js",
                "Vue.js",
                "Node.js",
                "Python",
                "PHP",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "AWS",
                "Vercel",
                "Docker",
              ].map((tech) => (
                <div
                  key={tech}
                  className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-lg font-semibold text-foreground">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures quality, efficiency, and client satisfaction at every step.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  desc: "Understanding your business goals, target audience, and technical requirements through detailed consultation.",
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  desc: "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  desc: "Building your website with clean code, rigorous testing, and quality assurance at every stage.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  desc: "Deploying your website and providing ongoing maintenance, updates, and technical support.",
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

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Web Development Services?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Quality Assurance",
                  desc: "Rigorous testing ensures bug-free, high-performance websites.",
                },
                {
                  icon: Zap,
                  title: "Fast Loading",
                  desc: "Optimized code and assets for lightning-fast page load speeds.",
                },
                {
                  icon: Shield,
                  title: "Security First",
                  desc: "Built-in security measures to protect your website and user data.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Optimized",
                  desc: "Perfect display and functionality across all devices and browsers.",
                },
                { icon: Users, title: "User-Centric", desc: "Intuitive interfaces designed with your users in mind." },
                {
                  icon: Star,
                  title: "Ongoing Support",
                  desc: "Continuous maintenance and support to keep your website running smoothly.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Website?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss your project requirements and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Quote</Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
