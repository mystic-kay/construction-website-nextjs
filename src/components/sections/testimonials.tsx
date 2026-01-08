'use client'

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "CEO, TechCorp",
        company: "TechCorp Industries",
        avatar: "/images/team/avatar-1.svg",
        rating: 5,
        content: "Vanguard Construct exceeded our expectations on our new headquarters. Their attention to detail and commitment to quality is unmatched. The project was delivered on time and within budget.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Property Developer",
        company: "Urban Estates",
        avatar: "/images/team/avatar-2.svg",
        rating: 5,
        content: "Working with Vanguard has been a game-changer for our luxury residential projects. Their expertise in sustainable building practices helped us achieve LEED certification.",
    },
    {
        id: 3,
        name: "Jennifer Rodriguez",
        role: "Homeowner",
        company: "Private Client",
        avatar: "/images/team/avatar-3.svg",
        rating: 5,
        content: "They transformed our vision into reality. The custom home they built for us is a masterpiece. Professional, responsive, and incredibly skilled craftsmen.",
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            Testimonials
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="w-16 h-16 text-primary" />
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-primary text-primary"
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-border">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                        <div className="w-full h-full flex items-center justify-center text-primary font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
