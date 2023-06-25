'use client'

import { useState } from "react"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// components
import JobDetails from './JobDetails'
import JobTakeOff from "./JobTakeOff";

// Render form
const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({})
  const [ takeOff, setTakeOff ] = useState([{}])
  
  const [modal, setModal] = useState(false);

  const { data: session } = useSession()
  const router = useRouter()

  const handleSaveJob = async (e) => {
    console.log('JOB DETAILS ----- ', jobDetails)
    console.log('TAKE OFF -------- ', takeOff)
    console.log(session?.user.id)

    e.preventDefault()

    // setSubmitting(true)

    try {
      const response = await fetch('/api/jobs/new', {
        method: 'POST',
        body: JSON.stringify({
           AccountNo: session?.user.id,
           ClientName: jobDetails.ClientName,
           DeliveryAddress: {
            LotUnit: jobDetails.LotUnit,
            StreetAddress: jobDetails.StreetAddress,
            Suburb: jobDetails.Suburb,
            State: jobDetails.State,
            Postcode: jobDetails.Postcode,
            Country: jobDetails.Country
           },
           JobDetails: jobDetails.Details,
           TakeOff: takeOff 
          })
      })

      if(response.ok) {
        router.push('/jobs')
      }
    } catch (error) {
      console.log(error)
    } finally {
      // setSubmitting(false)
    }
  }

  return (
      <section className="flex flex-col justify-center items-center py-5 w-full">
        <Tabs className={'new_job_tab'} >
        <TabList>
          <Tab>Job Details</Tab>
          <Tab>Take Off</Tab>
        </TabList>

        <TabPanel>
          <JobDetails jobDetails={jobDetails} setJobDetails={setJobDetails}/>
        </TabPanel>
        <TabPanel>
          <JobTakeOff modal={modal} setModal={setModal} takeOff={takeOff} setTakeOff={setTakeOff}/>
        </TabPanel>
      </Tabs>
      <nav className="w-full pr-36 border-t border-black-200 shadow-2xl shadow-black absolute bottom-0 h-20 flex items-center justify-end">
        <button 
        className="bg-red-400 py-2 px-12 text-white border rounded-md"
        onClick={handleSaveJob}
        >
          Save Job
        </button>
        </nav>
    </section>
    

  )
}
export default JobForm