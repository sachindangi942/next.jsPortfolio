// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowDown } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const Home = () => {
//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/in/sacin-dangi-s1a2c3hin",
//       icon: <FaLinkedin className="text-blue-500" />,
//       color: "hover:bg-blue-600/10"
//     },
//     {
//       name: "GitHub",
//       url: "https://github.com/sachindangi942",
//       icon: <FaGithub className="text-gray-300" />,
//       color: "hover:bg-gray-800"
//     },
//     {
//       name: "WhatsApp",
//       url: "https://wa.me/918463088388",
//       icon: <FaWhatsapp className="text-green-500" />,
//       color: "hover:bg-green-600/10"
//     },
//     {
//       name: "LeetCode",
//       url: "#", // Add your LeetCode URL
//       icon: <SiLeetcode className="text-yellow-500" />,
//       color: "hover:bg-yellow-600/10"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-20 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
//       </div>

//       <motion.div 
//         className="text-center space-y-8 max-w-2xl w-full relative z-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Profile Image */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="relative mx-auto"
//         >
//           <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden group">
//             <Image
//               src="/myimg.bab1f4385475a627325f.png"
//               alt="Sachin Dangi"
//               fill
//               className="object-cover group-hover:scale-105 transition-transform duration-500"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/20 mix-blend-overlay"></div>
//           </div>
//           <div className="absolute -inset-4 rounded-full border-t-4 border-b-4 border-purple-400/30 animate-spin-slow -z-10"></div>
//         </motion.div>

//         {/* Name */}
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           Sachin Dangi
//         </motion.h1>

//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-lg">
//             <p className="text-lg sm:text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
//               MERN Stack Developer
//             </p>
//           </div>
//         </motion.div>

//         {/* Description */}
//         <motion.p
//           className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           Crafting pixel-perfect web applications with modern technologies. 
//           Passionate about building scalable solutions and solving complex problems 
//           through clean, efficient code.
//         </motion.p>

//         {/* Social Links */}
//         <motion.div
//           className="flex justify-center flex-wrap gap-3 mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           {socialLinks.map((link, index) => (
//             <motion.a
//               key={link.name}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${link.color} transition-all hover:shadow-lg`}
//               whileHover={{ y: -3 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
//             >
//               {link.icon}
//               <span>{link.name}</span>
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="mt-12 flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.6 }}
//         >
//           <p className="text-sm text-gray-400 mb-2">Explore my work</p>
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <FaArrowDown className="text-xl text-gray-400" />
//           </motion.div>
//         </motion.div>
//       </motion.div>      
//     </div>
//   );
// };

// export default Home;

import About from '@/component/About';
import Contact from '@/component/Contact';
import Home from '@/component/HomePage'
import Projects from '@/component/Project';
import Qualification from '@/component/Qualifications';
import Skills from '@/component/Skills';
import React from 'react'

 const Page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800'>
    <Home/>
    <Skills/>
    <Qualification/>
    <Projects/>
    <About/>
    <Contact/>
    </div>
  )
}
 export default Page;