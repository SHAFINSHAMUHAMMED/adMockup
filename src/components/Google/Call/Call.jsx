import React, { useState, useEffect } from "react";

function Call({ mobile, setHeaderSize }) {
  useEffect(() => {
    if (window.innerWidth <= 768) {
    } else {
      setHeaderSize("422px");
    }
  }, [setHeaderSize]);
  return (
    <div
      className=" p-4 google-text bg-white rounded-lg"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="flex items-center text-[14px]">
        <h3 className="text-[14px]font-extrabold">Ad</h3>
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle cx="12" cy="12" r="2" fill="#000000"></circle>{" "}
          </g>
        </svg>
        <h5 className="me-1 input-hover" contentEditable={true}>
          webqadmockups.com/google-ad-mockup{" "}
        </h5>
        <svg
          className="mt-1 me-2"
          fill="#525252"
          width="8px"
          height="8px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#525252"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
          </g>
        </svg>
      </div>
      <div className="flex items-center gap-2 mt-3 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 65 65"
          fill="none"
        >
          <path
            d="M60.8028 46.9906C60.1401 46.2847 57.8004 44.1976 53.4992 41.4364C49.1663 38.651 45.9709 36.9143 45.0543 36.5093C44.9735 36.4735 44.8845 36.4604 44.7968 36.4713C44.7091 36.4823 44.6261 36.5169 44.5566 36.5715C43.0802 37.723 40.5944 39.838 40.4611 39.9523C39.6004 40.6899 39.6004 40.6899 38.8958 40.4601C37.6567 40.0539 33.8075 38.0099 30.4534 34.6482C27.0993 31.2865 24.95 27.3421 24.5438 26.1043C24.3114 25.3984 24.3114 25.3984 25.0516 24.5377C25.1658 24.4044 27.2821 21.9186 28.4336 20.4434C28.4882 20.3739 28.5229 20.2909 28.5338 20.2032C28.5448 20.1155 28.5316 20.0265 28.4958 19.9458C28.0908 19.0279 26.3541 15.8338 23.5688 11.5008C20.8037 7.20094 18.7191 4.86119 18.0133 4.1985C17.9485 4.13737 17.8684 4.09485 17.7815 4.07541C17.6946 4.05598 17.6041 4.06034 17.5194 4.08805C15.0521 4.93595 12.6714 6.01786 10.4101 7.319C8.227 8.58806 6.16023 10.0473 4.23379 11.6798C4.16654 11.737 4.11613 11.8114 4.08795 11.8951C4.05977 11.9787 4.05489 12.0684 4.07383 12.1546C4.33916 13.3912 5.60742 18.5531 9.54297 25.7031C13.5585 33.0004 16.3413 36.7391 22.2383 42.6158C28.1353 48.4924 31.9921 51.4428 39.297 55.4584C46.447 59.3939 51.6114 60.6634 52.8454 60.9262C52.9318 60.945 53.0217 60.94 53.1055 60.9119C53.1893 60.8837 53.2639 60.8334 53.3215 60.7663C54.9537 58.8399 56.4126 56.7731 57.6811 54.59C58.982 52.3285 60.0639 49.9479 60.912 47.4806C60.9391 47.3966 60.9433 47.3069 60.9241 47.2207C60.9049 47.1346 60.8631 47.0551 60.8028 46.9906Z"
            fill="#007FFF"
          />
        </svg>
        <div>
          <h4
            className="text-lg text-blue-600 input-hover"
            contentEditable={true}
          >
            Call (800) 123-4568
          </h4>
          <p className="text-sm">
            <span className="input-hover" contentEditable={true}>
              Business name
            </span>{" "}
            <span className="font-semibold">.</span>{" "}
            <span className="input-hover" contentEditable={true}>
              Headline 1
            </span>{" "}
            <span className="input-hover" contentEditable={true}>
              Headine 2
            </span>
          </p>
        </div>
      </div>
      <span className="input-hover" contentEditable={true}>
        Description text
      </span>
    </div>
  );
}

export default Call;
