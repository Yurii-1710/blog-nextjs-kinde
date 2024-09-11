import Form from "@/components/Form"
import PostList from "@/components/PostList"
import { Suspense } from "react"


const Page = async () => {
  return (
    <main className="text-center pt-32 px-6">
      <h1 className="mb-5 text-4xl font-bold">All posts</h1>

      <Suspense fallback="Loading ...">
        <PostList />
      </Suspense>

      <Form />

    </main>
  )
}

export default Page