import NewJobForm from "@/app/jobs/create-new/NewJobForm"

const CreateNewJob = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h2 className="text-3xl">New Job</h2>
      <NewJobForm />
    </div>
  )
}
export default CreateNewJob