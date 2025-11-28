import { useCalculExpressionStore } from "../store/calculExpressionStore";
import { useCalculSimpleStore } from "../store/calculSimpleStore";

function Screen() {
  const { toggleFetch, firstValue, secondValue, operator } = useCalculSimpleStore();
  const { expression, resultatCourant } = useCalculExpressionStore();

  return (
    <div className="flex h-auto">
      <div
        className="flex flex-1/2 flex-col items-end justify-start w-full h-auto  overflow-x-auto"
        onClick={() => toggleFetch(false)}
      >
        <h3 className="mt-3 mr-2 text-gray-200 h-14">
          {/* {["+", "-", "/", "*"].includes(operator) && `${firstValue} ${operator} `}
          {operator === "√" && `√(${firstValue})`}
          {operator === "X²" && `sqrt(${firstValue})`}
          {operator === "1/X" && `1/(${firstValue})`} */}
          {`${expression} `}
        </h3>
        <h1 className="text-4xl mr-2 font-bold text-white h-14">
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