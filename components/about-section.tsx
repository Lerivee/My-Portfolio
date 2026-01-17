"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-card">
                <img
                  src="/valerie.png"
                  alt="Valerie Onoja Amarachi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/20 rounded-3xl" />
            </div>
          </div>

          {/* About Content */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Valerie Onoja Amarachi</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Valerie Onoja Amarachi, a full-stack developer with a strong interest in building clean,
                scalable, and user-focused web applications. I am also the Head of Content for Sui On Campus Veritas [SOCSCVeritas]
              </p>
              <p>
                I enjoy turning ideas into functional products, combining thoughtful UI design with solid backend logic.
                My work focuses on modern web technologies, student-centered platforms, and smart systems that solve
                real problems.
              </p>
              <p>
                I'm constantly learning, experimenting, and improving my craft, with a long-term goal of building
                impactful products and growing into a globally competitive software engineer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
