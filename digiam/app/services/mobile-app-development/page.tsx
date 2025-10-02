import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Smartphone,
  Apple,
  HandCoins as Android,
  Code,
  Zap,
  Shield,
  Users,
  Star,
  Globe,
  Database,
} from "lucide-react"

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 tech-mesh opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
              <Smartphone className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Mobile App <span className="text-primary">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Create powerful, user-friendly mobile applications for iOS and Android platforms with cutting-edge
              technology and seamless user experiences that engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View App Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Platform Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mobile App Development Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From native iOS and Android apps to cross-platform solutions, we build apps that users love.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Apple className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">iOS Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Native iOS apps using Swift and SwiftUI for optimal performance and user experience.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Swift & SwiftUI Development</li>
                    <li>• App Store Optimization</li>
                    <li>• iOS Design Guidelines</li>
                    <li>• Core Data Integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Android className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Android Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Native Android apps using Kotlin and modern Android frameworks for robust performance.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kotlin & Java Development</li>
                    <li>• Google Play Store Optimization</li>
                    <li>• Material Design Implementation</li>
                    <li>• Room Database Integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    React Native and Flutter for efficient multi-platform development with shared codebase.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• React Native Development</li>
                    <li>• Flutter Applications</li>
                    <li>• Code Reusability</li>
                    <li>• Faster Time to Market</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of Apps We Build</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We specialize in various types of mobile applications across different industries and use cases.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Apps",
                  desc: "Shopping apps with payment integration, product catalogs, and order management.",
                },
                {
                  title: "Social Media Apps",
                  desc: "Community platforms with user profiles, messaging, and content sharing features.",
                },
                {
                  title: "Business Apps",
                  desc: "Enterprise solutions for productivity, communication, and workflow management.",
                },
                {
                  title: "Healthcare Apps",
                  desc: "Medical applications for patient management, telemedicine, and health tracking.",
                },
                {
                  title: "Education Apps",
                  desc: "Learning platforms with interactive content, progress tracking, and assessments.",
                },
                {
                  title: "Food Delivery Apps",
                  desc: "Restaurant apps with ordering systems, delivery tracking, and payment processing.",
                },
              ].map((app, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{app.title}</h3>
                    <p className="text-muted-foreground text-sm">{app.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our App Development Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach that ensures your app is built to the highest standards and meets user
                expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  desc: "Understanding your app idea, target audience, and business objectives through detailed analysis.",
                },
                {
                  step: "02",
                  title: "UI/UX Design",
                  desc: "Creating intuitive user interfaces and seamless user experiences with wireframes and prototypes.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  desc: "Building robust, scalable mobile applications with rigorous testing across devices and platforms.",
                },
                {
                  step: "04",
                  title: "Launch & Maintenance",
                  desc: "App store submission, deployment, and ongoing support with regular updates and improvements.",
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Features We Implement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "User Authentication",
                  desc: "Secure login systems with social media integration and biometric authentication.",
                },
                {
                  icon: Database,
                  title: "Data Management",
                  desc: "Efficient data storage, synchronization, and offline functionality.",
                },
                {
                  icon: Globe,
                  title: "API Integration",
                  desc: "Seamless integration with third-party services and existing systems.",
                },
                {
                  icon: Shield,
                  title: "Security Features",
                  desc: "End-to-end encryption, secure data transmission, and privacy protection.",
                },
                {
                  icon: Zap,
                  title: "Push Notifications",
                  desc: "Engaging user notifications for better retention and communication.",
                },
                {
                  icon: Star,
                  title: "Analytics & Tracking",
                  desc: "User behavior analytics and performance monitoring for data-driven decisions.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss your mobile app idea and create something amazing that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline">
                Download App Proposal Template
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
