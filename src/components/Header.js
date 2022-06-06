import React from "react";

const Header = () => {
// git branch bilan yangi branchga utdik barnch nomi doston. 
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row mt-3 align-content-center">
          <div className="col-1">
            <div className="image">
              <img
                src="https://kun.uz/assets/4da8d774/img/kun-uz-logo.svg"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-7 align-content-center">
            <nav>
              <ul className="nav d-flex justify-content-between">
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
          <div className="col-4 d-flex justify-content-between">
            <div className="image ">
              <img
                src="https://storage.kun.uz/source/banners/buttons/makon/nmded.png"
                alt="image namuna"
              />
            </div>
            <div className="selectD">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>uzbek</option>
                <option value="2">english</option>
                <option value="3">russia</option>
              </select>
            </div>
            <div className="icons me-5  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-search  "
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
