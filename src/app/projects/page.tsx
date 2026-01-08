import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export const metadata = {
    title: "Projects | Vanguard Construct",
    description: "View our portfolio of completed construction projects.",
};

const projects = [
    {
        id: 1,
        title: 'Skyline Tower',
        category: 'Commercial',
        location: 'New York, NY',
        year: '2024',
        image: '/images/projects/skyline-tower.jpg',
        description: '42-story mixed-use development'
    },
    {
        id: 2,
        title: 'The Glass House',
        category: 'Residential',
        location: 'Malibu, CA',
        year: '2023',
        image: '/images/projects/glass-house.jpg',
        description: 'Luxury oceanfront residence'
    },
    {
        id: 3,
        title: 'Urban Loft Renovation',
        category: 'Renovation',
        location: 'Chicago, IL',
        year: '2024',
        image: '/images/projects/urban-loft.jpg',
        description: 'Historic warehouse transformation'
    },
    {
        id: 4,
        title: 'Skyline Tower II',
        category: 'Commercial',
        location: 'Austin, TX',
        year: '2023',
        image: '/images/projects/skyline-tower.jpg',
        description: 'Tech hub office complex'
    },
    {
        id: 5,
        title: 'Riverfront Villa',
        category: 'Residential',
        location: 'Miami, FL',
        year: '2023',
        image: '/images/projects/glass-house.jpg',
        description: 'Modern waterfront estate'
    },
    {
        id: 6,
        title: 'Historic Renovation',
        category: 'Restoration',
        location: 'Boston, MA',
        year: '2022',
        image: '/images/projects/urban-loft.jpg',
        description: 'Heritage building restoration'
    },
];

export default function ProjectsPage() {
    return (
        <div className="bg-background">
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A showcase of precision, durability, and design excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link href={`/projects`} key={project.id} className="group block">
                            <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-primary" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-primary" />
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="bg-secondary/30 py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
                    <p className="text-muted-foreground mb-8">
                        We'd love to hear about your vision. Let's build something great together.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Start a Conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
