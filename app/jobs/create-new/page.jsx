import JobForm from "@/app/jobs/create-new/JobForm"

const CreateNewJob = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h2 className="text-3xl">New Job</h2>
      <JobForm />
    </div>
  )
}
export default CreateNewJob