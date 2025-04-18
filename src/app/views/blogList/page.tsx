"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../api/firebase";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../../api/data";

const FullBlogListPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogCollection = collection(db, "blogPosts");
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(blogList as BlogPost[]);
    };
    
    fetchBlogPosts();
  }, []);

  return (
    <main className="flex flex-col gap-10 p-6">
      <div>
        <Link
          className="border-b-2 text-primary-500 border-b-primary-500 hover:border-b-secondary-500 transition"
          href="/"
        >
          back
        </Link>
      </div>

      <h1 className="text-3xl text-center font-bold">Latest Blog Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post: BlogPost) => (
          <div
            key={post.id}
            className="border h-full border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white"
          >
            <Image
              src={post.mainImage}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
             
              <Link href={`/views/blogList/${post.id}`}>
                <span className="text-blue-600 hover:underline cursor-pointer mt-2 inline-block">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FullBlogListPage;