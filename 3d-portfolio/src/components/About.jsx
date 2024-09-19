import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="w-full sm:w-[200px] md:w-[220px] lg:w-[250px] xs:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="shadow-card p-[1px] rounded-[20px] w-full green-pink-gradient"
      >
        <div className="flex flex-col justify-evenly items-center bg-tertiary px-6 sm:px-8 lg:px-12 py-5 rounded-[20px] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
          <img
            src={icon}
            alt="web-development"
            className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 object-contain"
          />
          <h3 className="font-bold text-[18px] text-center text-white sm:text-[20px] lg:text-[22px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-xl lg:max-w-3xl text-[15px] text-secondary sm:text-[16px] lg:text-[17px] leading-[25px] lg:leading-[30px]"
      >
        I am a skilled frontend developer with extensive experience in JavaScript, specializing in frameworks such as React and Next.js. I take pride in my ability to swiftly grasp new concepts and thrive on collaborating closely with clients to develop efficient, scalable, and user-friendly solutions that tackle real-world challenges. If you have exciting ideas waiting to be realized, I'm here and eager to work together with you to bring those ideas to life!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-10 lg:mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
