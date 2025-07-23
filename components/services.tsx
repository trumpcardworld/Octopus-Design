import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, FileText, Package, Megaphone, Calendar, Building, Camera, Globe } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Identity Design",
    description: "Create memorable brand identities that reflect your company's values and vision.",
    features: ["Logo Design", "Brand Guidelines", "Color Schemes", "Typography"],
    color: "bg-red-100 text-red-600",
  },
  {
    icon: FileText,
    title: "Brochure Design",
    description: "Professional brochures that communicate your message effectively and beautifully.",
    features: ["Tri-fold Brochures", "Bi-fold Designs", "Digital Brochures", "Print Ready"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Eye-catching packaging solutions that make your products stand out on shelves.",
    features: ["Product Packaging", "Label Design", "3D Mockups", "Sustainable Options"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Megaphone,
    title: "Advertisement",
    description: "Compelling advertising materials that drive engagement and conversions.",
    features: ["Print Ads", "Digital Banners", "Social Media Ads", "Outdoor Advertising"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Calendar,
    title: "Calendar Design",
    description: "Custom calendars that keep your brand visible throughout the year.",
    features: ["Wall Calendars", "Desk Calendars", "Custom Layouts", "Photo Integration"],
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Building,
    title: "Exhibition Services",
    description: "Complete exhibition solutions from concept to execution for maximum impact.",
    features: ["Booth Design", "Display Systems", "Interactive Elements", "Setup Services"],
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services to capture your products and events perfectly.",
    features: ["Product Photography", "Event Coverage", "Corporate Portraits", "Commercial Shoots"],
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, responsive websites that deliver exceptional user experiences.",
    features: ["Responsive Design", "E-commerce", "CMS Integration", "SEO Optimization"],
    color: "bg-indigo-100 text-indigo-600",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design and printing solutions to help your business make a lasting impression
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}






