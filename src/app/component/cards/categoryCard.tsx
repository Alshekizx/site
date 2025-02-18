"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  return (
    <div className="flex-1 overflow-hidden h-full">
      <motion.div
        className="relative flex-1 h-[70vh] lg:h-full group overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 flex flex-col justify-start left-1/2 transform -translate-x-1/2 text-center text-secondary bg-gradient-to-t from-black to-transparent w-full px-6 py-10">
          <h1 className="text-h4 lg:text-h3 text-start font-normal">{title}</h1>
          <Link href={link} className="text-body border-b-2 border-secondary hover:text-accent transition-colors duration-300 w-fit">
            Shop Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryCard;
