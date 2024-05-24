import React from 'react'
import bmi from './assatis/bmi.jpg'
const LeftContainer = () => {
  return (
    <div className='bg-purple-500 h-1/4 sm:h-full sm:w-1/2'>
        <img src={bmi} className='h-full w-full' alt="" />
    </div>
  )
}

export default LeftContainer
