import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
    try {
        const post = await request.json()

        const { slug, title, date, excerpt, category, author, coverImage, content } = post

        // Create frontmatter
        const frontmatter = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
${category ? `category: "${category}"` : ''}
${author ? `author: "${author}"` : ''}
${coverImage ? `coverImage: "${coverImage}"` : ''}
---

${content}
`

        // Ensure content directory exists
        const contentDir = path.join(process.cwd(), 'src', 'content', 'blog')
        if (!fs.existsSync(contentDir)) {
            fs.mkdirSync(contentDir, { recursive: true })
        }

        // Write file
        const filePath = path.join(contentDir, `${slug}.md`)
        fs.writeFileSync(filePath, frontmatter, 'utf8')

        return NextResponse.json({ success: true, slug })
    } catch (error) {
        console.error('Error saving post:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to save post' },
            { status: 500 }
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const slug = searchParams.get('slug')

        if (!slug) {
            return NextResponse.json(
                { success: false, error: 'Slug is required' },
                { status: 400 }
            )
        }

        const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.md`)

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
            return NextResponse.json({ success: true })
        } else {
            return NextResponse.json(
                { success: false, error: 'Post not found' },
                { status: 404 }
            )
        }
    } catch (error) {
        console.error('Error deleting post:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to delete post' },
            { status: 500 }
        )
    }
}
