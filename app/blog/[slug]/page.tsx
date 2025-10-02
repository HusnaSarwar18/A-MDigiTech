import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Mock data - in a real app, this would fetch from your CMS
  return {
    title: "The Future of Mobile App Development: Trends to Watch in 2025",
    content: `
      <p>Mobile app development continues to evolve at a rapid pace, with new technologies and methodologies emerging that promise to reshape how we build and interact with mobile applications. As we look ahead to 2025, several key trends are set to dominate the landscape.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process itself. AI-powered code generation, automated testing, and intelligent debugging tools are becoming mainstream, allowing developers to focus more on creative problem-solving and user experience design.</p>
      
      <h2>2. Cross-Platform Dominance</h2>
      <p>Frameworks like React Native, Flutter, and emerging solutions continue to mature, offering near-native performance while maintaining code reusability across platforms. This trend is driven by the need for faster time-to-market and reduced development costs.</p>
      
      <h2>3. Enhanced Security Measures</h2>
      <p>With increasing concerns about data privacy and security breaches, mobile apps are implementing more sophisticated security measures, including biometric authentication, end-to-end encryption, and zero-trust architectures.</p>
      
      <h2>4. 5G Integration</h2>
      <p>The widespread adoption of 5G networks is enabling new possibilities for mobile applications, including real-time AR/VR experiences, instant cloud computing, and seamless IoT integration.</p>
      
      <h2>Conclusion</h2>
      <p>The future of mobile app development is bright, with technologies that will enable more powerful, secure, and user-friendly applications. Staying ahead of these trends will be crucial for businesses looking to maintain a competitive edge in the mobile space.</p>
    `,
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Mobile Development",
    image: "/mobile-app-development-trends-2025.jpg",
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        {/* Article Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Bio */}
            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">About {post.author}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.author} is a senior mobile developer at A&M DigiTech with over 8 years of experience in
                      creating innovative mobile solutions. She specializes in React Native and Flutter development and
                      is passionate about emerging technologies in the mobile space.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "SEO Best Practices for Modern Websites",
                    category: "SEO & Marketing",
                    readTime: "8 min read",
                    slug: "seo-best-practices-modern-websites",
                  },
                  {
                    title: "Why Your Business Needs a Professional Website",
                    category: "Web Development",
                    readTime: "6 min read",
                    slug: "why-business-needs-professional-website",
                  },
                ].map((article, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <h4 className="text-lg font-semibold text-foreground mt-3 mb-2">{article.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="outline" size="sm">
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
