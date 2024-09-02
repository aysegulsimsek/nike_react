import React from 'react'
import Hero from './sections/Hero'
import Popular from './sections/Popular'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Nav from './components/Nav'

const App = () => (
  <main className='relative'>
  <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
    <Popular/>
    </section>
    <section className='padding'>
      <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecialOffers/>
    </section>
    <section className='padding bg-pale-blue'>
      <CustomerReviews/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section>
    <section className='padding-t bg-black padding-x pb-8'>
      <Footer/>
    </section>

  </main>

)

export default App
