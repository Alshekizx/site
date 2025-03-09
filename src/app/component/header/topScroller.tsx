'use client';
import { motion } from "framer-motion";

const links: string[] = [
  "Business Management Systems Development",
  "Custom Web & Mobile Applications",
  "Innovative Fintech Solutions",
  "Tailored Digital Experiences for Your Business",
];

const TopScroller: React.FC = () => {
  return (
    <div className="w-full bg-primary-500 text-white overflow-hidden py-2">
      <motion.div
        className="flex space-x-10 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...links, ...links].map((text, index) => (
          <span key={index} className="text-sm font-medium px-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TopScroller;