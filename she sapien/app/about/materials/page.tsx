import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MaterialsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Our Materials</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Sustainable fabrics that are kind to the environment and your skin
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="Organic Cotton" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium font-playfair">Organic Cotton</h3>
              <p className="mt-2 text-muted-foreground">
                Our organic cotton is grown without harmful pesticides or synthetic fertilizers, using methods that have
                less impact on the environment.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Breathability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-sage"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Durability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-sage"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sustainability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-sage"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="Tencel" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium font-playfair">Tencel</h3>
              <p className="mt-2 text-muted-foreground">
                Made from sustainably sourced wood pulp, Tencel is produced using an environmentally responsible
                closed-loop process that recycles water and solvents.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Breathability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-sage"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Durability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[80%] rounded-full bg-sage"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sustainability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[100%] rounded-full bg-sage"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="Linen" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium font-playfair">Linen</h3>
              <p className="mt-2 text-muted-foreground">
                Made from the flax plant, linen requires minimal water and pesticides to grow, making it one of the most
                environmentally friendly fabrics available.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Breathability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[100%] rounded-full bg-sage"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Durability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-sage"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sustainability</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-sage"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold font-playfair">Our Commitment to Sustainability</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-muted-foreground">
              At She-Sapien, sustainability isn't just a buzzword—it's woven into every fiber of our business. We carefully
              select materials that minimize environmental impact while maximizing comfort and durability.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our fabrics are sourced from certified suppliers who adhere to strict environmental and ethical standards.
              We regularly audit our supply chain to ensure compliance with these standards and are constantly seeking
              ways to improve our sustainability practices.
            </p>
            <p className="mt-4 text-muted-foreground">
              By choosing She-Sapien, you're not just investing in quality clothing—you're supporting a more sustainable
              fashion industry.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/about/sustainability">Learn More About Our Sustainability Efforts</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Sustainable fabric production"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

