import React from 'react'
import logo from '../../assets/WebQmedia-Official-Logo.svg'
import fb from '../../assets/fblogo.webp'
import insta from '../../assets/logo-ig-png-32464.png'
import google from '../../assets/google-logo-9808.png'
function home() {
  return (
    <div className=' flex flex-col justify-center items-center w-full h-screen bg-white'>
      <img src={logo} alt="" />
      <h2 className='text-gray-500 text-3xl font-bold'>Ads Mockup</h2>
      <div className='flex gap-3 mt-2'>
        <img className='w-5 h-5' src={fb}alt="" />
        <img className='w-5 h-5' src={insta} alt="" />
        <img className='w-5 h-5' src={google} alt="" />
      </div>
    </div>
  )
}

export default home
