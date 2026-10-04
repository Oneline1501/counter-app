import { useState } from "react";

function App()
 {
  const [count, setCount] = useState(0);

  const increment = () =>
     {
    setCount(count + 1);
  };

  const decrement = () =>
     {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () =>
     {
    setCount(0);
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-xl shadow-lg text-center">
      <h1 class="text-4xl font-bold mb-5 text-sky-500">COUNTER APP</h1>

      <h2 class="text-3xl font-bold mb-4">Count: {count}</h2>

      {count === 0 && <p class="text-red-500 mb-4">Minimum limit reached</p>}
      <div class="flex gap-3">
      <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 hover:text-black " onClick={increment}>INCREMENT</button>

      <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-black" onClick={decrement}>DECREMENT</button>

      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 hover:text-black" onClick={reset}>RESET</button>
    </div>
    </div>
    </div>
  );
}

export default App;