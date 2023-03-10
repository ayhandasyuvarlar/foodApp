import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import "./style/App.css"
const Lazy = React.lazy(() => import("./scenes/home"));

function App() {
  const setLoading = (
    <div style={{ width: "100%", textAlign: "center", margin: "40px auto" }}>
      <span className="loader"></span>
    </div>
  );
  return (
    <section className="App">
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={setLoading}>
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
