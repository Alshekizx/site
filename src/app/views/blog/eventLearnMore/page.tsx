"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image

const allEvents = [
  {
    id: 1,
    title: "Fundraising Gala Night",
    date: "March 15, 2024",
    location: "Grand Hall, Abuja, Nigeria",
    image: "/images/charity-work4.jpg",
    description: `
      <p>
        Join us for an elegant evening filled with live music, art auctions, and inspiring speeches. This event supports our mission to feed the homeless and bring sustainable change to communities in need.
      </p>
      <h2>Event Highlights</h2>
      <ul>
        <li>Live performances</li>
        <li>Art auction</li>
        <li>Networking opportunities</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Community Cleanup Drive",
    date: "April 22, 2024",
    location: "Local Neighborhoods, Abuja",
    image: "/images/charity-work4.jpg",
    description: `
      <p>
        Join hands with us for a cleanup drive to spread awareness about sustainable living and improve the environment in our communities.
      </p>
      <ul>
        <li>Free cleanup kits for all participants</li>
        <li>Networking and volunteer opportunities</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Charity Fashion Show",
    date: "May 10, 2024",
    location: "Fashion Hub, Lagos, Nigeria",
    image: "/images/charity-work4.jpg",
    description: `
      <p>
        Celebrate eco-friendly fashion and creativity at our Charity Fashion Show. Proceeds go to supporting homeless shelters and feeding programs.
      </p>
      <ul>
        <li>Eco-friendly fashion collections</li>
        <li>Exclusive charity auction</li>
        <li>Meet talented designers</li>
      </ul>
    `,
  },
];

const EventLearnMore = () => {
  const { id } = useParams();
  const router = useRouter();

  if (!id || typeof id !== "string") {
    return (
      <section className="py-16 px-6 sm:px-12 text-center">
        <p className="text-xl text-red-500 font-bold">Event not found!</p>
        <button
          className="mt-4 text-accentGreen font-semibold hover:underline"
          onClick={() => router.push("/events")}
        >
          Back to Events
        </button>
      </section>
    );
  }

  const eventDetails = allEvents.find((event) => event.id === parseInt(id, 10));

  if (!eventDetails) {
    return (
      <section className="py-16 px-6 sm:px-12 text-center">
        <p className="text-xl text-red-500 font-bold">Event not found!</p>
        <button
          className="mt-4 text-accentGreen font-semibold hover:underline"
          onClick={() => router.push("/events")}
        >
          Back to Events
        </button>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 sm:px-12 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Back to Events Button */}
        <button
          className="text-accentGreen font-semibold hover:underline mb-8"
          onClick={() => router.back()}
        >
          ← Back to Events
        </button>

        {/* Event Details */}
        <article>
          <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src={eventDetails.image}
              alt={eventDetails.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            {eventDetails.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Date:</strong> {eventDetails.date}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Location:</strong> {eventDetails.location}
          </p>
          <div
            className="mt-6 text-gray-700 leading-relaxed prose prose-lg prose-accentGreen"
            dangerouslySetInnerHTML={{ __html: eventDetails.description }}
          ></div>
        </article>
      </div>
    </section>
  );
};

export default EventLearnMore;
