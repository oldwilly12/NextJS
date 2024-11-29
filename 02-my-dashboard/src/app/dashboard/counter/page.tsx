import { CarCounter } from "@/app/shopping-cart";


export const metadata = {
 title: 'Shopping Cart',
 description: 'Just a Counter',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CarCounter valor = {10} />
    </div>
  );
}


