export interface ClothCardProps {
    name: string;
    price: string;
    image: string;
    colors: string[];
    link: string;
    isNew?: boolean; 
    category: Category;
  }

  //clothCard

  type Category = "Hoodies" | "Tops" | "Bottoms" | "Accessories";

  export const newArrivalItems: {
    name: string;
    price: string;
    image: string;
    colors: string[];
    link: string;
    isNew: boolean;
    category: Category; // Explicitly tell TypeScript that category is of type Category
  }[] = [
    {
      name: "Casual Hoodie",
      price: "$49.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: false,
      category: "Hoodies"
    },
    {
      name: "Denim Jacket",
      price: "$59.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Tops"
    },
    {
      name: "Fine Hoodie",
      price: "$49.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: true,
      category: "Bottoms"
    },
    {
      name: "Denim Bottoms",
      price: "$59.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Bottoms"
    },
    {
      name: "Shirt",
      price: "$59.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: true,
      category: "Accessories"
    },
    {
      name: "Casual Hoodie",
      price: "$49.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: true,
      category: "Hoodies"
    },
    {
      name: "Denim Jacket",
      price: "$79.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Tops"
    },
    {
      name: "Fine Hoodie",
      price: "$69.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: false,
      category: "Bottoms"
    },
    {
      name: "Denim Bottoms",
      price: "$29.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Bottoms"
    },
    {
      name: "Shirt",
      price: "$50.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: true,
      category: "Accessories"
    },
    {
      name: "Casual Hoodie",
      price: "$79.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: false,
      category: "Hoodies"
    },
    {
      name: "Denim Jacket",
      price: "$69.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Tops"
    },
    {
      name: "Fine Hoodie",
      price: "$59.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: true,
      category: "Bottoms"
    },
    {
      name: "Denim Bottoms",
      price: "$39.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Bottoms"
    },
    {
      name: "Shirt",
      price: "$69.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: true,
      category: "Accessories"
    },
    {
      name: "Casual Hoodie",
      price: "$79.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: false,
      category: "Hoodies"
    },
    {
      name: "Denim Jacket",
      price: "$29.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: true,
      category: "Tops"
    },
    {
      name: "Fine Hoodie",
      price: "$43.99",
      image: "/images/maleHoodie.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/summer-25-viva",
      isNew: true,
      category: "Bottoms"
    },
    {
      name: "Denim Bottoms",
      price: "$55.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: false,
      category: "Bottoms"
    },
    {
      name: "Shirt",
      price: "$56.99",
      image: "/images/Tshirt.jpg",
      colors: ["#A52A2A", "#FFD700", "#000000"],
      link: "/shop/miel-latest",
      isNew: true,
      category: "Accessories"
    },
  ];

  /*Landing Page Hero Card*/
 export const heroItemsProps = [
    {
      title: "Summer 25 VIVA",
      subtitle: "Bold Bright Unbound",
      image: "/images/maleHoodie.jpg",
      link: "/shop/summer-25-viva",
    },
    {
      title: "Miel Latest",
      subtitle: "Volume II",
      image: "/images/Tshirt.jpg",
      link: "/shop/miel-latest",
    },
  ];
  
 export const hero2ndItemsProps = [
    { title: "Dresses", image: "/images/maleHoodie.jpg", link: "/shop/dresses" },
    { title: "Denim", image: "/images/Tshirt.jpg", link: "/shop/denim" },
    { title: "Tops", image: "/images/Tshirt.jpg", link: "/shop/tops" },
  ];

  export const otherCategoryItemsProps = [
    { title: "Accessories", image: "/images/maleHoodie.jpg", link: "/shop/dresses" },
    { title: "Full Set", image: "/images/Tshirt.jpg", link: "/shop/denim" },
    { title: "Coming Soon", image: "/images/maleHoodie.jpg", link: "/shop/tops" },
  ];

  
//Our Mission

export const sectionData = {
  title: "Fighting Hunger One Cloth at a Time",
  videoUrl: "https://www.youtube.com/embed/D6U5ea9SGRc",
  videoTitle: "Fighting Hunger One Cloth at a Time - YouTube Video",
};


