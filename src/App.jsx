import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Projects.jsx";
import "../src/index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Project",
    element: <Project />,
  },
  {
    path: "About",
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <section className="container-box">
        <RouterProvider router={router} />
      </section>
    </div>
  );
}

export default App;
