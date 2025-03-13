"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../api/firebase"; // Firebase imports
import Image from "next/image";
import Link from "next/link";
import BlogModel from "../threejsUpload";
import { BlogPost } from "../../../api/data";

const BlogViewPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  

  // Early return if the id is not a valid string
  if (typeof id !== 'string') {
    return <p className="text-center text-gray-500">Invalid blog post ID</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        if (!id) {
          console.error("Error: ID is missing!");
          return;
        }
  
        const docRef = doc(db, "blogPosts", id);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setPost(docSnap.data() as BlogPost);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };
  
    fetchBlogPost();
  }, [id]);
  

  if (!post) {
    return <p className="text-center text-gray-500">Blog post not found.</p>;
  }

  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <Link
        className="border-b-2 text-primary-500 border-b-primary-500 hover:border-b-secondary-500 transition"
        href="/views/blogList/"
      >
        back
      </Link>

      <header className="mb-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-1">Category: {post.category}</p>
      </header>

      <div className="w-full h-64 relative rounded-lg overflow-hidden">
        <Image src={post.mainImage} alt={post.title} layout="fill" objectFit="cover" />
      </div>

      <section className="mt-6 space-y-6">
        {post.contentSections.map((section, index) => (
          <p key={index} className="text-gray-700 text-lg">{section}</p>
        ))}
      </section>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {post.extraImages.map((img, index) => (
          <div key={index} className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image src={img} alt={`Extra image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      {post.modelFile ? (
  <div className="mt-8 w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
    <BlogModel modelPath={post.modelFile} scale={post.modelScale} />
  </div>
) : (
  <p className="text-center text-gray-500 mt-8">No 3D model available.</p>
)}
    </main>
  );
};

export default BlogViewPage;