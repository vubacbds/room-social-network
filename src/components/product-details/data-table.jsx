import React, { Component } from 'react';
import './style/data-table.scss';
class Mockdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: [
        {
          id: 1,
          gia: '2011282125',
          dia_chi: '2',
          Dien_tich: 'wasif@email.com',
          Danh_gia: ' ★★★',
          Lien_he: '0128197463',
          Thoi_gian: '30/05/2022',
          // Image:
          //   'https://th.bing.com/th/id/R.6a5f839c8fc960a17eb99a79d3eae340?rik=0o%2f8f3VkViplyw&riu=http%3a%2f%2fwww.mahermouhajer.com%2fwp-content%2fuploads%2f2018%2f11%2f1772-.jpg&ehk=k85T6XKmMa70Tv2RE5nORCb43FoWhqrMJjfpbR2FkLM%3d&risl=&pid=ImgRaw&r=0',
        },
      ],
      room2: [
        {
          id: 1,
          gia: '2011282125',
          dia_chi: '2',
          Dien_tich: 'wasif@email.com',
          Danh_gia: ' ★★★',
          Lien_he: '0128197463',
          Thoi_gian: '30/55/2022',
        },
      ],
    };
  }

  renderTableData() {
    return this.state.room.map((student, index) => {
      const { id, gia, dia_chi, Dien_tich, Danh_gia, Lien_he, Thoi_gian} = student;
      return (
        <table className='tabledata'>
          <tr  key={id}>
            <td>Giá</td>
            <td>{gia}</td>
          </tr>
          <tr>
            <td>Địa chỉ</td>
            <td>{dia_chi}</td>
          </tr>
          <tr>
            <td>Diện tích</td>
            <td>{Dien_tich}</td>
          </tr>
          <tr>
            <td>Đánh Giá</td>
            <td>{Danh_gia}</td>
          </tr>
          <tr>
            <td>Liên hệ</td>
            <td>{Lien_he}</td>
          </tr>
          <tr>
            <td>Thời gian</td>
            <td>{Thoi_gian}</td>
          </tr>
        </table>
      );
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.room[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  }

  render() {
    return (
      <table>
        <tbody>{this.renderTableData()}</tbody>
      </table>
    );
  }
}

export default Mockdata;
