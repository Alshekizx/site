import React from 'react';
import PhoneThree from './aboutThree';

const AboutUs = () => {
  return (
    <div className=''>

      <section className="flex flex-col lg:flex-row h-fit lg:h-screen bg-gray-100 text-start">
        
        <div className='py-16 px-4 text-start w-full lg:w-1/2'>
          <h2 className="text-4xl font-bold text-primary-700">Custom Mobile & Web Solutions</h2>
          <p className="mt-4 text-lg text-text-700 max-w-3xl">
            We specialize in designing and developing custom mobile and web applications tailored to your needs. 
            Our solutions are crafted with precision, ensuring seamless performance, intuitive user experiences, 
            and scalable architecture.
          </p>
          <div className="mt-8 text-lg text-text-700 max-w-2xl">
            <p>
              Our team of developers and designers collaborates closely to bring your ideas to life. Whether it’s 
              a startup or an enterprise-level solution, we leverage modern technologies to build high-quality, 
              efficient, and innovative digital products.
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