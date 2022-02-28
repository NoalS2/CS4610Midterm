import { useState, useEffect } from 'react';

export const Counter = ({ min, max }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (min > 0) {
      setCount(min);
    }
    if (max < 0) {
      setCount(max);
    }
  }, []);

  const countUp = () => {
    if (count === max) {
      return;
    }
    setCount(count + 1);
  };

  const countDown = () => {
    if (count === min) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex-col border-2 w-40 rounded-md">
        <h1 className="m-1 text-6xl text-center">{count}</h1>
        <div className="flex justify-around">
          <button className="bg-blue-600 p-1 text-3xl w-9 mb-3 rounded-md" onClick={countUp}>
            +
          </button>
          <button className="bg-blue-600 p-1 text-3xl w-9 mb-3 rounded-md" onClick={countDown}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
