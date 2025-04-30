"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      })
      setIsSubmitting(false)
      // Reset form
      e.currentTarget.reset()
    }, 1500)
  }
  
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">Contact Us</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          We're here to help with any questions, concerns, or feedback you may have
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold font-playfair">Get in Touch</h2>
          <p className="mt-2 text-muted-foreground">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="last-name" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input id="phone" type="tel" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="order">Order Inquiry</SelectItem>
                  <SelectItem value="product">Product Information</SelectItem>
                  <SelectItem value="returns">Returns & Exchanges</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" rows={5} required />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-playfair">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">
              Our customer service team is available Monday through Friday, 10am to 6pm IST.
            </p>
            
            <div className="mt-6 space-y-4">
              <Card>
                <CardContent className="flex items-start gap-4 p-4">
                  <Phone className="h-5 w-5 text-sage mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start gap-4 p-4">
                  <Mail className="h-5 w-5 text-sage mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">support@shesapien.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start gap-4 p-4">
                  <MessageSquare className="h-5 w-5 text-sage mt-0.5" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-muted-foreground">Available on weekdays, 10am to 6pm IST</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-playfair">Visit Our Store</h2>
            <p className="mt-2 text-muted-foreground">
              Experience She Sapien in person at our flagship store in Mumbai.
            </p>
            
            <Card className="mt-6">
              <CardContent className="p-4">
                <p className="font-medium">She Sapien Flagship Store</p>
                <p className="text-muted-foreground">123 Fashion Street, Bandra West</p>
                <p className="text-muted-foreground">Mumbai, Maharashtra 400050</p>
                <p className="mt-2 text-muted-foreground">
                  <span className="font-medium">Hours:</span> Monday to Saturday, 11am to 8pm
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-playfair">Quick Links</h2>
            <div className="mt-4 space-y-2">
              <Button variant="link" className="p-0 h-auto text-sage" asChild>
                <Link href="/support">FAQs</Link>
              </Button>
              <br />
              <Button variant="link" className="p-0 h-auto text-sage" asChild>
                <Link href="/support/returns">Return Policy</Link>
              </Button>
              <br />
              <Button variant="link" className="p-0 h-auto text-sage" asChild>
                <Link href="/support/shipping">Shipping Information</Link>
              </Button>
              <br />
              <Button variant="link" className="p-0 h-auto text-sage" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

