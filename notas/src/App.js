import React from "react";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CrearNota from "./pages/CrearNota";
import EditarNota from "./pages/EditarNota";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CrearNota" element={<CrearNota />} />
        <Route path="/Editar/:id" element={<EditarNota />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
