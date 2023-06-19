'use client'

import { useState } from "react"

const NewJobForm = () => {

  const [newJob, setNewJob] = useState({})

  return (
    <section className="flex flex-col justify-center items-center py-5">
      <h1>New Job Form</h1>
      <form
      onSubmit={() => {}}
      className=""
      >
        <h2>Account & Reference</h2>
        <label className="flex flex-col items-start my-3">
          <span>Reference</span>
          <input
          value={newJob.reference}
          onChange={(e) => setNewJob({ ...newJob, reference: e.target.value})}
          placeholder='Reference'
          required
          className="border border-gray rounded-md px-1"
          />
        </label>

        <label className="flex flex-col items-start my-3">
          <span>Account</span>
          <input
          value={newJob.account}
          onChange={(e) => setNewJob({ ...newJob, account: e.target.value})}
          placeholder='Account'
          required
          className="border border-gray rounded-md px-1"
          />
        </label>

        <h2>Job Details</h2>
        

      </form>
    </section>
  )
}
export default NewJobForm