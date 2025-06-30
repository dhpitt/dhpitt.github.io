// app/blog/page.tsx
import { getAllPosts } from '@/lib/getMarkdownPosts'
import PostPreview from '@/components/postpreview'
import {Post} from '@/types/post'

export const metadata = {
  title: "David's thoughts",
}

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">David's blog</h1>
      <p>Thoughts are my own, et cetera</p>
      <br/>
      <div className="flex flex-col gap-5">
        {posts.map((post) => {
          return (
            <PostPreview
                key={post.slug}
                post={post}
            />
          )
        })}
      </div>
    </div>
  )
}