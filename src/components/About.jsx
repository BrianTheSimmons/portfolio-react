import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right pb-8 pl-1'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#dc3c4d]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Brian. It's nice to meet you! Please take a look around</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni, dolore eligendi sit adipisci delectus ratione nesciunt, quam alias dolorem voluptatibus rem aliquam laboriosam porro ex. Cum culpa facere mollitia, recusandae, numquam, rerum quod quis omnis vel delectus repellendus doloribus.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About