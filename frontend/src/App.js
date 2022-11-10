import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, ProtectedRoute, FeedPage, SharedLayout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<h1>landing page</h1>} />

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="feeds" element={<FeedPage />} />
        </Route>

        <Route path="*" element={<h2>error</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
