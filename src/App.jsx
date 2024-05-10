import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Projects.jsx";
import "../src/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="container">
      <section>
        <RouterProvider router={router} />
      </section>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
