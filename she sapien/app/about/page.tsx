import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-playfair">Our Story</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We exist to power the confidence of the modern Indian woman – through fashion that fits her life,
                  values, and ambition.
                </p>
              </div>
              <p className="text-muted-foreground">
                She Sapien was born from a simple observation: the frustration of seeing women wear the same 5 shirts to
                work. Our founder, Anjali Mehta, experienced firsthand the challenge of finding officewear that was both
                professional and comfortable for the Indian climate and body type.
              </p>
              <p className="text-muted-foreground">
                After years in corporate leadership roles, Anjali decided to create the solution herself – a brand built
                for ambition, from ambition. Today, She Sapien is leading the way in sustainable, tailored officewear
                designed specifically for Indian women.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto">
              <Image src="/placeholder.svg?height=600&width=600" alt="She Sapien founder" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">Our Values</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              The principles that guide everything we do at She Sapien
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-4">
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
                    className="h-8 w-8 text-sage"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-playfair">Empowerment</h3>
                <p className="text-muted-foreground">
                  We believe in the power of clothing to transform how women feel and perform in the workplace
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-4">
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M14.31 8 20.05 17.94"></path>
                    <path d="m9.69 8-2.07 3.59"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to ethical practices and materials that minimize our environmental impact
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-4">
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
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Confidence</h3>
                <p className="text-muted-foreground">
                  We design clothes that help women feel their best and most confident selves
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-sage/10 p-4">
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
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                    <path d="M16 16h5v5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Comfort</h3>
                <p className="text-muted-foreground">
                  We never compromise on comfort, creating pieces that work as hard as the women who wear them
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="bg-muted/50 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Why We're Different
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              She Sapien is reimagining officewear for the modern Indian woman
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Designed for Indian Body Types</h3>
              <p className="text-muted-foreground">
                Our designs are created specifically for Indian body proportions, not adapted from Western sizing. We've
                conducted extensive research to ensure our clothes fit perfectly.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Sustainable from Stitch to Ship</h3>
              <p className="text-muted-foreground">
                We use organic and sustainable fabrics, minimize waste in our production process, and use eco-friendly
                packaging. Our commitment to sustainability is in our DNA.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Women-Led Supply Chain</h3>
              <p className="text-muted-foreground">
                80% of our supply chain is women-led, from fabric sourcing to manufacturing. We believe in creating
                opportunities for women at every level of our business.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Community-First Brand</h3>
              <p className="text-muted-foreground">
                We host regular styling sessions, leadership meetups, and create spaces for women to connect and grow
                together. She Sapien is more than clothing—it's a community.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Ethical Manufacturing</h3>
              <p className="text-muted-foreground">
                We ensure fair wages and safe working conditions for everyone involved in making our clothes. We
                regularly audit our facilities and maintain transparency in our practices.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Thoughtful Design</h3>
              <p className="text-muted-foreground">
                Every piece is designed with purpose—from breathable fabrics suited for Indian weather to functional
                details that make your workday easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">Meet Our Team</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">The passionate individuals behind She Sapien</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Anjali Mehta - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Anjali Mehta</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Priya Sharma - Head of Design"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Priya Sharma</h3>
              <p className="text-sm text-muted-foreground">Head of Design</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Neha Patel - Sustainability Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Neha Patel</h3>
              <p className="text-sm text-muted-foreground">Sustainability Director</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Vikram Singh - Operations Lead"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Vikram Singh</h3>
              <p className="text-sm text-muted-foreground">Operations Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage text-ivory py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Join Our Movement
            </h2>
            <p className="max-w-[700px] md:text-lg">
              Be part of the change in how women dress and feel in the workplace
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/collections">Shop the Collection</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

