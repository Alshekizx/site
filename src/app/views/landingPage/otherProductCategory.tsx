
import CategoryCard from "@/app/component/cards/categoryCard";
import {  otherCategoryItemsProps } from "@/page/api/data";
import Link from "next/link";

const OtherHeroSection = () => {
  return (
    <div className="mt-20 flex flex-col gap-20">
        <div className="gap-6 flex flex-col justify-center items-center  w-full px-4 ">
            <h2 className="text-h1 text-center w-full lg:max-w-[60%]  ">
                The Humanness Program blends style with purpose, turning fashion into a force for good.
                </h2>
                <Link className="buttonSellect w-fit text-primary" href=""> Shop now </Link>
        </div>

        

      <div className="flex flex-col sm:flex-row h-fit lg:h-[90vh] gap-2 w-full">
        {otherCategoryItemsProps.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// Hero Section Items


export default OtherHeroSection;
