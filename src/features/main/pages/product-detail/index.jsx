import React from 'react';
// import 'antd/dist/antd.scss';
import './index.scss';
import Involve from '../../../../components/product-details/involve';
import Mockdata from '../../../../components/product-details/data-table';
import NoteCmt from '../../../../components/product-details/note-cmt';
import Slide from '../../../../components/product-details/slider';
import Head from '../../../../components/header';
import Futer from '../../../../components/footer';
function Product_detail() {


  return (
    // <header></header>
    
    <body>
      <Head />
    <div className='container'>
      <strong style={{ paddingLeft :'85px',fontSize: '30px', color: 'black'}}>Cho thuê phòng trọ chung cư có máy lạnh giá rẻ </strong>

      {/* Carousel */}
      <div className="slide"  >
        <Slide />
      </div>
      {/* Đổ dữ liệu vào table */}
      <div style={{ border: '10px solid white', margin: '20px 100px', lineHeight: '10xp' }}>
        <div className="data_table">
        <h4><strong style={{ paddingLeft: '20px'}}>Thông tin chi tiết:</strong></h4>
          <Mockdata />
        </div>
        {/* Đổ dự liệu văn bản */}
        <div className='mota'>
          <h4><strong>Mô tả:</strong></h4>

          <p style={{color: 'black'}}>KHAI TRƯƠNG PHÒNG CHO THUÊ NGAY NGÃ TƯ GÒ MÂY VỚI GIÁ SIÊU RẺ 🌟</p>
          <p style={{color: 'black'}}>Giá : 2tr6 - 3tr2 ( ban công riêng ) ❌ </p>

          <p style={{color: 'black'}}>❌ Nội thất : Máy lạnh , Tủ quần áo , Tủ bếp trên - bếp dưới , Nước nóng NLMT</p>

          <p style={{color: 'black'}}>🚦Vị trí : Nằm ngã tư gò mây thuận tiện sang ĐH Hufi , đường Phạm Đăng Giảng , Lê Trọng Tấn , Trường Chinh , Kênh 19/5 , Aeon Tân Phú</p>

          <p style={{color: 'black'}}>🎁 Tiện ích :</p> 
          <p style={{color: 'black'}}>➡️ Phòng mới sạch sẽ, rộng rãi, mới xây</p>
          <p style={{color: 'black'}}>➡️ Trang bị đầy đủ tiện nghi</p>
          <p style={{color: 'black'}}>➡️ Giờ giấc tự do, không chung chủ</p>
          <p style={{color: 'black'}}>➡️ Máy giặt chung, camera an ninh, wifi, vệ sinh hành lang thường xuyên , cửa vân tay</p>
          <p style={{color: 'black'}}>➡️ Bãi giữ xe rộng rãi</p> 

          <p style={{color: 'black'}}>❌ Chi phí hợp lí :</p>
          <p style={{color: 'black'}}>⚡️ Điện : 3,5k/Kwh</p> 
          <p style={{color: 'black'}}>💦 Nước : 100k/người</p> 
          <p style={{color: 'black'}}>🏍 Xe : Free</p>
          <p style={{color: 'black'}}>✨ Phí dịch vụ : 100k/phòng</p> 

          <p style={{color: 'black'}}>❌ Tăng 400.000/tháng đến khi làm gác</p> 

          <p style={{color: 'black'}}>💥 PHÒNG HOT PHÒNG HOT LIÊN HỆ NHANH ĐỂ CÓ PHÒNG VỊ TRÍ ĐẸP NHẤT 💥</p>
          <p style={{color: 'black'}}>----------------------------------------------</p> 
          <p style={{color: 'black'}}>☎️ Điện thoại liên hệ:</p>
        </div>
        {/* Hiển thị danh sách các phòng tương thích */}
        <div className='involve'>
          <h4> <strong style={{ paddingLeft: '20px'}}>Phòng tương thích:</strong></h4>
          <Involve />
        </div>
        {/* Comment */}
        <div className='comment' style={{color:'black',  paddingLeft: '20px'}} >
          <h4><strong>Bình luận:</strong></h4>
          <NoteCmt />
        </div>
      </div>
    </div>
    <Futer/>
    </body>
  );
}
export default Product_detail
