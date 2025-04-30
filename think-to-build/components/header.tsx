"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-graphite/10 bg-offwhite/80 backdrop-blur supports-[backdrop-filter]:bg-offwhite/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-deepBlue to-electricIndigo">
              ThinkToBuild
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-electricIndigo">
            How It Works
          </Link>
          <Link href="/our-sprints" className="text-sm font-medium transition-colors hover:text-electricIndigo">
            Our Sprints
          </Link>
          <Link href="/work-with-us" className="text-sm font-medium transition-colors hover:text-electricIndigo">
            Work With Us
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-electricIndigo">
            Contact
          </Link>
          <Button asChild className="bg-electricIndigo hover:bg-electricIndigo/90 text-white">
            <Link href="/contact">Book a Sprint</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-offwhite md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="container flex flex-col gap-6 p-6">
          <Link
            href="/how-it-works"
            className="text-lg font-medium py-2 border-b border-graphite/10"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/our-sprints"
            className="text-lg font-medium py-2 border-b border-graphite/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Sprints
          </Link>
          <Link
            href="/work-with-us"
            className="text-lg font-medium py-2 border-b border-graphite/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Work With Us
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium py-2 border-b border-graphite/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="mt-4 bg-electricIndigo hover:bg-electricIndigo/90 text-white">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Book a Sprint
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
