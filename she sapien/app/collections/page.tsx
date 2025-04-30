import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"

export default function CollectionsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Collections</h1>
          <p className="text-muted-foreground">Discover our range of sustainable officewear</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="bestselling">Bestselling</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="mb-8 flex w-full flex-wrap justify-start gap-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tops">Tops</TabsTrigger>
          <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
          <TabsTrigger value="dresses">Dresses</TabsTrigger>
          <TabsTrigger value="co-ords">Co-ords</TabsTrigger>
          <TabsTrigger value="blazers">Blazers</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          <ProductCard
            name="Silk Blouse"
            price="₹2,999"
            image="/placeholder.svg?height=400&width=300"
            category="Tops"
          />
          <ProductCard
            name="Wide Leg Pants"
            price="₹3,499"
            image="/placeholder.svg?height=400&width=300"
            category="Bottoms"
          />
          <ProductCard
            name="Wrap Dress"
            price="₹4,599"
            image="/placeholder.svg?height=400&width=300"
            category="Dresses"
          />
          <ProductCard
            name="Linen Shirt & Trouser Set"
            price="₹5,999"
            image="/placeholder.svg?height=400&width=300"
            category="Co-ords"
          />
        </TabsContent>
        <TabsContent value="tops" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard
            name="The Essential Shirt"
            price="₹2,499"
            image="/placeholder.svg?height=400&width=300"
            category="Tops"
            badge="Bestseller"
          />
          <ProductCard
            name="Silk Blouse"
            price="₹2,999"
            image="/placeholder.svg?height=400&width=300"
            category="Tops"
          />
          <ProductCard
            name="Button-Down Shirt"
            price="₹2,799"
            image="/placeholder.svg?height=400&width=300"
            category="Tops"
          />
          <ProductCard
            name="Sleeveless Top"
            price="₹1,999"
            image="/placeholder.svg?height=400&width=300"
            category="Tops"
          />
        </TabsContent>
        {/* Other tabs content would be similar */}
      </Tabs>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More
        </Button>
      </div>
    </div>
  )
}

