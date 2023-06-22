'use client'

import { useRouter } from "next/navigation"

const Jobs = () => {
    
    const router = useRouter()

  return (
    <div className="flex flex-col items-center mt-5">
        <h2 className="text-2xl">Jobs</h2>
        <button
        onClick={() => {
            router.push('/jobs/create-new')
        }}
        className="border border-gray rounded-md px-6 py-2 bg-black text-white mt-5"
        >
            Create New
        </button>
    </div>
  )
}
export default Jobs