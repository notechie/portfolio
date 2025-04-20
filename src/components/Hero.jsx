import React from "react";
import { HERO_CONTENT } from "../constants/index";
import DP from "../assets/hero.jpg";
import Typing from "react-typing-effect";
import "../styles/Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-20 lg:mg-35"
    >
      <div className="flex flex-wrap">
        {/* Left Section (Text) */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h3
              className="text-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hi! I'm
            </motion.h3>

            <motion.h1
              className="pb-16 text-4xl font-thin tracking-tight lg:text-7xl md:text-6xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Bhuban Mahapatra
            </motion.h1>

            <motion.span
              className="bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f9a8d4, #be97e3, #a855f7)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typing
                text={[
                  "Full Stack Developer",
                  "Exploring Machine Learning",
                  "Diving into Cloud Technologies",
                  "Cybersecurity Enthusiast",
                ]}
                speed={50}
                eraseDelay={1500}
                typingDelay={200}
                eraseSpeed={25}
              />
            </motion.span>

            <motion.p
              className="my-2 max-w-xl py-2 font-light tracking-tight text-justify text-base"
              style={{ fontFamily: "Verdana, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://drive.google.com/file/d/1DbECldOOGV8mt7d7c6W4lCorrIqIYnEr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white bg-transparent py-2 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300"
                style={{ fontFamily: "sans-serif" }}
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 hidden lg:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex justify-center lg:justify-end">
            <div className="animated-gradient rounded-l-full bg-gradient-to-b flex justify-center items-center">
              <img
                className="rounded-r-full object-cover"
                style={{ width: "17em" }}
                src={DP}
                alt="Hero"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
