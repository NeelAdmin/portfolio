"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import TypingText from "./ui/TypingText";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            🟢 Available for new opportunities
          </motion.div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi,
              <span className="text-gradient">
                <TypingText
                  text={`  \nI'm Neel Navadiya`}
                  speed={70}
                  className="whitespace-pre-line"
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Full Stack MERN Developer crafting high-performance, interactive
              digital experiences that blend aesthetic precision with robust
              engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" aria-label="View My Work section">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-md group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact" aria-label="Contact section">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-md border-primary/20 bg-transparent"
                onClick={() => {}}
              >
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass p-4">
            <img
              src="/myImage.png"
              alt="Neel Navadiya Illustration"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              style={{ objectPosition: "10px -25px" }}
            />
          </div>
          {/* Floating cards for visual interest */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-2xl z-20 border-primary/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                JS
              </div>
              <div>
                <div className="text-sm font-bold">MERN Specialist</div>
                <div className="text-[10px] text-muted-foreground">
                  High Performance Apps
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="animate-bounce text-primary" size={20} />
      </motion.div> */}
    </section>
  );
}
