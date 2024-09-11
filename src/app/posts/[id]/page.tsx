import UpvoteBtn from "@/components/upvoteBtn"
import prisma from "@/lib/db"
import { notFound } from "next/navigation"


const Post = async ({ params }: { params: { id: string } }) => {

  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) }
  })
  if (!post) {
    notFound()
  }

  return (
    <div className='px-8 pt-24 text-center'>
      <h1 className='text-4xl font-semibold mb-6'>Post {post?.title}</h1>
      <p className='max-w-[700px] mx-auto'>{post?.body}</p>

      <UpvoteBtn />
    </div>
  )
}

export default Post