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
            <p className='text-[#8892b0] py-4 max-w-[715px]'>I love to build things, but more than that, I enjoy the opportunity to learn. When faced with the possibility of combining the two, I believe, is when the most fulfilling outcomes are created.</p>
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