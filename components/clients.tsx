"use client"

const clients = [
  { name: "A & S Freight Solutions", logo: "/clients-logo/A & S Freight Solutions.jpg" },
  { name: "Aqurious", logo: "/clients-logo/Aqurious.jpg" },
  { name: "Ashwin Engineers", logo: "/clients-logo/Ashwin Engineers.jpg" },
  { name: "Cemach", logo: "/clients-logo/Cemach.jpg" },
  { name: "CIP Soft", logo: "/clients-logo/CIP Soft.jpg" },
  { name: "D'heerji", logo: "/clients-logo/D'heerji.jpg" },
  { name: "Gyrate", logo: "/clients-logo/Gyrate.jpg" },
  { name: "Hexa", logo: "/clients-logo/Hexa.jpg" },
  { name: "Honest Eng", logo: "/clients-logo/Honest Eng.jpg" },
  { name: "Kaiser", logo: "/clients-logo/Kaiser.jpg" },
  { name: "Kenwin", logo: "/clients-logo/Kenwin.jpg" },
  { name: "Maruti-Air", logo: "/clients-logo/Maruti-Air.jpg" },
  { name: "Meen Aquarium", logo: "/clients-logo/Meen Aquarium.jpg" },
  { name: "Paloma Industries", logo: "/clients-logo/Paloma Industries.jpg" },
  { name: "Pooja Plast", logo: "/clients-logo/Pooja Plast.jpg" },
  { name: "Powervac", logo: "/clients-logo/Powervac.jpg" },
   { name: "REK", logo: "/clients-logo/REK.jpg" },
  { name: "Revin", logo: "/clients-logo/Revin.jpg" },
  { name: "Sattva", logo: "/clients-logo/Sattva.jpg" },
  { name: "Treat Air", logo: "/clients-logo/Treat Air.jpg" },
  { name: "Tulsi Intermediates", logo: "/clients-logo/Tulsi Intermediates.jpg" },
  { name: "VINTEL", logo: "/clients-logo/VINTEL.jpg" },
  { name: "Vir", logo: "/clients-logo/Vir.jpg" },
  { name: "Vulcan Cabel", logo: "/clients-logo/Vulcan Cabel.jpg" },
]

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with amazing clients across various industries, helping them achieve their design goals.
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div className="flex items-center space-x-12 animate-scroll">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  // className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 group"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="h-16 w-auto mx-auto transition-all duration-300  group-hover:opacity-100"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  // className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 group"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="h-16 w-auto mx-auto  transition-all duration-300  group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-[#17688c] mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#17688c] mb-2">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#17688c] mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
          <div className="text-3xl font-bold text-[#17688c] mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
