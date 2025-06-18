import { Delete, Divide, Equal, Minus, Plus, Radical, X } from "lucide-react";

import { useMyUserStore } from "../store/myUserStore";
import { myNewStore } from "../store/myNewStore";

function Standard() {
  const {
    toggleFetch,
    operator: storeInputString,
    firstValue: storInputNumber,
    setInputNumber,
    setInputString,
    refreshState,
    deleteStore,
    equalCalcul,
  } = useMyUserStore();

  const { ajouterChiffre, ajouterOperateur, effacer, calculResultatFinal} = myNewStore();
  const calculResultatFinals = () => {
    console.log(calculResultatFinal());
  }

  return (
    <div className="h-full mt-1 mx-1" onClick={() => toggleFetch(false)}>
      <div className="grid grid-cols-4 gap-1">
        <div
          className=" flex items-center justify-center w-full h-12 bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterOperateur("%");
          }}
        >
          <h2 className="text-white ">%</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterOperateur("√");
          }}
        >
          <Radical color="white" size={20} />
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterOperateur("X²");
          }}
        >
          <h2 className="text-white ">X²</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterOperateur("1/X");
          }}
        >
          <h2 className="text-white ">1/X</h2>
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800">
          <h2 className="text-white ">CE</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            effacer();
          }}
        >
          <h2 className="text-white ">C</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            deleteStore();
          }}
        >
          <Delete color="white" size={20} />
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterOperateur("/");
          }}
        >
          <Divide color="white" size={20} />
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("7");
          }}
        >
          <h2 className="text-white ">7</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("8");
          }}
        >
          <h2 className="text-white ">8</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("9");
          }}
        >
          <h2 className="text-white ">9</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500"
          onClick={() => {
            ajouterOperateur("x");
          }}
        >
          <X color="white" size={20} />
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("4");
          }}
        >
          <h2 className="text-white ">4</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("5");
          }}
        >
          <h2 className="text-white ">5</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("6");
          }}
        >
          <h2 className="text-white ">6</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500"
          onClick={() => {
            ajouterOperateur("-");
          }}
        >
          <Minus color="white" size={20} />
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("1");
          }}
        >
          <h2 className="text-white ">1</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("2");
          }}
        >
          <h2 className="text-white ">2</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("3");
          }}
        >
          <h2 className="text-white ">3</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500"
          onClick={() => {
            ajouterOperateur("+");
          }}
        >
          <Plus color="white" size={20} />
        </div>
        <div className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500">
          <Plus color="white" size={20} />
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-gray-900 hover:bg-cyan-800"
          onClick={() => {
            ajouterChiffre("0");
          }}
        >
          <h2 className="text-white ">0</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-800"
          onClick={() => {
            setInputNumber(".");
          }}
        >
          <h2 className="text-white">,</h2>
        </div>
        <div
          className="flex items-center justify-center w-full h-12  bg-cyan-900 hover:bg-cyan-500"
          onClick={() => {
            calculResultatFinals(); 
          }}
        >
          <Equal color="white" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Standard;
