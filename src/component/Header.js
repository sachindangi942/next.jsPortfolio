// import Link from "next/link";

// export const Header = () => {
//     return (
//         <nav className="bg-white shadow-md sticky top-0 z-50">
//             <div className="container mx-auto px-4 py-4 flex justify-between items-center">

//                 {/* Left: Logo or Name */}
//                 <div className="text-xl font-bold text-gray-800">Sachin.dev</div>

//                 {/* Right: Menu Items */}
//                 <ul className="flex text-gray-700 font-medium text-xl">
//                     <li className="space-x-18">
//                         <Link href="/" className="hover:text-blue-600  cursor-pointer">Home</Link>
//                         <Link href="/skills" className="hover:text-blue-600 cursor-pointer">Skills</Link>
//                         <Link href="/qualification" className="hover:text-blue-600 cursor-pointer">Qualification</Link>
//                         <Link href="/projects" className="hover:text-blue-600 cursor-pointer">Projects</Link>
//                         <Link href="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link>
//                         <Link href="/about" className="hover:text-blue-600 cursor-pointer">About Me</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };





'use client';
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";


const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hover: { scale: 1.2, transition: { duration: 0.6 } },
};


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible" className="bg-white  shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-gray-800">Sachin.dev</div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Right: Menu Items */}
        <motion.ul className={`sm:flex space-x-18 font-medium text-gray-700 text-lg ${menuOpen ? 'block mt-4' : 'hidden'} sm:mt-0 sm:space-x-18 sm:block`}>
          <motion.li
            whileHover="hover"
            variants={linkVariants}
          >
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </motion.li>
          <motion.li
            whileHover="hover"
            variants={linkVariants}
          >
            <Link href="/skills" className="hover:text-blue-600">Skills</Link>
          </motion.li>
          <motion.li
            whileHover="hover"
            variants={linkVariants}
          >
            <Link href="/qualification" className="hover:text-blue-600">Qualification</Link>
          </motion.li>
          <motion.li
            whileHover="hover"
            variants={linkVariants}
          >
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          </motion.li>
          <motion.li
            whileHover="hover"
            variants={linkVariants}
          >
            <Link href="/about" className="hover:text-blue-600">About Me</Link>
          </motion.li>
          <motion.li
            whileHover="hover"
            variants={linkVariants}
          >
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </motion.li>
        </motion.ul >
      </div>
    </motion.nav>
  );
};

