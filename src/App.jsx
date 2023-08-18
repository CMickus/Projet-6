//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
//import root from "./index";
import {Home} from "./components/main";
import {Logement} from "./pages/logements";
import {Apropos} from "./pages/a-propos"
import { Header } from './components/header';
import {Footer } from './components/footer';
import {ErrorPage} from './pages/error-page'
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
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/location" element={<Logement/>}/>
        <Route path="/A-propos" element={<Apropos/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    //</React.StrictMode>
    // je n'ai pas compris comment foncitonne les routes j'ai pleins d'informations qui se contre disent je suppose que " composant page c'est plutot Index ou Logement"
  );
}

export default App;
