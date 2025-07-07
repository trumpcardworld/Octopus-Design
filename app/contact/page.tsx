"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Contact us today for a free consultation and
              quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-teal-600" />
                    Send us a message
                  </CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Interested In *</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="">Select a service</option>
                          <option value="identity">Identity Design</option>
                          <option value="brochure">Brochure Design</option>
                          <option value="packaging">Packaging Design</option>
                          <option value="advertisement">Advertisement</option>
                          <option value="calendar">Calendar Design</option>
                          <option value="exhibition">Exhibition Services</option>
                          <option value="photography">Photography</option>
                          <option value="website">Website Design</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Project Budget</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under ₹10,000</option>
                          <option value="10k-25k">₹10,000 - ₹25,000</option>
                          <option value="25k-50k">₹25,000 - ₹50,000</option>
                          <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                          <option value="over-100k">Over ₹1,00,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="normal">Normal (3-4 weeks)</option>
                        <option value="flexible">Flexible (1-2 months)</option>
                        <option value="planning">Just planning</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project requirements, goals, and any specific details you'd like us to know..."
                        required
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Our Office</p>
                      <p className="text-gray-600">
                        123 Design Street
                        <br />
                        Creative District
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-teal-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-teal-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@octopusdesigns.com</p>
                      <p className="text-gray-600">projects@octopusdesigns.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      5+ Years of Experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      500+ Successful Projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      24/7 Customer Support
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      Competitive Pricing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      Quick Turnaround Time
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      100% Satisfaction Guarantee
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-teal-50 border-teal-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Need Immediate Help?</h3>
                  <p className="text-teal-700 mb-4">Call us directly for urgent projects or quick questions.</p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: +91 98765 43210
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Studio</h2>
            <p className="text-gray-600">
              Come visit us at our creative studio in the heart of Mumbai's design district.
            </p>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>
    </main>
  )
}
