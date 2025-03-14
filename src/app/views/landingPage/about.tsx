import React from 'react';
import PhoneThree from './aboutThree';

const AboutUs = () => {
  return (
    <div className=''>

      <section className="flex flex-col lg:flex-row h-fit items-center lg:h-screen bg-gray-100 text-start">
        
        <div className='py-16 px-4 text-start  w-full lg:w-1/2'>
          <h2 className="text-4xl font-bold text-primary-700">Helping Businesses Scale</h2>
          <p className="mt-4 text-lg text-text-700 max-w-3xl">
            I help businesses scale by building custom mobile and web application solutions 
            that address their specific challenges and drive growth. My goal is to create digital 
            products that streamline operations, enhance customer engagement, and boost business 
            efficiency.
          </p>
          <div className="mt-8 text-lg text-text-700 max-w-2xl">
            <p>
              Every business has unique needs, and I work closely with clients to develop tailored 
              solutions that solve real problems. By leveraging modern technologies and best 
              practices, I ensure that the apps I build are intuitive, scalable, and optimized 
              for success.
            </p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden'>
          <PhoneThree />
        </div>

      </section>

    </div>
  );
};

export default AboutUs;