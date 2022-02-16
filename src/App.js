import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Cart } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="react-pizza/cart" element={<Cart />} />
            <Route path="react-pizza" element={<Home />} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
