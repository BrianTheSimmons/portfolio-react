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
                    <p>Hi, I'm Brian. It's nice to meet you! Please take a look around and get to know a little about me</p>
                </div>
                <div>
                    <p>I'm a professional Software Developer with a passion for learning and building new and exciting things. You'll see just a few of the technologies I've worked with below this section, and some of my work below that. Some fun facts about me: My degree is in Astrophysics, I have a Lord of the Rings tattoo (with more planned), my cat is the best, and I love getting outside to take a break from the screen and enjoy all nature has to offer!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About