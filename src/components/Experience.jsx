import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap justify-start lg:justify-between"
          >
            
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 px-4"
            >
              <p className="mb-2 text-sm text-neutral-400 py-4 font-light text-left lg:text-right">
                {experience.year}
              </p>
            </motion.div>

            
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 px-4"
            >
              <h6 className="mb-2 font-semibold text-left lg:text-justify">
                {experience.role}{" "}
                <span className="text-sm text-purple-100">
                  - {experience.company}
                </span>
              </h6>

              
              <p className="mb-4 text-neutral-400 font-light text-justify max-w-2xl">
                {experience.description}
              </p>

             
              <div className="flex flex-wrap mt-2 gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-950"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
