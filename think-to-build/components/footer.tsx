import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-graphite/10 bg-offwhite py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-deepBlue to-electricIndigo">
              ThinkToBuild
            </span>
          </Link>
          <p className="text-sm text-graphite/70">Founder-first MVP studio. Clarity → Sprints → Launch.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium font-heading">Pages</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm text-graphite/70 hover:text-electricIndigo">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm text-graphite/70 hover:text-electricIndigo">
              How It Works
            </Link>
            <Link href="/our-sprints" className="text-sm text-graphite/70 hover:text-electricIndigo">
              Our Sprints
            </Link>
            <Link href="/work-with-us" className="text-sm text-graphite/70 hover:text-electricIndigo">
              Work With Us
            </Link>
            <Link href="/contact" className="text-sm text-graphite/70 hover:text-electricIndigo">
              Contact
            </Link>
            <Link href="/founder-checklist" className="text-sm text-graphite/70 hover:text-electricIndigo">
              Founder Checklist
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium font-heading">Connect</h3>
          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite/70 hover:text-electricIndigo"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite/70 hover:text-electricIndigo"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite/70 hover:text-electricIndigo"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium font-heading">Subscribe</h3>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="max-w-[200px] bg-white border-graphite/20" />
            <Button
              type="submit"
              variant="outline"
              className="border-electricIndigo text-electricIndigo hover:bg-electricIndigo hover:text-white"
            >
              Join
            </Button>
          </div>
          <p className="text-xs text-graphite/70">Get founder tips and updates.</p>
        </div>
      </div>

      <div className="container mt-8 flex flex-col md:flex-row justify-between items-center border-t border-graphite/10 pt-8">
        <p className="text-xs text-graphite/70">© {new Date().getFullYear()} ThinkToBuild. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-xs text-graphite/70 hover:text-electricIndigo">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-graphite/70 hover:text-electricIndigo">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
