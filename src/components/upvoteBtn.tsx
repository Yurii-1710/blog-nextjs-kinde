'use client'

import { useState } from "react"

const UpvoteBtn = () => {
  const [upvoteCount, setUpvoteCount] = useState(0)

  return (
    <div>
      <button
        onClick={() => setUpvoteCount(upvoteCount + 1)}
        className='bg-blue-500 text-white rounded-lg px-4 py-2 my-8'>
        Upvote {upvoteCount}
      </button>
    </div>
  )
}

export default UpvoteBtn