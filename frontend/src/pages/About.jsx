import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.c2} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quas ea aspernatur, facilis praesentium repellendus enim amet magni et vero quia similique. Laborum, delectus labore? Distinctio ipsa eaque ipsum laboriosam quia pariatur voluptatem tempora?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur facilis voluptas nesciunt repellendus, et, numquam repudiandae recusandae ab provident maxime itaque quaerat!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et blanditiis similique, nemo, magnam molestiae, dolores repellat minima eum non aut temporibus perspiciatis obcaecati vel? Harum, distinctio laboriosam placeat aliquam saepe recusandae voluptas repellendus mollitia!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorum deserunt vitae optio eum quo accusantium iusto vero non exercitationem, distinctio modi ad!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenince</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorum deserunt vitae optio eum quo accusantium iusto vero non exercitationem, distinctio modi ad!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorum deserunt vitae optio eum quo accusantium iusto vero non exercitationem, distinctio modi ad!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
