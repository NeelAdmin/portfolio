"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", imgSrc: "/react.png" },
  { name: "Node.js", imgSrc: "/nodejs.png" },
  { name: "MongoDB", imgSrc: "/mongo (2).png" },
  { name: "Express", imgSrc: "/expressjs.png", width: 48, height: 51 },
  { name: "HTML", imgSrc: "/html.png" },
  { name: "CSS", imgSrc: "/css.png" },
  { name: "JavaScript", imgSrc: "/javascript.png" },
  { name: "Next.js", imgSrc: "/nextjs__2.png" },
  { name: "Tailwind CSS", imgSrc: "/tailwind.png" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
              About Me
            </h2>
            <h3 className="text-4xl font-bold mb-8">
              Engineering Digital Solutions with Precision.
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with a deep love for
                building scalable and maintainable web applications. My journey
                started with a curiosity for how things work on the web, which
                evolved into a career dedicated to the MERN stack.
              </p>
              <p>
                I specialize in creating seamless user interfaces with React and
                Next.js, backed by robust server-side logic using Node.js and
                Express. My goal is always to deliver experiences that are not
                just functional, but truly memorable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12  flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-lg font-bold text-primary">
                    <img
                      src={skill.imgSrc}
                      alt=""
                      style={{ width: skill.width, height: skill.height }}
                    />
                  </span>
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
