'use client'

import { useState } from "react"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import JobModal from "./JobModal";

// Job Details Tab
const JobDetails = ({ jobDetails, setJobDetails }) => {
  return (
  <div className='new_job_panel'>
    <form
    onSubmit={() => {}}
    className="flex flex-col w-7/12"
    >
      <label className="flex flex-col items-start my-3">
        <span>Client Name</span>
        <input
        value={jobDetails.ClientName ?? ''}
        onChange={(e) => setJobDetails({ ...jobDetails, ClientName: e.target.value})}
        placeholder='Name'
        required
        className="border border-gray rounded-md p-1 w-full"
        />
      </label>

      <span className="flex flex-col items-start my-3">
        <label>
          <span>Job Address</span>
        </label>
        <input
        value={jobDetails.LotUnit ?? ''}
        onChange={(e) => setJobDetails({ ...jobDetails, LotUnit: e.target.value })}
        placeholder='Lot/Unit (optional)'
        type="number"
        className="border border-gray rounded-md p-1 my-2 w-full"
        />
        <input
        value={jobDetails.StreetAddress ?? ''}
        onChange={(e) => setJobDetails({ ...jobDetails, StreetAddress: e.target.value })}
        placeholder='Street Address'
        required
        className="border border-gray rounded-md p-1 my-2 w-full"
        />
        <div>
          <input
          value={jobDetails.Suburb ?? ''}
          onChange={(e) => setJobDetails({ ...jobDetails, Suburb: e.target.value })}
          placeholder='Suburb'
          required
          className="border border-gray rounded-md p-1 my-2"
          />
          <select 
          disabled
          className="border border-gray rounded-md p-1.5 mx-2 bg-gray-200">
            <option>AU</option>
          </select>
        </div>
        <div>
          <select 
          className="border border-gray rounded-md p-1.5 my-1 mr-2"
          onChange={(e) => setJobDetails({ ...jobDetails, State: e.target.value })}
          defaultValue={'VIC'}
          >
            <option value='ACT'>ACT</option>
            <option value='NSW'>NSW</option>
            <option value='NT'>NT</option>
            <option value='QLD'>QLD</option>
            <option value='SA'>SA</option>
            <option value='TAS'>TAS</option>
            <option value='VIC'>VIC</option>
            <option value='WA'>WA</option>
          </select>
          <input
          value={jobDetails.Postcode ?? ''}
          onChange={(e) => setJobDetails({ ...jobDetails, Postcode: e.target.value })}
          placeholder='Postcode'
          type="number"
          className="border border-gray rounded-md p-1 my-1"
          />
        </div>
      </span>
      
      <label className="flex flex-col items-start my-3">
        <span>Job Details</span>
        <textarea
        value={jobDetails.Details ?? ''}
        onChange={(e) => setJobDetails({ ...jobDetails, Details: e.target.value})}
        placeholder='Details...'
        required
        className="border border-gray rounded-md p-1 my-2 w-full"
        />
      </label>

    </form>
</div>
  )
}

// Take Off Tab
const JobTakeOff = ({ modal, setModal, takeOff }) => {

  return (
    <div className='new_job_panel h-auto px-2'>
      <button 
      className="border border-none px-4 bg-green-500 text-white rounded-md p-2 m-1"
      onClick={() => {setModal(true)}}
      >
        Add room
      </button>
      {/* TABLE */}
      {
      takeOff.length > 0 ? ( 
      <table className="w-full mt-5 text-center">
        <thead className="bg-gray-200 px-2">
          <tr className="text-center">
            <th>Room</th>
            <th>Height (mm)</th>
            <th>Ceiling (L X W)</th>
            <th>Wall (L)</th>
            <th>Cornices (L)</th>
            <th>Images</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
        {
        takeOff.map((item, index) => (
          <tr key={`item_${index}`} className={index % 2 !== 0 && 'bg-gray-100'}>
            <td >{item.roomName}</td>
            <td>{item.roomHeight}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Edit X</td>
          </tr>
          ))
          }
        </tbody>
      </table>
      )
      :
      (
        <p className="my-5">No Rooms</p>
      )
}
    </div>
  )
}

// Render form
const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({})
  const [ takeOff, setTakeOff ] = useState([])
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
          //  TakeOff: [{
          //   roomName: takeOff.roomName,
          //   roomHeight: takeOff.roomHeight
          //  }]
          // jobDetails
          // takeOff
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
          <JobTakeOff modal={modal} setModal={setModal} takeOff={takeOff}/>
        </TabPanel>
      </Tabs>
      <nav className="w-full pr-36 border-t border-black-200 shadow-2xl shadow-black absolute bottom-0 h-20 flex items-center justify-end">
        <button 
        className="bg-red-400 py-2 px-20 text-white border rounded-md"
        onClick={handleSaveJob}
        >
          Save
        </button>
        </nav>
        {/* <JobModal modal={modal} setModal={setModal} takeOff={takeOff} setTakeOff={setTakeOff}/> */}
    </section>
    

  )
}
export default JobForm