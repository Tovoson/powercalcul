import { useMyUserStore } from "../store/myUserStore";

function Screen() {
  const { toggleFetch, firstValue, secondValue, operator, resultat, refreshState } = useMyUserStore();
  console.log("resultat: ", resultat);
  return (
    <div className="flex h-26">
      <div
        className="flex flex-1/2 flex-col items-end justify-start w-full h-full "
        onClick={() => toggleFetch(false)}
      >
        <h3 className="mt-3 mr-2 text-gray-200">
          {["+", "-", "/", "*"].includes(operator) && `${firstValue} ${operator} `}
          {operator === "√" && `√(${firstValue})`}
          {operator === "X²" && `sqrt(${firstValue})`}
          {operator === "1/X" && `1/(${firstValue})`}

        </h3>
        <h1 className="text-4xl mr-2 font-bold text-white">
        {operator ? `${secondValue}` : `${firstValue}`}
        {firstValue ? "" : 0}
        {
          resultat ? ` = ${resultat.toFixed(4)}` : ""
        }
        </h1>
      </div>
    </div>
  );
}

export default Screen;
