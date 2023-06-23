import React from "react";
import { useSearchParams } from "react-router-dom";

export const Todo = () => {
  let [searchParams] = useSearchParams();

  return (
    <div>
      <p>
        <span className="font-bold">Title:</span> {searchParams.get("title")}
      </p>

      <p>
        <span className="font-bold">Completed:</span>{" "}
        {searchParams.get("completed") === "true" ? "True" : "False"}
      </p>
    </div>
  );
};
