import React from "react";
import '../../index.css';
import { PhoneOutlined,MailOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

class Footer extends React.Component{
    render(){
        return(<div className="foot">
             <div className="title" style={{color: 'white'}}>
                        <div className="foot1">
                            <p style={{fontSize:'20px',color:'white',textAlign:'center',color:'yellow'}}>CHO THUÊ PHÒNG TRỌ</p> 
                            <p>Website cho thuê phòng trọ, nhà trọ nhanh chóng và hiệu quả<br/>
                            <PhoneOutlined /><>       </>
                            Hotline: 0234242442 <br/>
                            <MailOutlined /><>       </>
                            Email: chothuephongtro@gmail.com</p>
                        </div>

                        <div className="foot2">
                          <p style={{fontSize:'20px',color:'white',textAlign:'center',color:'yellow'}}>THÔNG TIN</p> 
                          <p>Giới thiệu<br/>
                              Blog <br/>
                              Chính sách bảo mật <br/>
                              Quy định sử dụng <br/>
                              Quy chế hoạt động 
                          </p>
                        </div>

                        <div className="foot3">
                              <p style={{fontSize:'20px',color:'white',textAlign:'center',color:'yellow'}}>KẾT NỐI VỚI CHÚNG TÔI</p> 
                              
                              <FacebookOutlined style={{color:"white",fontSize:40}}/>
                              <span style={{paddingLeft: '30px'}}>
                                <InstagramOutlined style={{color:"white",fontSize:40}}/>
                                </span>  {/*Tạo khoảng trắng giữa 2 phần tử */} 
                              <span style={{paddingLeft: '30px'}}><TwitterOutlined style={{color:"white",fontSize:40}}/>
                              </span>
                              <span style={{paddingLeft: '20px'}}> <MailOutlined style={{color:"white",fontSize:40}}/></span>
                       </div>
                        
                        <div className="foot4">
                          <hr style={{position: "relative",top:20}}></hr>
                          <h3>Copyright © 2022 - 2030 Thuephongtro.com.</h3>
                        </div>
                        
                      </div>
        </div>)
    }
}

export default Footer;