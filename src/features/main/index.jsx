import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import ProductDetail from "./pages/product-detail";
import "./index.scss";

function HomePage() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/detail/*" element={<ProductDetail/>} />
    </Routes>
    
  );
}

export default HomePage;