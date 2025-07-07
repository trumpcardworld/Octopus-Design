import { Heart, Lightbulb, Shield, Leaf } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years of experience in brand design and creative strategy.",
    },
    {
      name: "Priya Sharma",
      role: "Exhibition Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specialist in creating immersive exhibition experiences.",
    },
    {
      name: "Amit Patel",
      role: "Print Production Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in print technologies and quality control processes.",
    },
    {
      name: "Sneha Gupta",
      role: "Digital Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Focused on web design and digital marketing materials.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We are passionate about design and committed to delivering exceptional results that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solve complex design challenges.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our clients trust us to deliver projects on time and within budget, every single time.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible practices in all our design and printing processes.",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Octopus Designs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a creative design agency dedicated to helping businesses communicate their message through
              exceptional visual design and innovative printing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Octopus Designs began as a small studio with a big vision: to help businesses tell
                their stories through compelling visual design. What started as a passion project has grown into a
                full-service design agency serving clients across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our name "Octopus" reflects our versatility and ability to handle multiple aspects of design
                simultaneously - from branding and print design to exhibitions and digital solutions. Like an octopus
                with its eight arms, we can tackle complex projects from multiple angles.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have completed over 500 projects for 50+ satisfied clients, earning recognition
                for our creative excellence and professional service.
              </p>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=500&width=600" alt="Our Studio" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of designers, strategists, and production experts work together to bring your vision to
              life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-teal-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-teal-100">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
