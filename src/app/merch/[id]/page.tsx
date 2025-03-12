import BaseLayout from "@/components/BaseLayout";
import ProductCard from "@/components/ProductCard";
import UnderlinedText from "@/components/decorators/UnderlinedText";
import ProductCheckout from "./ProductCheckout";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const currentProduct = {
    id: params.id,
    name: "Product One",
    price: 1999, // in cents $19.99, nice to have for stripe
    image: "/tshirts/1.png",
    isArchived: false,
  }

  const products = [
    {
      id: "2",
      name: "Product Two",
      price: 2999, // in cents $29.99
      image: "/tshirts/2.png",
      isArchived: true,
    },
    {
      id: "3",
      name: "Product Three",
      price: 3999, // in cents $39.99
      image: "/tshirts/3.png",
      isArchived: false,
    },
  ]

  if (!currentProduct || currentProduct.isArchived) return notFound();

  return (
    <BaseLayout renderRightPanel={false}>
      <div className='px-3 md:px-7 my-20'>
        <ProductCheckout product={currentProduct} />

        <h1 className='text-3xl text-center mt-20 mb-10 font-bold tracking-tight'>
          More product from{" "}
          <UnderlinedText className='decoration-wavy underline-offset-8'>OnlyPandas</UnderlinedText>
        </h1>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};
export default Page;
