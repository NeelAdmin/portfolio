import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-12 text-center border-t bg-muted/20">
        <div className="container px-6 mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            &copy; {new Date().getFullYear()} Neel Navadiya &mdash; Built with React & Next.js
          </p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
      </footer>
    </main>
  )
}
