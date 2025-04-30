import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import StatusTracker from "@/components/status-tracker"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-medium">She Sapien</h3>
            <p className="text-sm text-muted-foreground">Powerfully You. Officewear that Speaks Confidence.</p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collections/tops" className="text-muted-foreground hover:text-foreground">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/collections/bottoms" className="text-muted-foreground hover:text-foreground">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/collections/dresses" className="text-muted-foreground hover:text-foreground">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/collections/co-ords" className="text-muted-foreground hover:text-foreground">
                  Co-ords
                </Link>
              </li>
              <li>
                <Link href="/collections/blazers" className="text-muted-foreground hover:text-foreground">
                  Blazers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/materials" className="text-muted-foreground hover:text-foreground">
                  Our Materials
                </Link>
              </li>
              <li>
                <Link href="/about/founder" className="text-muted-foreground hover:text-foreground">
                  Meet the Founder
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="text-muted-foreground hover:text-foreground">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support/returns" className="text-muted-foreground hover:text-foreground">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/support/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Be the first to know about drops, deals & stories</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-lg flex-1" required />
              <Button type="submit">Join</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span>© {new Date().getFullYear()} She Sapien. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Use
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Payment Options:</span>
              <div className="flex gap-2">
                <div className="h-6 w-10 rounded-md bg-muted" aria-label="Visa"></div>
                <div className="h-6 w-10 rounded-md bg-muted" aria-label="Mastercard"></div>
                <div className="h-6 w-10 rounded-md bg-muted" aria-label="UPI"></div>
                <div className="h-6 w-10 rounded-md bg-muted" aria-label="Razorpay"></div>
                <div className="h-6 w-10 rounded-md bg-muted" aria-label="Apple Pay"></div>
              </div>
            </div>
          </div>

          {/* Status Tracker */}
          <div className="mt-8 border rounded-md p-4 bg-muted/30">
            <StatusTracker />
          </div>
        </div>
      </div>
    </footer>
  )
}

