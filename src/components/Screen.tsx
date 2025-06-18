
import { myNewStore } from "../store/myNewStore";
import { useMyUserStore } from "../store/myUserStore";

function Screen() {
  const { toggleFetch, firstValue, secondValue, operator, resultat } = useMyUserStore();
  const { expression, resultatCourant } = myNewStore();
  
  

  return (
    <div className="flex h-26">
      <div
        className="flex flex-1/2 flex-col items-end justify-start w-full h-full "
        onClick={() => toggleFetch(false)}
      >
        <h3 className="mt-3 mr-2 text-gray-200">
          {/* {["+", "-", "/", "*"].includes(operator) && `${firstValue} ${operator} `}
          {operator === "√" && `√(${firstValue})`}
          {operator === "X²" && `sqrt(${firstValue})`}
          {operator === "1/X" && `1/(${firstValue})`} */}
          {`${expression} `}

        </h3>
        <h1 className="text-4xl mr-2 font-bold text-white">
        {operator ? `${secondValue}` : `${firstValue}`}
        {resultatCourant}
        {/* {
          resultat ? ` = ${resultat.toFixed(4)}` : ""
        } */}
        </h1>
      </div>
    </div>
  );
}

export default Screen;
