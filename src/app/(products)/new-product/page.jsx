import CreateProduct from "@/components/CreateProduct";

export async function generateMetadata() {
  return {
    title: "Create New Product",
    description: "Create New Product",
  };
}

export default function page() {
  return <CreateProduct />;
}
