import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,

} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
     

        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<h2>error</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
