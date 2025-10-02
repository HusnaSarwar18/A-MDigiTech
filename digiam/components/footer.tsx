import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 relative overflow-hidden border-t border-gray-200">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="border border-gray-300/30 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <img src="/Assets/logo.png" alt="A&M DigiTech Logo" className="h-10 w-auto mb-2" />
                <p className="text-gray-600 mt-2">
                  Transforming businesses through innovative digital solutions and cutting-edge technology.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Taman Danau Desa, Kuala Lumpur Malaysia 58100</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-sm">+60174738779</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span className="text-sm">info@amdigitech.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-600">Services</h4>
              <ul className="space-y-3">
                {[
                  "Mobile App Development",
                  "Web Development",
                  "SEO Services",
                  ".NET Development",
                  "WordPress Design",
                  "Video Editing",
                ].map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-600">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-600">Stay Updated</h4>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-l-md text-gray-800 text-sm focus:outline-none focus:border-green-500"
                  />
                  <Button className="rounded-l-none bg-green-600 hover:bg-green-700">Subscribe</Button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-2">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Instagram, href: "#" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="text-gray-500 hover:text-green-600 transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">© 2025 A&M DigiTech. All rights reserved.</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>Made with ❤️ in Malaysia</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
