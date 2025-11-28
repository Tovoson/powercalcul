import { Minus, Square, X } from "lucide-react";
import { useCalculSimpleStore } from "../store/calculSimpleStore";

function Headers() {
  const { toggleFetch } = useCalculSimpleStore();

  const btn = [
    <Minus
      color="white"
      size={20}
      className="h-full w-11 p-2 hover:bg-gray-700 transition duration-100 active:scale-95"
    />,
    <Square
      color="white"
      size={20}
      className="h-full w-11 p-2 hover:bg-gray-700 duration-100 active:scale-95"
    />,
    <X color="white" size={20} className="h-full w-11 p-2 hover:bg-gray-700 duration-100 active:scale-95" />,
  ];

  return (
    <div className="flex top-0">
      <div
        className="flex items-center justify-between w-full"
        onClick={() => toggleFetch(false)}
      >
        <h3 className="pl-2 text-xs">Calculatrice</h3>
        <div className="flex items-center justify-between flex-row h-8 ">
          {btn.map((bt) => bt)}
        </div>
      </div>
    </div>
  );
}

export default Headers;
