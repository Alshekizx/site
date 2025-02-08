"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface BlogFormData {
  title: string;
  content: string;
  image?: FileList;
}

const UploadBlog = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BlogFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);
    console.log(data); // Use the data to avoid ESLint errors
    setLoading(false);
  };

  return (
    <div className="w-[100%] h-[100%] pt-5">
      <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg my-[100px]">
        <h2 className="text-2xl font-bold text-primary mb-4">Upload New Blog Post</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Blog Title */}
          <div>
            <label className="block text-gray-700 font-semibold">Blog Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-accentGreen"
              placeholder="Enter blog title"
            />
            {errors.title?.message && (
              <p className="text-red-500 text-sm">{String(errors.title.message)}</p>
            )}
          </div>

          {/* Blog Content */}
          <div>
            <label className="block text-gray-700 font-semibold">Content</label>
            <textarea
              {...register("content", { required: "Content is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-accentGreen"
              placeholder="Write your blog content..."
              rows={6}
            />
            {errors.content?.message && (
              <p className="text-red-500 text-sm">{String(errors.content.message)}</p>
            )}
          </div>

          {/* Blog Image */}
          <div>
            <label className="block text-gray-700 font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-accentGreen"
            />
            {imagePreview && (
              <Image src={imagePreview} alt="Preview" width={500} height={300} className="mt-3 w-full h-40 object-cover rounded-lg shadow" />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accentGreen text-white py-2 rounded-lg font-bold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadBlog;