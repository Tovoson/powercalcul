import { History, MenuIcon } from "lucide-react";
import SideBar from "./SideBar";
import { useMyUserStore } from "../store/myUserStore";

function Options() {
    const { isFetch, toggleFetch } = useMyUserStore();
  return (
    <div className="flex h-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between gap-1.5 h-full">
          <MenuIcon
            color="white"
            size={20}
            className=" w-11 h-10 p-2 z-10 hover:bg-cyan-800"
            onClick={() => toggleFetch(!isFetch)}
          />
          <h3 className="text-white font-semibold">Stardard</h3>
            {isFetch ? <SideBar /> : ""} 
        </div>
        <History
          color="white"
          size={20}
          className="w-11 h-full p-2 hover:bg-cyan-800"
            onClick={() => toggleFetch(false)}
        />
      </div>
    </div>
  );
}

export default Options;
