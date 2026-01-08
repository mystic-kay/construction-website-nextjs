import { getPostData, getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.title} | Vanguard Construct`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section with Cover Image */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-secondary via-secondary/80 to-muted">
                {post.coverImage ? (
                    <>
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                        <div className="absolute inset-0 bg-[url('/images/backgrounds/grid-pattern.svg')] opacity-10" />
                    </div>
                )}

                {/* Back Button - Floating */}
                <div className="absolute top-8 left-4 sm:left-8 z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 text-foreground hover:bg-background hover:border-primary/50 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Back to Blog</span>
                        <span className="sm:hidden">Back</span>
                    </Link>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                                <Calendar className="w-4 h-4 text-primary" />
                                <time dateTime={post.date}>{post.formattedDate}</time>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>8 min read</span>
                            </div>
                            {post.excerpt && (
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                                    <User className="w-4 h-4 text-primary" />
                                    <span>{(post as any).author || 'Vanguard Construct'}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Excerpt */}
                {post.excerpt && (
                    <div className="mb-12 p-6 rounded-2xl bg-secondary/30 border-l-4 border-primary">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                            {post.excerpt}
                        </p>
                    </div>
                )}

                {/* Article Body with Enhanced Typography */}
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                    prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10 prose-h2:text-primary prose-h2:border-b prose-h2:border-border prose-h2:pb-3
                    prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-primary/90
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-bold
                    prose-ul:my-6 prose-ul:space-y-2
                    prose-ol:my-6 prose-ol:space-y-2
                    prose-li:text-muted-foreground prose-li:leading-relaxed
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-4
                    prose-blockquote:bg-secondary/30 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-code:text-primary prose-code:bg-secondary/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                    prose-img:rounded-xl prose-img:shadow-lg
                ">
                    <MDXRemote source={post.content} />
                </div>

                {/* Divider */}
                <div className="my-16 flex items-center gap-4">
                    <div className="h-px bg-border flex-1" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="h-px bg-border flex-1" />
                </div>

                {/* Call to Action */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
                    <p className="text-muted-foreground mb-6">
                        Let's discuss how Vanguard Construct can bring your vision to life with industry-leading expertise and innovation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
                    >
                        Get in Touch
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                </div>

                {/* Back to Blog */}
                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to all articles
                    </Link>
                </div>
            </article>
        </div>
    );
}
