import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {RiRadioButtonFill} from 'react-icons/ri';
import heroImg from '../public/assets/projects/Bandsite.JPG';

const bandsite = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={heroImg} alt='Ohmpage website screenshot'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4'>
          <h2 className='py-2'>Bandsite</h2>
          <h3>React / Sass / Express</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-2'>Overview</h2>
          <p>
            A fully responsive front-end application for a fictional band by the name of 'The Bees Knees'. This project was built using HTML and vanilla JavaScript, along with Sass, a CSS pre-processor, for all styling and visual responsiveness. Complete with dynamic data being pulled from an Express API hosted on Heroku with the added ability to be able to post a comment! As this is just for demonstration, comments will be wiped/refreshed every 24 hours.
          </p>
          <a
            className="button px-8 pt-2 pb-[0.55rem] mt-4 mr-8"
            href="https://github.com/brishan3/band-site-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            Client
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <ul className='grid grid-cols-3 md:grid-cols-1'>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>HTML</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>JavaScript</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>Sass</li>
            </ul>
          </div>
        </div>
        <Link href="/#projects">
          <p className='underline underline-offset-4 cursor-pointer'>&lt; Back</p>
        </Link>
      </div>
    </div>
  )
}

export default bandsite;