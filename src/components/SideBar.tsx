import {
  Calculator,
  CalendarDays,
  ChartBarBigIcon,
  Code2,
  Info,
  Volume1,
} from "lucide-react";
function SideBar() {
  return (
    <div className="absolute z-0 w-65 h-10">
      <div className="flex items-start justify-between flex-col pt-11 pl-2.5 gap-2 bg-cyan-800 h-125">
        <div className="flex items-start justify-between flex-col gap-2 h-100 overflow-y-hidden hover:overflow-y-auto pr-26.5 ml-2">
          <h1 className="text-white font-bold text-sm mb-3">Calculatrice</h1>
          <div className="flex items-center justify-center gap-2">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Standard</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <ChartBarBigIcon color="white" size={18} />
            <h2 className="text-white text-sm">Scientifique</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Code2 color="white" size={18} />
            <h2 className="text-white text-sm">Programmeur</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <CalendarDays color="white" size={18} />
            <h2 className="text-white text-sm">Calcul date</h2>
          </div>
          <h2 className="text-white font-bold text-sm">Convertisseur</h2>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Devises</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Volume1 color="white" size={18} />
            <h2 className="text-white text-sm">Volume</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Longueur</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Poids et Masse</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Température</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Enérgie</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Surface</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Surface</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Vitesse</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Heure</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Puissance</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Données</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Pression</h2>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Calculator color="white" size={18} />
            <h2 className="text-white text-sm">Angle</h2>
          </div>
        </div>
        <div className="flex items-start justify-center flex-row mb-3 gap-2">
          <Info color="white" size={18} />
          <h2 className="text-white font-bold text-sm">A propos de</h2>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
