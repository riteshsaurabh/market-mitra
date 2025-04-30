import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SupportPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Support & FAQs</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Find answers to common questions or reach out to our team for assistance
        </p>
      </div>

      <Tabs defaultValue="faqs" className="mt-8">
        <TabsList className="mb-8 grid w-full grid-cols-2 md:w-auto">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        <TabsContent value="faqs">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold font-playfair">Sizing & Fit</h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I find my size?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We recommend using our detailed size guide available on each product page. Our sizes are designed
                      specifically for Indian body types. If you're between sizes, we generally recommend sizing up for
                      a more comfortable fit.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do your clothes run true to size?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">Yes, our clothes are designed to be true</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

