import { useState } from "react";

const MainContent = () => {
  const [name, setName] = useState("Pawan");
  const [isVisible1, setIsVisible1] = useState(true); 
  const [isVisible2, setIsVisible2] = useState(true); 
  const [isVisible3, setIsVisible3] = useState(true);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("bg-rose-600");

  const changeColor = () => {
    const value = color === "bg-rose-600" ? "bg-blue-600" : "bg-rose-600";
    setColor(value);
  };

  return (
    <div className="bg-gray-300 min-h-screen py-16">
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-8">
        <div className="bg-white border rounded-md p-6 space-y-6">
          <h1>Example-1</h1>
          <h1 className="text-xl font-semibold">My name is {name}</h1>
          <button
            className="bg-indigo-600 text-white rounded px-6 py-2"
            onClick={() => setName(name === "Pawan" ? "Pramod" : "Pawan")}
          >
            Update
          </button>
        </div>

        <div className="bg-white border rounded-md p-6 space-y-6">
          <h1>Example-2</h1>
          {isVisible1 && (
            <h1 className="text-xl font-semibold">Hello World!</h1>
          )}
          <button
            className="bg-indigo-600 text-white rounded px-6 py-2"
            onClick={() => setIsVisible1(!isVisible1)}
          >
            {isVisible1 ? "Hide" : "Show"}
          </button>
        </div>

        <div className="bg-white border rounded-md p-6 space-y-6">
          <h1>Example-3</h1>
          {isVisible2 && (
            <h1 className="text-xl font-semibold">Count - {count}</h1>
          )}
          <button
            className="bg-indigo-600 text-white rounded px-6 py-2"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click me
          </button>
        </div>

        <div className="bg-white border rounded-md p-6 space-y-6">
          <h1>Example-4</h1>
          {isVisible3 && (
            <h1
              className={`w-[120px] h-[120px] rounded-lg ${color}`}
            ></h1>
          )}
          <button
            className="bg-indigo-600 text-white rounded px-6 py-2"
            onClick={changeColor}
          >
            Change div color
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
