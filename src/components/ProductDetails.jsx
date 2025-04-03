"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { message } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/components/Loading";

export default function ProductDetails({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        message.error("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${slug}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete product");
      }

      message.success("Product deleted successfully!");
      router.push("/"); // Redirect to the home page after deletion
    } catch (error) {
      message.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full h-72 flex justify-center items-center overflow-hidden rounded-lg shadow-md">
              <Image
                src={product?.image}
                alt={product?.title}
                width={350}
                height={350}
                className="object-contain transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="text-3xl font-semibold mt-6 text-gray-900 text-center">
              {product?.title}
            </h2>
            <p className="text-gray-600 text-lg mt-2 text-center">
              {product?.description}
            </p>
            <p className="text-gray-800 text-xl font-bold mt-4">
              ${product?.price?.toFixed(2)}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              {/* Edit and Delete Buttons */}
              <Link href={`/product/edit/${slug}`}>
                <button className="w-full sm:w-auto bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-md text-lg hover:bg-yellow-700 transition-all transform hover:scale-105">
                  Edit Product
                </button>
              </Link>

              <button
                onClick={handleDelete}
                className="w-full sm:w-auto bg-red-600 text-white py-3 px-6 rounded-lg shadow-md text-lg hover:bg-red-700 transition-all transform hover:scale-105"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
