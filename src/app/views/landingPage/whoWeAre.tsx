import React from 'react';
import LaptopThree from './serviceThree';

const WhatWeDo = () => {
  return (
    <div className='px-4'>

      <section className="flex py-16 flex-col lg:flex-row h-fit lg:h-screen bg-gray-100 text-start">
        
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden'>
          <LaptopThree />
        </div>

        <div className='text-start w-full lg:w-1/2'>
          <h2 className="text-4xl font-bold text-primary-700">Empowering Businesses with Technology</h2>
          <p className="mt-6 text-lg text-text-700">
            We help businesses grow by building custom web and mobile applications designed to address their unique 
            challenges. Our solutions focus on eliminating weak points, streamlining operations, and enhancing overall 
            efficiency to drive long-term success.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-primary-700">Our Approach</h3>
            <ul className="mt-4 text-lg text-text-700 list-disc list-inside">
              <li>Strategic Development: Identifying business pain points and crafting tailored solutions.</li>
              <li>Efficiency & Automation: Optimizing workflows to improve productivity.</li>
              <li>Scalability: Building applications that grow with your business.</li>
              <li>User-Centric Design: Ensuring seamless and intuitive experiences for users.</li>
            </ul>
          </div>
        </div>

      </section>

    </div>
  );
};

export default WhatWeDo;