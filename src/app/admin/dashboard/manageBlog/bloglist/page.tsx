"use client";

import { useState } from "react";
import BlogListTable from "./blogListTable";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Understanding Integrated Farming", uploadDate: "2025-02-01" },
    { id: 2, title: "Climate Resilience for Food Security", uploadDate: "2025-02-03" },
  ]);

  const handleEdit = (id: number) => {
    alert(`Edit blog with ID: ${id}`);
    // Implement actual navigation or edit logic
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="w-[100%] h-[100%] pt-5">
      <div className=" mx-auto p-6 lg:p-10 rounded-lg my-[100px]">
        <h2 className="text-2xl font-bold text-primary mb-4">Blog List</h2>
        {blogs.length > 0 ? (
          <BlogListTable blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
        ) : (
          <p className="text-gray-600">No blogs available. Start by uploading a new blog.</p>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;