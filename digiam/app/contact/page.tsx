import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones, ReplyAll } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Let's Connect
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Ready to start your digital transformation? We'd love to hear about your project and discuss how we can
                  help bring your vision to life.
                </p>
              </div>

              {/* Quick Contact Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">&lt;24</div>
                  <div className="text-sm text-muted-foreground">Hour Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">5★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Contact Options
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Ways to Reach Us</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Choose your preferred way to get in touch. We're here to help you succeed in your digital journey.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">Email Us</div>
                            <div className="text-sm text-muted-foreground">info@amdigitech.com</div>
                            <div className="text-xs text-primary/80 mt-1">Best for detailed inquiries</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">Call Us</div>
                            <div className="text-sm text-muted-foreground">+60174738779</div>
                            <div className="text-xs text-primary/80 mt-1">Available during business hours</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">Visit Us</div>
                            <div className="text-sm text-muted-foreground">
                              Taman Danau Desa, Kuala Lumpur Malaysia 58100
                            </div>
                            <div className="text-xs text-primary/80 mt-1">For face-to-face meetings</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">Business Hours</div>
                            <div className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM (MYT)</div>
                            <div className="text-xs text-primary/80 mt-1">Weekend appointments available</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Additional Contact Methods */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <a href="https://wa.me/60174738779?text=Hi%2C%20I%20am%20interested%20in%20your%20digital%20services.%20Can%20you%20help%20me%20with%20more%20information%3F" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp: +60174738779</span>
                      </a>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        <Headphones className="h-4 w-4" />
                        <span>Schedule a consultation call</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        <ReplyAll className="h-4 w-4" />
                        <span>Join our email newsletter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-background overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Common Questions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Quick answers to common questions about our services and process. Can't find what you're looking for? 
                <span className="text-primary font-semibold"> Contact us directly!</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during consultation.",
                  icon: "⏱️"
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally after launch.",
                  icon: "🛠️"
                },
                {
                  question: "What's included in your web development service?",
                  answer:
                    "Our web development includes design, development, testing, deployment, and basic SEO optimization. We also provide training on content management.",
                  icon: "🌐"
                },
                {
                  question: "Can you work with our existing brand guidelines?",
                  answer:
                    "We can work within your existing brand guidelines or help develop new ones if needed. Brand consistency is important to us.",
                  icon: "🎨"
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept bank transfers, credit cards, and PayPal. We also offer flexible payment plans for larger projects.",
                  icon: "💳"
                },
                {
                  question: "Do you offer revisions after project completion?",
                  answer:
                    "Yes, we include 2 rounds of revisions in our standard packages. Additional revisions are available at competitive rates.",
                  icon: "🔄"
                },
              ].map((faq, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background to-muted/5">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Help */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our team is here to help! Reach out to us directly and we'll get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:info@amdigitech.com" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                  <a href="tel:+60174738779" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
