"use client";

import React from "react";
import Image from "next/image";

const BlogReadMore = () => {
  // Example blog post data
  const blogPost = {
    id: 1,
    title: "How Your Purchases Make a Difference",
    date: "January 25, 2025",
    image: "/images/groupPic.jpg", // Replace with actual image path
    content: `
      Every item you buy helps provide meals for the homeless in Africa. Your contributions have directly supported feeding programs that deliver essential nutrition to those in need. 
      
      <h2>Why This Matters</h2>
      Hunger remains a significant challenge in many parts of Africa. By choosing our products, you’re joining a community dedicated to making a tangible difference in the lives of vulnerable people.
      
      <h2>How You’re Helping</h2>
      Here's how your purchases have an impact:
      <ul>
        <li>Providing meals for homeless individuals</li>
        <li>Supporting sustainable fashion initiatives</li>
        <li>Building awareness about eco-friendly practices</li>
      </ul>
      
      Thank you for being a part of our mission to bring hope and change through fashion and community action.
    `,
  };

  return (
    <section className="py-16 px-6 sm:px-12">
      <div className="container mx-auto max-w-4xl">
        {/* Back to Blog Button */}
        <button
          className="text-accentGreen font-semibold hover:underline mb-8"
          onClick={() => window.history.back()}
        >
          ← Back to Blog
        </button>

        {/* Blog Post */}
        <article>
          {/* Featured Image */}
          <div className="relative w-full h-64 mb-6">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Title and Date */}
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            {blogPost.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">{blogPost.date}</p>

          {/* Blog Content */}
          <div
            className="mt-6 text-gray-700 leading-relaxed prose prose-lg prose-accentGreen"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          ></div>
        </article>
      </div>
    </section>
  );
};

export default BlogReadMore;