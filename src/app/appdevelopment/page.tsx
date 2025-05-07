import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='antialiased mt-15'>
      <Hero data={{
        heading: 'Next-Gen Application',
        subheading: 'Transform your ideas into intelligent, user-centric mobile or web apps that elevate your digital presence.',
      }} />
      </div>
  )
}

export default page