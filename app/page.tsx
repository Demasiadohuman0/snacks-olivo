import Image from "next/image";
import styles from "./page.module.css";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand:["data.default_price"],
    limit: 3,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center">
              Bienvenido a Snacks Olivo Un placer servirte
            </h2>
            <p className="text-neutral-600 text-center">
              Descubre nuestros increibles precios y nuestro extenso catalogo!
            </p>
            <Button 
              asChild 
              variant="default"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
              size="lg"
            >
              <Link 
                href="/products"
                className="w-full"
              >
                Buscar productos
              </Link>
            </Button>
          </div>
        </div>
      </section>

         </div>
  );
}
