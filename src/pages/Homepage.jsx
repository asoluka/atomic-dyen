import { useEffect, useState } from "react";
import { sentenceCase } from "../utils/sentenceCase";

export const Homepage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <ol className="grid grid-cols-3 gap-4">
      {todos.map((item, idx) => (
        <li className="bg-slate-600 p-4 mb-2 text-white" key={item.id}>
          {`${idx + 1}. ${sentenceCase(item.title)}`}
        </li>
      ))}
    </ol>
  );
};
