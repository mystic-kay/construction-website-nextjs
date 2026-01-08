'use client'

import { motion } from "framer-motion"
import { Building2, Home, Hammer, Ruler, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
    {
        icon: Building2,
        title: "Commercial Construction",
        description: "Full-scale commercial builds, from office complexes to retail centers.",
        features: ["Office Buildings", "Retail Spaces", "Industrial Facilities"],
        iconSvg: "/images/icons/building-design.svg",
        gradient: "from-blue-500/10 to-primary/10"
    },
    {
        icon: Home,
        title: "Luxury Residential",
        description: "Custom home building and high-end residential renovations.",
        features: ["Custom Homes", "Luxury Estates", "Smart Home Integration"],
        iconSvg: "/images/icons/construction-crane.svg",
        gradient: "from-primary/10 to-amber-500/10"
    },
    {
        icon: Hammer,
        title: "Renovation & Remodel",
        description: "Transforming existing spaces with modern design and craftsmanship.",
        features: ["Interior Renovations", "Exterior Updates", "Historic Restoration"],
        iconSvg: "/images/icons/safety-helmet.svg",
        gradient: "from-accent/10 to-orange-500/10"
    },
    {
        icon: Ruler,
        title: "Design-Build",
        description: "Integrated design and construction services for seamless project delivery.",
        features: ["3D Modeling", "Planning & Design", "Project Management"],
        iconSvg: "/images/icons/blueprint.svg",
        gradient: "from-purple-500/10 to-primary/10"
    },
]

export function ServiceHighlights() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.05),transparent_50%)]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            What We Do
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        We provide comprehensive construction solutions tailored to your unique vision with cutting-edge technology and expert craftsmanship.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with SVG */}
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                                            <Image
                                                src={service.iconSvg}
                                                alt={service.title}
                                                width={32}
                                                height={32}
                                                className="opacity-80"
                                            />
                                        </div>
                                        {/* Decorative element */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-2 mb-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        Learn more
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
