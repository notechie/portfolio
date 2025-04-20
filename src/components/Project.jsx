import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="mb-20 flex flex-wrap lg:justify-center gap-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Image Block */}
      <div className="w-[300px] relative group">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl object-cover"
          style={{ fontFamily: "sans-serif" }}
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
            style={{ fontFamily: "sans-serif" }}
          >
            View GitHub
          </a>
        </div>
      </div>

      {/* Text Block */}
      <div className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold" style={{ fontFamily: "sans-serif" }}>
          {project.title}
        </h6>
        <p
          className="mb-4 text-neutral-400 py-1 text-sm font-medium text-justify"
          style={{ fontFamily: "sans-serif" }}
        >
          {project.description}
        </p>
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-white"
            style={{ fontFamily: "sans-serif" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Project = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        ref={headingRef}
        className="mt-15 my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
