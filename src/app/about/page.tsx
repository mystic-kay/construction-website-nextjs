"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Award,
    Users,
    Building2,
    TrendingUp,
    Heart,
    Shield,
    Lightbulb,
    Target,
    Calendar,
    BarChart3,
    Zap
} from "lucide-react";

const milestones = [
    {
        year: "1998",
        title: "Company Founded",
        description: "Started with a team of 5 dedicated professionals"
    },
    {
        year: "2005",
        title: "First Major Project",
        description: "Completed our first $50M commercial development"
    },
    {
        year: "2012",
        title: "LEED Certification",
        description: "Became certified in sustainable building practices"
    },
    {
        year: "2018",
        title: "National Recognition",
        description: "Awarded 'Builder of the Year' by Construction Magazine"
    },
    {
        year: "2024",
        title: "500+ Projects",
        description: "Milestone achievement with projects across 12 states"
    }
];

const team = [
    {
        name: "James Mitchell",
        role: "CEO & Founder",
        description: "25+ years of construction leadership",
        icon: Users
    },
    {
        name: "Sarah Chen",
        role: "Chief Operations Officer",
        description: "Expert in project management and logistics",
        icon: Target
    },
    {
        name: "David Rodriguez",
        role: "Chief Engineer",
        description: "Pioneering sustainable construction methods",
        icon: Lightbulb
    },
    {
        name: "Emily Thompson",
        role: "Safety Director",
        description: "Zero-accident safety record advocate",
        icon: Shield
    }
];

const stats = [
    {
        icon: Building2,
        value: "500+",
        label: "Projects Completed",
        color: "text-blue-500"
    },
    {
        icon: Users,
        value: "200+",
        label: "Team Members",
        color: "text-purple-500"
    },
    {
        icon: Award,
        value: "50+",
        label: "Industry Awards",
        color: "text-amber-500"
    },
    {
        icon: TrendingUp,
        value: "$2B+",
        label: "Project Value",
        color: "text-green-500"
    }
];

const certifications = [
    {
        name: "LEED Certified",
        organization: "U.S. Green Building Council",
        icon: Award,
        description: "Leadership in Energy and Environmental Design",
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "OSHA Safety",
        organization: "Occupational Safety and Health Administration",
        icon: Shield,
        description: "Workplace safety excellence standards",
        color: "from-orange-500 to-red-600"
    },
    {
        name: "ISO 9001:2015",
        organization: "International Organization for Standardization",
        icon: CheckCircle2,
        description: "Quality management systems certified",
        color: "from-blue-500 to-indigo-600"
    },
    {
        name: "Green Building Council",
        organization: "USGBC Member",
        icon: Lightbulb,
        description: "Sustainable construction advocate",
        color: "from-emerald-500 to-green-600"
    },
    {
        name: "Home Builders",
        organization: "NAHB Member",
        icon: Building2,
        description: "National Association member since 2000",
        color: "from-amber-500 to-orange-600"
    },
    {
        name: "General Contractors",
        organization: "AGC Member",
        icon: Users,
        description: "Associated General Contractors of America",
        color: "from-purple-500 to-violet-600"
    }
];

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
                <div className="absolute inset-0 bg-[url('/images/backgrounds/grid-pattern.svg')] opacity-5" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Since 1998</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Building
                            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Tomorrow's Legacy
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            For over 25 years, Vanguard Construct has been shaping skylines and redefining standards in construction excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-3">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/10`}>
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                                <span className="text-sm font-semibold text-primary">Our Story</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Built on Foundation of Excellence</h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Founded in 1998, Vanguard Construct began with a simple yet powerful mission: to deliver construction projects that stand the test of time, both structurally and aesthetically.
                                </p>
                                <p>
                                    What started as a small team of dedicated craftsmen has grown into a premier construction firm handling multi-million dollar projects across the nation. Despite our growth, we maintain the same attention to detail and personalized service that defined our early years.
                                </p>
                                <p>
                                    We are driven by a passion for excellence and a commitment to our clients' visions. Every beam placed, every detail perfected—it's all a testament to our unwavering dedication to quality.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button asChild size="lg">
                                    <Link href="/contact">Work With Us</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/projects">View Portfolio</Link>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
                                <Image
                                    src="/images/about/team-work.jpg"
                                    alt="Team at Work"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-background/90 backdrop-blur-lg rounded-2xl p-6 border border-primary/20">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                                <Award className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground">Award-Winning Team</div>
                                                <div className="text-sm text-muted-foreground">Builder of the Year 2023</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Our Journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Milestones That Define Us</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A timeline of growth, innovation, and unwavering commitment to excellence.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Calendar className="w-5 h-5 text-primary" />
                                                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                                                </div>
                                                <CardTitle className="text-xl">{milestone.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden md:flex absolute left-1/2 w-6 h-6 -ml-3 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Leadership</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Industry veterans with a passion for building excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group h-full border-2 hover:border-primary/40 transition-all hover:shadow-xl hover:-translate-y-2">
                                    <CardHeader className="text-center">
                                        <div className="flex justify-center mb-4">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-primary/10">
                                                <member.icon className="w-10 h-10 text-primary" />
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                                        <div className="text-sm font-semibold text-primary">{member.role}</div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                            <span className="text-sm font-semibold text-primary">Industry Recognition</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Certifications & Memberships
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Recognized by leading industry organizations for our unwavering commitment to quality, safety, and excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group h-full bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden relative">
                                    {/* Gradient Glow on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <CardHeader className="relative pb-4">
                                        {/* Icon with Gradient Background */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`relative flex-shrink-0`}>
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                                                        <cert.icon className="w-8 h-8 text-white" />
                                                    </div>
                                                </div>
                                                {/* Checkmark Badge */}
                                                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center border-2 border-slate-900">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <CardTitle className="text-xl text-white mb-1 group-hover:text-primary transition-colors">
                                                    {cert.name}
                                                </CardTitle>
                                                <div className="text-xs font-semibold text-primary/80 uppercase tracking-wide">
                                                    {cert.organization}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {cert.description}
                                        </p>
                                    </CardHeader>

                                    {/* Bottom Accent Line */}
                                    <div className={`h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-slate-300">Fully Certified</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-white/10" />
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-slate-300">Industry Compliant</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-white/10" />
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-slate-300">25+ Years Excellence</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/10">
                                <Zap className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's discuss how our experience and expertise can bring your vision to life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="text-lg px-8">
                                <Link href="/contact">Start a Project</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8">
                                <Link href="/services">Our Services</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
