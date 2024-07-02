import { useState } from "react";

const CounterWithFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>{count}</button>
  );
};

export default CounterWithFunction;
