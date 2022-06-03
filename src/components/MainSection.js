import React, { useState, useEffect } from "react";

const MainSection = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);
  console.log(date);
  return (
    <div className="main mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="main-xabar d-flex justify-content-start ">
              <div className="main-xabar-image ">
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/dW6tk7z8P5DAqtua7ZiJ5lRSrw5AbG0h_medium.jpg"
                  alt="image"
                />
              </div>
              <div className="main-xabar-text p-4 ">
                <div className="data d-flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-date"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                  </span>
                  <span>{date}</span>
                </div>

                <div className="main-xabar-text-span mt-3">
                  <span className="main-xabar-text-span-energetika">
                    Energetika tariflari Ko'tarilishi:
                    <div>savollarga rasmiylar javobi</div>
                  </span>
                </div>
                <p className="mt-3">
                  Infratuzilma eskirib ketgan,samaradorlik juda past ,aholi soni
                  va talab esa yildan yilga oshib boryapdi.
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6  d-flex justify-content-start ">
                <div className="image-ener">
                  <img
                    src=" https://storage.kun.uz/source/thumbnails/_medium/8/SgMEsEAmr7YtEiPtEOcSTtSDyhibB7Ah_medium.jpg"
                    alt=" image energetika"
                  />
                </div>
                <div className="text p-3">
                  <div className="text-date d-flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-date"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    {date}
                  </div>
                  <div className="text-h4">
                    <h4>
                      Energetika qanday isloh qilinsa,xalqqa foyda bo'ladi?
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-6  ">
                <div className="col-6  d-flex justify-content-start w-100">
                  <div className="image-ener">
                    <img
                      src="https://storage.kun.uz/source/thumbnails/_medium/8/56qTsGth5wl1YsHi1Uk2e5J2zm1xQnDs_medium.jpg"
                      alt=" image energetika"
                    />
                  </div>
                  <div className="text  p-3">
                    <div className="text-date d-flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-calendar-date"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      {date}
                    </div>
                    <div className="text-h4 w-100">
                      <h4>
                        1 iyuldan elktr va gaz bo'yicha tabaqalashtirilgan
                        tariflarga o'tiladi
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-6  d-flex justify-content-start ">
                <div className="image-ener">
                  <img
                    src=" https://storage.kun.uz/source/thumbnails/_medium/8/dW6tk7z8P5DAqtua7ZiJ5lRSrw5AbG0h_medium.jpg"
                    alt=" image energetika"
                  />
                </div>
                <div className="text p-3">
                  <div className="text-date d-flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-date"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    {date}
                  </div>
                  <div className="text-h4">
                    <h4>
                      Energetika qanday isloh qilinsa,xalqqa foyda bo'ladi?
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-6  ">
                <div className="col-6  d-flex justify-content-start w-100">
                  <div className="image-ener">
                    <img
                      src="https://storage.kun.uz/source/thumbnails/_medium/8/AxIRmlyMauHvaoJmEq_19HtpC0MgJLhJ_medium.jpg"
                      alt=" image energetika"
                    />
                  </div>
                  <div className="text  p-3">
                    <div className="text-date d-flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-calendar-date"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      {date}
                    </div>
                    <div className="text-h4 w-100">
                      <h4>
                        22 turdagi oziq-ovqat mahsuloti yil oxirigacha import
                        bojidan ozod qilindi
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 bg-dark">
            <div className="row">
              <div className="col-6 bg-primary"></div>
              <div className="col-6 bg-info">Noila</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
