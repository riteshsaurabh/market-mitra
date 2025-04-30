import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, ShoppingBag } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  image: string
  category: string
  badge?: string
}

export default function ProductCard({ name, price, image, category, badge }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/products/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={300}
              height={400}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        {badge && (
          <Badge className="absolute left-2 top-2 bg-blush text-charcoal" variant="secondary">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">{category}</p>
          <h3 className="font-medium">
            <Link href={`/products/${name.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
              {name}
            </Link>
          </h3>
          <p className="font-medium">{price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button size="sm" className="w-full gap-1 bg-sage text-ivory hover:bg-sage/90">
          <ShoppingBag className="h-4 w-4" />
          Add to Bag
        </Button>
      </CardFooter>
    </Card>
  )
}

