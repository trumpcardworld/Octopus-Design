import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <Link href="/">
              <Image
                src="/images/octopus-logo.png"
                alt="Octopus Designs"
                width={140}
                height={80}
                className=""
              />
              </Link>
              
            </div>
            <p className="text-gray-400">
              Creating exceptional design solutions that help businesses make lasting impressions and achieve their
              goals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Identity Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Brochure Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Exhibition Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Website Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-12 w-12" />
                <span className="text-sm">Block A1, 104 to 108, Radhe Kishan  Business Park,  opp. HP petrol pump, Isanpur, Ahmedabad, Gujarat, India - 382443</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 79254 32030</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm"> octopus@octopusdesigns.net</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Octopus Designs Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
