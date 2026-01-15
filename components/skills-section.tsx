"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "AI / ML",
    skills: ["OpenAI API", "LangChain", "Python", "TensorFlow", "Prompt Engineering"],
  },
  {
    title: "Blockchain",
    skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "Hardhat"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">My Technical Skillset</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: "easeOut" }}
              className="p-6 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,245,212,0.3)" }}
                    className="px-4 py-2 text-sm font-medium text-foreground bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
