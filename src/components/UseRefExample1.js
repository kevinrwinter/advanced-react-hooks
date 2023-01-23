import React, { useRef } from "react";

export default function UseRefExample1() {
  const inputRef = useRef();
  const paragraphRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "HI";
    inputRef.current.style.backgroundColor = "rebeccapurple";
    // paragraphRef.current.textContent = inputRef.current.value;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paragraphRef}>
          Hello
        </p>
      </form>
    </div>
  );
}
