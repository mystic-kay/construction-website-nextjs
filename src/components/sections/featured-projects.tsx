'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: 'Skyline Tower',
        category: 'Commercial',
        location: 'New York, NY',
        year: '2024',
        description: '42-story mixed-use development featuring sustainable design',
        image: '/images/projects/skyline-tower.jpg',
        stats: { sqft: '850K', duration: '18mo' }
    },
    {
        id: 2,
        title: 'The Glass House',
        category: 'Residential',
        location: 'Malibu, CA',
        year: '2023',
        description: 'Luxury oceanfront residence with panoramic views',
        image: '/images/projects/glass-house.jpg',
        stats: { sqft: '12K', duration: '14mo' }
    },
    {
        id: 3,
        title: 'Urban Loft Renovation',
        category: 'Renovation',
        location: 'Chicago, IL',
        year: '2024',
        description: 'Historic warehouse transformed into modern living spaces',
        image: '/images/projects/urban-loft.jpg',
        stats: { sqft: '45K', duration: '10mo' }
    },
]

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.03),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                                Portfolio
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg"
                        >
                            A showcase of our finest work and completed masterpieces.
                        </motion.p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:inline-flex border-2 hover:border-primary/50">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <Link href="/projects" className="block">
                                {/* Card Container */}
                                <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-secondary via-secondary/80 to-muted">
                                        {/* Project Image */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                                        {/* Zoom Effect Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                            initial={false}
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 text-primary text-xs font-semibold">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* External Link Icon */}
                                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                                                <ExternalLink className="w-4 h-4 text-background" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-6 bg-card">
                                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Project Meta */}
                                        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3 text-primary" />
                                                <span>{project.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-primary" />
                                                <span>{project.year}</span>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                                            <div>
                                                <p className="text-xs text-muted-foreground">Area</p>
                                                <p className="text-sm font-bold text-foreground">{project.stats.sqft} sqft</p>
                                            </div>
                                            <div className="h-8 w-px bg-border" />
                                            <div>
                                                <p className="text-xs text-muted-foreground">Duration</p>
                                                <p className="text-sm font-bold text-foreground">{project.stats.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button asChild variant="outline" size="lg" className="border-2">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
