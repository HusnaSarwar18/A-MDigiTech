import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Digital Insights & Trends
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Blog</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and insights in digital technology. Our experts share valuable
              knowledge to help your business thrive in the digital world.
            </p>
              </div>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles, topics, or keywords..." 
                    className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-primary/20 focus:border-primary transition-colors shadow-lg"
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Stats */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-muted-foreground font-medium">Articles Published</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-muted-foreground font-medium">Monthly Readers</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                <div className="text-muted-foreground font-medium">Expert Authors</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-muted-foreground font-medium">Reader Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Explore Topics
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Browse by Category</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Find articles that match your interests and business needs across various digital technology topics.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "All Posts", count: 6 },
                { name: "Web Development", count: 2 },
                { name: "Mobile Development", count: 1 },
                { name: "SEO & Marketing", count: 1 },
                { name: "Video & Animation", count: 1 },
                { name: "Social Media", count: 1 },
              ].map((category, index) => (
                <Button
                  key={category.name}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 py-3 font-semibold transition-all duration-300 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group"
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-primary/10 text-primary group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground px-2 py-1 rounded-full transition-colors">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Latest Articles
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Featured Blog Posts</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our latest insights, tutorials, and industry trends to stay ahead in the digital world.
              </p>
            </div>
            
            <BlogGrid />

            {/* Load More */}
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-2 animate-pulse"></span>
                  Stay Connected
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">Stay Updated</h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Subscribe to our newsletter and get the latest insights, tips, and industry trends delivered directly to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Input
                  placeholder="Enter your email address"
                  className="bg-primary-foreground text-primary placeholder:text-primary/60 px-6 py-4 text-lg rounded-full border-0 shadow-lg focus:ring-2 focus:ring-primary-foreground/20"
              />
                <Button size="lg" variant="secondary" className="whitespace-nowrap px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Subscribe Now
              </Button>
              </div>
              
              <p className="text-sm text-primary-foreground/70">
                Join 10,000+ subscribers. No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
