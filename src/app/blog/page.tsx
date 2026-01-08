import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Blog | Vanguard Construct",
    description: "Insights and news from the construction industry.",
};

export default function BlogIndex() {
    const posts = getSortedPostsData();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative py-24 overflow-hidden bg-secondary/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            Insights & Updates
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Latest from <span className="text-gradient">Vanguard</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            News, trends, and project updates from our expert team. Stay informed about the latest in construction innovation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {posts.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-muted-foreground">No blog posts available yet.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                            >
                                {/* Featured Image */}
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="aspect-video w-full bg-gradient-to-br from-secondary via-secondary/80 to-muted relative overflow-hidden">
                                        {post.coverImage ? (
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                                                <div className="absolute inset-0 bg-[url('/images/backgrounds/grid-pattern.svg')] opacity-10" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-6xl font-bold text-primary/20">
                                                        {post.title.substring(0, 1)}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="flex flex-1 flex-col justify-between p-6">
                                    <div className="space-y-4">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <time dateTime={post.date} className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-primary" />
                                                {post.formattedDate}
                                            </time>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-primary" />
                                                5 min read
                                            </span>
                                        </div>

                                        {/* Title & Excerpt */}
                                        <div className="space-y-3">
                                            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                                        >
                                            Read article
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
