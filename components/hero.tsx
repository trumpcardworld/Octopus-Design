// import { ArrowRight, Sparkles } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function Hero() {
//   return (
//     <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 min-h-screen flex items-center">
//       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
//               <Sparkles className="h-4 w-4" />
//               <span>Creative Design Solutions</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Bringing Your
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Vision </span>
//               to Life
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               From stunning exhibitions to premium printing services, we create impactful designs that captivate
//               audiences and elevate your brand presence.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
//                 <Link href="/portfolio" className="flex items-center">
//                   View Our Work
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 bg-transparent"
//               >
//                 <Link href="/contact">Get Started</Link>
//               </Button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-8">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-teal-600">500+</div>
//                 <div className="text-gray-600">Projects Completed</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-teal-600">50+</div>
//                 <div className="text-gray-600">Happy Clients</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-teal-600">5+</div>
//                 <div className="text-gray-600">Years Experience</div>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
//               <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
//                 <div className="text-white text-center">
//                   <div className="text-6xl font-bold mb-2">🐙</div>
//                   <div className="text-xl font-semibold">Creative Excellence</div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -top-4 -right-4 w-72 h-72 bg-teal-200 rounded-full opacity-20"></div>
//             <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }






















// "use client"

// import { useState, useEffect } from "react"
// import { ArrowRight, Sparkles, Play, Pause, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// const services = [
//   "Exhibition Design",
//   "Brand Identity",
//   "Packaging Design",
//   "Digital Solutions",
//   "Print Design",
//   "Photography",
// ]


// export default function Hero() {
//   const [currentService, setCurrentService] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     if (isPlaying) {
//       const interval = setInterval(() => {
//         setCurrentService((prev) => (prev + 1) % services.length)
//       }, 2500)
//       return () => clearInterval(interval)
//     }
//   }, [isPlaying])

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
//       {/* Clean Background Pattern */}
//       <div className="absolute inset-0">
//         {/* Teal Geometric Shapes */}
//         {/* <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-60 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-teal-200 rotate-45 opacity-40 animate-bounce-slow"></div>
//         <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-50 rounded-full opacity-50"></div>
//         <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-teal-300 opacity-30 animate-spin-slow"></div> */}

//         {/* Blue Accents */}
//         {/* <div className="absolute top-1/3 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-float"></div>
//         <div className="absolute bottom-1/2 left-20 w-28 h-28 bg-blue-100 opacity-40"></div> */}

//         {/* Subtle Grid */}

//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             {/* Clean Badge */}
//             <div className="inline-flex items-center space-x-3 bg-teal-50 text-teal-800 px-6 py-3 rounded-full text-sm font-medium border border-teal-200 hover:bg-teal-100 transition-all duration-300 group">
//               <Sparkles className="h-4 w-4 text-teal-600 animate-pulse" />
//               <span>Award-Winning Creative Studio</span>
//               <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-6">
//               <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
//                 We Create
//                 <br />
//                 <span className="relative inline-block">
//                   <span className="text-teal-600 animate-fade-in">
//                     {services[currentService]}
//                   </span>
//                   <div className="absolute -bottom-2 left-0 w-half h-1 bg-teal-600 transform origin-left animate-scale-x"></div>
//                 </span>
//                 <br />
//                 <span className="text-gray-700">That Inspires</span>
//               </h1>

//               {/* Service Controls */}
//               <div className="flex items-center space-x-4 mt-6">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setIsPlaying(!isPlaying)}
//                   className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-full"
//                 >
//                   {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
//                 </Button>
//                 <div className="flex space-x-2">
//                   {services.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
//                         index === currentService 
//                           ? "bg-teal-600 w-8" 
//                           : "bg-teal-200 w-2 hover:bg-teal-300"
//                       }`}
//                       onClick={() => setCurrentService(index)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
//               From stunning exhibitions to premium digital experiences, we transform ideas into
//               <span className="text-teal-600 font-semibold"> visual masterpieces </span>
//               that captivate audiences and elevate brands.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
//               >
//                 <Link href="/portfolio" className="flex items-center">
//                   Explore Our Work
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
//               >
//                 <Link href="/contact">Start Your Project</Link>
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8">
//               {[
//                 { number: "500+", label: "Projects" },
//                 { number: "50+", label: "Clients" },
//                 { number: "5+", label: "Years"},
//               ].map((stat, index) => (
//                 <div key={index} className="text-center group cursor-pointer">
//                   {/* <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
//                     {stat.icon}
//                   </div> */}
//                   <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-600 group-hover:text-teal-600 transition-colors">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Creative Octopus Display */}
//           <div className="relative">
//             <div className="relative z-10">
//               {/* Main Card */}
//               <div className="bg-white rounded-3xl shadow-2xl p-8 border border-teal-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
//                 {/* Octopus Logo Section */}
//                 <div className="text-center mb-8">
//                   <div className="relative inline-block">
//                     <div className="w-32 h-32 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors duration-300">
//                       <div className="text-6xl animate-bounce-slow group-hover:animate-spin-slow transition-all duration-500">
//                         🐙
//                       </div>
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full animate-ping"></div>
//                     <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Octopus Designs</h3>
//                   <p className="text-teal-600 font-medium">Creative Excellence</p>
//                 </div>

