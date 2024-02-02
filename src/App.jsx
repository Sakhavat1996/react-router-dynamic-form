import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useRoutes
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

// prior to 6.4
/*
const routedElements = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Route>
);
const router = createBrowserRouter(routedElements)
*/
// aftermath from 6.4
const router = createBrowserRouter([
  {
    path: '/' ,
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children : [
      ...['/' , '/home'].map(item=> (
        {path: item , element: <Home/>}
      )),
      { path: "/about", element: <About />},
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
