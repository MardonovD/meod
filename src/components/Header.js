import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="image">
              <img
                src="https://kun.uz/assets/4da8d774/img/kun-uz-logo.svg"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-6">
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <a href="#"> O'ZBEKISTON </a>
                </li>
                <li className="nav-item">
                  <a href="#"> JAHON</a>
                </li>
                <li className="nav-item">
                  <a href="#"> IQTISODIYOT </a>
                </li>
                <li className="nav-item">
                  <a href="#"> JAMIYAT </a>
                </li>
                <li className="nav-item">
                  <a href="#"> FAN-TEXNIKA </a>
                </li>
                <li className="nav-item">
                  <a href="#">SPORT </a>
                </li>
                <li className="nav-item">
                  <a href="#"> BUSINES CLASS</a>
                </li>
                <li className="nav-item">
                  <a href="#">AUDIO </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-4">
            <div className="image ">
              <img
                src="https://storage.kun.uz/source/banners/buttons/makon/nmded.png"
                alt="image namuna"
              />
              <div className="selectD">
                <select class="form-select" aria-label="Default select example">
                  <option selected>uzbek</option>
                  <option value="2">english</option>
                  <option value="3">russia</option>
                </select>
              </div>
            </div>
            <div className="icons">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
