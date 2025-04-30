import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center gap-4 px-4 py-16 text-center md:px-6 md:py-24 lg:flex-row lg:items-start lg:gap-8 lg:py-32 lg:text-left xl:gap-12 xl:py-40">
          <div className="flex flex-1 flex-col items-center gap-4 lg:items-start">
            <Badge className="rounded-md px-3 py-1">Sustainable Fashion</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-playfair">
              Powerfully You. <br />
              Officewear that Speaks Confidence.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Sustainable, tailored officewear designed specifically for the modern Indian woman.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/collections">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video w-full max-w-xl overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Confident Indian woman in She-Sapien workwear"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why She-Sapien Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">Why She-Sapien</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              We exist to power the confidence of the modern Indian woman – through fashion that fits her life, values,
              and ambition.
            </p>
          </div>
          <div className="relative mx-auto mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full">
                <Play className="h-8 w-8" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="She-Sapien brand video thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sage"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium font-playfair">Fit that Empowers</h3>
                <p className="text-sm text-muted-foreground">
                  Designed specifically for Indian body types and proportions
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sage"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-medium font-playfair">Style that Performs</h3>
                <p className="text-sm text-muted-foreground">
                  Versatile pieces that transition seamlessly from work to social events
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sage"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M14.31 8 20.05 17.94"></path>
                    <path d="m9.69 8-2.07 3.59"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium font-playfair">Made with Purpose</h3>
                <p className="text-sm text-muted-foreground">
                  Ethically sourced fabrics that are kind to the environment
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sage"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium font-playfair">Community-first</h3>
                <p className="text-sm text-muted-foreground">Women supporting women in fashion, life, and work</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/collections">
                Explore the Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Featured Collection
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Discover our bestsellers and editor's picks for the modern workplace
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              name="The Essential Shirt"
              price="₹2,499"
              image="/placeholder.svg?height=400&width=300"
              category="Tops"
              badge="Bestseller"
            />
            <ProductCard
              name="Tailored Trousers"
              price="₹3,299"
              image="/placeholder.svg?height=400&width=300"
              category="Bottoms"
              badge="New Arrival"
            />
            <ProductCard
              name="Classic Shift Dress"
              price="₹4,199"
              image="/placeholder.svg?height=400&width=300"
              category="Dresses"
            />
            <ProductCard
              name="Power Blazer"
              price="₹5,499"
              image="/placeholder.svg?height=400&width=300"
              category="Blazers"
              badge="Editor's Pick"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/collections">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Empowerment Stories */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Empowerment Stories
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Real women sharing their workplace journeys and how confidence in their appearance transformed their
              professional lives
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Priya Sharma"
              role="Marketing Director"
              quote="She-Sapien's clothes have become my workwear staples. The fit is perfect for Indian women, and I love how I can transition from day meetings to evening events without changing."
              image="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Anjali Mehta"
              role="Financial Analyst"
              quote="As someone who struggled to find professional wear that fits well, She-Sapien has been a game-changer. The sustainable aspect makes me feel good about my purchases too."
              image="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Deepika Patel"
              role="Tech Entrepreneur"
              quote="The confidence I feel in She-Sapien clothing has genuinely impacted how I present myself in the boardroom. Quality, comfort, and style all in one."
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/community/stories">
                Read More Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support the Movement */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Support the Movement
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Join us in our mission to empower Indian women through sustainable fashion
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Buy Consciously</h3>
                <p className="text-muted-foreground">
                  Every purchase supports sustainable practices and women-led businesses in our supply chain
                </p>
                <Button asChild>
                  <Link href="/collections">Shop Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Become a Brand Ambassador</h3>
                <p className="text-muted-foreground">
                  Share your She-Sapien journey and inspire others to join the movement
                </p>
                <Button asChild>
                  <Link href="/community/ambassador">Join Us</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Join Our Events</h3>
                <p className="text-muted-foreground">
                  Participate in styling workshops, leadership meetups, and networking events
                </p>
                <Button asChild>
                  <Link href="/community/events">Explore Events</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sage text-ivory py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Join Our Community</h2>
            <p className="max-w-[700px] md:text-lg">
              Be the first to know about new collections, exclusive offers, and empowering stories
            </p>
            <div className="w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

