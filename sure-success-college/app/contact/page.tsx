"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, PhoneIcon as Whatsapp, Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // In a real application, you would send this data to a backend API
    alert("Your message has been sent! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you! Reach out to us with any questions or inquiries.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 animate-fade-in delay-200">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Inquiry about admissions"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="space-y-4 animate-fade-in delay-300">
            <h2 className="text-3xl font-bold text-secondary">Get in Touch</h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-accent" />
                Email:{" "}
                <Link href="mailto:info@suresuccesscollege.edu.gh" className="hover:underline">
                  info@suresuccesscollege.edu.gh
                </Link>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-accent" />
                Phone:{" "}
                <Link href="tel:+233xxx-xxx-xxx" className="hover:underline">
                  +233 xxx xxx xxx
                </Link>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-accent" />
                Address: Sure Success College, Accra, Ghana
              </p>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in delay-400">
            <h2 className="text-3xl font-bold text-secondary">Follow Us</h2>
            <p className="text-muted-foreground">Connect with us on social media for updates and news.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-primary hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-8 w-8" />
              </Link>
              <Link href="#" className="text-primary hover:text-accent transition-colors" aria-label="WhatsApp">
                <Whatsapp className="h-8 w-8" />
              </Link>
              <Link href="#" className="text-primary hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-8 w-8" />
              </Link>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in delay-500">
            <h2 className="text-3xl font-bold text-secondary">Our Location</h2>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6000000000004!2d-0.19800000000000003!3d5.6000000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQwJzQ4LjAiTiAwwrAxMSc0OC4wIlc!5e0!3m2!1sen!2sgh!4v1678901234567!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Placeholder for Sure Success College"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              *Map shows a general placeholder location. Please contact us for precise directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
