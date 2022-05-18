import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/1b9d0329-a964-4c5c-a63f-a0bfd0b88a9b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dc3c4d] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email: briandsimmons22@gmail.com</p>
            </div>
            <input type="text" placeholder="Name" name="name" className='bg-[#ccd6f6] p-2' />
            <input type="email" placeholder="Email" name="email" className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#dc3c4d] hover:border-[#dc3c4d] px-4 py-3 my-8 mx-auto flex items-center'>Get In Touch</button>
        </form>
    </div>
  )
}

export default Contact