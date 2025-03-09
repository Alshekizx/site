
import React from 'react';

import LaptopThree from './serviceThree';

const WhatWeDo = () => {
  return (
    <div className='px-4'>

    <section className="flex py-16 flex-col lg:flex-row h-fit lg:h-screen bg-gray-100 text-start">
    <div className='w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden'><LaptopThree/></div>
    <div className='text-start w-full lg:w-1/2'>
      <h2 className="text-4xl font-bold text-primary-700">Who We Are</h2>
      <p className="mt-6 text-lg text-text-700  ">
        We are innovators, creators, and problem-solvers. Our team is built on a foundation of technical expertise and
        creative vision, aiming to deliver exceptional digital experiences that drive business growth. We believe in
        the power of collaboration and constantly push ourselves to stay ahead of industry trends.
      </p>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-primary-700">Our Core Values</h3>
        <ul className="mt-4 text-lg text-text-700 list-disc list-inside">
          <li>Innovation: Constantly exploring new ideas and solutions.</li>
          <li>Collaboration: Working together to achieve the best results.</li>
          <li>Integrity: Being transparent and honest in all our dealings.</li>
          <li>Customer-Centric: Focusing on delivering value to our clients.</li>
        </ul>
      </div>
      </div>
    </section>
    </div>
  );
};

export default WhatWeDo;
