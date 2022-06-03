import React from "react";

const Maqolalar = () => {
  return (
    <div className="maqola">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="maqola-image">
              <img
                src=" https://storage.kun.uz/source/thumbnails/_medium/8/YBNePsH_imfIbm1qNN4cJ1tifzYq3f6q_medium.jpg"
                alt="image"
              />
            </div>
            <div className="maqola-text">
              <a href="3">Urush qonunlari.Ular nimalarga nazarda tutadi?</a>
              <p className="maqola-text-p">
                ​​​​​​​Dunyo tinchlik haqida har qancha bong urmasin eng yaqin
                qo‘shni, qondosh va bir guruhga mansub ikki millatdan iborat
                davlatlar o‘rtasida ayovsiz urush ketmoqda.
              </p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Maqolalar;
