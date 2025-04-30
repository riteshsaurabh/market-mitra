import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-playfair">
                  Our Community
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join a network of ambitious women supporting each other's growth and success
                </p>
              </div>
              <p className="text-muted-foreground">
                She-Sapien is more than just clothing—it's a community of like-minded women who believe in the power of
                confidence, sustainability, and supporting each other. Through events, workshops, and shared stories,
                we're building connections that extend beyond fashion.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#events">Upcoming Events</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#stories">Read Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="She-Sapien community event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 md:py-24 lg:py-32 scroll-mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Upcoming Events
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Join styling workshops, leadership meetups, and networking events
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Styling Workshop"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute left-2 top-2 bg-blush text-charcoal" variant="secondary">
                    In-Person
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 15, 2025 • 6:00 PM</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>She-Sapien Studio, Mumbai</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Office to Evening: Styling Workshop</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn how to transition your workwear from day to evening with simple styling tricks.
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/community/events/styling-workshop">Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Leadership Meetup"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute left-2 top-2 bg-blush text-charcoal" variant="secondary">
                    Virtual
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 22, 2025 • 11:00 AM</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Zoom Webinar</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Women in Leadership: Panel Discussion</h3>
                  <p className="mt-2 text-muted-foreground">
                    Join our panel of successful women leaders as they share their journeys and insights.
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/community/events/leadership-panel">Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="She-Sapien Networking Brunch"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute left-2 top-2 bg-blush text-charcoal" variant="secondary">
                    In-Person
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>July 8, 2025 • 10:00 AM</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>The Green Café, Delhi</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium">She-Sapien Networking Brunch</h3>
                  <p className="mt-2 text-muted-foreground">
                    Connect with like-minded professionals over brunch in a relaxed setting.
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/community/events/networking-brunch">Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/community/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Empowerment Stories */}
      <section id="stories" className="bg-muted/50 py-16 md:py-24 lg:py-32 scroll-mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Empowerment Stories
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Real women sharing their workplace journeys and how confidence in their appearance transformed their
              professional lives
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Priya Sharma"
              role="Marketing Director"
              quote="She-Sapien's clothes have become my workwear staples. The fit is perfect for Indian women, and I love how I can transition from day meetings to evening events without changing."
              image="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Anjali Mehta"
              role="Financial Analyst"
              quote="As someone who struggled to find professional wear that fits well, She-Sapien has been a game-changer. The sustainable aspect makes me feel good about my purchases too."
              image="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Deepika Patel"
              role="Tech Entrepreneur"
              quote="The confidence I feel in She-Sapien clothing has genuinely impacted how I present myself in the boardroom. Quality, comfort, and style all in one."
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/community/stories">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="She-Sapien brand ambassadors"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-playfair">
                  Become a Brand Ambassador
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Share your She-Sapien journey and inspire others to join the movement
                </p>
              </div>
              <p className="text-muted-foreground">
                Our brand ambassadors are passionate advocates who believe in our mission of empowering women through
                sustainable fashion. As an ambassador, you'll get early access to new collections, exclusive events, and
                the opportunity to share your unique style with our community.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Benefits Include:</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Early access to new collections</li>
                  <li>Exclusive ambassador discounts</li>
                  <li>Invitations to private events</li>
                  <li>Feature on our social media and website</li>
                  <li>Networking with like-minded professionals</li>
                </ul>
              </div>
              <Button size="lg" className="w-fit" asChild>
                <Link href="/community/ambassador">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="bg-sage text-ivory py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-playfair">
              Join Our Community
            </h2>
            <p className="max-w-[700px] md:text-lg">
              Connect with like-minded women who are redefining workwear and workplace culture
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/community/join">Join Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/community/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

