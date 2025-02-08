"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  // Example blog data
  const blogPosts = [
    {
      id: 1,
      title: "How Your Purchases Make a Difference",
      snippet:
        "Every item you buy helps provide meals for the homeless in Africa. Learn more about the impact of your support.",
      image: "/images/groupPic2.jpg",
      link: "/blog/how-your-purchases-make-a-difference",
    },
    {
      id: 2,
      title: "5 Fashion Tips for a Sustainable Wardrobe",
      snippet:
        "Discover how you can stay stylish while making eco-friendly choices. It's easier than you think!",
      image: "/images/groupPic.jpg",
      link: "/blog/fashion-tips-sustainable-wardrobe",
    },
    {
      id: 3,
      title: "Our Latest Charity Events",
      snippet:
        "Take a look at the incredible events we've hosted recently to support our cause and how you can get involved.",
      image: "/images/groupPic2.jpg",
      link: "/blog/latest-charity-events",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 ">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary">
            Stories of Impact, Fashion, and Community
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Stay updated with our latest events, fashion tips, and how your support changes lives.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-heading font-bold text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-700">{post.snippet}</p>
                <Link
                  href={post.link}
                  className="mt-4 inline-block text-accentGreen font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;