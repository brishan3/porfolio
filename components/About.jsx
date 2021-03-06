import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:min-h-[40vh] p-4 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 flex flex-col justify-center'>
          <p className='uppercase text-xl tracking-widest text-[#dd876c]'>About</p>
          <h2>Who I Am</h2>
          <p className='py-2 text-gray-600'>// Web Developer</p>
          <p className='py-2 text-gray-600'>
            Growing up I drooled at the 2D/3D graphics that captivated my consciousness as they morphed from something chunky and sharp, into a realm of uncanny-likeness - fit with dynamic lighting, real-time physics, weather systems, etc...
          </p>
          <p className='py-2 text-gray-600'>
            I became absolutely enamoured with the endless possibilities of programming coupled with the ever expanding limits of computing power that seemingly slowly trickles down to each of us. This infatuation sparked my imagination like nothing else: it is why I am here today, currently pursuing a career in Software Development.
          </p>
          <p className='py-2 text-gray-600'>
            I always had a sneaking suspicion I would be drawn back into the world of 1's and 0's that make our tech tick. I am passionate about solving real world problems or just exercising creativity in a virtual landscape. I am always looking for new opportunities, please feel free to reach out and connect!
          </p>
          <p className='py-2 text-gray-600'>Also, feel free to check out some of my latest projects!</p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 flex justify-center items-center hover:scale-105 eas-in duration-300'>
          <Image className='rounded-xl' src='/../public/assets/portfolio-crop-portrait.jpg' alt='Portrait picture of myself' width='660' height='1000'/>
        </div>
      </div>
    </div>
  )
}

export default About;