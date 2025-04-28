"use client";

import { userCartStore } from "@/store/cart-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkout-action";
export default function CheckoutPage() {
    const { items, removeItem, addItem, clearCart } = userCartStore();
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    if (total === 0 || items.length === 0) {
      return (
        <div className="flex justify-center items-center h-screen">
            {" "}
            <h1 className="text-3xl font-bold mb-4">No hay productos en tu carrito</h1>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Carrito</h1>
        <Card className="max-w-md mx-auto mb-8">
            <CardHeader>
                <CardTitle className="text-xl font-bold">Productos en el carrito</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                  {items.map((item, key) => (
                    <li key={key} className="flex flex-col gap-2 border-b pb-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-semibold">
                        {" "}
                        ${((item.price * item.quantity) / 100).toFixed(2)}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="bg-black text-white"
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <Button 
                        size="sm"
                        onClick={() => addItem({ ...item, quantity: 1 })}
                        className="bg-black text-white"
                      >
                        +
                      </Button>
                    </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t pt-2 text-lg font-semibold">
                  Total: ${(total/100).toFixed(2)}
                </div>
              </CardContent>
            </Card>
            <form action={checkoutAction} className="max-w-md mx-auto">
              <input type="hidden" name="items" value={JSON.stringify(items)} />
              <Button type="submit" variant={"default"} className="w-full">
                Comprar
              </Button>
            
              <Button onClick={() => clearCart()} variant={"default"} className="w-full">
                Limpiar carrito
              </Button>
            </form>
      </div>
    );
}