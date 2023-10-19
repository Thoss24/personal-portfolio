import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Root from "./components/routes/Root";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
