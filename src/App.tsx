
import { useEffect } from "react";
import Headers from "./components/Headers";
import Options from "./components/Options";
import Screen from "./components/Screen";
import Settings from "./components/Settings";
import Keys from "./components/Keys";
import { Toaster } from "react-hot-toast";
import { myNewStore } from "./store/myNewStore";

function App() {
  const { expression, resultatCourant } = myNewStore();

  useEffect(() => {

    console.log(expression, resultatCourant);
  }, [expression, resultatCourant]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-80 h-[82.5vh] bg-cyan-950 flex flex-col justify-between pb-2">


        <Headers />
        <Options />
        <Screen />
        <Settings />
        <Keys />
        </div>

      <Toaster />
    </div>
  );
}

export default App;
