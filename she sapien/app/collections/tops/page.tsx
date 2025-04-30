import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

export default function TopsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Tops</h1>
          <p className="text-muted-foreground">Elegant and comfortable tops for the modern workplace</p>
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

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          name="The Essential Shirt"
          price="₹2,499"
          image="/placeholder.svg?height=400&width=300"
          category="Tops"
          badge="Bestseller"
        />
        <ProductCard name="Silk Blouse" price="₹2,999" image="/placeholder.svg?height=400&width=300" category="Tops" />
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
        <ProductCard
          name="Wrap Blouse"
          price="₹2,699"
          image="/placeholder.svg?height=400&width=300"
          category="Tops"
          badge="New Arrival"
        />
        <ProductCard name="Peplum Top" price="₹2,899" image="/placeholder.svg?height=400&width=300" category="Tops" />
        <ProductCard
          name="Mandarin Collar Shirt"
          price="₹2,599"
          image="/placeholder.svg?height=400&width=300"
          category="Tops"
        />
        <ProductCard
          name="Boat Neck Blouse"
          price="₹2,399"
          image="/placeholder.svg?height=400&width=300"
          category="Tops"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More
        </Button>
      </div>
    </div>
  )
}

