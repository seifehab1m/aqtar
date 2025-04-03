import ProductDetails from "@/components/ProductDetails";

export async function generateMetadata({ params: { slug } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const data = await res?.json();
  return {
    title: data?.title,
    description: data?.description,
  };
}

export default function page({ params: { slug } }) {
  return <ProductDetails slug={slug} />;
}
