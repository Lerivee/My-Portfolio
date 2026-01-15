"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What tech stack do you use?",
    answer:
      "I primarily work with Next.js, React, Tailwind CSS, Spring Boot, MongoDB, and REST APIs. I also explore AI-powered features and modern frontend animations.",
  },
  {
    question: "Are you open to internships or junior roles?",
    answer:
      "Yes. I'm open to internships, entry-level roles, and project-based opportunities that allow me to learn, grow, and contribute meaningfully.",
  },
  {
    question: "Are you currently a student?",
    answer:
      "Yes, I'm currently a university student studying engineering-related courses while actively building real-world projects alongside my studies.",
  },
  {
    question: "Do you work remotely?",
    answer: "Yes, I'm open to remote opportunities and online collaborations.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via email or connect with me through GitHub and LinkedIn using the links in the Contact section.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="border border-white/10 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
