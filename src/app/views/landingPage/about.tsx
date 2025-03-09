
import React from 'react';
import PhoneThree from './aboutThree';

const AboutUs = () => {
  return (
    <div className=''>

    <section className="  flex flex-col lg:flex-row h-fit lg:h-screen bg-gray-100 text-start">
    
    <div className='py-16 px-4 text-start w-full lg:w-1/2'>
      <h2 className="text-4xl font-bold text-primary-700">About Us</h2>
      <p className="mt-6 text-lg text-text-700 max-w-3xl ">
        We are a passionate and innovative team that specializes in creating powerful digital solutions for businesses
        around the world. Our approach blends technology, creativity, and user-centered design to help our clients
        navigate the digital landscape successfully.
      </p>
      <div className="mt-8 text-lg text-text-700 max-w-2xl ">
        <p>
          Our team consists of developers, designers, and strategists who are committed to pushing the boundaries of
          technology. We value collaboration, innovation, and the ability to adapt to the ever-changing tech industry.
        </p>
      </div>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden'> <PhoneThree/> </div>
      
    </section>


    
    </div>
  );
};

export default AboutUs;
