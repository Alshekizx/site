"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component

const EventsPage = () => {
  const router = useRouter();

  // Example events data
  const events = [
    {
      id: 1,
      title: "Fundraising Gala Night",
      date: "March 15, 2024",
      description:
        "An elegant evening dedicated to raising funds for feeding the homeless. Enjoy live music, art auctions, and inspiring speeches.",
      image: "/images/charity-work4.jpg",
    },
    {
      id: 2,
      title: "Community Cleanup Drive",
      date: "April 22, 2024",
      description:
        "Join us in cleaning up local neighborhoods while spreading awareness about sustainable living.",
      image: "/images/charity-work4.jpg",
    },
    {
      id: 3,
      title: "Charity Fashion Show",
      date: "May 10, 2024",
      description:
        "Experience an exciting showcase of sustainable fashion, featuring eco-friendly designs from talented creators.",
      image: "/images/charity-work4.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary">
            Our Events
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Discover the inspiring events that bring our community together to make a difference.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-heading font-bold text-primary">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                <p className="mt-4 text-gray-700">{event.description}</p>
                <button
                  className="mt-4 text-accentGreen font-semibold hover:underline"
                  onClick={() => router.push(`/view/blog/eventLearnMore/${event.id}`)}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;