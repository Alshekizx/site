"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroItemProps {
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

const HeroItem: React.FC<HeroItemProps> = ({ title, subtitle, image, link }) => {
  return (
    <div className="flex-1 overflow-hidden h-full">
      <motion.div
        className="relative flex-1 h-[70vh] lg:h-[100vh] group overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-secondary bg-gradient-to-t from-black to-transparent w-full py-20 lg:py-10 px-4 md:px-6">
          <h1 className="text-h1 font-normal">{title}</h1>
          {subtitle && <p className="text-[16px] font-normal">{subtitle}</p>}
          <Link href={link} className="border-b-2 border-secondary mt-2 hover:text-accent transition-colors duration-300">
            Shop Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroItem;
