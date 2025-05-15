import Hero from '@/components/Hero'
import React from 'react'
import TestimonialSection from '@/components/ClientResultsDisplay';

const testimonials = [
  {
    metric: '45%',
    title: 'Operational Efficiency',
    description: 'GreenLeaf Industries improved operational efficiency by 45% after integrating our ERP system.',
    company: 'GREENLEAF INDUSTRIES',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfBAgTdR9yBtGdz404amtV_ejE4FyOGHrg&s',
  },
  {
    metric: '30%',
    title: 'Inventory Accuracy',
    description: 'UrbanMart reduced stock mismatches and increased inventory accuracy by 30%.',
    company: 'URBANMART',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7ViWKDu371o9FnxoxSoIYcWf9SMnsmB4A&s',
  },
  {
    metric: '70%',
    title: 'Reporting Speed',
    description: 'EcoBuild now generates financial reports 70% faster with our ERP reporting module.',
    company: 'ECOBUILD',
    logo: 'https://cystercare.com/wp-content/uploads/2023/01/Logo.png',
  },
  {
    metric: '100%',
    title: 'Cross-Department Sync',
    description: 'AlphaTextiles achieved seamless synchronization across departments using our ERP solution.',
    company: 'ALPHATEXTILES',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_d_Bl0xBroCEv0rPzzXj_OZltQZ2ApE9jg&s',
  },
];


const page = () => {
  return (
    <div className='antialiased mt-15'>
      <Hero data={{
        heading: 'Custom ERP Solutions',
        subheading: 'Streamline your business processes with scalable, tailored ERP systems designed for efficiency and growth.',
      }} />
      <TestimonialSection testimonials={testimonials} heading="Our Clients' Success Stories" subheading="See how we transformed their digital presence." />
        <h2 className='text-3xl font-bold text-center'>Explore Our ERP Development Solutions</h2>
      </div>
  )
}

export default page