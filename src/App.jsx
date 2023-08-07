//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import root from "./index";
import ErrorPage from "./pages/error-page";
import Logement from "./pages/logements";
import Apropos from "./pages/a-propos"

const router = createBrowserRouter([
  {
    path: "/",
    element: <root />,
    errorElement: <ErrorPage />
  },  
  {
    path: "logements",
    element: <Logement />,
  },
  {
    path: "A-propos",
    element: <Apropos />,
  },
]);

//ici seront les routes du routings
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={composant page Homepage}/>
        <Route path="location:id" element={composant page Location}/>
        <Route path="A-propos" element={compostant page apropos}/>
      </Route>
    </Routes>
  );
}

export default App;
