import React from "react";
import useFetch from "../hooks/useFetch";

export default function CustomHookExample1() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}
