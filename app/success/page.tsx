"use client";

import Link from "next/link";
import { userCartStore } from "@/store/cart-store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
    const { clearCart } = userCartStore();
    useEffect(() => {
        clearCart();
    }, [clearCart]);
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Pago realizado correctamente</h1>
            <p className="mb-4">
                Gracias por tu compra
            </p>
            <Link href="/products" className="text-blue-600 hover:underline">Volver al inicio</Link>
        </div>
    );
}

