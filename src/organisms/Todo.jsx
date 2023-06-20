import React from "react";
import { useParams } from "react-router-dom";

export const Todo = () => {
  let { id } = useParams();

  return <div>Todo with ID: {id}</div>;
};
