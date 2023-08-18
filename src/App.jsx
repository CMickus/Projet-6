//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes, Route 
} from "react-router-dom";
//import root from "./index";
import {Home} from "./components/main";
import {Logement} from "./pages/logements";
import {Apropos} from "./pages/a-propos"
import { Header } from './components/header';
import {Footer } from './components/footer';
import {ErrorPage} from './pages/error-page';

//ici seront les routes du routings
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/location" element={<Logement/>}/>
        <Route path="/A-propos" element={<Apropos/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
