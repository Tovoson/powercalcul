import { Delete, Divide, Equal, Minus, Plus, Radical, X } from "lucide-react";

import { useMyUserStore } from "../store/myUserStore";

function Standard() {
  const { toggleFetch } = useMyUserStore();
  return (
    <div className="h-full mt-1 mx-1" onClick={() => toggleFetch(false)}>
      <div className="grid grid-cols-4 gap-1">
        <div className=" flex items-center justify-center w-full h-12 bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white ">%</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <Radical color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white ">X²</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white ">1/X</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white ">CE</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white ">C</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <Delete color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <Divide color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">7</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">8</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">9</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500">
          <X color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">4</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">5</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">6</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500">
          <Minus color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">1</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">2</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">3</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500">
          <Plus color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500">
          <Plus color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800">
          <h2 className="text-white ">0</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white">,</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500">
          <Equal color="white" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Standard;
