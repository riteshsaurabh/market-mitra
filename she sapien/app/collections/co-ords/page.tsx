import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

export default function CoordsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Co-ords</h1>
          <p className="text-muted-foreground">Matching sets for effortless style in the workplace</p>
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
          name="Linen Shirt & Trouser Set"
          price="₹5,999"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
        />
        <ProductCard
          name="Blazer & Skirt Set"
          price="₹6,499"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
          badge="Bestseller"
        />
        <ProductCard
          name="Top & Culottes Set"
          price="₹5,799"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
        />
        <ProductCard
          name="Shirt & Pencil Skirt Set"
          price="₹5,499"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
        />
        <ProductCard
          name="Blouse & Wide Leg Pants Set"
          price="₹6,299"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
          badge="New Arrival"
        />
        <ProductCard
          name="Wrap Top & Trouser Set"
          price="₹5,899"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
        />
        <ProductCard
          name="Sleeveless Top & A-Line Skirt Set"
          price="₹5,699"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
        />
        <ProductCard
          name="Button-Down & Straight Leg Pants Set"
          price="₹6,199"
          image="/placeholder.svg?height=400&width=300"
          category="Co-ords"
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

