import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Img18 from "@/lib/18.jpg"
import Img19 from "@/lib/19.jpg"
import Img20 from "@/lib/20.jpeg"
import Img21 from "@/lib/21.jpeg"
import Img22 from "@/lib/22.webp"
import Img23 from "@/lib/23.jpeg"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Mobile App Development: Trends to Watch in 2025",
    excerpt:
      "Explore the latest trends shaping mobile app development, from AI integration to cross-platform solutions that are revolutionizing user experiences.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Mobile Development",
    image: Img18.src,
    slug: "future-mobile-app-development-trends-2025",
  },
  {
    id: 2,
    title: "SEO Best Practices for Modern Websites: A Complete Guide",
    excerpt:
      "Learn the essential SEO strategies that will help your website rank higher in search results and attract more organic traffic in 2025.",
    author: "Michael Chen",
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "SEO & Marketing",
    image: Img19.src,
    slug: "seo-best-practices-modern-websites-guide",
  },
  {
    id: 3,
    title: "Why Your Business Needs a Professional Website in 2025",
    excerpt:
      "Discover how a well-designed website can transform your business, increase credibility, and drive more customers to your products and services.",
    author: "Emily Rodriguez",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Web Development",
    image: Img20.src,
    slug: "why-business-needs-professional-website-2025",
  },
  {
    id: 4,
    title: "The Power of Video Marketing: Creating Engaging Content",
    excerpt:
      "Learn how to leverage video content to boost engagement, improve brand awareness, and drive conversions for your business.",
    author: "David Kim",
    date: "November 28, 2024",
    readTime: "7 min read",
    category: "Video & Animation",
    image: Img21.src,
    slug: "power-of-video-marketing-creating-engaging-content",
  },
  {
    id: 5,
    title: "Social Media Management: Building Your Brand Online",
    excerpt:
      "Effective strategies for managing your social media presence, creating compelling content, and building a loyal community around your brand.",
    author: "Lisa Thompson",
    date: "November 20, 2024",
    readTime: "5 min read",
    category: "Social Media",
    image: Img22.src,
    slug: "social-media-management-building-brand-online",
  },
  {
    id: 6,
    title: "WordPress vs Custom Development: Which is Right for You?",
    excerpt:
      "Compare the pros and cons of WordPress and custom development to make an informed decision for your next web project.",
    author: "Alex Martinez",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Web Development",
    image: Img23.src,
    slug: "wordpress-vs-custom-development-which-is-right",
  },
]

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Card key={post.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-semibold text-white bg-primary/90 px-3 py-1 rounded-full shadow-lg">
                {post.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex items-center text-xs text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock className="h-3 w-3 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <CardHeader className="pb-4 relative">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
              {post.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              {post.excerpt}
            </p>
          </CardHeader>
          
          <CardContent className="pt-0 relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">{post.author}</div>
                  <div className="text-xs text-muted-foreground">{post.date}</div>
                </div>
              </div>
            </div>
            
            <Link href={`/blog/${post.slug}`}>
              <Button
                variant="outline"
                size="lg"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent border-2 border-primary text-primary hover:shadow-lg font-semibold"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
