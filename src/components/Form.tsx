import { createPost } from "@/actions/actions"

const Form = () => {
  return (
    <div>
      <form action={createPost}
        className='flex flex-col space-x-2 mt-10 mx-auto gap-6'
      >
        <input
          type="text"
          name='title'
          placeholder='Title'
          required
          className='border h-full rounded px-4 py-2'
        />
        <textarea
          name="body"
          placeholder="Content"
          className="border rounded px-4 py-2"
          rows={5}
          required
        />

        <button className='bg-green-500 rounded-lg px-4 py-2 text-white'>Submit</button>
      </form>

    </div >
  )
}

export default Form