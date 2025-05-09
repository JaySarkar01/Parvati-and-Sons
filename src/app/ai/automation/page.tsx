import Hero from '@/components/Hero'
import React from 'react'
import TestimonialSection from '@/components/ClientResultsDisplay';

const testimonials = [
  {
    metric: '60%',
    title: 'Workflow Automation',
    description: 'TechNova automated 60% of their manual processes using our AI-driven solutions.',
    company: 'TECHNOVA',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfBAgTdR9yBtGdz404amtV_ejE4FyOGHrg&s',
  },
  {
    metric: '24/7',
    title: 'Customer Support',
    description: 'ShopEase deployed an AI chatbot that handles customer queries 24/7, improving satisfaction.',
    company: 'SHOPEASE',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7ViWKDu371o9FnxoxSoIYcWf9SMnsmB4A&s',
  },
  {
    metric: '90%',
    title: 'Data Accuracy',
    description: 'MediCore improved diagnosis accuracy by 90% using our AI-powered medical assistant.',
    company: 'MEDICORE',
    logo: 'https://cystercare.com/wp-content/uploads/2023/01/Logo.png',
  },
  {
    metric: '3x',
    title: 'Faster Decision-Making',
    description: 'Finlytics tripled decision speed with real-time insights from our AI analytics engine.',
    company: 'FINLYTICS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_d_Bl0xBroCEv0rPzzXj_OZltQZ2ApE9jg&s',
  },
];



const page = () => {
  return (

    <div className='antialiased mt-15'>
      <Hero data={{
      heading: 'AI Automation',
      subheading: 'Attain your Digital Vision and Rise above the Digital Noise to Show Up and Stand Out',
    }} />
      <TestimonialSection testimonials={testimonials} heading="Our Clients' Success Stories" subheading="See how we transformed their digital presence." />
      <div className='flex justify-center items-center mt-10'>
        <h2 className='text-3xl font-bold'>Explore Our AI Automation Solutions</h2>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <p className='text-lg text-gray-600'>Discover how our AI-driven automation can elevate your business.</p>
      </div>
    </div>
    
  )
}

export default page