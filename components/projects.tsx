"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Inventory Dashboard",
    description: "A comprehensive management tool with role-based access, real-time charts, and full CRUD operations.",
    image: "/inventory-dashboard-dashboard-ui.jpg",
    tags: ["React", "Node.js", "Chart.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Dynamic Blog Platform",
    description: "Feature-rich blogging system with Markdown support, user authentication, and social features.",
    image: "/modern-blog-website-design.jpg",
    tags: ["Next.js", "Express", "Tailwind", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat App",
    description: "Instant messaging application with rooms, read receipts, and file sharing using Socket.io.",
    image: "/chat-application-ui-messaging.jpg",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "E-commerce Interface",
    description: "Immersive shopping experience with advanced filtering, cart animations, and checkout flow.",
    image: "/ecommerce-web-store-ui-dark-mode.jpg",
    tags: ["React", "Framer Motion", "Stripe", "Sanity"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">My Portfolio</h2>
            <h3 className="text-4xl font-bold">Featured Projects</h3>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A selection of my recent works ranging from complex dashboards to immersive UI experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border-0"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted/50 text-muted-foreground font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
