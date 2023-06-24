import { useState } from 'react'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';


const JobModal = ({ modal, setModal, takeOff, setTakeOff }) => {
  const [ roomName, setRoomName ] = useState('')
  const [ roomHeight, setRoomHeight ] = useState(null)

  const handleCancel = () => {
    setModal(false)
    setRoomName('')
    setRoomHeight(null)
  }

  const handleAddAll = () => {
    setTakeOff([ 
      ...takeOff, 
      {roomName,
      roomHeight
    }])

    setModal(false)
    setRoomName('')
    setRoomHeight(null)
  }

    const roomButtons = [
        { item: 'Ceiling', color: 'bg-blue-400', onClick: 'onclick'},
        { item: 'Wall', color: 'bg-blue-400', onClick: 'onclick'},
        { item: 'Cornices', color: 'bg-blue-400', onClick: 'onclick'},
        { item: 'Images', color: 'bg-blue-400', onClick: 'onclick'},
        { item: 'Other', color: 'bg-blue-400', onClick: 'onclick'}
    ]

  return (
    <PureModal
    width='800px'
    header="Add Room"
    footer={
    <div className='flex w-full justify-center'>
      <button 
      className='bg-red-600 px-5 py-2 mx-5 text-white rounded-md'
      onClick={handleCancel}
      >Cancel</button>
      <button
      className='bg-green-600 px-5 py-2 mx-5 text-white rounded-md'
      onClick={handleAddAll}
      >Add All</button>
    </div>
  }
  isOpen={modal}
  closeButton="X"
  closeButtonPosition="bottom"
  onClose={() => {
    setModal(false);
    return true;
  }}
>
    <form
        onSubmit={() => {}}
        className="flex flex-col items-center"
    >
        <label className="flex flex-col items-start my-3 w-1/2">
            <span>Room Name</span>
            <input
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder='Name'
            required
            className="border border-gray rounded-md p-1 w-full"
            />
      </label>
        <label className="flex flex-col items-start my-3 w-1/2">
            <span>Room Height</span>
            <input
            value={roomHeight}
            onChange={(e) => setRoomHeight(e.target.value)}
            placeholder='Height'
            required
            type="number"
            className="border border-gray rounded-md p-1 w-full"
            />
      </label>
        <section className='flex w-10/12 justify-around my-5'>
            {roomButtons.map((room, index) => (
                <button 
                key={`button ${index}`}
                className={`rounded-md ${room.color} text-white py-2 px-4`}
                >
                    Add {room.item}
                </button>
            ))}
        </section>
    </form>
</PureModal>
  )
}
export default JobModal