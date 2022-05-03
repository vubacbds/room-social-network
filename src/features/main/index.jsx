import React from "react";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AppHeader from "./pages/header";
import AppFooter from "./pages/footer";
import RoomDetail from "./pages/room-detail";
import Home from "./pages/home";
import Login from "../../components/login";
<<<<<<< HEAD
import Register from "../../components/register";
=======
import Regist from "../../components/regist";
import Profile from "./pages/profile";
<<<<<<< HEAD

>>>>>>> eda6aaeca013083918e3ff82e1d07db60be49696
=======
>>>>>>> c793db0a1170ed5d066a83f93b21099168a60b0f
import { Layout } from 'antd';
import RoomManagement from "./pages/room-management";
import RoomList from "./pages/room-list";
const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Routes>
          <Route path="/detail/:id/*" element={<RoomDetail />} />
          <Route path="/login/*" element={<Login />} />
<<<<<<< HEAD
          <Route path="/register/*" element={<Register />} />
=======
          <Route path="/regist/*" element={<Regist />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/room-management/*" element={<RoomManagement />} />
          <Route path="/room-list/*" element={<RoomList />} />
          <Route path="/room-list/:id/*" element={<RoomList />} />
          
>>>>>>> eda6aaeca013083918e3ff82e1d07db60be49696
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default HomePage;