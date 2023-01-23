import React, { useEffect, useRef, useState } from "react";

export default function UseRefExample2() {
  const renders = useRef(1);
  const prevName = useRef("");
  const [name, setName] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>prevName state: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}
