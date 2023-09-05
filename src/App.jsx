import React from 'react';
import {
  Routes, Route
} from "react-router-dom";
import {BaseLayout} from "./components/BaseLayout"
import { Home } from "./pages/Home";
import { Logement } from "./pages/Logement";
import { Apropos } from "./pages/APropos"
import { ErrorPage } from './pages/ErrorPage';

//ici seront les routes du routings
function App() {
  return (
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home />} />
          <Route path="location/:id" element={<Logement />} />
          <Route path="A-propos" element={<Apropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
}
export default App;
