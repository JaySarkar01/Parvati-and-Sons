import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='antialiased mt-15'>
      <Hero data={{
        heading: 'Custom ERP Solutions',
        subheading: 'Streamline your business processes with scalable, tailored ERP systems designed for efficiency and growth.',
      }} />
      </div>
  )
}

export default page