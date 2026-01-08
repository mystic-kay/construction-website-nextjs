import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
    slug: string
    title: string
    date: string
    formattedDate: string
    excerpt: string
    coverImage?: string
    content: string
}

export function getSortedPostsData(): BlogPost[] {
    // Create dir if not exists (for initial run)
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            title: data.title || 'Untitled',
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            formattedDate: data.date ? format(new Date(data.date), 'LLLL d, yyyy') : '',
            excerpt: data.excerpt || '',
            coverImage: data.coverImage || '',
        }
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getPostData(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            title: data.title || 'Untitled',
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            formattedDate: data.date ? format(new Date(data.date), 'LLLL d, yyyy') : '',
            excerpt: data.excerpt || '',
            coverImage: data.coverImage || '',
        }
    } catch (error) {
        return null
    }
}
