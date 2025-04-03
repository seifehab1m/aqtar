import { Button } from "antd";
import Image from "next/image";
import Link from "next/link"; // Import Link for routing

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res?.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Product Store
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((product) => (
            <div
              key={product?.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center"
            >
              <div className="w-full h-48 flex justify-center items-center overflow-hidden">
                <Image
                  src={product?.image}
                  alt={product?.title}
                  width={180}
                  height={180}
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="text-base font-semibold mt-4 text-gray-900 h-12 overflow-hidden text-ellipsis break-words">
                {product?.title.length > 40
                  ? product?.title.substring(0, 37) + "..."
                  : product?.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                ${product?.price.toFixed(2)}
              </p>
              <Link className="w-full" href={`/product/${product?.id}`}>
                <Button type="primary" className="mt-4 w-full cursor-pointer">
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
