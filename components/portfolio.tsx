import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Orinate Print Tech Pvt. Ltd.",
    category: "Exhibition",
    image: "/exhibition-images/1.jpg",
  },
  {
    title: "Alteem",
    category: "Exhibition",
    image: "/exhibition-images/2.jpg",
  },
  {
    title: "Saumya Technocrates",
    category: "Exhibition",
    image: "/exhibition-images/3.jpg",
  },
  {
    title: "ACPL",
    category: "Designing",
    image: "/design-images/4.jpg",
  },
  {
    title: "Apex Engineers",
    category: "Designing",
    image: "/design-images/7.jpg",
  },
  {
    title: "Solace Engineers Pvt Ltd",
    category: "Designing",
    image: "/design-images/16.jpg",
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
                <Link href="/portfolio" className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-[#c7d9e2] text-[#106484]">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
