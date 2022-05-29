import React from 'react'
// Import project images
import WordleClone from '../assets/wordleClone.png'
import NasaApod from '../assets/nasaapod-new.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dc3c4d]'>Work</p>
                <p className='py-6'>Check out some of my recent projects that I've worked on (More are always in the works!)</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${WordleClone})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                That Word Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://dainty-cascaron-1c90cb.netlify.app/" rel="noreferrer" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BrianTheSimmons/wordleClone" rel="noreferrer" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${NasaApod})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                NASA APOD
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://visionary-boba-b2194c.netlify.app/" rel="noreferrer" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BrianTheSimmons/NASA-APOD-New" rel="noreferrer" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work