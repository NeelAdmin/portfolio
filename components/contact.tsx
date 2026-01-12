"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
              Contact Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let&apos;s build something{" "}
              <span className="text-gradient">memorable</span> together.
            </h3>
            <p className="text-lg text-muted-foreground mb-12">
              Have a project in mind? Or just want to say hi? Feel free to reach
              out. I&apos;m always open to discussing new projects, creative
              ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/navadiya-neel-658190265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    color: "hover:bg-blue-600",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/engin.eel_09?",
                    color: "hover:bg-pink-600",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/NeelAdmin",
                    color: "hover:bg-gray-800",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl glass flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium px-1">Full Name</label>
                <Input
                  placeholder="John Doe"
                  className="bg-muted/50 border-0 h-14 rounded-xl focus-visible:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium px-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-muted/50 border-0 h-14 rounded-xl focus-visible:ring-primary/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium px-1">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                className="bg-muted/50 border-0 min-h-[150px] rounded-xl focus-visible:ring-primary/50 py-4"
              />
            </div>
            <Button
              size="lg"
              className="w-full h-14 rounded-xl text-lg font-bold group"
            >
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
