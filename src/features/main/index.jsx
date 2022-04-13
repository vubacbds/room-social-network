import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Product_detils from "./pages/product_detail";
import "./index.scss";

function HomePage() {
  return (
    <Routes>
      <Route path="/" element={<Product_detils/>} />
    </Routes>
    
  );
}

export default HomePage;