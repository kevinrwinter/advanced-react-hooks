import React, { useEffect, useRef, useState } from "react";

export default function Todo() {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setIsLoading(false);
          }
        }, 3000);
      });

    // Runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isLoading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
}
