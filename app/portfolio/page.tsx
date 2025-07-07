"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Calendar, Users, Award, MapPin } from "lucide-react"

// Import JSON data
import exhibitionProjects from "@/data/exhibition-projects.json"
import designingProjects from "@/data/designing-projects.json"

type Project = {
  id: string
  title: string
  category: string
  image: string
  description: string
  client: string
  year: string
  tags: string[]
  details: any
}

const categories = ["All", "Exhibition", "Designing"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [allProjects, setAllProjects] = useState<Project[]>([])

  useEffect(() => {
    // Combine both project arrays
    const combined = [...exhibitionProjects, ...designingProjects]
    setAllProjects(combined)
    setFilteredProjects(combined)
  }, [])

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(allProjects)
    } else if (activeCategory === "Exhibition") {
      setFilteredProjects(exhibitionProjects)
    } else if (activeCategory === "Designing") {
      setFilteredProjects(designingProjects)
    }
  }, [activeCategory, allProjects])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects across exhibition design and creative designing services. See how we've helped
              businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "hover:bg-teal-50 hover:text-teal-600 hover:border-teal-600"
                }`}
              >
                {category}
                <Badge variant="secondary" className="ml-2">
                  {category === "All"
                    ? allProjects.length
                    : category === "Exhibition"
                      ? exhibitionProjects.length
                      : designingProjects.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Try selecting a different category to view projects.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeCategory === "All" ? "All Projects" : `${activeCategory} Projects`}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                  {activeCategory !== "All" && ` in ${activeCategory}`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                         
                        </div>
                      </div>
                      <Badge
                        className={`absolute top-4 left-4 ${
                          project.category === "Exhibition"
                            ? "bg-purple-600 hover:bg-purple-700"
                            : "bg-teal-600 hover:bg-teal-700"
                        }`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 flex-1">{project.title}</h3>
                        {/* <div className="flex items-center text-sm text-gray-500 ml-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.year}
                        </div> */}
                      </div>
                      {/* <p className="text-gray-600 mb-3 line-clamp-2">{project.description}</p> */}
                      {/* <div className="flex items-center text-sm text-teal-600 font-medium mb-4">
                        <Users className="h-4 w-4 mr-1" />
                        Client: {project.client}
                      </div> */}

                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">{allProjects.length}+</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{exhibitionProjects.length}+</div>
              <div className="text-gray-600">Exhibition Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">{designingProjects.length}+</div>
              <div className="text-gray-600">Design Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something that will make your brand stand out from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
