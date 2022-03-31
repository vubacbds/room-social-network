import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './Header.css';
import './index.css';
import Icon from './Icon';
import { Button } from 'antd';
const { Header, Content, Footer } = Layout;
class HomePage extends React.Component{
    render(){
        return(<>
                     <Layout className="layout">
                        <Header className='Head'>
                        <div className="logo">
                        <h1 style = {{  color: '#00ffff', fontSize: '40px' }}>TMA</h1>
                        <h2 className= 'title'>CHO THUÊ PHÒNG TRỌ</h2>
                        <ul>
                                    <li>Trang chủ</li>
                                    <li>Giới thiệu</li>
                                    <li>Thông tin phòng trọ</li>
                                    <li>Liên hệ</li>
                        </ul>
                        <div className='rightBanner'>
                            <Button type="primary" style={{fontSize: '15px'}}>Đăng tin</Button>
                            <ul>
                                <li>Đăng nhập</li>
                                <li>Đăng kí</li>
                            </ul>
                        </div>
                        </div>
                       
                        </Header>


                        
                    </Layout>
                       
        </>);
    }
}

export default HomePage;