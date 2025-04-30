import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Minus, Plus, Share2, ShoppingBag } from "lucide-react"
import ProductCard from "@/components/product-card"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This would normally fetch product data based on the slug
  const product = {
    name: "The Essential Shirt",
    price: "₹2,499",
    description:
      "A versatile, tailored shirt designed for the modern Indian woman. Made from sustainable organic cotton with a hint of stretch for all-day comfort.",
    features: [
      "100% organic cotton",
      "Tailored fit for Indian body types",
      "Breathable fabric",
      "Easy care: machine washable",
      "Sustainably made in India",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Blush Pink"],
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
    ],
    category: "Tops",
    badge: "Bestseller",
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-4 grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blush text-charcoal">
                {product.badge}
              </Badge>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
            <h1 className="text-3xl font-bold font-playfair">{product.name}</h1>
            <p className="text-2xl font-medium">{product.price}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-medium">Color</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="rounded-full border-2 px-4">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="min-w-[3rem]">
                    {size}
                  </Button>
                ))}
              </div>
              <Link href="#size-guide" className="text-sm text-primary hover:underline">
                Size Guide
              </Link>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Quantity</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">1</span>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1 gap-2 bg-sage text-ivory hover:bg-sage/90">
                <ShoppingBag className="h-5 w-5" />
                Add to Bag
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Heart className="h-5 w-5" />
                Wishlist
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sustainability">
              <AccordionTrigger>Sustainability</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  This product is made from 100% organic cotton, sourced from sustainable farms in India. Our
                  manufacturing process uses 80% less water than conventional methods, and we ensure fair wages for all
                  workers in our supply chain.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Free shipping on orders above ₹1,999. Delivery within 3-5 business days. Easy returns within 15 days
                  of delivery. Read our full return policy for more details.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div id="size-guide" className="mt-16 scroll-m-20">
        <h2 className="text-2xl font-bold font-playfair">Size Guide</h2>
        <Tabs defaultValue="measurements" className="mt-4">
          <TabsList>
            <TabsTrigger value="measurements">Measurements</TabsTrigger>
            <TabsTrigger value="fit-guide">Fit Guide</TabsTrigger>
          </TabsList>
          <TabsContent value="measurements" className="mt-4">
            <div className="rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-4 text-left font-medium">Size</th>
                      <th className="p-4 text-left font-medium">Bust (in)</th>
                      <th className="p-4 text-left font-medium">Waist (in)</th>
                      <th className="p-4 text-left font-medium">Hip (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">XS</td>
                      <td className="p-4">32-33</td>
                      <td className="p-4">24-25</td>
                      <td className="p-4">34-35</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">S</td>
                      <td className="p-4">34-35</td>
                      <td className="p-4">26-27</td>
                      <td className="p-4">36-37</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">M</td>
                      <td className="p-4">36-37</td>
                      <td className="p-4">28-29</td>
                      <td className="p-4">38-39</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">L</td>
                      <td className="p-4">38-40</td>
                      <td className="p-4">30-32</td>
                      <td className="p-4">40-42</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">XL</td>
                      <td className="p-4">41-43</td>
                      <td className="p-4">33-35</td>
                      <td className="p-4">43-45</td>
                    </tr>
                    <tr>
                      <td className="p-4">XXL</td>
                      <td className="p-4">44-46</td>
                      <td className="p-4">36-38</td>
                      <td className="p-4">46-48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="fit-guide" className="mt-4">
            <div className="rounded-lg border p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium">How to Measure</h3>
                  <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Bust: Measure around the fullest part of your bust</li>
                    <li>Waist: Measure around your natural waistline</li>
                    <li>Hip: Measure around the fullest part of your hips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Fit Notes</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our shirts are designed with a slightly relaxed fit through the body for comfort, while maintaining
                    a tailored look. If you're between sizes, we recommend sizing down for a more fitted look or sizing
                    up for a more relaxed fit.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold font-playfair">You May Also Like</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard
            name="Silk Blouse"
            price="₹2,999"
            image="/placeholder.svg?height=400&width=300"
            category="Tops"
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
      </div>
    </div>
  )
}

