
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">10</span>

      <div>
        <button className="flex items-center">
          +1
        </button>
      </div>
    </div>
  );
}


