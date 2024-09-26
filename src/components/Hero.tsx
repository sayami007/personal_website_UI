import React from 'react'

const Hero = () => {

  return (
    <section className='bg-light h-svh flex max-w-screen-xl mx-auto p-4 items-center'>
      <div className='flex-1 flex gap-6 flex-col p-6'>
        <h1 id='mainHeader' className='text-5xl leading-12'>
          Hi, I'm Bibesh!
          <br />
          Web App Developer
          <br />
          Based in Kathmandu
        </h1>
        <div id='subHeader'>I'm a Kathmandu based web and mobile application developer with 6+ years of experience.</div>
        <div id='actionButton' className='flex gap-4'>
          <button className='min-w-36 bg-baseColor text-white p-3 rounded-md'>Got a project?</button>
          <button className='border p-3 rounded-md min-w-36'> Let's Talk</button>
        </div>
        <div id='contact'>
          <div id='number'>+977 984 960 7996</div>
          <div id='email'>bibesh.manandhar@gmail.com</div>
          <div id='Address'>Kathmandu, Nepal</div>
        </div>
      </div>
      <div className='bg-blue-200 flex-1'>
        Image
      </div>

    </section>
  )
}

export default Hero