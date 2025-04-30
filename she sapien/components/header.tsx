"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, ShoppingBag, User } from "lucide-react"

const collections = [
  {
    title: "Tops",
    href: "/collections/tops",
    description: "Elegant tops designed for the modern workplace",
  },
  {
    title: "Bottoms",
    href: "/collections/bottoms",
    description: "Comfortable and stylish trousers and skirts",
  },
  {
    title: "Dresses",
    href: "/collections/dresses",
    description: "Office-ready dresses for every occasion",
  },
  {
    title: "Co-ords",
    href: "/collections/co-ords",
    description: "Matching sets for effortless style",
  },
  {
    title: "Blazers",
    href: "/collections/blazers",
    description: "Statement pieces to elevate your look",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav pathname={pathname} setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-playfair font-bold">She Sapien</span>
        </Link>
        <div className="hidden md:flex">
          <NavigationMenu className="text-charcoal">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {collections.map((collection) => (
                      <li key={collection.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={collection.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{collection.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {collection.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Community</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Bag">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ pathname, setIsOpen }: { pathname: string; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="grid gap-6 px-2 pb-8 pt-6 text-base">
      <div className="grid gap-3">
        <h4 className="font-medium">Shop</h4>
        <div className="grid grid-cols-1 gap-2">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className={cn(
                "flex py-2 text-sm transition-colors hover:text-primary",
                pathname === collection.href ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              {collection.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        <Link
          href="/about"
          className={cn(
            "flex py-2 text-sm transition-colors hover:text-primary",
            pathname === "/about" ? "text-primary" : "text-muted-foreground",
          )}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/community"
          className={cn(
            "flex py-2 text-sm transition-colors hover:text-primary",
            pathname === "/community" ? "text-primary" : "text-muted-foreground",
          )}
          onClick={() => setIsOpen(false)}
        >
          Community
        </Link>
        <Link
          href="/support"
          className={cn(
            "flex py-2 text-sm transition-colors hover:text-primary",
            pathname === "/support" ? "text-primary" : "text-muted-foreground",
          )}
          onClick={() => setIsOpen(false)}
        >
          Support
        </Link>
      </div>
    </div>
  )
}

