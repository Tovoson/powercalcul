import { Delete, Divide, Equal, Minus, Plus, Radical, X } from "lucide-react";

import { useMyUserStore } from "../store/myUserStore";
import { myNewStore } from "../store/myNewStore";

function Keys() {
  const {
    toggleFetch,
    // operator: storeInputString,
    // firstValue: storInputNumber,
    setInputNumber,
    // setInputString,
    // refreshState,
    deleteStore,
    // equalCalcul,
  } = useMyUserStore();

  const { ajouterChiffre, ajouterOperateur, effacer, calculResultatFinal } =
    myNewStore();
  const calculResultatFinals = () => {
    console.log(calculResultatFinal());
  };

  const keys = [
    {
      id: 1,
      text: "%",
      isOperator: true,
      fonc: () => ajouterOperateur("%"),
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 2,
      text: <Radical color="white" size={20} />,
      isOperator: true,
      fonc: () => ajouterOperateur("√"),
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 3,
      text: "X²",
      isOperator: true,
      fonc: () => ajouterOperateur("X²"), // Assurez-vous d'avoir une logique pour le carré
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 4,
      text: "1/X",
      isOperator: true,
      fonc: () => ajouterOperateur("1/X"), // Assurez-vous d'avoir une logique pour l'inverse
      className: "bg-cyan-900 hover:bg-cyan-800",
    },

    // Ligne 2 : CE, C, Delete, Divide
    {
      id: 5,
      text: "CE",
      fonc: () => ajouterOperateur("1/X"), // Fonction à créer/définir () => effacerEntree()
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 6,
      text: "C",
      fonc: () => effacer(),
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 7,
      text: <Delete color="white" size={20} />,
      fonc: () => deleteStore(),
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 8,
      text: <Divide color="white" size={20} />,
      isOperator: true,
      fonc: () => ajouterOperateur("/"),
      className: "bg-cyan-900 hover:bg-cyan-800",
    },

    // Ligne 3 : 7, 8, 9, Multiplier
    {
      id: 9,
      text: "7",
      fonc: () => ajouterChiffre("7"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 10,
      text: "8",
      fonc: () => ajouterChiffre("8"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 11,
      text: "9",
      fonc: () => ajouterChiffre("9"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 12,
      text: <X color="white" size={20} />,
      isOperator: true,
      fonc: () => ajouterOperateur("x"),
      className: "bg-cyan-900 hover:bg-cyan-500",
    },

    // Ligne 4 : 4, 5, 6, Soustraire
    {
      id: 13,
      text: "4",
      fonc: () => ajouterChiffre("4"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 14,
      text: "5",
      fonc: () => ajouterChiffre("5"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 15,
      text: "6",
      fonc: () => ajouterChiffre("6"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 16,
      text: <Minus color="white" size={20} />,
      isOperator: true,
      fonc: () => ajouterOperateur("-"),
      className: "bg-cyan-900 hover:bg-cyan-500",
    },

    // Ligne 5 : 1, 2, 3, Ajouter
    {
      id: 17,
      text: "1",
      fonc: () => ajouterChiffre("1"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 18,
      text: "2",
      fonc: () => ajouterChiffre("2"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 19,
      text: "3",
      fonc: () => ajouterChiffre("3"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 20,
      text: <Plus color="white" size={20} />,
      isOperator: true,
      fonc: () => ajouterOperateur("+"),
      className: "bg-cyan-900 hover:bg-cyan-500",
    },

    {
      id: 21,
      text: "+/-",
      fonc: () => ajouterOperateur("+"), //() => changerSigne()
      className: "bg-cyan-900 hover:bg-cyan-500",
    },
    {
      id: 22,
      text: "0",
      fonc: () => ajouterChiffre("0"),
      className: "bg-gray-900 hover:bg-cyan-800",
    },
    {
      id: 23,
      text: <h2 className="text-white">,</h2>,
      fonc: () => setInputNumber("."),
      className: "bg-cyan-900 hover:bg-cyan-800",
    },
    {
      id: 24,
      text: <Equal color="white" size={20} />,
      fonc: () => calculResultatFinals(),
      className: "bg-cyan-900 hover:bg-cyan-500",
    },
  ];

  return (
    <div className="h-auto mt-1 mx-1" onClick={() => toggleFetch(false)}>
      <div className="grid grid-cols-4 gap-1 h-full">
        {keys.map((val) => (
          <div
          key={val.id}
            className={`flex items-center justify-center w-full h-12 ${val.className}`}
            onClick={val.fonc}
          >
            {
              typeof val.text === "string" ? ( <h2 className="text-white"> {val.text} </h2> ): ( val.text )
              
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keys;
