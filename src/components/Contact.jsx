import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhr2ot8", // service ID
        "template_f21g7fk", // template ID
        form.current,
        "YHXLJ-aP2muO52tjs" // public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Oops! Something went wrong.", {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
          });
        }
      );
  };

  return (
    <motion.div
      ref={sectionRef}
      className="pb-10"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ToastContainer />

      <motion.h2
        className="mt-15 my-12 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex justify-center">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 w-2/3 lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <label className="block mb-1 font-light">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ fontFamily: "sans-serif" }}
            />
          </div>

          <div>
            <label className="block mb-1 font-light">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ fontFamily: "sans-serif" }}
            />
          </div>

          <div>
            <label className="block mb-1 font-light">Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Subject or title of your message"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ fontFamily: "sans-serif" }}
            />
          </div>

          <div>
            <label className="block mb-1 font-light">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ fontFamily: "sans-serif" }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="border hover:border-white hover:text-white hover:bg-transparent bg-white py-2 px-4 rounded text-black transition-colors duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
