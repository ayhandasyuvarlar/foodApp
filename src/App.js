import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./scenes/home";
import React from "react";
import "./style/App.css";
const Lazy = React.lazy(() => import("./scenes/home"));
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback="loading...">
                  <Lazy />
                </React.Suspense>
              }
            />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </section>
  );
}

export default App;
