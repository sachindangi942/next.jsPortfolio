// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaAws,
//   FaMicrosoft,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiExpress,
//   SiRedux,
//   SiJavascript,
//   SiPostman,
//   SiDocker,
//   SiHtml5,
//   SiCss3,
//   SiAntdesign,
//   SiMaterialdesign,
//   SiNextdotjs,
// } from "react-icons/si";

// const skills = [

//   { name: "Next.js", icon: <SiNextdotjs size={50} className="text-black dark:text-white" /> },
//   { name: "React.js", icon: <FaReact size={50} className="text-blue-500" /> },
//   { name: "Redux", icon: <SiRedux size={50} className="text-purple-600" /> },
//   { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-600" /> },
//   { name: "Express.js", icon: <SiExpress size={50} className="text-gray-700" /> },
//   { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
//   { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" /> },
//   { name: "HTML", icon: <SiHtml5 size={50} className="text-red-500" /> },
//   { name: "CSS", icon: <SiCss3 size={50} className="text-blue-400" /> },
//   { name: "React-Bootstrap", icon: <FaReact size={50} className="text-blue-500" /> },
//   { name: "Ant Design", icon: <SiAntdesign size={50} className="text-blue-600" /> },
//   { name: "Material UI", icon: <SiMaterialdesign size={50} className="text-indigo-500" /> },
// ];

// const tools = [
//   { name: "Git", icon: <FaGitAlt size={50} className="text-red-500" /> },
//   { name: "GitHub", icon: <FaGithub size={50} className="text-black dark:text-white" /> },
//   { name: "Postman", icon: <SiPostman size={50} className="text-orange-500" /> },
//   { name: "VS Code", icon: <FaMicrosoft size={50} className="text-blue-500" /> },
//   { name: "AWS", icon: <FaAws size={50} className="text-yellow-500" /> },
//   { name: "Docker", icon: <SiDocker size={50} className="text-blue-400" /> },
//   { name: "S3 Bucket", icon: <FaAws size={50} className="text-yellow-500" /> },
//   { name: "EC2", icon: <FaAws size={50} className="text-yellow-500" /> },
//   { name: "Amplify Hosting", icon: <FaAws size={50} className="text-yellow-500" /> },
// ];

// const Skills = () => {
//   return (
//     <motion.section
//       id="skills"
//       className="py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white transition-all duration-500"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.h2
//         className="w-fit mx-auto text-center text-4xl md:text-5xl font-bold text-blue-700  mb-12 hover:scale-115 transition-transform duration-500"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         Skills & Tools
//       </motion.h2>

//       {/* Technical Skills */}
//       <div className="max-w-6xl mx-auto mb-12">
//         <h3 className="text-2xl text-center text-gray-400 dark:text-gray-300 mb-8 font-semibold">
//           Technical Skills
//         </h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl border dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div>{skill.icon}</div>
//               <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Development Tools */}
//       <div className="max-w-6xl mx-auto">
//         <h3 className="text-2xl text-center text-gray-400 dark:text-gray-300 mb-8 font-semibold">
//           Development Tools
//         </h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {tools.map((tool, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl border dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div>{tool.icon}</div>
//               <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">{tool.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;


"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiPostman,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiAntdesign,
  SiMaterialdesign,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={50} className="text-black dark:text-white" /> },
  { name: "React.js", icon: <FaReact size={50} className="text-blue-500" /> },
  { name: "Redux", icon: <SiRedux size={50} className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress size={50} className="text-gray-700 dark:text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" /> },
  { name: "HTML", icon: <SiHtml5 size={50} className="text-red-500" /> },
  { name: "CSS", icon: <SiCss3 size={50} className="text-blue-400" /> },
  { name: "React-Bootstrap", icon: <FaReact size={50} className="text-blue-500" /> },
  { name: "Ant Design", icon: <SiAntdesign size={50} className="text-blue-600" /> },
  { name: "Material UI", icon: <SiMaterialdesign size={50} className="text-indigo-500" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt size={50} className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub size={50} className="text-black dark:text-white" /> },
  { name: "Postman", icon: <SiPostman size={50} className="text-orange-500" /> },
  { name: "VS Code", icon: <FaMicrosoft size={50} className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws size={50} className="text-yellow-500" /> },
  { name: "Docker", icon: <SiDocker size={50} className="text-blue-400" /> },
  { name: "S3 Bucket", icon: <FaAws size={50} className="text-yellow-500" /> },
  { name: "EC2", icon: <FaAws size={50} className="text-yellow-500" /> },
  { name: "Amplify Hosting", icon: <FaAws size={50} className="text-yellow-500" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 px-4 text-white transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="w-fit mx-auto text-center text-4xl md:text-5xl font-bold text-blue-600 mb-12 hover:scale-105 transition-transform duration-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tools
      </motion.h2>

      {/* Technical Skills */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-2xl text-center text-gray-300 mb-8 font-semibold">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-800/50 backdrop-blur-md shadow-lg p-4 rounded-xl border border-gray-700 text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>{skill.icon}</div>
              <p className="mt-2 text-sm font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Development Tools */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl text-center text-gray-300 mb-8 font-semibold">
          Development Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-800/50 backdrop-blur-md shadow-lg p-4 rounded-xl border border-gray-700 text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>{tool.icon}</div>
              <p className="mt-2 text-sm font-medium text-gray-200">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
