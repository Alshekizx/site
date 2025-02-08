"use client";


import Hero from "./hero";
import FeaturedProducts from "./featuredProguct";
import AboutUs from "./about";
import Benefits from "./benefits";
import ShopByCategory from "./shopByCategory";

import Impact from "./impactSection";
import NewsletterSignup from "./newsLetter";
//import SocialMediaFeed from "./socialMediaFeed";
import CallToActionBanner from "./callToAction";
import BlogHighlights from "./blogHilightes";

export default function Home() {


    const handleLearnMore = () => {
        window.location.href = "/about-us";
    };

    return (
        <div >

            <Hero />
            <FeaturedProducts />
            <AboutUs
                title="Transforming Fashion into Compassion"
                description="The Humanness Program is a clothing brand and charity foundation dedicated to fighting hunger through fashion. With every purchase, we provide meals for those in need, ensuring no one goes to bed hungry. More than a brand, we're a movement driven by compassion, making a lasting impact on lives."
                image="/images/charity-work.jpg"
                onLearnMore={handleLearnMore}
            />
            <Benefits />
            <ShopByCategory />
            <Impact />
            <NewsletterSignup />
            {/*<SocialMediaFeed />*/}
            <CallToActionBanner />
            <BlogHighlights />

        </div>
    );
}
