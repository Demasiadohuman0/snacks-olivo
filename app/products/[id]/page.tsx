import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: { id: string };
}) {
    const product = await stripe.products.retrieve(params.id, {
        expand: ["default_price"],
    });
    const plainProduct = JSON.parse(JSON.stringify(product));
    if (!plainProduct.default_price) {
        notFound();
    }

  return <ProductDetail product={plainProduct} />
}

