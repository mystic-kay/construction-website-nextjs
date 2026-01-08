'use client'

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Award, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section ref={ref} className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 overflow-hidden bg-background">
            {/* Animated Background with Grid Pattern */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.1),transparent_50%)]" />
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/backgrounds/grid-pattern.svg"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Floating geometric shapes */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-accent/20 rounded-full"
                />
            </motion.div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                style={{ opacity }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Award-Winning Construction</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
                            Building the <br />
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                                Future Today.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                            Vanguard Construct delivers premium construction services spanning commercial, residential, and industrial projects with unmatched precision and innovation.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                                <Award className="w-4 h-4 text-primary" />
                                <span className="text-sm">25+ Years</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                                <Shield className="w-4 h-4 text-primary" />
                                <span className="text-sm">Licensed & Insured</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="text-lg px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                                <Link href="/contact">
                                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2 hover:border-primary/50">
                                <Link href="/projects">View Portfolio</Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative h-[400px] md:h-[500px] lg:h-[600px]"
                    >
                        {/* Main Image Container with Enhanced Design */}
                        <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
                            {/* Hero Image */}
                            <Image
                                src="/images/hero/construction-site.jpg"
                                alt="Modern Construction Site"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Multi-layer Gradient Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />

                            {/* Subtle vignette effect */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
                        </div>

                        {/* Enhanced Floating Stats Cards */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute bottom-8 left-6 right-6 glass-strong p-8 rounded-2xl border-2 border-primary/30 shadow-2xl"
                        >
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center group">
                                    <p className="text-sm text-muted-foreground mb-2 font-medium">Projects</p>
                                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">500+</p>
                                </div>
                                <div className="border-l border-r border-primary/30 text-center group">
                                    <p className="text-sm text-muted-foreground mb-2 font-medium">Experience</p>
                                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">25yr</p>
                                </div>
                                <div className="text-center group">
                                    <p className="text-sm text-muted-foreground mb-2 font-medium">Satisfaction</p>
                                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">98%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 1, duration: 0.6, type: "spring" }}
                            className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg border-4 border-background"
                        >
                            <div className="text-center">
                                <p className="text-xs font-bold text-white">ISO</p>
                                <p className="text-lg font-bold text-white">9001</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
