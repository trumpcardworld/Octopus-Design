import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "Tech Startup Branding",
    category: "Identity",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete brand identity for innovative tech startup including logo, guidelines, and collateral.",
  },
  {
    title: "Fashion Exhibition Booth",
    category: "Exhibition",
    image: "/placeholder.svg?height=300&width=400",
    description: "Award-winning exhibition booth design for international fashion trade show.",
  },
  {
    title: "Luxury Product Packaging",
    category: "Packaging",
    image: "/placeholder.svg?height=300&width=400",
    description: "Premium packaging design for luxury cosmetics brand with sustainable materials.",
  },
  {
    title: "Corporate Annual Report",
    category: "Brochure",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive annual report design with infographics and data visualization.",
  },
  {
    title: "Restaurant Marketing Campaign",
    category: "Advertisement",
    image: "/placeholder.svg?height=300&width=400",
    description: "Multi-channel advertising campaign including print, digital, and outdoor media.",
  },
  {
    title: "Corporate Website Redesign",
    category: "Website",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern, responsive website redesign with improved user experience and conversion rates.",
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their design goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
