import React from 'react'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
const UserHome = () => {
  return (
    <div className="w-screen p-5 h-screen bg-black text-white flex flex-row flex-wrap">
 <div className="w-1/2  p-10 flex flex-col items-center justify-center flex-wrap">
  <h2 className="text-2xl font-semibold mb-8 text-center">Ride Anywhere with RiderIn</h2>
   <LocalTaxiIcon style={{fontSize:"3rem", margin:"1rem"}}></LocalTaxiIcon>
  <div className="flex flex-col items-center justify-center w-full gap-5">
    <input
      type="text"
      placeholder="Source "
      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Destination"
      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button className="w-1/2 px-4 py-2 relative m-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
      Find Ride
    </button>
  </div>
  <div className="w-1/2 p-5 flex-grow" >
    <img className='w-150 ' src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" />
  </div>
</div>

  )
}

export default UserHome