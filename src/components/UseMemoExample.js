import React, { useEffect, useMemo, useRef, useState } from "react";

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  // const squareRoot = getSquareRoot(number);
  const squareRoot = useMemo(() => getSquareRoot(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setIncrement((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The square root of {number} is {squareRoot}
      </h2>

      <button onClick={onClick} className="btn btn-primary">
        Rerender
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSquareRoot(num) {
  console.log("Expensive function called!");
  for (let index = 0; index <= 10000; index++) {
    console.log(index);
  }
  console.log("Expensive function ended");
  return Math.sqrt(num);
}
