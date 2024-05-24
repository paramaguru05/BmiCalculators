import React from 'react'

const Footer = ({bmiVal,status}) => {
  return (
    <footer className=' bg-blue-600 h-1/4 flex text-white  flex-col items-center justify-center sm:w-full'>
        {bmiVal && <div className=' font-bold'><p>BMI: <span>{bmiVal}</span></p>
            <p > Status: <span className=' font-bold'>{status}</span></p>
        </div>}
    </footer>
  )
}

export default Footer