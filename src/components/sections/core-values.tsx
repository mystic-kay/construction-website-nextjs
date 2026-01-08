"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Lightbulb, Award, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const coreValues = [
    {
        icon: Shield,
        title: "Safety First",
        description: "We prioritize the wellbeing of our team, clients, and communities in every decision we make.",
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/30",
        iconBg: "bg-red-500/20",
        iconColor: "text-red-500"
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We deliver superior craftsmanship and unmatched quality in every project we undertake.",
        color: "from-amber-500 to-yellow-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        iconBg: "bg-amber-500/20",
        iconColor: "text-amber-500"
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-500"
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We embrace cutting-edge technology and creative solutions to push boundaries.",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-500"
    },
    {
        icon: Heart,
        title: "Integrity",
        description: "We uphold the highest ethical standards and build lasting relationships through trust.",
        color: "from-rose-500 to-red-500",
        bgColor: "bg-rose-500/10",
        borderColor: "border-rose-500/30",
        iconBg: "bg-rose-500/20",
        iconColor: "text-rose-500"
    },
    {
        icon: Zap,
        title: "Sustainability",
        description: "We're committed to environmentally responsible practices that benefit future generations.",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/30",
        iconBg: "bg-green-500/20",
        iconColor: "text-green-500"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function CoreValues() {
    return (
        <section className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-sm font-semibold text-primary">Our Foundation</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Core Values That
                        <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Drive Us Forward
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        These principles guide every decision we make and every project we deliver.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {coreValues.map((value) => (
                        <motion.div key={value.title} variants={itemVariants}>
                            <Card className={`group relative h-full overflow-hidden border-2 ${value.borderColor} hover:border-opacity-60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Background Pattern */}
                                <div className={`absolute inset-0 ${value.bgColor} opacity-50`} />

                                <CardHeader className="relative pb-4">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${value.iconBg} border-2 ${value.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                                    </div>

                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {value.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="relative">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>

                                {/* Decorative Corner */}
                                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${value.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl`} />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-sm font-medium text-foreground">
                            Building Tomorrow, Today — With Values That Last
                        </p>
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
