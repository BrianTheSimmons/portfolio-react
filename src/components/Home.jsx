import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
 
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#dc3c4d]'>Hi, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Brian</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[715px]'>And I love to build things! But what do I love more than that? Learning! especially when I get to learn new things WHILE building. Take a look at some of my work to see what I've learned so far!</p>
            <div>
                  <Link to="work" smooth={true} duration={500} >
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dc3c4d] hover:border-[#dc3c4d]'>
                          View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                  </Link>  
            </div>
        </div>
    </div>
  )
}

export default Home