import { Homepage } from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Profile } from "./pages/Profile";
import { Example } from "./pages/Example";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Example />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
