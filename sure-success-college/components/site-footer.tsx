import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Phone, PhoneIcon as Whatsapp } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary-foreground">
            <Image
              src="/placeholder.svg"
              width={50}
              height={50}
              alt="Sure Success College Logo"
              className="rounded-full"
            />
            <span className="text-xl">Sure Success College</span>
          </Link>
          <p className="text-sm opacity-80">“Your Success, Our Priority.”</p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-accent transition-colors" aria-label="WhatsApp">
              <Whatsapp className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="text-sm hover:underline opacity-80">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:underline opacity-80">
            About Us
          </Link>
          <Link href="/courses" className="text-sm hover:underline opacity-80">
            Courses
          </Link>
          <Link href="/admissions" className="text-sm hover:underline opacity-80">
            Admissions
          </Link>
          <Link href="/contact" className="text-sm hover:underline opacity-80">
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm opacity-80 flex items-center gap-2">
            <Mail className="h-4 w-4" /> info@suresuccesscollege.edu.gh
          </p>
          <p className="text-sm opacity-80 flex items-center gap-2">
            <Phone className="h-4 w-4" /> +233 xxx xxx xxx
          </p>
          <p className="text-sm opacity-80">Accra, Ghana</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-sm opacity-80">Stay updated with our latest news and offers.</p>
          <form className="flex gap-2 mt-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="container text-center text-xs opacity-70 mt-8 pt-8 border-t border-primary-foreground/20">
        &copy; {new Date().getFullYear()} Sure Success College. All rights reserved.
      </div>
    </footer>
  )
}
