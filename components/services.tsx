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




















// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, CheckCircle, Star, Zap } from "lucide-react"
// import Link from "next/link"

// const services = [
//   {
//     id: "identity",
//     title: "Identity Design",
//     subtitle: "Brand Soul Creation",
//     description:
//       "We craft unique brand identities that tell your story and connect with your audience on an emotional level.",
//     icon: "🎨",
//     features: ["Logo Design", "Brand Guidelines", "Color Psychology", "Typography"],
//     price: "₹15,000",
//     popular: false,
//     gradient: "from-teal-500 to-teal-600",
//     bgPattern: "identity",
//   },
//   {
//     id: "brochure",
//     title: "Brochure Design",
//     subtitle: "Story in Print",
//     description:
//       "Transform your message into compelling visual narratives that engage and inform your target audience.",
//     icon: "📄",
//     features: ["Tri-fold Design", "Digital Versions", "Content Strategy", "Print Ready"],
//     price: "₹8,000",
//     popular: false,
//     gradient: "from-blue-500 to-blue-600",
//     bgPattern: "brochure",
//   },
//   {
//     id: "packaging",
//     title: "Packaging Design",
//     subtitle: "Shelf Impact",
//     description: "Create packaging that not only protects but also attracts, communicates, and sells your product.",
//     icon: "📦",
//     features: ["3D Mockups", "Sustainable Options", "Die-cut Design", "Material Selection"],
//     price: "₹12,000",
//     popular: true,
//     gradient: "from-teal-600 to-blue-500",
//     bgPattern: "packaging",
//   },
//   {
//     id: "exhibition",
//     title: "Exhibition Services",
//     subtitle: "Experience Design",
//     description: "Design immersive exhibition experiences that captivate visitors and showcase your brand powerfully.",
//     icon: "🏢",
//     features: ["3D Visualization", "Interactive Elements", "Setup Management", "Custom Displays"],
//     price: "₹50,000",
//     popular: true,
//     gradient: "from-blue-600 to-teal-500",
//     bgPattern: "exhibition",
//   },
//   {
//     id: "photography",
//     title: "Photography",
//     subtitle: "Visual Storytelling",
//     description: "Capture the essence of your brand through professional photography that speaks volumes.",
//     icon: "📸",
//     features: ["Product Shoots", "Corporate Events", "Brand Photography", "Post-processing"],
//     price: "₹8,000",
//     popular: false,
//     gradient: "from-teal-400 to-blue-400",
//     bgPattern: "photography",
//   },
//   {
//     id: "website",
//     title: "Website Design",
//     subtitle: "Digital Presence",
//     description:
//       "Build responsive, user-friendly websites that convert visitors into customers and grow your business.",
//     icon: "💻",
//     features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Performance"],
//     price: "₹25,000",
//     popular: false,
//     gradient: "from-blue-400 to-teal-400",
//     bgPattern: "website",
//   },
// ]

// const patterns = {
//   identity: "M0,0 L20,10 L0,20 L20,30 L0,40",
//   brochure: "M0,0 Q10,10 20,0 T40,0",
//   packaging: "M0,0 L10,0 L15,5 L10,10 L0,10 Z",
//   exhibition: "M0,0 L20,0 M0,10 L20,10 M0,20 L20,20",
//   photography: "M10,0 A10,10 0 1,1 10,20 A10,10 0 1,1 10,0",
//   website: "M0,0 L20,0 L20,20 L0,20 Z M5,5 L15,5 M5,10 L15,10 M5,15 L15,15",
// }

// export default function Services() {
//   const [hoveredService, setHoveredService] = useState<string | null>(null)
//   const [selectedCategory, setSelectedCategory] = useState("all")

//   const categories = [
//     { id: "all", name: "All Services", count: services.length },
//     { id: "design", name: "Design", count: 4 },
//     { id: "digital", name: "Digital", count: 2 },
//   ]

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-20"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
//         <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-teal-400 rounded-full"></div>
//         <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Zap className="h-4 w-4" />
//             <span>Our Expertise</span>
//           </div>

//           <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//             Services That
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
//               Transform
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             We offer comprehensive design solutions that help businesses communicate their message effectively and
//             create lasting impressions in the market.
//           </p>

//           {/* Category Filter */}
//           <div className="flex justify-center mt-12">
//             <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//                     selectedCategory === category.id
//                       ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
//                       : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {category.name}
//                   <Badge variant="secondary" className="ml-2 text-xs">
//                     {category.count}
//                   </Badge>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={service.id}
//               className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
//                 hoveredService === service.id ? "scale-105" : ""
//               }`}
//               onMouseEnter={() => setHoveredService(service.id)}
//               onMouseLeave={() => setHoveredService(null)}
//             >
//               {/* Popular Badge */}
//               {service.popular && (
//                 <div className="absolute top-4 right-4 z-20">
//                   <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
//                     <Star className="h-3 w-3 mr-1" />
//                     Popular
//                   </div>
//                 </div>
//               )}

//               {/* Background Pattern */}
//               <div className="absolute inset-0 opacity-5">
//                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                   <defs>
//                     <pattern
//                       id={`pattern-${service.id}`}
//                       x="0"
//                       y="0"
//                       width="20"
//                       height="20"
//                       patternUnits="userSpaceOnUse"
//                     >
//                       <path
//                         d={patterns[service.bgPattern as keyof typeof patterns]}
//                         stroke="currentColor"
//                         strokeWidth="1"
//                         fill="none"
//                         className="text-teal-600"
//                       />
//                     </pattern>
//                   </defs>
//                   <rect width="100%" height="100%" fill={`url(#pattern-${service.id})`} />
//                 </svg>
//               </div>

//               {/* Gradient Header */}
//               <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

//               <CardContent className="p-8 relative">
//                 {/* Service Icon & Title */}
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-center space-x-4">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       {service.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 font-medium">{service.subtitle}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

//                 {/* Features */}
//                 <div className="space-y-3 mb-8">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center space-x-3">
//                       <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
//                       <span className="text-gray-700 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Price & CTA */}
//                 <div className="flex items-center justify-between pt-6 border-t border-gray-100">
//                   <div>
//                     <span className="text-sm text-gray-500">Starting from</span>
//                     <div className="text-2xl font-bold text-gray-900">{service.price}</div>
//                   </div>

//                   <Button
//                     className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-6 py-2 rounded-xl group/btn transition-all duration-300`}
//                   >
//                     <Link href="/contact" className="flex items-center">
//                       Get Quote
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//                     </Link>
//                   </Button>
//                 </div>

//                 {/* Hover Effect Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
//                 ></div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="text-center mt-20">
//           <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100"></div>
//             </div>

//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Something Custom?</h3>
//               <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                 Every project is unique. Let's discuss your specific requirements and create a tailored solution that
//                 perfectly fits your needs.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//                 >
//                   <Link href="/contact" className="flex items-center">
//                     <Zap className="mr-2 h-5 w-5" />
//                     Start Your Project
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>

//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-transparent"
//                 >
//                   <Link href="/portfolio">View Our Work</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
