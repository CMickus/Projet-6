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
        <Route index element={<root/>}/>
        <Route path="location:id" element={<Logement/>}/>
        <Route path="A-propos" element={<Apropos/>}/>
      </Route>
    </Routes>

    // je n'ai pas compris comment foncitonne les routes j'ai pleins d'informations qui se contre disent je suppose que " composant page c'est plutot Index ou Logement"
  );
}

export default App;
