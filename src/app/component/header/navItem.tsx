import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const navItems = [
  {
    title: "New Arrivals",
    links: ["Shop All New Arrival", "New This Week", "Back in Stock"],
    image: "/images/menCloth.jpg",
  },
  {
    title: "Clothing",
    links: ["Shop All", "Dresses", "Tops", "Shirts", "Skirts", "Shorts", "Pants", "Sets"],
    image: "/images/menCloth.jpg",
  },
  {
    title: "Dresses",
    links: ["Shop All", "Mini Dresses", "Midi Dresses", "Maxi Dresses", "Playsuits"],
    image: "/images/womenCloth.jpg",
  },
  {
    title: "Tops",
    links: ["Shop All", "Shirts", "Tees", "Singlets"],
    image: "/images/Tshirt.jpg",
  },
  {
    title: "Bottoms",
    links: ["Shop All", "Pants", "Skirts", "Shorts"],
    image: "/images/groupPic2.jpg",
  },
  {
    title: "Accessories",
    links: ["Shop All", "Shoes", "Handbags", "Belts", "Others"],
    image: "/images/womenCloth.jpg",
  },
  {
    title: "Coming Soon",
    links: ["Coming Soon",],
    image: "",
  },
  {
    title: "Our Mission",
    links: ["Our Mission"],
    image: "",
  }
];

const NavComponent = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);

  const openMenu = (title: string) => {
    setActiveMenu(title);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const toggleMobileSubMenu = (title: string) => {
    setOpenMobileSubMenu(openMobileSubMenu === title ? null : title);
  };

  useEffect(() => {
    if (activeMenu || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeMenu, isMobileMenuOpen]);

  return (
    <nav className="nav">
      <div className="relativebg:transparent lg:bg-white p-4 lg:px-20 border-0 lg:border-b-2 border-b-transparent lg:border-b-gray-300 flex items-center justify-between relative z-[500]">
        <div className="hidden lg:flex justify-between items-center w-full">
          {navItems.map((item) => (
            <button
              key={item.title}
              className="text-lg font-light hover:text-gray-600"
              onClick={() => openMenu(item.title)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="absolute top-[-40px] lg:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="relative inset-0 z-[400]" onClick={() => setIsMobileMenuOpen(false)}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="relative top-[-34px] h-fit w-full bg-white shadow-lg py-4 z-[500]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="text-md text-gray-700 hover:text-gray-600 w-full text-left"
                    onClick={() => toggleMobileSubMenu(item.title)}
                  >
                    {item.title}
                  </button>
                  {openMobileSubMenu === item.title && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.links.map((link, index) => (
                        <p key={index} className="text-sm text-gray-600 hover:underline cursor-pointer">
                          {link}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Sidebar Menu */}
      {activeMenu && (
        <div className="absolute w-[100vw] h-[100vh] inset-0 bg-gray-800 bg-opacity-50 z-[200] " onClick={closeMenu}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute left-0  top-36 h-full w-[100%] sm:w-80 bg-white shadow-lg py-6 z-[300]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto">
            <button className="text-gray-500 text-2xl absolute right-4 top-4" onClick={closeMenu}>
              &times;
            </button>
            <h2 className="text-xl font-semibold p-6 border-b-2 border-b-gray-700">{activeMenu}</h2>
            <div className="overflow-y-auto pb-40 h-[80vh]">
            <div className="flex flex-col p-6 space-y-2">
              {navItems.find((item) => item.title === activeMenu)?.links.map((link, index) => (
                <p key={index} className="text-gray-700 hover:underline cursor-pointer">{link}</p>
              ))}
            </div>
            <div className="mt-6 w-full h-[250px] overflow-hidden flex justify-center items-center">
              <Image
                src={navItems.find((item) => item.title === activeMenu)?.image || ""}
                alt={activeMenu}
                width={150}
                height={150}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default NavComponent;