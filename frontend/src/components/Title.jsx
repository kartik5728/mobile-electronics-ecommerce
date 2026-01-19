import React from 'react'

const Title = ({ text1, text2 = ""}) => {
  return (
   
    <div className='flex items-center mb-3'>
        <h1 className='text-blue-950 text-3xl'>{text1} <span className="text-gray-700 font-medium">{text2}</span></h1>
        <p className="w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700"></p>
    </div>
   
  )
}

export default Title