//                 {/* Feature Grid */}
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     { icon: "🎨", title: "Design", color: "bg-teal-50 hover:bg-teal-100" },
//                     { icon: "🚀", title: "Innovation", color: "bg-blue-50 hover:bg-blue-100" },
//                     { icon: "💡", title: "Strategy", color: "bg-teal-50 hover:bg-teal-100" },
//                     { icon: "⭐", title: "Quality", color: "bg-blue-50 hover:bg-blue-100" },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className={`${item.color} rounded-xl p-4 transition-all duration-300 cursor-pointer group/card border border-transparent hover:border-teal-200`}
//                     >
//                       <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform duration-300">
//                         {item.icon}
//                       </div>
//                       <div className="text-gray-700 font-medium text-sm">{item.title}</div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="mt-6 pt-6 border-t border-teal-100">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
//                       <span className="text-sm text-gray-600">Ready to create</span>
//                     </div>
//                     <div className="text-teal-600 text-sm font-medium">Let's talk →</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Decorative Elements */}
//             {/* <div className="absolute -top-6 -left-6 w-12 h-12 bg-teal-200 rounded-full opacity-60 animate-pulse"></div>
//             <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
//             <div className="absolute top-1/2 -right-8 w-8 h-8 bg-teal-300 rounded-full opacity-70 animate-float"></div>
//             <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-blue-300 rotate-45 opacity-60 animate-spin-slow"></div> */}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <div className="flex flex-col items-center space-y-2 text-teal-600 hover:text-teal-700 transition-colors cursor-pointer group">
//           <span className="text-sm font-medium">Scroll to explore</span>
//           <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-pulse" />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }

//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes fade-in {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes scale-x {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .animate-scale-x {
//           animation: scale-x 0.6s ease-out;
//         }

//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Play, Pause, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  "Exhibition Design",
  "Brand Identity",
  // "Packaging Design",
  "Digital Solutions",
  "Print Design",
  "Photography",
]

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % services.length)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            {/* Clean Badge */}
            <div className="inline-flex items-center space-x-3  text-[#106484] px-6 py-3 rounded-full text-sm font-medium border border-[#518ca5] hover:bg-[#c7d9e2] transition-all duration-300 group">
              <Sparkles className="h-4 w-4 text-[#17688C] animate-pulse" />
              <span>Creative Design Solutions</span>
              <div className="w-2 h-2 bg-[#106484] rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading with Fixed Layout */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Create
                <br />
                <span className="relative inline-block">
                  <span
                    className="text-[#17688C] inline-block transition-all duration-500 ease-in-out"
                    style={{ minWidth: '280px' }}
                  >
                    {services[currentService]}
                  </span>
                  <div className="absolute -bottom-4 left-0 w-1/2 h-1 bg-[#17688C] transform origin-left animate-scale-x"></div>
                </span>
                <br />
                <div className="mt-6">
                  <span className="text-gray-700">That Inspires</span>
                </div>
              </h1>

              {/* Service Controls */}
              <div className="flex items-center space-x-4 mt-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-[#17688C] hover:text-teal-700 hover:bg-teal-50 rounded-full p-2 transition-all duration-200"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentService
                          ? "bg-[#17688C] w-8"
                          : "bg-[#045b7c] w-2 hover:bg-[#106484]"
                        }`}
                      onClick={() => setCurrentService(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              From stunning exhibitions to premium digital experiences, we transform ideas into
              <span className="text-[#17688C] font-semibold"> visual masterpieces </span>
              that captivate audiences and elevate brands.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/portfolio' className="bg-[#17688C] hover:[#106484] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center justify-center">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href='/contact' className="border-2 border-[#17688C] text-[#17688C] hover:bg-text-[#71a4bc] hover:text-[#106484] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent">
                Start Your Project
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "500+", label: "Projects" },
                { number: "50+", label: "Clients" },
                { number: "5+", label: "Years" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-[#17688C] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 group-hover:text-[#17688C] transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Creative Octopus Display */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-teal-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                {/* Octopus Logo Section */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-[#c7d9e2] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#84acbe] transition-colors duration-300">
                      <div className="text-6xl animate-bounce-slow group-hover:animate-spin-slow transition-all duration-500">
                        <Image
                          src='/apple-touch-icon.png'
                          alt="Octopus Designs"
                          width={80}
                          height={80}
                          className=""
                        />
                      </div>
                    </div>
                    {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div> */}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Octopus Designs</h3>
                  <p className="text-[#17688C] font-medium">Creative Excellence</p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🎨", title: "Design", color: "bg-cyan-50 hover:bg-[#7cacbe]" },
                    { icon: "🚀", title: "Innovation", color: "bg-blue-50 hover:bg-blue-100" },
                    { icon: "💡", title: "Strategy", color: "bg-cyan-50 hover:bg-[#7cacbe]" },
                    { icon: "⭐", title: "Quality", color: "bg-blue-50 hover:bg-blue-100" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} rounded-xl p-4 transition-all duration-300 cursor-pointer group/card border border-transparent hover:border-teal-200`}
                    >
                      <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-gray-700 font-medium text-sm">{item.title}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-6 pt-6 border-t border-teal-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#71a4bc] rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Ready to create</span>
                    </div>
                    <Link href='/contact' className="text-[#17688C] text-sm font-medium">Let's talk →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col mt-12 items-center space-y-2 text-[#17688C] hover:text-[#106484] transition-colors cursor-pointer group">
          <span className="text-sm font-medium ">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-scale-x {
          animation: scale-x 0.6s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}