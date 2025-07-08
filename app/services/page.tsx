import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, FileText, Package, Megaphone, Calendar, Building, Camera, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Identity Design",
    description:
      "Create memorable brand identities that reflect your company's values and vision with professional logo design and comprehensive brand guidelines.",
    features: ["Logo Design", "Brand Guidelines", "Color Schemes", "Typography", "Business Cards", "Letterheads"],
    price: "Starting from ₹15,000",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: FileText,
    title: "Brochure Design",
    description:
      "Professional brochures that communicate your message effectively with stunning layouts and compelling content organization.",
    features: [
      "Tri-fold Brochures",
      "Bi-fold Designs",
      "Digital Brochures",
      "Print Ready Files",
      "Content Layout",
      "Image Selection",
    ],
    price: "Starting from ₹8,000",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Eye-catching packaging solutions that make your products stand out on shelves and create memorable unboxing experiences.",
    features: [
      "Product Packaging",
      "Label Design",
      "3D Mockups",
      "Sustainable Options",
      "Die-cut Designs",
      "Material Selection",
    ],
    price: "Starting from ₹12,000",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Megaphone,
    title: "Advertisement Design",
    description: "Compelling advertising materials that drive engagement and conversions across all media channels.",
    features: [
      "Print Ads",
      "Digital Banners",
      "Social Media Ads",
      "Outdoor Advertising",
      "Campaign Strategy",
      "A/B Testing",
    ],
    price: "Starting from ₹5,000",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Calendar,
    title: "Calendar Design",
    description:
      "Custom calendars that keep your brand visible throughout the year with beautiful layouts and professional photography.",
    features: [
      "Wall Calendars",
      "Desk Calendars",
      "Custom Layouts",
      "Photo Integration",
      "Holiday Marking",
      "Brand Integration",
    ],
    price: "Starting from ₹10,000",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Building,
    title: "Exhibition Services",
    description:
      "Complete exhibition solutions from concept to execution for maximum impact at trade shows and events.",
    features: [
      "Booth Design",
      "Display Systems",
      "Interactive Elements",
      "Setup Services",
      "3D Visualization",
      "Project Management",
    ],
    price: "Starting from ₹1,00,000",
    color: "bg-teal-100 text-[#17688C]",
  },
  {
    icon: Camera,
    title: "Photography Services",
    description: "Professional photography services to capture your products and events with stunning visual quality.",
    features: [
      "Product Photography",
      "Event Coverage",
      "Corporate Portraits",
      "Commercial Shoots",
      "Photo Editing",
      "Digital Delivery",
    ],
    price: "Starting from ₹8,000",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, responsive websites that deliver exceptional user experiences and drive business growth.",
    features: [
      "Responsive Design",
      "E-commerce",
      "CMS Integration",
      "SEO Optimization",
      "Performance Optimization",
      "Maintenance",
    ],
    price: "Starting from ₹25,000",
    color: "bg-indigo-100 text-indigo-600",
  },
]

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "We start with a detailed consultation to understand your needs, goals, and vision for the project.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Our team develops a comprehensive strategy and project plan tailored to your specific requirements.",
  },
  {
    step: "03",
    title: "Design & Development",
    description: "We create initial concepts and designs, incorporating your feedback throughout the process.",
  },
  {
    step: "04",
    title: "Review & Refinement",
    description: "We refine the designs based on your feedback until we achieve the perfect solution.",
  },
  {
    step: "05",
    title: "Production & Delivery",
    description: "Final production and delivery of your project, ensuring the highest quality standards.",
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design and printing solutions to help your business make a lasting impression and achieve
              your marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[#17688C] border-[#17688C]">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#17688C]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#17688C] hover:bg-teal-700">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure every project is delivered on time, within budget, and exceeds your
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#17688C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#17688C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#17688C] hover:bg-gray-100">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#17688C] bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
