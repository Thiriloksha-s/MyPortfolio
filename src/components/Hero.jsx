import { HERO_CONTENT } from "../constants";
import Picture from "../assets/pro.avif";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-start justify-start"> 
          
          <div className="w-full lg:w-1/2"> 
            <div className="flex flex-col items-center lg:items-start"> 
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="text-center lg:text-left mx-auto lg:mx-16 pb-2 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
              >
                S THIRILOKSHA
              </motion.h1>

              <motion.span
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="text-center lg:text-left mx-auto lg:mx-16 pb-6 bg-gradient-to-r from-purple-500 via-slate-500 to-pink-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
              >
                Full-Stack Enthusiast | Cloud Computing Explorer
              </motion.span>

              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mx-auto my-2 py-6 font-light tracking-normal lg:max-w-xl lg:mx-16 text-justify lg:leading-relaxed ">
              
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 lg:p-8"> 
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={Picture}
              alt="Thiriloksha S"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



