
import Headers from "./components/Headers";
import Options from "./components/Options";
import Screen from "./components/Screen";
import Settings from "./components/Settings";
import Standard from "./components/Standard";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-100">
      <div className="w-80 h-[82.5vh] bg-cyan-950">
        <Headers/>
        <Options/>
        <Screen/>
        <Settings/>
        <Standard/>

      </div>
    </div>
  );
}

export default App;
