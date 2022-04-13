import { Card, Col, Row, Button, Typography, Rate} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
// import './sitecard.css';
import { HomeOutlined, ShareAltOutlined, HeartOutlined  } from '@ant-design/icons';
const { Title } = Typography;
const { Meta } = Card;

function Involve() {
    return( 
        <>

        <div className='room-search'>
        
        <Row  style={{paddingLeft:10}}>
            <Col  span={6}>
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img 
                    alt="example" 
                    src="https://vcdn-giadinh.vnecdn.net/2020/08/18/received-697751297751351-jpeg-7926-4958-1597718429.jpg" 
                    />}
                >
                        <div className="gutter-row" style={{color:'red'}}>Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div style={{display:'flex',marginTop:5}}>
                                Đánh giá:
                            <div style={{marginTop:-5,marginLeft:5}}>
                                <HomeOutlined/>
                                <HomeOutlined/>
                                <HomeOutlined/>
                                <HomeOutlined/>
                                <HomeOutlined/>
                            </div>
                        </div>
                        <div><HomeOutlined style={{fontSize:17}}/> Quận 2-Hồ Chí Minh</div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
            <Col span={6} >
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://cdn.diemnhangroup.com/noithatdiemnhan/2021/07/thiet-ke-phong-tro-12m2-co-gac-lung-can-dam-bao-nhung-dieu-gi-1.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div>Đánh giá:
                        </div>
                        <div><HomeOutlined style={{fontSize:17}}/> Quận 2-Hồ Chí Minh</div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
            <Col span={6} >
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://vcdn-giadinh.vnecdn.net/2020/08/18/received-697751297751351-jpeg-7926-4958-1597718429.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div>Đánh giá:
                       </div>
                        <div><HomeOutlined style={{fontSize:17}}/> Quận 2-Hồ Chí Minh</div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
            <Col span={6} >
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://vcdn-giadinh.vnecdn.net/2020/08/18/received-697751297751351-jpeg-7926-4958-1597718429.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div>Đánh giá:
                        </div>
                        <div><HomeOutlined style={{fontSize:17}}/> Quận 2-Hồ Chí Minh</div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
        </Row>
        <br/>

        </div>
        </>
    );
}
export default Involve;