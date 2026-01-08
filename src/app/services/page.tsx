import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Building2, Home, Hammer, Ruler, HardHat, TrendingUp, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
    title: "Services | Vanguard Construct",
    description: "Comprehensive construction services for commercial and residential needs.",
};

const services = [
    {
        icon: Building2,
        title: "Commercial Construction",
        description: "From office towers to retail complexes, we manage large-scale builds with precision timelines and strict budget adherence.",
        features: ["Office Buildings", "Retail Centers", "Industrial Facilities", "Mixed-Use Developments"],
        color: "from-blue-500/20 to-primary/20"
    },
    {
        icon: Home,
        title: "Luxury Residential",
        description: "Bespoke home building services for clients who demand perfection. We turn dream homes into reality.",
        features: ["Custom Homes", "Estate Properties", "Smart Home Integration", "High-End Finishes"],
        color: "from-primary/20 to-amber-500/20"
    },
    {
        icon: Hammer,
        title: "Renovation & Remodel",
        description: "Revitalize your property. We specialize in complex structural renovations and modern aesthetic updates.",
        features: ["Interior Renovations", "Structural Updates", "Historic Restoration", "Space Optimization"],
        color: "from-accent/20 to-orange-500/20"
    },
    {
        icon: Ruler,
        title: "Design-Build",
        description: "A seamless approach where we handle both design and construction, streamlining communication and reducing costs.",
        features: ["3D Visualization", "Architectural Design", "Engineering", "Single Point of Contact"],
        color: "from-purple-500/20 to-primary/20"
    },
    {
        icon: HardHat,
        title: "Construction Management",
        description: "Expert oversight for your construction project, ensuring safety, quality, and efficiency at every stage.",
        features: ["Project Planning", "Budget Control", "Quality Assurance", "Timeline Management"],
        color: "from-green-500/20 to-primary/20"
    },
    {
        icon: TrendingUp,
        title: "Sustainable Building",
        description: "LEED-certified construction practices and energy-efficient retrofitting for a greener future.",
        features: ["LEED Certification", "Green Materials", "Energy Efficiency", "Sustainable Design"],
        color: "from-emerald-500/20 to-green-500/20"
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-background">
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We offer a full spectrum of construction services, tailored to meet the unique demands of each project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={service.title} className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <CardHeader className="relative">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <Sparkles className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                                </div>
                                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-base leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="relative">
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild variant="ghost" className="w-full group-hover:bg-primary/10 justify-between">
                                    <Link href="/contact">
                                        Get a Quote
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardContent>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Card>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-secondary rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Our team is ready to discuss your project requirements and help you find the best solution.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
