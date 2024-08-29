import React from 'react'
import { AppText, socialNetwork } from '../Constants'

const Footer = () => {
  return (
    <div className='bg-gray-200 mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
     
        <h1 className='text-gray-500 text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  )
}

export default Footer