
import { db } from "@/lib/prisma";

import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: { slug: string; productId: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({ where: { id: productId } });
  if (!product) {
    return notFound();
  }
  return (
    <>
      <ProductHeader product={product} />
      <h1>Product Page</h1>
      <p>Slug: {slug}</p>
      <p>Product ID: {productId}</p>
    </>
  );
};

export default ProductPage;
