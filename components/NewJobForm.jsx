'use client'

import { useState } from "react"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobDetails = () => {
  const [newJob, setNewJob] = useState({
    DeliveryAddress: {}
  })

  return (
  <div className='new_job_panel'>
    <h1>New Job</h1>
    <form
    onSubmit={() => {}}
    className="flex flex-col w-7/12"
    >
      <label className="flex flex-col items-start my-3">
        <span>Client Name</span>
        <input
        value={newJob.clientName}
        onChange={(e) => setNewJob({ ...newJob, clientName: e.target.value})}
        placeholder='Name'
        required
        className="border border-gray rounded-md p-1 w-full"
        />
      </label>

      <label className="flex flex-col items-start my-3">
        <span>Job Address</span>
        <input
        value={newJob.DeliveryAddress.LotUnit}
        onChange={(e) => setNewJob({ ...newJob, DeliveryAddress: { LotUnit: e.target.value }})}
        placeholder='Lot/Unit (optional)'
        required
        className="border border-gray rounded-md p-1 my-2 w-full"
        />
        <input
        value={newJob.DeliveryAddress.StreetAddress}
        onChange={(e) => setNewJob({ ...newJob, DeliveryAddress: { StreetAddress: e.target.value }})}
        placeholder='Street Address'
        required
        className="border border-gray rounded-md p-1 my-2 w-full"
        />
        <div>
          <input
          value={newJob.DeliveryAddress.Suburb}
          onChange={(e) => setNewJob({ ...newJob, DeliveryAddress: { Suburb: e.target.value }})}
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
          onChange={(e) => setNewJob({ ...newJob, DeliveryAddress: { Suburb: e.target.value }})}
          >
            <option>ACT</option>
            <option>NSW</option>
            <option>NT</option>
            <option>QLD</option>
            <option>SA</option>
            <option>TAS</option>
            <option selected>VIC</option>
            <option>WA</option>
          </select>
          <input
          value={newJob.DeliveryAddress.Postcode}
          onChange={(e) => setNewJob({ ...newJob, DeliveryAddress: { Postcode: e.target.value }})}
          placeholder='Postcode'
          required
          className="border border-gray rounded-md p-1 my-1"
          />
        </div>
      </label>
      
      <label className="flex flex-col items-start my-3">
        <span>Job Details</span>
        <textarea
        value={newJob.JobDetails}
        onChange={(e) => setNewJob({ ...newJob, JobDetails: e.target.value})}
        placeholder='Details...'
        required
        className="border border-gray rounded-md p-1 my-2 w-full"
        />
      </label>

    </form>
</div>
  )
}

const JobTakeOff = () => {
const [ takeOff, setTakeoff ] = useState([])

  return (
    <div className='new_job_panel'>
      <p>Take off</p>
      <button className="border border-none px-4 bg-green-500 text-white rounded-md p-2 m-1">
        Add room
      </button>
    </div>
  )
}

const NewJobForm = () => {

  return (
      <section className="flex flex-col justify-center items-center py-5 w-full">
        <Tabs className={'new_job_tab'}>
        <TabList>
          <Tab>Job Details</Tab>
          <Tab>Take Off</Tab>
        </TabList>

        <TabPanel>
          <JobDetails />
        </TabPanel>
        <TabPanel>
          <JobTakeOff />
        </TabPanel>
      </Tabs>
      <nav className="w-full pr-36 border-t border-black-200 shadow-2xl shadow-black absolute bottom-0 h-20 flex items-center justify-end">
        <button 
        className="bg-red-400 py-2 px-20 text-white border rounded-md"
        >
          Save Job
        </button>
        </nav>
    </section>

  )
}
export default NewJobForm