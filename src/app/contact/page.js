"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope className="text-red-600 text-3xl" />,
    label: "sachindangi942@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-green-600 text-3xl" />,
    label: "+91 8463088388",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-3xl" />,
    label: "Bhopal, Madhya Pradesh, India",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin className="text-blue-700 text-4xl hover:text-blue-500" />,
    url: "https://www.linkedin.com/in/sacin-dangi-s1a2c3hin",
  },
  {
    icon: <FaGithub className="text-black dark:text-white text-4xl hover:text-gray-600" />,
    url: "https://github.com/sachindangi942",
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12 hover:scale-110 transition-transform duration-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10 text-center">
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div>{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log(Object.fromEntries(formData.entries()));
        }}
        className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      <div className="flex justify-center gap-6 mt-10">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
