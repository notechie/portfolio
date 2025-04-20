import React, { useRef } from "react";
import { EDUCATION } from "../constants";
import { motion, useInView } from "framer-motion";

const EducationItem = ({ education, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      className="relative mb-24 flex w-full flex-col lg:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Left - Year */}
      <div className="relative z-10 w-full lg:w-[30%] flex pr-10 left-10 md:justify-end md:left-0">
        <p
          className="text-sm text-neutral-400"
          style={{ fontFamily: "cursive" }}
        >
          {education.year}
        </p>
      </div>

      {/* Right - Details */}
      <div className="relative z-10 w-full lg:w-[58%] pl-10">
        <h6 className="mb-2 font-bold" style={{ fontFamily: "sans-serif" }}>
          {education.role} <br />
          <span className="text-xs text-purple-200">{education.company}</span>
        </h6>
        <p
          className="mb-4 text-sm font-medium text-neutral-400 text-justify py-1"
          style={{ fontFamily: "sans-serif" }}
        >
          {education.description}
        </p>
        <div className="flex flex-wrap">
          {education.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-white"
              style={{ fontFamily: "sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline dot */}
      <span className="absolute left-[30%] z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-500 border-4 border-white hidden lg:block"></span>
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-10">
      <motion.h1
        className="mt-15 my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h1>

      <div className="relative mx-auto w-full">
        {/* Timeline Line - Only on small screens */}
        <div className="absolute left-[30%] top-0 h-full w-1 bg-neutral-700 hidden lg:block"></div>

        {EDUCATION.map((education, index) => (
          <EducationItem education={education} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;
