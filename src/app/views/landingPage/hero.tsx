import HeroItem from "@/app/component/cards/heroItems";
import CategoryCard from "@/app/component/cards/categoryCard";
import { heroItemsProps, hero2ndItemsProps } from "@/page/api/data";

const LandingHeroSection = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Main Hero Section */}
      <div className="flex flex-col sm:flex-row h-fit lg:h-[100vh] w-full">
        {heroItemsProps.map((item, index) => (
          <HeroItem key={index} {...item} />
        ))}
      </div>

      {/* Secondary Hero Section */}
      <div className="flex flex-col sm:flex-row h-fit lg:h-[90vh] gap-2 w-full">
        {hero2ndItemsProps.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// Hero Section Items


export default LandingHeroSection;
