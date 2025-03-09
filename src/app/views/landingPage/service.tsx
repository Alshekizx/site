import React from 'react';
import { 
  DevicePhoneMobileIcon, 
  
  PaintBrushIcon, 
  CreditCardIcon 
} from '@heroicons/react/20/solid'; // Importing specific icons

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web & Mobile Development",
      description: "We build seamless and responsive web and mobile applications that meet your business goals. Our solutions are optimized for performance and user experience.",
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-primary-700" />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Our design team crafts intuitive and user-friendly interfaces that enhance user experience and engagement. We prioritize your users' needs at every step.",
      icon: <PaintBrushIcon className="h-10 w-10 text-secondary-500" />,
    },
    {
      id: 3,
      title: "Fintech Solutions",
      description: "We provide innovative fintech solutions, helping businesses in the financial sector build secure, scalable, and efficient digital platforms.",
      icon: <CreditCardIcon className="h-10 w-10 text-accent-500" />,
    },
    {
      id: 4,
      title: "Custom Software Development",
      description: "We create bespoke software solutions tailored to your unique business challenges. From CRM to ERP systems, we deliver scalable and flexible solutions.",
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-success-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-primary-700">Our Services</h2>
      <p className="mt-6 text-lg text-text-700 max-w-3xl mx-auto">
        We offer a wide range of digital services that can be customized to meet the unique needs of your business. 
        Here a glimpse of what we do:
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {services.map((service) => (
          <div key={service.id} className="service-card bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-primary-700">{service.title}</h3>
            <p className="mt-4 text-lg text-text-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;