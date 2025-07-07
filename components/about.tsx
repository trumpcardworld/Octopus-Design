import { CheckCircle, Users, Award, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const stats = [
    { icon: Users, label: "Team Members", value: "15+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Target, label: "Success Rate", value: "98%" },
    { icon: CheckCircle, label: "Projects Done", value: "500+" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of design trends and technology to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "Every project receives meticulous attention to detail and premium materials.",
    },
    {
      title: "Partnership",
      description: "We work closely with clients to understand their vision and exceed expectations.",
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable design solutions.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Octopus Designs</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 5 years of experience in the design and printing industry, Octopus Designs has established
              itself as a trusted partner for businesses seeking exceptional visual communication solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of creative professionals combines artistic vision with technical expertise to deliver projects
              that not only look stunning but also achieve your business objectives.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-teal-600">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
