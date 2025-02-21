import React from 'react'
import myImage from '../assets/explore-katskhi-holidays.jpg'; 

const Contact:React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={myImage} alt="Description" className="w-full h-full object-cover" />
    </div>
  )
}

export default Contact