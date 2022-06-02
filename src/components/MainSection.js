import React from "react";

const MainSection = () => {
  return (
    <div className="main mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 ">
            <div className="main-xabar">
              <div className="main-xabar-image">
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/dW6tk7z8P5DAqtua7ZiJ5lRSrw5AbG0h_medium.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-2 bg-dark">
            <div className="row">
              <div className="col-6 bg-primary">doston</div>
              <div className="col-6 bg-info">Noila</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
