export type Post = {
  slug: string
  frontmatter: {
    title: string
    date: string
  }
  preview: string
  contentHtml: string
  contentRaw: string
}
