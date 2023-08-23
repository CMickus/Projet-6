//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes, Route
} from "react-router-dom";
//import root from "./index";
import {BaseLayout} from "./components/BaseLayout"
import { Home } from "./pages/Home";
import { Logement } from "./pages/Logements";
import { Apropos } from "./pages/A-propos"
import { ErrorPage } from './pages/Error-page';

//ici seront les routes du routings
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home />} />
          <Route path="location/:id" element={<Logement />} />
          <Route path="A-propos" element={<Apropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
//un systeme de layout serait mieux pour voir en fonctiond eoù je suis pour modifer header footer and co sanas les repeter dans chaques pages
/* line 21 route parent et enfant d'elle même on peut metre un autre bundle après ligne 24 et avoir un autre baselayout pour celui là*/
//regarder dans react router comment recupérer le composante de la route Logement check les synthaxes
export default App;
