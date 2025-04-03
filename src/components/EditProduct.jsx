"use client";
import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import Loading from "@/components/Loading";

export default function EditProduct({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
        const data = await res.json();
        setProduct(data); // Set the fetched product data
      } catch (error) {
        message.error("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  // Handle product update (form submission)
  const handleUpdate = async (updatedProduct) => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      message.success("Product updated successfully!");
      router.push(`/product/${slug}`); // Redirect to the product details page after update
    } catch (error) {
      message.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while fetching product data
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
            Edit Product
          </h2>
          {product && (
            <ProductForm
              handleSubmit={handleUpdate} // Submit handler
              loading={loading} // Loading state
              initialValues={product} // Fetched product data as initial values
            />
          )}
        </div>
      </div>
    </div>
  );
}
