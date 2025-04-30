import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Truck } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Shipping Information</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Everything you need to know about getting your She-Sapien pieces delivered to you
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-playfair">Delivery Options</h2>
            <p className="text-muted-foreground">
              We offer several shipping options to ensure your She-Sapien pieces reach you in a timeframe that suits your
              needs.
            </p>
          </div>

          <Card className="border-sage/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Standard Shipping</h3>
                  <p className="text-sm text-muted-foreground">3-5 business days</p>
                </div>
                <p className="font-medium">₹199</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Free for orders above ₹1,999</p>
            </CardContent>
          </Card>

          <Card className="border-sage/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Express Shipping</h3>
                  <p className="text-sm text-muted-foreground">1-2 business days</p>
                </div>
                <p className="font-medium">₹399</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Available for select pin codes in major cities</p>
            </CardContent>
          </Card>

          <Card className="border-sage/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Same-Day Delivery</h3>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
                <p className="font-medium">₹599</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Available only in Mumbai, Delhi, and Bangalore for orders placed before 12 PM
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-playfair">Shipping Policies</h2>
            <p className="text-muted-foreground">
              We're committed to making your shopping experience as smooth as possible, from click to delivery.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Order Processing</p>
                <p className="text-sm text-muted-foreground">
                  Orders are processed within 24 hours of being placed, excluding weekends and holidays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Tracking</p>
                <p className="text-sm text-muted-foreground">
                  You'll receive a tracking number via email and SMS once your order ships, allowing you to monitor its
                  journey to you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Delivery Areas</p>
                <p className="text-sm text-muted-foreground">
                  We currently ship to all major cities and towns across India. International shipping is available to
                  select countries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Eco-Friendly Packaging</p>
                <p className="text-sm text-muted-foreground">
                  All orders are shipped in recyclable or biodegradable packaging as part of our commitment to
                  sustainability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Carbon-Neutral Shipping</p>
                <p className="text-sm text-muted-foreground">
                  We offset the carbon emissions from all our shipments through verified environmental projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold font-playfair">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-6 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                You'll receive a tracking number via email and SMS once your order ships. You can also track your order
                by logging into your account and visiting the "My Orders" section.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I'm not available to receive my delivery?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                If you're not available to receive your delivery, our courier partner will attempt delivery up to three
                times. After the third attempt, the package will be returned to our warehouse, and we'll contact you to
                arrange redelivery.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes, we ship to select countries internationally. International shipping rates and delivery times vary
                by location. Please note that customers are responsible for any customs duties or taxes that may apply.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I change my shipping address after placing an order?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                If your order hasn't been processed yet, you can contact our customer service team to update your
                shipping address. Once an order has been processed or shipped, we cannot change the delivery address.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What if my order is delayed?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                While we strive to deliver all orders within the estimated timeframe, delays can occasionally occur due
                to factors beyond our control. If your order is significantly delayed, please contact our customer
                service team for assistance.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-16 bg-muted/30 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold font-playfair">Check Delivery Availability</h2>
          <p className="mt-2 text-muted-foreground">
            Enter your PIN code to check delivery options and estimated delivery times for your location.
          </p>
          <div className="mt-6 flex max-w-md">
            <input
              type="text"
              placeholder="Enter PIN code"
              className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="rounded-l-none">Check</Button>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          <Truck className="h-24 w-24 text-sage/20" />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold font-playfair">Need More Help?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Our customer service team is available to assist with any questions or concerns about shipping and delivery.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/support/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/support">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

