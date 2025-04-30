import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export default function FounderPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Meet Our Founder</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          The story behind She Sapien and the woman who started it all
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Anjali Mehta - Founder & CEO"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold font-playfair">Anjali Mehta</h2>
          <p className="text-lg text-muted-foreground">Founder & CEO</p>
          <div className="flex items-start gap-2">
            <Quote className="h-8 w-8 text-sage/20 flex-shrink-0 mt-1" />
            <p className="text-muted-foreground italic">
              I started She Sapien because I was tired of seeing women compromise on style, comfort, or sustainability when
              it came to workwear. I believed we deserved better—clothes that fit our bodies, aligned with our values,
              and empowered us to show up confidently in any room.
            </p>
          </div>
          <p className="text-muted-foreground">
            With over 15 years of experience in the corporate world, Anjali intimately understood the challenges
            professional Indian women face when dressing for work. After struggling to find officewear that was both
            comfortable and stylish, she decided to create her own solution.
          </p>
          <p className="text-muted-foreground">
            Drawing on her background in business and passion for sustainable fashion, Anjali launched She Sapien in 2020.
            Her vision was clear: create a brand that empowers women through thoughtfully designed clothing that fits
            Indian body types and supports ethical production practices.
          </p>
          <p className="text-muted-foreground">
            Under Anjali's leadership, She Sapien has grown from a small startup to a respected name in sustainable
            workwear, with a community of thousands of women who share her vision for fashion that serves a purpose.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-muted/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold font-playfair text-center">Anjali's Journey</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="h-12 w-12 rounded-full bg-sage flex items-center justify-center text-ivory font-bold">
              1
            </div>
            <h3 className="text-lg font-medium">Corporate Beginnings</h3>
            <p className="text-muted-foreground">
              Started her career at a multinational consulting firm, where she quickly rose through the ranks while
              struggling to find appropriate workwear.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="h-12 w-12 rounded-full bg-sage flex items-center justify-center text-ivory font-bold">
              2
            </div>
            <h3 className="text-lg font-medium">The Turning Point</h3>
            <p className="text-muted-foreground">
              After a business trip to a sustainable textile factory in 2018, Anjali became passionate about ethical
              fashion and began researching sustainable materials.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="h-12 w-12 rounded-full bg-sage flex items-center justify-center text-ivory font-bold">
              3
            </div>
            <h3 className="text-lg font-medium">She Sapien is Born</h3>
            <p className="text-muted-foreground">
              In 2020, Anjali left her corporate job to launch She Sapien, combining her business acumen with her passion
              for empowering women through sustainable fashion.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold font-playfair">Connect with Anjali</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Anjali regularly speaks at events about women's empowerment, sustainable fashion, and entrepreneurship. She's
          passionate about mentoring women who are looking to start their own businesses.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/community">Join Our Community</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/support/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

