import { useEffect, useState } from "react";
import { sentenceCase } from "../utils/sentenceCase";
import { Link, Outlet } from "react-router-dom";

export const Homepage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        setTodos(json.map((item) => ({ ...item, status: "pending" })))
      );
  }, []);

  function handleSelect(e, id) {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, status: e.target.value };
        }
        return item;
      });
    });
  }

  function generateStyle(status) {
    const style = {};

    switch (status) {
      case "canceled":
        style.color = "red";
        style.textDecoration = "line-through";
        break;
      case "done":
        style.color = "green";
        break;
      case "in-progress":
        style.color = "yellow";
        break;
      default:
        style.textDecoration = "none";
        style.color = "white";
        break;
    }

    return style;
  }

  return (
    <div className="flex gap-x-8">
      <div className="w-2/4 h-[95vh] overflow-x-auto">
        <ol className="grid grid-cols-1 gap-4">
          {todos.map((item, idx) => {
            return (
              <Link
                to={`/${item.id}?title=${item.title}&completed=${item.completed}`}
                key={item.id}
              >
                <li className="bg-slate-600 p-4 mb-2 text-white">
                  <div className="flex gap-4 justify-between">
                    <p style={generateStyle(item.status)}>{`${
                      idx + 1
                    }. ${sentenceCase(item.title)}`}</p>

                    <div>
                      <select
                        style={{ color: "black" }}
                        name="status"
                        id="status"
                        onChange={(e) => handleSelect(e, item.id)}
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ol>
      </div>
      <div className="w-2/4">
        <Outlet />
      </div>
    </div>
  );
};
