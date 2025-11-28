import { useEffect } from "react";
import Headers from "./components/Headers";
import Options from "./components/Options";
import Screen from "./components/Screen";
import Settings from "./components/Settings";
import Keys from "./components/Keys";
import { Toaster } from "react-hot-toast";
import { useCalculExpressionStore } from "./store/calculExpressionStore";

function App() {
  const { expression, resultatCourant } = useCalculExpressionStore();

  useEffect(() => {
    console.log("expression:",expression );
    console.log("resultat courant:",resultatCourant );
  }, [expression, resultatCourant]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-400">
      <div className="w-80 h-6/12 bg-cyan-950 flex flex-col justify-between pb-2 backdrop-blur-sm">
        <div className="flex flex-col h-auto mb-2">
          <Headers />
          <Options />
          <Screen />
          <Settings />
        </div>
        <Keys />
      </div>

      <Toaster />
      
    </div>
  );
}

export default App;
