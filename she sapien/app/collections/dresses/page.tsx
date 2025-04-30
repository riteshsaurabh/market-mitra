import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

export default function DressesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Dresses</h1>
          <p className="text-muted-foreground">Elegant and versatile dresses for the modern workplace</p>
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
          name="Classic Shift Dress"
          price="₹4,199"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
        />
        <ProductCard
          name="Wrap Dress"
          price="₹4,599"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
        />
        <ProductCard
          name="A-Line Dress"
          price="₹4,399"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
          badge="Bestseller"
        />
        <ProductCard
          name="Sheath Dress"
          price="₹4,799"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
        />
        <ProductCard
          name="Shirt Dress"
          price="₹3,999"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
          badge="New Arrival"
        />
        <ProductCard
          name="Fit and Flare Dress"
          price="₹4,499"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
        />
        <ProductCard
          name="Midi Dress"
          price="₹4,899"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
        />
        <ProductCard
          name="Belted Dress"
          price="₹4,299"
          image="/placeholder.svg?height=400&width=300"
          category="Dresses"
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

