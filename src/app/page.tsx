import { Hero } from "@/components/sections/hero";
import { ServiceHighlights } from "@/components/sections/service-highlights";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { StatsCounter } from "@/components/sections/stats-counter";
import CoreValues from "@/components/sections/core-values";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <StatsCounter />
      <CoreValues />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </>
  );
}
