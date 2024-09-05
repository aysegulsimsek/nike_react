import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {
  const navigate = useNavigate()
  return (
    <section className='max-container flex justify-evenly max-md:justify-center items-center max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold '>Sign Up from 
        <span className='nike inline-block mx-3 mt-3 pt-3 font-montserrat'>Updates</span>
        & Newslatter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full '>
        <input type="text" placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full' onClick={()=>navigate("/authantication")}>

          <Button label='Sign Up' fullWidth/>
        </div>
      </div>
  </section>
  )
}

export default Subscribe
