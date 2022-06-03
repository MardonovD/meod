import React from "react";

const Intervyu = () => {
  return (
    <div className="intervyu mt-5 ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-5 mb-4  d-flex justify-content-between">
            <div className="intervyu-left">
              <span>Intervyu</span>
            </div>
            <div className="intervyu-right">
              <div className="intervyu-right-link d-flex gap-1 align-content-center">
                <a href="#">Intervyu</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right pt-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="card d-flex flex-column gap-3">
              <div className="card-image">
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/dW6tk7z8P5DAqtua7ZiJ5lRSrw5AbG0h_medium.jpg"
                  alt=" image intervyu"
                />
              </div>
              <div className="card-text mb-5">
                Energetika tariflari ko‘tarilishi: savollarga rasmiylar javobi
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card d-flex flex-column gap-3">
              <div className="card-image">
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/BtzR2umzRm__E3_-3A64LZ80k8Ym5n09_medium.jpg"
                  alt=" image intervyu"
                />
              </div>
              <div className="card-text mb-5">
                «Puldan muhimroq narsalar bor». Geynrix bilan uzoq kutilgan
                intervyu
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card d-flex flex-column gap-3">
              <div className="card-image">
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/SgMEsEAmr7YtEiPtEOcSTtSDyhibB7Ah_medium.jpg"
                  alt=" image intervyu"
                />
              </div>
              <div className="card-text mb-5">
                Energetika qanday isloh qilinsa, xalqqa foyda bo‘ladi?
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card d-flex flex-column gap-3">
              <div className="card-image">
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/OECjHdwGqH8h7qniTFs6KCHYL1opKiVh_medium.jpg"
                  alt=" image intervyu"
                />
              </div>
              <div className="card-text mb-5">
                “Oltinga ozgina yetmay qoldi...” – Mendeleyev olimpiadasida
                kumush medal olgan kimyogar qiz
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intervyu;
