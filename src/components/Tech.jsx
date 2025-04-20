import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiExpress, SiMongodb, SiRedux, SiFlask } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FiDatabase } from "react-icons/fi";
import { TbHexagonLetterCFilled } from "react-icons/tb";
import "../styles/Tech.css";

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="border-b border-neutral-900 pb-24"
      variants={fadeInVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-col flex-wrap items-center justify-center gap-4">
        {/* First Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-15"
          variants={fadeInVariant}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            {
              icon: (
                <TbHexagonLetterCFilled className="text-6xl text-blue-400" />
              ),
              title: "C",
            },
            {
              icon: <FaJava className="text-6xl text-red-400" />,
              title: "Java",
            },
            {
              icon: <FaPython className="text-6xl text-blue-400" />,
              title: "Python",
            },
            {
              icon: <FaHtml5 className="text-6xl text-amber-600" />,
              title: "HTML",
            },
            {
              icon: <FaCss3Alt className="text-6xl text-blue-500" />,
              title: "CSS",
            },
            {
              icon: <DiJavascript className="text-6xl text-amber-300" />,
              title: "Javascript",
            },
            {
              icon: <FaNodeJs className="text-6xl text-emerald-500" />,
              title: "NodeJs",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              title={tech.title}
              className="pulseEffect rounded-2xl border-4 border-neutral-800 p-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-15"
          variants={fadeInVariant}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {[
            {
              icon: <SiExpress className="text-6xl text-white" />,
              title: "ExpressJs",
            },
            {
              icon: <FaReact className="text-6xl text-cyan-300" />,
              title: "ReactJs",
            },
            {
              icon: <SiRedux className="text-6xl text-purple-500" />,
              title: "Redux",
            },
            {
              icon: <SiFlask className="text-6xl text-white" />,
              title: "Flask",
            },
            {
              icon: <GrMysql className="text-6xl text-cyan-600" />,
              title: "MySQL",
            },
            {
              icon: <FiDatabase className="text-6xl text-blue-400" />,
              title: "Oracle SQL",
            },
            {
              icon: <SiMongodb className="text-6xl text-emerald-800" />,
              title: "MongoDB",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              title={tech.title}
              className="pulseEffect rounded-2xl border-4 border-neutral-800 p-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tech;
