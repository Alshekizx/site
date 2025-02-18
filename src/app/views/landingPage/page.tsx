import LandingHeroSection from "./hero";
import NewArrival from "./newArrivals";
import HungerFightingSection from "./ourMission";
import OtherHeroSection from "./otherProductCategory";
import EventSeason from "./eventSeason";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-20">
    <LandingHeroSection/>
    <NewArrival />
    <HungerFightingSection/>
    <OtherHeroSection/>
    <EventSeason />
    </div>
  )
}

export default LandingPage;
