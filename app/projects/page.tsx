"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const allProjects = [
  {
    title: "EduConnect Platform",
    description:
      "A student-centered learning platform with real-time collaboration, course management, and progress tracking features.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
  },
  {
    title: "SmartBudget App",
    description:
      "Personal finance tracker with AI-powered insights, expense categorization, and visual analytics dashboard.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
  },
  {
    title: "TaskFlow Manager",
    description:
      "Project management tool with drag-and-drop kanban boards, team collaboration, and automated workflows.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    github: "https://github.com",
    category: "Web",
  },
  {
    title: "DevPortfolio CMS",
    description:
      "Headless CMS specifically designed for developers to manage and showcase their portfolio content easily.",
    tech: ["Next.js", "MongoDB", "REST API", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
  },
  {
    title: "AI Study Assistant",
    description:
      "An intelligent study companion that generates quizzes, summarizes notes, and creates flashcards using AI.",
    tech: ["Next.js", "OpenAI API", "MongoDB", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "AI",
  },
  {
    title: "E-Commerce API",
    description:
      "RESTful backend service for e-commerce platforms with authentication, payment integration, and inventory management.",
    tech: ["Spring Boot", "PostgreSQL", "JWT", "Stripe API"],
    github: "https://github.com",
    category: "Backend",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and hourly/weekly predictions.",
    tech: ["React", "Weather API", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging platform with group chats, file sharing, and end-to-end encryption support.",
    tech: ["Next.js", "Socket.io", "MongoDB", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A comprehensive collection of my work, including web applications, backend services, and AI-powered tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,245,212,0.1)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-foreground/70 bg-white/5 border border-white/10 rounded"
                    >
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
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
