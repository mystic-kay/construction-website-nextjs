'use client'

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { Award, Users, Building, TrendingUp } from "lucide-react"

const stats = [
    {
        icon: Building,
        value: 500,
        suffix: "+",
        label: "Projects Completed",
        description: "Successful deliveries"
    },
    {
        icon: Users,
        value: 98,
        suffix: "%",
        label: "Client Satisfaction",
        description: "Happy customers"
    },
    {
        icon: Award,
        value: 25,
        suffix: "+",
        label: "Years Experience",
        description: "Industry expertise"
    },
    {
        icon: TrendingUp,
        value: 150,
        suffix: "+",
        label: "Team Members",
        description: "Skilled professionals"
    },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [motionValue, isInView, value])

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString()
            }
        })

        return () => unsubscribe()
    }, [springValue])

    return (
        <span className="inline-flex items-baseline">
            <span ref={ref}>0</span>
            <span>{suffix}</span>
        </span>
    )
}

export function StatsCounter() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background with gradient mesh */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,119,6,0.08),transparent_50%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                                {/* Background glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Icon */}
                                <div className="relative mb-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                {/* Counter */}
                                <div className="relative">
                                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Decorative line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
