
import { useEffect } from "react";
import Headers from "./components/Headers";
import Options from "./components/Options";
import Screen from "./components/Screen";
import Settings from "./components/Settings";
import Standard from "./components/Standard";
import { useMyUserStore } from "./store/myUserStore";
import { Toaster } from "react-hot-toast";
import { myNewStore } from "./store/myNewStore";

function App() {
  const { expression, resultatCourant } = myNewStore();

  useEffect(() => {
    
    console.log(expression, resultatCourant);
  }, [expression, resultatCourant]);

  return (
    <div className="flex items-center justify-center h-screen bg-amber-100">
      
      <div className="w-80 h-[82.5vh] bg-cyan-950">
        <Headers/>
        <Options/>
        <Screen/>
        <Settings/>
        <Standard/>
        <Toaster/>
      </div>
    </div>
  );
}

export default App;
