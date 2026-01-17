"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "CredentialChain",
    description:
      "A student-centered learning platform with real-time collaboration, course management, and progress tracking features.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Lerivee/CredentialChain",
    demo: "https://demo.com",
  },
  {
     title: "Jovalyn Cakes N More",
    description:
      "A cake website where you get delightful and unforgettable baked goods tailored to your taste.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Lerivee/JovalynCakesNMore",
    demo: "https://demo.com",
  },
  {
    title: "FocusFlow App",
    description:
      "Project management tool with drag-and-drop kanban boards, team collaboration, and automated workflows.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Lerivee/FocusFlow-App",
  },
  {
    title: "DevPortfolio CMS",
    description:
      "Headless CMS specifically designed for developers to manage and showcase their portfolio content easily.",
    tech: ["Next.js", "MongoDB", "REST API", "Tailwind CSS"],
    github: "https://github.com/Lerivee/Freelance-Hub",
    demo: "https://demo.com",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,245,212,0.1)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
