export default function Home() {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <h1 className="select-one font-bold text-4xl ">Contador para PyMES</h1>
      <div className="flex gap-4 p-4">
        <button className="cursor-pointer bg-gray-900 p-2">Documentación</button>
        <button className="cursor-pointer bg-gray-900 p-2">Github</button>
      </div>
    </div>
  );
}
