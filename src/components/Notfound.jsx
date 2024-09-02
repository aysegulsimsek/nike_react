import React from 'react'
import { Link } from 'react-router-dom';
import NewBtn from './NewBtn';
const Notfound = () => {
  return (
      <div className='notFound justify-center flex items-center p-5 ' >
          <div className='bg-white-400 w-[500px] max-sm:h-2/5 max-xl:h-2/4 xl:h-2/4 filter blur-md p-10 max-sm:px-0 max-lg:h-2/5 max-md:h-2/5 '>    </div>
          <div className='bg-transparent bg-opacity-55 text-white  max-sm:h-2/5 max-lg:h-2/5  max-xl:h-2/4 xl:h-2/4 mt-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 flex flex-col justify-start items-center max-md:h-2/5 max-sm:gap-5'>
              <h1 className='w-[404px] max-sm:text-4xl  font-palanquin text-8xl font-semibold text-center text-slate-900'>Error 404</h1>
              <h1 className='font-palanquin max-sm:text-2xl text-3xl font-semibold text-center text-slate-900 '>Aradığınız sayfa bulunamadı</h1>
              <Link to={"/"}>
                <NewBtn label="Home" scale/>
              
              </Link>
              </div>
           
    </div>
    )
}

export default Notfound
