import React, { useState, useEffect } from "react";

function GoogleText({
  setHeaderSize,
  mobile,
  setlink,
  callout,
  snippet,
  callExt,
}) {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeaderSize("100%");
    } else {
      if (mobile) {
        setHeaderSize("442px");
      } else {
        setHeaderSize("656px");
      }
    }
  }, [setHeaderSize, mobile]);

  return (
    <div
      className="p-4 google-text bg-white rounded-lg"
      style={{ fontFamily: "sans-serif" }}
    >
      <div
        className={`flex items-center ${
          mobile ? "text-[12px]" : "text-[14px]"
        }`}
      >
        <h3
          className={` ${
            mobile ? "text-[12px]" : "text-[14px]"
          } font-extrabold`}
        >
          Ad
        </h3>
        <svg
          width="12px"
          height="12px"
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
        {!mobile && callExt ? (
          <h5 className="input-hover" contentEditable={true}>
            (000) 1234-6789
          </h5>
        ) : (
          ""
        )}
      </div>
      <div className="text-[20px] font-normal text-[#1a0dab] mt-2">
        {" "}
        <span className="input-hover" contentEditable={true}>
          Headline 1
        </span>{" "}
        <span className="input-hover" contentEditable={true}>
          |
        </span>{" "}
        <span className="input-hover" contentEditable={true}>
          {" "}
          Headline 2
        </span>{" "}
        <span className="input-hover" contentEditable={true}>
          |
        </span>{" "}
        <span className="input-hover" contentEditable={true}>
          {" "}
          Headline 3
        </span>
      </div>
      <div className={`text-gray-800 text-[14px] ${mobile ? "pt-2" : ""}`}>
        {" "}
        <span className="input-hover" contentEditable={true}>
          Description text
        </span>{" "}
        {callout ? (
          <span>
            <span className="input-hover" contentEditable={true}>
              {" "}
              Callout 1
            </span>{" "}
            <span className="input-hover" contentEditable={true}>
              {" "}
              Callout 2
            </span>{" "}
            <span className="input-hover" contentEditable={true}>
              {" "}
              Callout 3
            </span>{" "}
            <span className="input-hover" contentEditable={true}>
              {" "}
              Callout 4
            </span>
          </span>
        ) : (
          ""
        )}{" "}
        {snippet ? (
          <span>
            {" "}
            <span className="input-hover" contentEditable={true}>
              Brands
            </span>
            <span>:</span>{" "}
            <span className="input-hover" contentEditable={true}>
              Value 1
            </span>{" "}
            <span className="input-hover" contentEditable={true}>
              Value 2
            </span>{" "}
            <span className="input-hover" contentEditable={true}>
              Value 3
            </span>{" "}
          </span>
        ) : (
          ""
        )}
      </div>
      {mobile && setlink ? (
        <div className="text-[#1a0dab] text-[14px]">
          <h5 className="mt-2 input-hover" contentEditable={true}>
            Sitelink Extension 1
          </h5>
          <h5 className="mt-2 input-hover" contentEditable={true}>
            Sitelink Extension 2
          </h5>
          <h5 className="mt-2 input-hover" contentEditable={true}>
            Sitelink Extension 3
          </h5>
          <h5 className="mt-2 input-hover" contentEditable={true}>
            Sitelink Extension 4
          </h5>
        </div>
      ) : (
        ""
      )}
      {!mobile && setlink && (
        <div className="flex flex-wrap text-[14px] text-gray-800 ps-7 pt-3 pe-2">
          <div className="w-1/2 pb-2">
            <h4
              className="text-[#1a0dab] mb-[3px] input-hover"
              contentEditable={true}
            >
              Sitelink Extension 1
            </h4>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 1
            </p>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 2
            </p>
          </div>
          <div className="w-1/2">
            <h4
              className="text-[#1a0dab] mb-[3px] input-hover"
              contentEditable={true}
            >
              Sitelink Extension 2
            </h4>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 1
            </p>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 2
            </p>
          </div>
          <div className="w-1/2">
            <h4
              className="text-[#1a0dab] mb-[3px] input-hover"
              contentEditable={true}
            >
              Sitelink Extension 3
            </h4>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 1
            </p>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 2
            </p>
          </div>
          <div className="w-1/2">
            <h4
              className="text-[#1a0dab] mb-[3px] input-hover"
              contentEditable={true}
            >
              Sitelink Extension 4
            </h4>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 1
            </p>
            <p className="input-hover" contentEditable={true}>
              Sitelink description line 2
            </p>
          </div>
        </div>
      )}
      {mobile && callExt ? (
        <div>
          <hr className="mt-3" />
          <div className="flex items-end gap-2 mt-2">
            <svg
              className="mb-[2px]"
              width="20px"
              height="20px"
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
                <path
                  d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                  fill="#5c5c5c"
                ></path>{" "}
              </g>
            </svg>
            <span className="text-gray-700">
              Call{" "}
              <span className="input-hover" contentEditable={true}>
                (800) 123-4568
              </span>
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GoogleText;
