import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./scenes/home";
import "./style/App.css";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer/>
        </>
      </BrowserRouter>
    </section>
  );
}

export default App;
