import React from 'react';
import './Profile.css';
import avt from './image/avt.png';
import logo from './image/hcmue.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faGithub} from "@fortawesome/free-brands-svg-icons";

function Profile() {
  return (
    <div className='profile'>
        <img className='avt' src={avt} />
        <img className='logo' src={logo} />
        <h1 className='name'>Lê Quốc Tài</h1>
        <h2 className='vaitro'>Student</h2>
        <div className="information">
          <p>Mã số sinh viên : 46.01.104.155</p>
          <p>Số điện thoại : 0941709701</p>
          <p>Giới tính : Nam</p>
          <p>Lớp : 46.CNTT.B</p>
          <p>Gmail : tai24102002@gmail.com </p>
          <p>Outlook : 4601104155@student.hcmue.edu.vn </p>
          <div class='contact'>
            <a href="https://www.facebook.com/profile.php?id=100025943350987" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.instagram.com/lequoctai2410/" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href="https://github.com/lequocctai123123" className="github">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
        </div>
    </div>
  );
}

export default Profile;
