'use client'

import { useRouter } from "next/navigation"

const Jobs = () => {
    
    const router = useRouter()

  return (
    <div>
        <h2>Jobs</h2>
        <button
        onClick={() => {
            router.push('/jobs/create-new')
        }}
        >
            Create New
        </button>
    </div>
  )
}
export default Jobs