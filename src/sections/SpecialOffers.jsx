import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import NewBtn from '../components/NewBtn'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        
          <span className='nike inline-block mt-3 pt-3 font-montserrat'>Special</span>
         
         <span> Offer</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text select-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible saving, we offer unparalleled value that sets us apart.</p>
        <p className='mt-6 lg:max-w-lg info-text select-text'>Navigate a realm of possibilities designed to fulfill your unique desires, suprassing the lofties expactations. Your journey with us nothing short of exceptioanl.</p>
        <div className="mt-5 flex gap-3 items-center">
          <Button label="View Details" />
          <NewBtn label='Learn More'rounded bgRed iconURL={arrowRight}/>
        </div>
      </div>
   </section>
  )
}

export default SpecialOffers
