"use client";


import TopHeader from "./topHeader";
import TopScroller from "./topScroller";
import NavComponent from "./navItem";

const Header = () => {
  
  return (
    <div className="relative z-[100]">
        <div className="bg-white relative z-[500]">
        <TopScroller/>
        <TopHeader/>
        </div>
        <NavComponent/>
   
    </div>
  );
};

export default Header;