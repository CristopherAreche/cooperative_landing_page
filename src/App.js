import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/homeView";
import Footer from "./components/footer/footer";
import Register from "./views/registerView";
import AboutUsView from "./views/aboutusView";

export default function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route exact path="/cooperative_landing_page" element={<Home />} />
        <Route
          exact
          path="/cooperative_landing_page/register"
          element={<Register />}
        />
        <Route
          exact
          path="/cooperative_landing_page/aboutUs"
          element={<AboutUsView />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
