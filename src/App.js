import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialIcons from "./components/SocialIcons";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/skills",
      component: Skills,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ];

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="flex flex-col">
                <Component />
                <SocialIcons />
              </div>
            }
          />
        ))}
      </Routes>
      <ToastContainer
        className="toast-position"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
