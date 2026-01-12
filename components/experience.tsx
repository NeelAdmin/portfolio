"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Junior MERN Stack Developer",
    company: "Webosmotic Pvt. Ltd., Surat",
    period: "2024 - Present (1 Year)",
    description: "Developing and maintaining complex full-stack applications using React, Node.js, and MongoDB.",
  },
  {
    title: "MERN Stack Intern",
    company: "Webosmotic Pvt. Ltd., Surat",
    period: "2023 - 2024 (6 Months)",
    description: "Collaborated with senior developers to build responsive front-end components and RESTful APIs.",
  },
  {
    title: "B.Tech in Computer Engineering",
    company: "Bhagwan Mahavir College of Engg & Tech",
    period: "Graduated 2023",
    description: "Focused on core computer science principles, data structures, and web technologies.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-primary mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Experience & Education
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass p-8 rounded-3xl hover:border-primary/30 transition-all group">
                    <span className="text-primary font-mono text-sm mb-2 block">{exp.period}</span>
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
