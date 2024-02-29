import React from "react";
import { Route, Routes } from "react-router-dom";
import History from "./pages/historyPage/History";
import Home from "./pages/homePage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
