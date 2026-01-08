'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Vision?</h2>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                    Contact us today for a consultation and let's bring your project to life with precision and excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary" className="text-primary font-bold">
                        <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
