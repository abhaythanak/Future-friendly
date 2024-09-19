import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

// import { ComputersCanvas } from "./canvas";
const ComputersCanvas = React.lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='bg-[#915EFF] rounded-full w-5 h-5' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Abhay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Frontend Developer, <br className='sm:block hidden' />
            Exploring the Programming World
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='bottom-32 xs:bottom-10 absolute flex justify-center items-center w-full'>
        <a href='#about'>
          <div className='flex justify-center items-start border-4 border-secondary p-2 rounded-3xl w-[35px] h-[64px]'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='bg-secondary mb-1 rounded-full w-3 h-3'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;