import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right pb-8 pl-1'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#dc3c4d]'>About Me</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Passionate.<br /> Eager.<br />Ambitious.<br />Forward-thinking.<br />And much more.</p>
                </div>
                <div>
                    <p>I'm a professional Software Developer with a passion for learning and building new and exciting things. Here, you'll find a few of the technologies I've worked, as well as some personal projects in the sections that follow. Some fun facts about me: My degree is in Astrophysics, I have a Lord of the Rings tattoo with more in the planning stages, my cat is the best, and I love getting outside and enjoying nature during my breaks from the screen!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About