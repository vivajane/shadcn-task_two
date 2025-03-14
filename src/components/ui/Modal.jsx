import React from 'react'

const Modal = ({setModal}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <p>Interview created successfully</p>
        <div onClick={setModal} className='text-center'>
        <button className='bg-blue-500 text-center text-white px-4 py-2 rounded-md mt-4'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
