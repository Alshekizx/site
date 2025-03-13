import { db, storage } from "../firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadBlogPost = async (
  title: string,
  category: string,
  contentSections: string[],
  mainImage: File | null,
  extraImages: File[],
  modelFile: File | null,
  modelScale: number
) => {
  try {
    // Upload Main Image
    let mainImageUrl = "";
    if (mainImage) {
      const imageRef = ref(storage, `blogImages/${Date.now()}-${mainImage.name}`);
      await uploadBytes(imageRef, mainImage);
      mainImageUrl = await getDownloadURL(imageRef);
    }

    // Upload Extra Images
    const extraImageUrls: string[] = [];
    for (const image of extraImages) {
      if (image) {
        const imgRef = ref(storage, `blogImages/${Date.now()}-${image.name}`);
        await uploadBytes(imgRef, image);
        const imgUrl = await getDownloadURL(imgRef);
        extraImageUrls.push(imgUrl);
      }
    }

    // Upload 3D Model File
    let modelUrl = "";
    if (modelFile) {
      const modelRef = ref(storage, `models/${Date.now()}-${modelFile.name}`);
      await uploadBytes(modelRef, modelFile);
      modelUrl = await getDownloadURL(modelRef);
    }

    // Save Data to Firestore
    const blogRef = collection(db, "blogs");
    await addDoc(blogRef, {
      title,
      category,
      contentSections,
      mainImage: mainImageUrl,
      extraImages: extraImageUrls,
      threeDModel: modelUrl,
      modelScale,
      createdAt: Timestamp.now(),
    });

    return { success: true, message: "Blog post uploaded successfully!" };
  } catch (error) {
    console.error("Error uploading blog:", error);
    return { success: false, message: error.message };
  }
};