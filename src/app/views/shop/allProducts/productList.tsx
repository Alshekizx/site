"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Filters {
    gender?: string;
    colors?: string[];
    sizes?: string[];
    [key: string]: string | string[] | undefined;
}

interface Product {
    id: number;
    name: string;
    images: string[]; // Merged imageUrl and additionalImages into one array
    price: number;
    rating: number;
    reviews: number;
    isNew?: boolean;
    isSale?: boolean;
    isLimitedEdition?: boolean;
    sizes: string[]; // Available sizes
    colors: string[]; // Available colors
    gender: string; // Gender of the product (e.g., "Men", "Women", etc.)
    description: string; // Short product description
    isBestSeller?: boolean; // New property for best seller
}

interface ProductListProps {
    filters: Filters;
    sortOption: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Tshirts",
        images: ["/images/Tshirt.jpg", "/images/Hoodie.jpg", "/images/Tshirt.jpg", "/images/Tshirt.jpg"], // Merged images
        price: 29.99,
        rating: 4,
        reviews: 150,
        isNew: true,
        isSale: false,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Blue", "Green"],
        gender: "Men",
        description: "A comfortable and stylish t-shirt perfect for casual wear.",
        isBestSeller: true,
    },
    {
        id: 2,
        name: "Hoodies",
        images: ["/images/maleHoodie.jpg", "/images/Hoodie.jpg", "/images/Tshirt.jpg", "/images/Hoodie.jpg"], // Merged images
        price: 49.99,
        rating: 5,
        reviews: 200,
        isSale: true,
        isLimitedEdition: true,
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Gray", "Navy"],
        gender: "Men",
        description: "A cozy hoodie for those cold days, made with premium material.",
    },
    // Add more products with the new structure...
];

const ProductList: React.FC<ProductListProps> = ({ filters, sortOption }) => {
    console.log("Filters:", filters);
    console.log("Sort option:", sortOption);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        if (quickViewProduct) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
        }

        // Clean up when the component is unmounted or modal is closed
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [quickViewProduct]);

    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
    };

    const handleCloseQuickView = () => {
        setQuickViewProduct(null);
    };

    const handleImageChange = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="container mx-auto px-4">
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg overflow-hidden bg-white"
                    >
                        <div className="relative">
                            <Image
                                src={product.images[0]} // Show only the first image
                                alt={product.name}
                                className="w-full h-60 object-cover cursor-pointer"
                                onClick={() => console.log("Navigate to product details page")}
                                width={240}
                                height={240}
                            />
                            {product.isNew && (
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded">
                                    New
                                </span>
                            )}
                            {product.isSale && (
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
                                    Sale
                                </span>
                            )}
                            {product.isLimitedEdition && (
                                <span className="absolute bottom-2 right-2 bg-yellow-500 text-black text-xs font-semibold py-1 px-2 rounded">
                                    Limited Edition
                                </span>
                            )}
                            {product.isBestSeller && (
                                <span className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded">
                                    Best Seller
                                </span>
                            )}
                        </div>

                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                            <p className="mt-2 text-sm font-bold text-gray-900">${product.price}</p>
                            <div className="mt-2 text-xs text-gray-600 flex items-center space-x-1">
                                <span>{'★'.repeat(Math.floor(product.rating))}</span>
                                <span>({product.reviews} reviews)</span>
                            </div>
                            <button className="mt-4 w-full bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                            <button
                                onClick={() => handleQuickView(product)}
                                className="mt-2 w-full text-sm text-blue-600 underline"
                            >
                                Quick View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick View Modal */}
            {quickViewProduct && (
    <div className="fixed inset-0 flex items-center justify-center  z-50 animate-fade-in">
        <div className="absolute inset-0 bg-primary opacity-50 rounded-lg"></div>
        <div className="bg-white p-6 rounded-lg shadow-xl max-h-[90vh] overflow-auto max-w-lg w-full transform transition-all scale-95">
            <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-semibold text-gray-800">{quickViewProduct.name}</h2>
                <button
                    onClick={handleCloseQuickView}
                    className="text-gray-500 text-2xl hover:text-gray-800"
                >
                    &times;
                </button>
            </div>

            {/* Slideshow of images */}
            <div className="relative">
                <div className="flex overflow-hidden">
                    {quickViewProduct.images.map((image, index) => (
                        <div
                            key={index}
                            className={`transition-transform duration-300 ${
                                index === currentImageIndex ? "block" : "hidden"
                            }`}
                        >
                            <Image
                                src={image}
                                alt={quickViewProduct.name}
                                className="mt-4 w-full h-80 object-contain rounded-lg"  // Fixed height and width fills the container
                                width={0}  // Removing width constraint
                                height={0}  // Removing height constraint to let 'object-contain' handle it
                                layout="responsive"  // Ensures responsive layout
                            />
                        </div>
                    ))}
                </div>
                
                {/* Left and Right Navigation Icons */}
                <button
                    onClick={() => handleImageChange(currentImageIndex - 1)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 rounded-full p-2 opacity-70 hover:opacity-100 transition"
                >
                    &#8592;
                </button>

                <button
                    onClick={() => handleImageChange(currentImageIndex + 1)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 rounded-full p-2 opacity-70 hover:opacity-100 transition"
                >
                    &#8594;
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {quickViewProduct.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className={`w-2.5 h-2.5 rounded-full ${index === currentImageIndex ? "bg-blue-500" : "bg-gray-500"}`}
                        />
                    ))}
                </div>
            </div>

            <p className="mt-4 text-xl font-bold text-gray-800">${quickViewProduct.price}</p>
            <p className="mt-2 text-xs text-gray-600">
                {'★'.repeat(Math.floor(quickViewProduct.rating))} ({quickViewProduct.reviews} reviews)
            </p>

            {/* Additional Product Info */}
            <div className="mt-4 text-sm text-gray-700">
                <p><strong>Available Sizes:</strong> {quickViewProduct.sizes.join(", ")}</p>
                <p><strong>Available Colors:</strong> {quickViewProduct.colors.join(", ")}</p>
                <p><strong>Gender:</strong> {quickViewProduct.gender}</p>
                <p><strong>Description:</strong> {quickViewProduct.description}</p>
                {quickViewProduct.isSale && <p className="text-red-500 font-bold">This product is on sale!</p>}
            </div>

            <div className="mt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default ProductList;