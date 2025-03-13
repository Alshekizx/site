"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { storage, db } from "../../../api/firebase"; // Firebase imports
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import Image from "next/image";
import BlogModel from "../threejsUpload";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [contentSections, setContentSections] = useState(["", "", "", ""]);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [extraImages, setExtraImages] = useState<File[]>([]);
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [modelScale, setModelScale] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleContentChange = (index: number, value: string) => {
    const updatedContent = [...contentSections];
    updatedContent[index] = value;
    setContentSections(updatedContent);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setImage: (file: File | null) => void) => {
    const file = event.target.files?.[0];
    if (file) setImage(file);
  };

  const handleExtraImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setExtraImages((prevImages) => [...prevImages, ...Array.from(files)]);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setModelFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: [".glb", ".gltf"] as const,
    multiple: false,
  });

  const uploadFile = async (file: File, path: string) => {
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  };

  const uploadExtraImages = async (files: File[]) => {
    const imageUrls: string[] = [];
    for (const file of files) {
      const path = `extra-images/${file.name}`;
      const url = await uploadFile(file, path);
      imageUrls.push(url);
    }
    return imageUrls;
  };

  const upload3DModel = async (file: File) => {
    const path = `3d-models/${file.name}`;
    const url = await uploadFile(file, path);
    return url;
  };

  const saveBlogPostToFirestore = async (blogData: any) => {
    try {
      const docRef = await addDoc(collection(db, "blogPosts"), blogData);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw new Error("Failed to save blog post to Firestore");
    }
  };

  const handleUpload = async () => {
    setLoading(true);

    try {
      let mainImageUrl = "";
      if (mainImage) {
        mainImageUrl = await uploadFile(mainImage, `main-images/${mainImage.name}`);
      }

      let extraImagesUrls: string[] = [];
      if (extraImages.length > 0) {
        extraImagesUrls = await uploadExtraImages(extraImages);
      }

      let modelFileUrl = "";
      if (modelFile) {
        modelFileUrl = await upload3DModel(modelFile);
      }

      const blogData = {
        title,
        category,
        contentSections,
        mainImage: mainImageUrl,
        extraImages: extraImagesUrls,
        modelFile: modelFileUrl,
        modelScale,
        createdAt: new Date(),
      };

      const postId = await saveBlogPostToFirestore(blogData);
      setMessage(`Blog post uploaded successfully! Post ID: ${postId}`);
    } catch (error) {
      console.error("Upload failed", error);
      setMessage("Error occurred during upload");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Upload Blog Post</h1>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Topic</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog topic"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Category</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>

      {contentSections.map((section, index) => (
        <div key={index} className="mb-4">
          <label className="block text-lg font-semibold mb-2">Content Section {index + 1}</label>
          <textarea
            className="w-full p-2 border rounded h-24"
            value={section}
            onChange={(e) => handleContentChange(index, e.target.value)}
            placeholder={`Enter content for section ${index + 1}`}
          />
        </div>
      ))}

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Main Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setMainImage)} />
        {mainImage && (
          <Image
            src={URL.createObjectURL(mainImage)}
            alt="Main Preview"
            height={200}
            width={200}
            className="mt-2 w-full h-40 object-cover rounded"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Extra Images</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleExtraImageUpload}
          multiple
        />
        {extraImages.map((img, index) => (
          <div key={index} className="mb-2">
            <Image
              src={URL.createObjectURL(img)}
              height={200}
              width={200}
              alt={`Extra Preview ${index + 1}`}
              className="mt-2 w-full h-40 object-cover rounded"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">3D Model Upload (Drag & Drop or Select File)</label>
        <div
          {...getRootProps()}
          className="border-2 border-dashed p-6 text-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-primary-500 font-semibold">Drop your model file here...</p>
          ) : (
            <p className="text-gray-600">Drag & Drop a .glb or .gltf file here, or click to select one</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Model Scale: {modelScale}</label>
        <input
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={modelScale}
          onChange={(e) => setModelScale(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mt-6 w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
        {modelFile ? <BlogModel modelPath={modelFile} scale={modelScale} /> : <p className="text-gray-500">No model selected</p>}
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-6 ${loading ? "bg-gray-500" : "bg-primary-500"} text-white px-6 py-2 rounded hover:bg-primary-700 transition`}
      >
        {loading ? "Uploading..." : "Upload Blog Post"}
      </button>

      {message && <div className="mt-4 text-center">{message}</div>}
    </main>
  );
};

export default UploadPage;