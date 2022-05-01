import React, { useState } from 'react';

import { Link as Lik} from 'react-router-dom';
import { Anchor, Drawer, Button, Modal, Popover, Typography } from 'antd';
import { BiChevronDown } from "react-icons/bi";
import { PlusOutlined } from '@ant-design/icons';
import { AiOutlinePlus } from "react-icons/ai";
import Login from "../../../../components/login"
import RoomAdd from "../room-add"
import "../../index.scss";

const { Link } = Anchor;

function MainLayout() {
  //Modal đăng nhập
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //Modal đăng tin
  const [visibleAddRoom, setVisibleAddRoom] = useState(false);
  const showDrawerAddRoom = () => {
    setVisibleAddRoom(true);
  };
  const onCloseAddRoom = () => {
    setVisibleAddRoom(false);
  };
  const [isModalVisibleAddRoom, setIsModalVisibleAddRoom] = useState(false);
  const showModalAddRoom = () => {
    setIsModalVisibleAddRoom(true);
  };
  const handleOkAddRoom = () => {
    setIsModalVisibleAddRoom(false);
  };
  const handleCancelAddRoom = () => {
    setIsModalVisibleAddRoom(false);
  };

  const logout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("id")
    localStorage.removeItem("role")
    localStorage.removeItem("avatarUrl")
    setTimeout("location.reload(true)",1000)
  }
  
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Room Social Network</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="/" title="Trang chủ" />
            <Link href="/detail" title="Phòng trọ" />
            <Link href="/about" title="Giới thiệu" />
            <Link href="/works" title="Liên hệ" />
<<<<<<< HEAD
            <Link href="/room-social-network/Login"  title="Đăng nhập" />
            <Link href="/pricing" title="Pricing" />
            <Link href="/contact" title="Contact" />
            <Link href="/news" title="News" />
=======
>>>>>>> eda6aaeca013083918e3ff82e1d07db60be49696
          </Anchor>
        </div>

        <Modal title="Đăng nhập" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Login />
        </Modal>
        <Modal title="Đăng tin" visible={isModalVisibleAddRoom} onOk={handleOkAddRoom} onCancel={handleCancelAddRoom} footer={null}>
            <RoomAdd />
        </Modal>
        <Button onClick={showModalAddRoom} type="primary" style={{ background: "green", borderColor: "green"}}> + Đăng tin</Button>
        {localStorage.getItem("accessToken") ? 
          (
            
              <Popover
                          content={
                              <>
                                <Button>Quản lý tin đăng</Button>
                                <br />
                                <Button><Lik to={`profile/${localStorage.getItem("id")}`} >Hồ sơ cá nhân </Lik></Button>
                                <br />                               
                                <Button type='button' onClick={() => logout()}>Đăng xuất</Button>
                                {/* <div>
                                    <img src={localStorage.getItem("avatarUrl")} style={{width: 200, height: 200}}  />
                                </div> */}
                              </>
                          } 
                          title="Profile" 
                          trigger="click"
                          placement="bottom"
                      >
                          <Typography.Link>
                              <img className='imgavartar' src={localStorage.getItem("avatarUrl")} width={46} height={46}/>
                          </Typography.Link>
              </Popover>
          ) : <Button type='primary' onClick={showModal}>Đăng nhập <BiChevronDown /></Button>
        }
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="/" title="Home" />
              <Link href="/about" title="About" />
              <Link href="/detail" title="Features" />
              <Link href="/works" title="How it works" />
              <Link href="/faq" title="FAQ" />
              <Link href="/pricing" title="Pricing" />
              <Link href="/contact" title="Contact" />
              <Link href="/news" title="News" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;