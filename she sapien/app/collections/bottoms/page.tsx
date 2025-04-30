import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

export default function BottomsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Bottoms</h1>
          <p className="text-muted-foreground">Stylish and comfortable bottoms for the modern workplace</p>
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
          name="Tailored Trousers"
          price="₹3,299"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
          badge="New Arrival"
        />
        <ProductCard
          name="Wide Leg Pants"
          price="₹3,499"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
        />
        <ProductCard
          name="Pencil Skirt"
          price="₹2,799"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
        />
        <ProductCard name="Culottes" price="₹2,999" image="/placeholder.svg?height=400&width=300" category="Bottoms" />
        <ProductCard
          name="Straight Leg Pants"
          price="₹3,199"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
          badge="Bestseller"
        />
        <ProductCard
          name="A-Line Skirt"
          price="₹2,699"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
        />
        <ProductCard
          name="Cigarette Pants"
          price="₹3,399"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
        />
        <ProductCard
          name="Pleated Skirt"
          price="₹2,899"
          image="/placeholder.svg?height=400&width=300"
          category="Bottoms"
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

