import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="mb-15 flex items-center justify-between py-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="flex flex-shrink-0 items-center text-4xl"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="w-10">BM</p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.a
          href="https://www.instagram.com/i.__bhuban?igsh=OXk5dGQ4NGVncXkw"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/bhuban-mahapatra/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/notechie"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
