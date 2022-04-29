import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function RoomsInfo(props) {
  
  var items = props.data;
  const roomsInfo = items.map((item, index) => {
    return index < 6 && (
      <Col md={{ span: 8 }} key={index} >
        <Link to={`detail/${item.roomId}`} >
          <Card
            hoverable
            cover={<img alt="Ảnh phòng trọ" src="https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-ngoi-nha.jpg" />}
          >
            <Meta title={item.descriptionRoom} />
            <div>Diện tích: {item.capacity}</div>
            <div>Địa chỉ: {item.provinceId}</div>
            <div>Đánh giá: ⭐️⭐️⭐️</div>
            <div>{item.price} /tháng</div>
          </Card>
        </Link>
      </Col>
    )
  });
  return (
    <div className="container-fluid">
      <div className="titleHolder">
        <h2>{props.title}</h2>
        {props.desc ? <p>{props.desc}</p> : <></>}
      </div>
      <Row gutter={[16, 16]} >
        {roomsInfo}
      </Row>
    </div>
  );
}

export default RoomsInfo;