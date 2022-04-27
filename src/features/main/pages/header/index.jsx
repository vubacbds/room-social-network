import React, { useState } from 'react';

import { Link as Lik} from 'react-router-dom';
import { Anchor, Drawer, Button, Modal, Popover, Typography } from 'antd';
import { BiChevronDown } from "react-icons/bi";
import { PlusOutlined } from '@ant-design/icons';
import Login from "../../../../components/login"
import "../../index.scss";

const { Link } = Anchor;

function MainLayout() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  //Modal đăng nhập
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
          </Anchor>

          <Modal title="Đăng nhập" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Login />
          </Modal>
          
        </div>

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
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;