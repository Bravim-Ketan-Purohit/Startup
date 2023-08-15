import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative inline-block text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 text-2xl leading-8 font-extrabold text-white p-10 rounded-3xl sm:text-4xl"
          >
            At Innovista TechForge, we propel businesses into the future by
            fusing innovation, agility, and modern development practices with an
            unwavering commitment to client satisfaction. With a friendly
            approach that boasts a cutting-edge spirit, we cater to the entirety
            of the tech world. Our clean, easy-to-embrace, and modern solutions
            are designed to harmonize with your requirements, all while
            fostering the enthusiasm of our adept developers. We stand as
            pioneers in providing not just affordable services, but being the
            epitome of value for money, ensuring your journey with us is both
            technologically motivational and financially rewarding.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
