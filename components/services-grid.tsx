import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Code,
  Globe,
  Compass as Wordpress,
  Search,
  Video,
  Palette,
  Share2,
  PenTool,
  FileText,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance apps that engage users and drive business growth.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
  },
  {
    icon: Code,
    title: ".NET Development",
    description:
      "Robust enterprise applications built with Microsoft .NET framework. Scalable solutions for web applications, APIs, and desktop software.",
    features: ["ASP.NET Core", "Web APIs", "Desktop Apps", "Cloud Integration"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web development using modern technologies. From frontend interfaces to backend systems, we build complete web solutions.",
    features: ["MERN Stack", "Frontend/Backend", "Database Design", "Cloud Deployment"],
  },
  {
    icon: Wordpress,
    title: "WordPress Designing",
    description:
      "Custom WordPress websites and themes tailored to your brand. User-friendly content management with powerful customization options.",
    features: ["Custom Themes", "Plugin Development", "E-commerce", "Performance Optimization"],
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Comprehensive search engine optimization to improve your online visibility. Drive organic traffic and increase your search rankings.",
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Analytics & Reporting"],
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing and post-production services. Create engaging content for marketing, social media, and corporate communications.",
    features: ["Motion Graphics", "Color Correction", "Audio Enhancement", "Multi-format Export"],
  },
  {
    icon: Palette,
    title: "2D Animation",
    description:
      "Creative 2D animations for explainer videos, marketing content, and interactive media. Bring your ideas to life with engaging visuals.",
    features: ["Character Animation", "Explainer Videos", "Motion Graphics", "Interactive Elements"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic social media management to build your brand presence. Content creation, scheduling, and community engagement across platforms.",
    features: ["Content Strategy", "Multi-platform Management", "Analytics", "Community Engagement"],
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    description:
      "Creative graphic design solutions for digital and print media. From logos to marketing materials, we create visually compelling designs.",
    features: ["Brand Identity", "Marketing Materials", "Digital Graphics", "Print Design"],
  },
  {
    icon: FileText,
    title: "Content Writing",
    description:
      "Professional content writing services for websites, blogs, and marketing materials. SEO-optimized content that engages and converts.",
    features: ["SEO Content", "Blog Writing", "Copywriting", "Technical Writing"],
  },
]

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const IconComponent = service.icon
        return (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
