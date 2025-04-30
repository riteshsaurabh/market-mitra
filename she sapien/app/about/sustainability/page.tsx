import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Our Sustainability Journey</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          How we're working to create fashion that's better for people and the planet
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold font-playfair">Our Approach</h2>
          <p className="text-muted-foreground">
            At She-Sapien, sustainability isn't an afterthought—it's built into our business model from the ground up. We
            believe that fashion can be both beautiful and responsible, and we're committed to proving it with every
            piece we create.
          </p>
          <p className="text-muted-foreground">
            Our approach to sustainability encompasses three key areas: materials, production, and people. We carefully
            select eco-friendly fabrics, work with ethical manufacturing partners, and ensure fair treatment for
            everyone involved in creating our clothes.
          </p>
          <p className="text-muted-foreground">
            We're not perfect, and we know there's always room for improvement. That's why we're transparent about our
            practices and continuously working to reduce our environmental footprint while maximizing our positive
            social impact.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Sustainable fashion production"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold font-playfair text-center">Our Sustainability Pillars</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="rounded-full bg-sage/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-medium font-playfair">Sustainable Materials</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">100% organic or sustainably sourced fabrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">OEKO-TEX® certified dyes and finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Recycled and biodegradable packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Zero plastic policy throughout our supply chain</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="rounded-full bg-sage/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
                  <path d="M2 22h20"></path>
                  <path d="M6.87 2h10.26L22 22H2L6.87 2Z"></path>
                  <path d="M15.66 10 17 22"></path>
                  <path d="m7 10 4 12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium font-playfair">Ethical Production</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Small-batch production to minimize waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Water-conserving manufacturing processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Carbon-offset shipping and logistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Repair program to extend garment life</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="rounded-full bg-sage/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium font-playfair">People First</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fair wages and safe working conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">80% women-led supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Skills training and education programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Community support initiatives in production regions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16 bg-muted/30 rounded-xl p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold font-playfair">Our Impact</h2>
            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span>Water Saved</span>
                  <span className="font-medium">1.2 million liters</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[75%] rounded-full bg-sage"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span>CO₂ Emissions Reduced</span>
                  <span className="font-medium">45 tonnes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[60%] rounded-full bg-sage"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span>Women Employed</span>
                  <span className="font-medium">120+</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[80%] rounded-full bg-sage"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span>Plastic Eliminated</span>
                  <span className="font-medium">3.5 tonnes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[90%] rounded-full bg-sage"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="She-Sapien sustainability impact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold font-playfair">Join Our Sustainability Journey</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          We believe that small choices can make a big difference. By choosing She-Sapien, you're not just buying
          clothes—you're voting for a more sustainable and equitable fashion industry.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/collections">Shop Sustainable Fashion</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about/materials">Learn About Our Materials</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

