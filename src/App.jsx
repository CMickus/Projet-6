//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import root from "./index";
import ErrorPage from "./pages/error-page";
import Logement from "./pages/logements";
import Apropos from "./pages/a-propos"
import { Header } from './components/header';
/*
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
]);*/

//ici seront les routes du routings
function App() {
  return (
    //<React.StrictMode> <Route path="/" element={<Home/>}/>
    <Router>
      <Routes>
        <Route path="/location" element={<Logement/>}/>
        <Route path="/A-propos" element={<Apropos/>}/>
      </Routes>
      <Header/>
    </Router>
    //</React.StrictMode>
    // je n'ai pas compris comment foncitonne les routes j'ai pleins d'informations qui se contre disent je suppose que " composant page c'est plutot Index ou Logement"
  );
}

export default App;
