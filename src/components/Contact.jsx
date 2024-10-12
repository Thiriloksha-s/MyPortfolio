import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div name='contact' className='border-b border-neutral-900 pb-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
          <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h1>

          </div>
          <motion.div whileInView={{opacity: 1, x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}className='flex justify-center items-center'>
            <form action="https://getform.io/f/axojmylb" method="POST" className='flex flex-col w-full md:w-1/2'>
              <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
              <input type="text" name="email" placeholder="Enter your email" className='my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
              <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
              <button className='text-white bg-gradient-to-b from-cyan-300 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Submit</button>
            </form>

          </motion.div>
        </div>
    </div>
  );
};

export default Contact;

