import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Shield,
  Code,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"

export default function NetDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Database className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              .NET <span className="text-primary">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Building robust, scalable, and secure enterprise-grade applications with Microsoft .NET technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* .NET Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our .NET Development Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leveraging the power of .NET to build custom solutions that drive your business forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Terminal className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Tailored .NET applications designed to meet your unique business requirements and challenges.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enterprise Resource Planning (ERP)</li>
                    <li>• Customer Relationship Management (CRM)</li>
                    <li>• Business Process Automation</li>
                    <li>• Legacy System Modernization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Cloud className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud-Native Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Building scalable and resilient cloud applications using Azure, AWS, and Google Cloud with .NET.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Azure Cloud Services</li>
                    <li>• Microservices Architecture</li>
                    <li>• Serverless Computing</li>
                    <li>• DevOps & CI/CD Pipelines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Cpu className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">API Development & Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating robust APIs and integrating third-party services to enhance application functionality.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RESTful API Development</li>
                    <li>• GraphQL APIs</li>
                    <li>• Third-Party API Integration</li>
                    <li>• Data Synchronization Services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Database Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Designing and optimizing databases for high performance, reliability, and data integrity.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SQL Server Development</li>
                    <li>• Entity Framework Core</li>
                    <li>• Cosmos DB & Azure SQL</li>
                    <li>• Data Migration & ETL</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security & Performance</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementing robust security measures and optimizing applications for maximum performance.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Authentication & Authorization</li>
                    <li>• Data Encryption</li>
                    <li>• Performance Tuning</li>
                    <li>• Code Review & Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">ASP.NET Web Applications</h3>
                  <p className="text-muted-foreground mb-4">
                    Developing dynamic and interactive web applications using ASP.NET Core MVC and Blazor.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ASP.NET Core MVC</li>
                    <li>• Blazor WebAssembly/Server</li>
                    <li>• Web API Development</li>
                    <li>• UI/UX Integration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* .NET Advantage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose .NET Development?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                .NET offers a versatile and powerful framework for building high-performance, secure, and scalable
                applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Robust & Secure",
                  desc: "Enterprise-grade security features and robust architecture for reliable applications.",
                },
                {
                  icon: Star,
                  title: "High Performance",
                  desc: "Optimized for speed and scalability, handling heavy loads with efficiency.",
                },
                {
                  icon: Users,
                  title: "Cross-Platform Compatibility",
                  desc: "Develop applications that run seamlessly on Windows, Linux, and macOS.",
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

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our .NET Development Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach ensuring quality, efficiency, and successful project delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirements & Analysis",
                  desc: "Gathering detailed requirements and performing a thorough analysis of your needs.",
                },
                {
                  step: "02",
                  title: "Architecture & Design",
                  desc: "Designing a scalable and robust architecture for your .NET application.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  desc: "Implementing the application with clean code and rigorous testing.",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  desc: "Deploying the application and providing continuous support and maintenance.",
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your .NET Application?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss your project and leverage the power of .NET to create your next-generation application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
