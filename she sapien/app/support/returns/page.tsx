import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Return Policy</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Easy, hassle-free returns to ensure your complete satisfaction
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-playfair">Our Promise</h2>
            <p className="text-muted-foreground">
              We want you to love your She-Sapien pieces. If you're not completely satisfied with your purchase, we're here
              to help with an easy return process.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium">Return Window</h3>
            <p className="text-muted-foreground">
              You have 15 days from the date of delivery to initiate a return. Items must be unworn, unwashed, and with
              all original tags attached.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium">Exchange Options</h3>
            <p className="text-muted-foreground">
              You can choose to exchange your item for a different size or color, or receive a full refund to your
              original payment method.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium">Return Shipping</h3>
            <p className="text-muted-foreground">
              Returns are free for orders above ₹1,999. For orders below this amount, a shipping fee of ₹199 will be
              deducted from your refund.
            </p>
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium font-playfair mb-4">How to Return</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-sage flex items-center justify-center text-ivory font-medium text-sm flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Log in to your account</p>
                  <p className="text-sm text-muted-foreground">
                    Go to "My Orders" and select the order containing the item you wish to return.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-sage flex items-center justify-center text-ivory font-medium text-sm flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Select items to return</p>
                  <p className="text-sm text-muted-foreground">
                    Choose the items you want to return and select a reason for the return.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-sage flex items-center justify-center text-ivory font-medium text-sm flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Print return label</p>
                  <p className="text-sm text-muted-foreground">Download and print the prepaid return shipping label.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-sage flex items-center justify-center text-ivory font-medium text-sm flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-medium">Package and ship</p>
                  <p className="text-sm text-muted-foreground">
                    Pack the items securely in the original packaging and drop off at your nearest courier partner
                    location.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-sage flex items-center justify-center text-ivory font-medium text-sm flex-shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <p className="font-medium">Track your return</p>
                  <p className="text-sm text-muted-foreground">
                    You can track the status of your return in the "My Returns" section of your account.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-6">
              <Button className="w-full" asChild>
                <Link href="/support/contact">Need Help? Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold font-playfair">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-6 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long will it take to process my return?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Once we receive your return, it typically takes 3-5 business days to process. Refunds may take an
                additional 5-7 business days to appear in your account, depending on your bank or payment provider.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I return sale items?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes, sale items can be returned within the standard 15-day return window. However, items marked as
                "Final Sale" cannot be returned or exchanged.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What if my item is defective?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                If you receive a defective item, please contact our customer service team within 48 hours of delivery.
                We'll arrange for a free return and replacement or refund, depending on your preference.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I exchange for a different style?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes, you can exchange your item for a different style. If there's a price difference, we'll either
                charge or refund the difference accordingly.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What if I don't have the original packaging?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                While we prefer returns in the original packaging, we understand that it's not always possible. Please
                ensure the items are securely packaged to prevent damage during transit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-16 bg-muted/30 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold font-playfair">Need More Help?</h2>
          <p className="mt-2 text-muted-foreground">
            Our customer service team is available Monday through Friday, 10am to 6pm IST, to assist with any questions
            or concerns about returns.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/support/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/support">View All FAQs</Link>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          <HelpCircle className="h-24 w-24 text-sage/20" />
        </div>
      </div>
    </div>
  )
}

