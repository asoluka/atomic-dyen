import { Homepage } from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootErrorPage } from "./organisms/RootErrorPage";
import { Todo } from "./organisms/Todo";
import { Movies } from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <RootErrorPage />,
    children: [
      {
        path: "/:id",
        element: <Todo />,
        errorElement: <div>Error loading individual element</div>,
      },
    ],
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <RootErrorPage />,
  },
]);

function App() {
  return (
    <div className="container py-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
