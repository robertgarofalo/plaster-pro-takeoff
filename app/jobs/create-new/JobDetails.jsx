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
  
export default JobDetails