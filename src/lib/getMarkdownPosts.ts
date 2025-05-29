// lib/getMarkdownPosts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src/data/posts')

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir)

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(postsDir, filename)
      const raw = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(raw)

      const processed = await remark().use(html).process(content)
      const contentHtml = processed.toString()

      return {
        slug,
        frontmatter: data,
        contentHtml,
      }
    })
  )

  return posts
}