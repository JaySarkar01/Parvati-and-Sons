import Hero from '@/components/Hero'
import React from 'react'
import TestimonialSection from '@/components/ClientResultsDisplay';

const testimonials = [
  {
    metric: '3x',
    title: 'User Engagement',
    description: 'FitTrack saw a 3x increase in daily active users after launching their new mobile app with us.',
    company: 'FITTRACK',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfBAgTdR9yBtGdz404amtV_ejE4FyOGHrg&s',
  },
  {
    metric: '50%',
    title: 'Faster Time to Market',
    description: 'QuickCart reduced app launch time by 50% using our agile development process.',
    company: 'QUICKCART',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7ViWKDu371o9FnxoxSoIYcWf9SMnsmB4A&s',
  },
  {
    metric: '4.8★',
    title: 'App Store Rating',
    description: 'MediMate maintained a 4.8-star rating thanks to our intuitive design and performance optimization.',
    company: 'MEDIMATE',
    logo: 'https://cystercare.com/wp-content/uploads/2023/01/Logo.png',
  },
  {
    metric: '70%',
    title: 'Cost Reduction',
    description: 'EcoRide cut mobile app maintenance costs by 70% with our modular architecture.',
    company: 'ECORIDE',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_d_Bl0xBroCEv0rPzzXj_OZltQZ2ApE9jg&s',
  },
];


const page = () => {
  return (
    <div className='antialiased mt-15'>
      <Hero data={{
        heading: 'Next-Gen Application',
        subheading: 'Transform your ideas into intelligent, user-centric mobile or web apps that elevate your digital presence.',
      }} />
      <TestimonialSection testimonials={testimonials} heading="Our Clients' Success Stories" subheading="See how we transformed their digital presence." />
        <h2 className='text-3xl font-bold'>Explore Our App Development Solutions</h2>

      </div>
  )
}

export default page