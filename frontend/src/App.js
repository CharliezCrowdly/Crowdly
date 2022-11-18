import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  ProtectedRoute,
  FeedPage,
  SharedLayout,
  YourWorkPage,
  JobDetail,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h1>landing page</h1>
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="work" element={<YourWorkPage />} />
          <Route path="feeds" element={<FeedPage />} />
        </Route>
        <Route
          path="/job"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="jobDetail" element={<JobDetail />} />
        </Route>

        <Route path="*" element={<h2>error</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
