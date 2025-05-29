import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src/data/posts')

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  try {
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  console.log(contentHtml)
    return {
        slug,
        frontmatter: data,
        contentHtml,
        contentRaw: content,
    }
  } catch (err) {
    console.error(`Error processing markdown for slug: ${slug}`, err)
    return { slug, contentHtml: '<p>Error rendering post</p>', frontmatter: data, }
  }

}

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir)

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      return await getPostBySlug(slug)
    })
  )

    posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

    return posts
}
