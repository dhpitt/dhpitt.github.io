import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Post } from '@/types/post'

const postsDir = path.join(process.cwd(), 'src/data/posts')

function getPostPreviewText(data: matter.GrayMatterOption<string, any>, content: string): string {
  return data.preview || (content.split('\n').find(line => line.trim())?.slice(0, 100) || '') + '...'
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDir)

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(raw)

    return {
      slug,
      frontmatter: {
        title: data.title,
        date: data.date,
      },
      preview: getPostPreviewText(data, content),
      contentHtml: '',
      contentRaw: content
    }
  })

  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    frontmatter: {
      title: data.title,
      date: data.date,
    },
    preview: getPostPreviewText(data, content),
    contentHtml,
    contentRaw: content
  }
}
