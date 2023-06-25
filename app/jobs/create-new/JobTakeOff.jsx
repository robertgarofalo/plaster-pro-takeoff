import { useState } from 'react'

const JobTakeOff = ({ modal, setModal, takeOff, setTakeOff }) => {
    const [ wallInputFields, setWallInputFields ] = useState([{ wallLength: ''}])
    // console.log(wallInputFields)
  
    const handleChange = (i, e, item) => {
      if (item === 'wall'){
        const newWallInputFields = [...wallInputFields]
        newWallInputFields[i][`wallLength`] = e.target.value
        setWallInputFields(newWallInputFields) 
        console.log(newWallInputFields)
      }
      // FIX
      // https://sadam-bapunawar.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
    }
  
    const handleAddField = (item) => {
      if (item === 'wall'){
        setWallInputFields([...wallInputFields, {wallLength: ''}])
      }
    }
  
    const handleRemoveField = (i, item) => {
      if (item === 'wall'){
        let newWallInputFields = [...wallInputFields];
        newWallInputFields.splice(i, 1);
        setWallInputFields(newWallInputFields)
      }
  }
  
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
        // takeOff.length > 0 ? 
        ( 
        <table className="w-full mt-5">
          <thead className="bg-gray-200 px-2">
            <tr className="text-center">
              <th>Room</th>
              <th>Height <br /> (mm)</th>
              <th>Ceiling <br /> (L X W)</th>
              <th>Wall (L)</th>
              <th>Cornices (L)</th>
              <th>Images</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className='align-top'>
            <tr>
              <td>
                <input
                value={takeOff.roomName}
                onChange={(e) => setTakeOff({...takeOff, roomName: e.target.value})}
                placeholder='Name'
                required
                className="border border-gray rounded-md p-1 w-full"
                />
              </td>
              <td>
                <input
                value={takeOff.roomHeight}
                onChange={(e) => setTakeOff({...takeOff, roomHeight: e.target.value})}
                placeholder='Height'
                type="number"
                required
                className="border border-gray rounded-md p-1"
                />
                </td>
              <td>
              <input
                value={takeOff.ceiling}
                onChange={(e) => setTakeOff({...takeOff, ceiling: e.target.value})}
                placeholder='Ceiling'
                className="border border-gray rounded-md p-1"
                />
              </td>
              <td className="flex">
                <div className="flex flex-col items-center">
                    {wallInputFields.map((wall, index) => (
                    <div className="flex">
                        <input 
                        key={index}
                        value={wall.wallLength || ''}
                        placeholder="Wall"
                        className="border border-gray rounded-md p-1"
                        onChange={e => handleChange(index, e, 'wall') }
                        />
                      <button 
                      onClick={() => handleRemoveField(index, 'wall')}
                      className="bg-red-500 px-3 text-white">
                        X
                      </button>
                </div>
                    ))}
                    <button 
                    onClick={() => handleAddField('wall')}
                    className="bg-green-100 my-2 px-3 py-1"
                    >
                      Add wall
                    </button>
                </div>
              </td>
              <td></td>
              <td></td>
              <td>Edit X</td>
            </tr>
          </tbody>
        </table>
        )
        // :
        // (
        //   <p className="my-5">No Rooms</p>
        // )
  }
      </div>
    )
  }

export default JobTakeOff