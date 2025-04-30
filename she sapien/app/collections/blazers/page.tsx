import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

export default function BlazersPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Blazers</h1>
          <p className="text-muted-foreground">Statement pieces to elevate your professional look</p>
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
          name="Power Blazer"
          price="₹5,499"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
          badge="Editor's Pick"
        />
        <ProductCard
          name="Single-Button Blazer"
          price="₹5,299"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
        />
        <ProductCard
          name="Cropped Blazer"
          price="₹4,999"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
        />
        <ProductCard
          name="Double-Breasted Blazer"
          price="₹5,799"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
          badge="Bestseller"
        />
        <ProductCard
          name="Linen Blend Blazer"
          price="₹5,199"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
          badge="New Arrival"
        />
        <ProductCard
          name="Tailored Fit Blazer"
          price="₹5,599"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
        />
        <ProductCard
          name="Relaxed Fit Blazer"
          price="₹5,399"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
        />
        <ProductCard
          name="Collarless Blazer"
          price="₹4,899"
          image="/placeholder.svg?height=400&width=300"
          category="Blazers"
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

