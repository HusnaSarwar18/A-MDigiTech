"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="shadow-2xl border-primary/20 bg-gradient-to-br from-background to-muted/5">
      <CardHeader className="pb-6">
        <div className="space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Free Quote Request
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">Get Your Free Quote</CardTitle>
          <p className="text-muted-foreground leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal and timeline.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service Needed *</Label>
              <Select onValueChange={(value) => handleChange("service", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="dotnet">.NET Development</SelectItem>
                  <SelectItem value="wordpress">WordPress Design</SelectItem>
                  <SelectItem value="seo">SEO Services</SelectItem>
                  <SelectItem value="video-editing">Video Editing</SelectItem>
                  <SelectItem value="animation">2D Animation</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                  <SelectItem value="content-writing">Content Writing</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Project Budget</Label>
              <Select onValueChange={(value) => handleChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="over-50k">Over $50,000</SelectItem>
                  <SelectItem value="discuss">Let's Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
              rows={5}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Send My Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
