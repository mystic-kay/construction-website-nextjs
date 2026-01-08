'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Save, X, FileText, Calendar, Tag } from 'lucide-react'

interface BlogPost {
    slug: string
    title: string
    date: string
    excerpt: string
    coverImage?: string
    category?: string
    author?: string
    content: string
}

export default function BlogAdmin() {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [isCreating, setIsCreating] = useState(false)
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        category: '',
        author: 'Vanguard Construct',
        coverImage: '',
        content: '',
    })

    useEffect(() => {
        // In a real app, fetch posts from API
        // For now, we'll use mock data
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        // Mock data - in production, this would be an API call
        const mockPosts: BlogPost[] = [
            {
                slug: 'sustainable-construction',
                title: 'The Future of Sustainable Construction',
                date: new Date().toISOString(),
                excerpt: 'Exploring eco-friendly building practices',
                category: 'Sustainability',
                author: 'Vanguard Construct',
                content: 'Full content here...'
            }
        ]
        setPosts(mockPosts)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const slug = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

        const newPost: BlogPost = {
            slug,
            title: formData.title,
            date: new Date().toISOString(),
            excerpt: formData.excerpt,
            category: formData.category,
            author: formData.author,
            coverImage: formData.coverImage,
            content: formData.content,
        }

        if (editingPost) {
            // Update existing post
            setPosts(posts.map(p => p.slug === editingPost.slug ? newPost : p))
        } else {
            // Create new post
            setPosts([newPost, ...posts])
        }

        // Reset form
        setFormData({
            title: '',
            excerpt: '',
            category: '',
            author: 'Vanguard Construct',
            coverImage: '',
            content: '',
        })
        setIsCreating(false)
        setEditingPost(null)

        // In production, save to file system via API route
        await savePost(newPost)
    }

    const savePost = async (post: BlogPost) => {
        // This would call an API endpoint to save the markdown file
        try {
            const response = await fetch('/api/blog/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post),
            })
            if (response.ok) {
                alert('Post saved successfully!')
            }
        } catch (error) {
            console.error('Error saving post:', error)
            alert('Error saving post. Check console for details.')
        }
    }

    const handleEdit = (post: BlogPost) => {
        setEditingPost(post)
        setFormData({
            title: post.title,
            excerpt: post.excerpt,
            category: post.category || '',
            author: post.author || 'Vanguard Construct',
            coverImage: post.coverImage || '',
            content: post.content,
        })
        setIsCreating(true)
    }

    const handleDelete = async (slug: string) => {
        if (confirm('Are you sure you want to delete this post?')) {
            setPosts(posts.filter(p => p.slug !== slug))
            // In production, delete via API
        }
    }

    const handleCancel = () => {
        setIsCreating(false)
        setEditingPost(null)
        setFormData({
            title: '',
            excerpt: '',
            category: '',
            author: 'Vanguard Construct',
            coverImage: '',
            content: '',
        })
    }

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground mb-2">Blog Management</h1>
                        <p className="text-muted-foreground">Create and manage your blog posts</p>
                    </div>
                    <div className="flex gap-4">
                        <Button asChild variant="outline">
                            <Link href="/blog">View Blog</Link>
                        </Button>
                        {!isCreating && (
                            <Button onClick={() => setIsCreating(true)} className="gap-2">
                                <Plus className="w-4 h-4" />
                                New Post
                            </Button>
                        )}
                    </div>
                </div>

                {/* Create/Edit Form */}
                {isCreating && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 p-8 rounded-2xl bg-card border border-border"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-foreground">
                                {editingPost ? 'Edit Post' : 'Create New Post'}
                            </h2>
                            <Button variant="ghost" size="sm" onClick={handleCancel}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        <FileText className="w-4 h-4 inline mr-2" />
                                        Title *
                                    </label>
                                    <Input
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="Post title"
                                        className="bg-secondary border-border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        <Tag className="w-4 h-4 inline mr-2" />
                                        Category
                                    </label>
                                    <Input
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        placeholder="e.g., Construction, Design"
                                        className="bg-secondary border-border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Excerpt *
                                </label>
                                <Textarea
                                    required
                                    value={formData.excerpt}
                                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                    placeholder="Brief description of the post"
                                    rows={3}
                                    className="bg-secondary border-border"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Cover Image URL
                                </label>
                                <Input
                                    value={formData.coverImage}
                                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                                    placeholder="/images/blog/post-image.jpg"
                                    className="bg-secondary border-border"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Author
                                </label>
                                <Input
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    placeholder="Author name"
                                    className="bg-secondary border-border"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Content * (Markdown supported)
                                </label>
                                <Textarea
                                    required
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    placeholder="Write your post content in Markdown..."
                                    rows={15}
                                    className="bg-secondary border-border font-mono text-sm"
                                />
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" className="gap-2">
                                    <Save className="w-4 h-4" />
                                    {editingPost ? 'Update Post' : 'Publish Post'}
                                </Button>
                                <Button type="button" variant="outline" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {/* Posts List */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground mb-6">All Posts ({posts.length})</h2>

                    {posts.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
                            <p>No posts yet. Create your first post!</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{post.title}</h3>
                                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                        <div className="flex gap-4 text-sm text-muted-foreground">
                                            {post.category && (
                                                <span className="flex items-center gap-1">
                                                    <Tag className="w-3 h-3" />
                                                    {post.category}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 ml-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleEdit(post)}
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(post.slug)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
