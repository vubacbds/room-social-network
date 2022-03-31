import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import NotFound from "./components/not-found";

//Lazy loading
const HomePage = React.lazy(() => import("./features/main"));

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="app__spin">
            <Spin tip="Loading..." />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/room-social-network" replace />} />
            <Route path="/room-social-network/*" element={<HomePage/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;