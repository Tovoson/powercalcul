import { ArrowBigDownDashIcon } from "lucide-react";
function Settings() {
  return (
    <div className="flex">
      <div className="flex items-center justify-around w-full h-9">
        <div className="flex items-center justify-center  w-11 h-full hover:bg-cyan-800">
          <h2 className="text-[12px] font-bold">MC</h2>
        </div>
        <div className="flex items-center justify-center w-11 h-full hover:bg-cyan-800">
          <h2 className="text-[12px] font-bold">MR</h2>
        </div>
        <div className="flex items-center justify-center w-11 h-full hover:bg-cyan-800">
          <h2 className="text-[12px] font-bold">M+</h2>
        </div>
        <div className="flex items-center justify-center w-11 h-full hover:bg-cyan-800">
          <h2 className="text-[12px] font-bold">M-</h2>
        </div>
        <div className="flex items-center justify-center  w-11 h-full hover:bg-cyan-800">
          <h2 className="text-[12px] font-bold">MS</h2>
        </div>
        <div className="flex items-center justify-center  w-11 h-full hover:bg-cyan-800">
          <h2 className="text-[12px] font-bold">M<ArrowBigDownDashIcon color="black" size={10}/></h2>
        </div>
      </div>
    </div>
  );
}

export default Settings;
