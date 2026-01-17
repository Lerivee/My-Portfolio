"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Valerie delivered exceptional work on our platform. Her attention to detail and understanding of user experience made a significant impact on our product.",
    name: "Dzarma Samuel",
    role: "Tech Lead",
  },
  {
    quote:
      "Working with Valerie was a great experience. She communicates clearly, meets deadlines, and writes clean, maintainable code.",
    name: "Deborah Iwuh",
    role: "Backend Developer",
  },
  {
    quote:
      "Her ability to quickly grasp complex requirements and translate them into elegant solutions is impressive. Highly recommend!",
    name: "Lucy Ihunweze",
    role: "Software Engineer",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">What People Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative p-6 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
