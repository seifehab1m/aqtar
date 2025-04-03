import EditProduct from "@/components/EditProduct";

export async function generateMetadata({ params: { slug } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const data = await res?.json();
  return {
    title: "Edit Product" + data?.title,
    description: data?.description,
  };
}

export default function page({ params: { slug } }) {
  return <EditProduct slug={slug} />;
}
