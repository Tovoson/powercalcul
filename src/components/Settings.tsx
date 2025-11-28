
function Settings() {
  const setting = ["MC", "MR", "M+", "M-", "MS", "M"];

  return (
    <div className="flex">
      <div className="flex items-center justify-around w-full h-9">
        {setting.map((st) => (
          <div
            key={st}
            className="flex items-center justify-center  w-12 h-8 active:scale-95 active:translate-y-0.5 transition duration-100 ease-in hover:bg-cyan-800"
          >
            <h2 className="text-[12px] font-bold text-white"> {st} </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;