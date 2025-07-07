import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Clients from "@/components/clients"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Clients/>
      <Services />
      <Portfolio />
      <Contact />
    </main>
  )
}
