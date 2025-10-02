import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import Image from "next/image"
import Img1 from "@/lib/1.jpeg"
import Img2 from "@/lib/2.jpeg"
import Img3 from "@/lib/3.jpeg"
import Img4 from "@/lib/4.jpeg"
import Img5 from "@/lib/5.jpeg"
import Img6 from "@/lib/6.jpeg"
import Img7 from "@/lib/7.jpeg"
import Img8 from "@/lib/8.jpeg"
import Img10 from "@/lib/10.jpeg"
import Img11 from "@/lib/11.jpeg"
import Img12 from "@/lib/12.jpeg"
import Img13 from "@/lib/13.jpeg"
import Img14 from "@/lib/14.jpeg"
import Img15 from "@/lib/15.jpeg"
import Img16 from "@/lib/16.jpeg"
import Img17 from "@/lib/17.jpeg"

export default function AboutPage() {
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
          
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    Digital Innovation Since 2019
                  </div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                    About <span className="text-primary">A&M</span> DigiTech
                  </h1>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                  We are a passionate team of digital innovators dedicated to transforming businesses through
                  cutting-edge technology solutions. Since our inception, we've been committed to delivering exceptional
                  digital experiences that drive growth and success.
                </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expertise spans across mobile app development, web development, digital marketing, and creative
                  services. We believe in the power of technology to solve complex business challenges and create
                  meaningful connections between brands and their audiences.
                </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
                    Get to Know Us Better
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold">
                    View Our Work
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative group">
                        <Image
                          src={Img5}
                          alt="Team collaboration"
                          className="w-full h-48 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                      </div>
                      <div className="relative group">
                        <Image
                          src={Img6}
                          alt="Digital workspace"
                          className="w-full h-32 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="relative group">
                        <Image
                          src={Img7}
                          alt="Innovation process"
                          className="w-full h-32 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                      </div>
                      <div className="relative group">
                        <Image
                          src={Img8}
                          alt="Creative solutions"
                          className="w-full h-48 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Our Foundation
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These principles guide everything we do and shape how we approach every project and client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "We stay ahead of technology trends and continuously explore new ways to solve complex challenges.",
                  color: "from-blue-500/10 to-blue-600/10",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "We work closely with our clients as partners, ensuring their vision is realized through our expertise.",
                  color: "from-green-500/10 to-green-600/10",
                  iconColor: "text-green-600",
                },
                {
                  icon: Target,
                  title: "Results-Driven",
                  description:
                    "Every project is measured by its impact on our client's business goals and user satisfaction.",
                  color: "from-purple-500/10 to-purple-600/10",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We maintain the highest standards in code quality, design, and project delivery.",
                  color: "from-orange-500/10 to-orange-600/10",
                  iconColor: "text-orange-600",
                },
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardContent className="relative p-8 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-10 w-10 ${value.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Our Purpose
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Mission & Vision</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our mission and vision drive every decision we make and every solution we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    To empower businesses with innovative digital solutions that enhance their online presence, improve
                    operational efficiency, and drive sustainable growth. We strive to be the trusted technology partner
                    that transforms ideas into successful digital realities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    To be recognized as a leading digital technology company that shapes the future of business through
                    innovative solutions, exceptional service, and meaningful partnerships. We envision a world where
                    every business can leverage technology to reach its full potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Behind the Scenes
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Work in Action</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A visual journey through our projects, team moments, and the passion that drives our digital innovation.
              </p>
            </div>

            {/* Masonry-style image grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {/* Gallery images - using remaining images */}
              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img1}
                    alt="A&M DigiTech Project Showcase 1"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img2}
                    alt="A&M DigiTech Project Showcase 2"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img3}
                    alt="A&M DigiTech Project Showcase 3"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img4}
                    alt="A&M DigiTech Project Showcase 4"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img10}
                    alt="A&M DigiTech Project Showcase 10"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img11}
                    alt="A&M DigiTech Project Showcase 11"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img12}
                    alt="A&M DigiTech Project Showcase 12"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img13}
                    alt="A&M DigiTech Project Showcase 13"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img14}
                    alt="A&M DigiTech Project Showcase 14"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img15}
                    alt="A&M DigiTech Project Showcase 15"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img16}
                    alt="A&M DigiTech Project Showcase 16"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>

              <div className="break-inside-avoid mb-4">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={Img17}
                    alt="A&M DigiTech Project Showcase 17"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-foreground rounded-full mr-2 animate-pulse"></span>
                Our Impact
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose A&M DigiTech?</h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Our track record speaks for itself. Here's what sets us apart in the digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl sm:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-lg text-primary-foreground/90 font-medium">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-5xl sm:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg text-primary-foreground/90 font-medium">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-5xl sm:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-lg text-primary-foreground/90 font-medium">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-5xl sm:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-lg text-primary-foreground/90 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Let's Get Started
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Work Together?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss how A&M DigiTech can help transform your digital presence and drive your business forward.
            </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Start a Project
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Schedule a Call
              </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
