import React, { useState, useEffect, useRef } from "react";
import "./fb.css";
import domtoimage from "dom-to-image";
import image from "../../assets/img.jpg";
import fb from "../../assets/fblogo.webp";

import Feeds from "./Feeds/feeds";
import LeadForm from "./LeadForm/LeadForm";
import Message from "./Message/message";
import Story from "./Story/story";
import Reels from "./Reels/reels";

function Fb() {
  const [setting, setSetting] = useState(false);
  const [options, setOptions] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [sizeActive, setsizeActive] = useState("original");
  const [activeComponent, setActiveComponent] = useState("feeds");
  const [headerSize, setHeaderSize] = useState("490px");
  const ref = useRef(null);
  const reff = useRef(null);

  const handleIconClick = (componentName) => {
    setActiveComponent(componentName);
    setSetting(false);
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case "feeds":
        return <Feeds setHeaderSize={setHeaderSize} mobile={mobile} />;
      case "leadForm":
        return <LeadForm setHeaderSize={setHeaderSize} mobile={mobile} />;
      case "message":
        return <Message setHeaderSize={setHeaderSize} />;
      case "story":
        return <Story setHeaderSize={setHeaderSize} format={sizeActive} />;
      case "reels":
        return <Reels setHeaderSize={setHeaderSize} format={sizeActive} />;
      default:
        return <Feeds setHeaderSize={setHeaderSize} mobile={mobile} />;
    }
  };

  const isCardActive = (componentName) => {
    return activeComponent === componentName ? "option-card-active" : "";
  };

  const setSize = (size) => {
    setsizeActive(size);
  };

  const isFormatActive = (Name) => {
    return sizeActive === Name
      ? "option-card option-card-active"
      : "option-card";
  };

  const handleDownload = (imageType) => {
    domtoimage
      .toPng(ref.current)
      .then((dataUrl) => {
        setOptions(false);
        const link = document.createElement("a");
        link.download = `my-image.${imageType}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };

  const handleClickOutside = (event) => {
    if (reff.current && !reff.current.contains(event.target)) {
      setSetting(false);
      setOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex ">
      <div
        style={{ maxWidth: headerSize, minWidth: headerSize }}
        ref={reff}
        className="navbar fb-main"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-icons flex justify-end pt-10 sm:pt-20 pb-2 gap-5">
          {/* Icon 1 */}
          {activeComponent == "feeds" || activeComponent == "leadForm" ? (
            <div className="nav-icon" onClick={() => setMobile(!mobile)}>
              <svg
                className="mobile-icon"
                fill={mobile ? "#2263db" : "#403f3f"}
                width={25}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke={mobile ? "#2263db" : "#403f3f"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>mobile</title>{" "}
                  <path d="M22 0.75h-12c-1.794 0.002-3.248 1.456-3.25 3.25v24c0.002 1.794 1.456 3.248 3.25 3.25h12c1.794-0.001 3.249-1.456 3.25-3.25v-24c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM22.75 28c-0 0.414-0.336 0.75-0.75 0.75h-12c-0.414-0-0.75-0.336-0.75-0.75v-24c0.001-0.414 0.336-0.749 0.75-0.75h12c0.414 0 0.75 0.336 0.75 0.75v0zM18 25.25h-4c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h4c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>{" "}
                </g>
              </svg>
            </div>
          ) : (
            ""
          )}
          {/* Icon 2 */}

          <div className="nav-icon" onClick={() => setSetting(!setting)}>
            <svg
              width={25}
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
                  d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z"
                  stroke="#000000"
                  stroke-width="1.5"
                ></path>{" "}
                <path
                  d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                  stroke="#000000"
                  stroke-width="1.5"
                ></path>{" "}
              </g>
            </svg>
          </div>

          {/* Icon 3 */}
          <div className="nav-icon" onClick={() => setOptions(!options)}>
            <svg
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(270)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  fill="#0D0D0D"
                ></path>
              </g>
            </svg>
          </div>
          {setting ? (
            <div className="settings-card drop-shadow-md  bg-white rounded-md p-5">
              <h4 className="text-lg font-semibold ps-5">Ad Type</h4>
              <div className="flex items-center justify-center p-5 z-10 max-h-[80px]">
                <div
                  className={`option-card ${isCardActive("feeds")}`}
                  onClick={() => handleIconClick("feeds")}
                >
                  <svg
                    width={35}
                    viewBox="0 0 32 32"
                    enable-background="new 0 0 32 32"
                    id="Stock_cut"
                    version="1.1"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#007FFF"
                    stroke="#007FFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <desc></desc>{" "}
                      <g>
                        {" "}
                        <path
                          d="M27,5V3H1v26 c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V5H27z"
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        ></path>{" "}
                        <rect
                          fill="none"
                          height="8"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          width="10"
                          x="5"
                          y="19"
                        ></rect>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="27"
                          x2="27"
                          y1="5"
                          y2="24"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="27"
                          x2="27"
                          y1="26"
                          y2="28"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="4"
                          x2="24"
                          y1="11"
                          y2="11"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="4"
                          x2="24"
                          y1="7"
                          y2="7"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="4"
                          x2="24"
                          y1="15"
                          y2="15"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="18"
                          x2="24"
                          y1="19"
                          y2="19"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="18"
                          x2="24"
                          y1="23"
                          y2="23"
                        ></line>{" "}
                        <line
                          fill="none"
                          stroke="#007FFF"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          x1="18"
                          x2="24"
                          y1="27"
                          y2="27"
                        ></line>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h5 className="text-sm">Feeds</h5>
                </div>
                <div
                  className={`option-card ${isCardActive("leadForm")}`}
                  onClick={() => handleIconClick("leadForm")}
                >
                  <svg
                    width={35}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <polygon
                        fill="none"
                        stroke="#007FFF"
                        stroke-width="2"
                        points="6 8 11.667 12.667 11.667 18 12.333 18 12.333 12.667 18 8 18 6 6 6"
                      ></polygon>{" "}
                    </g>
                  </svg>
                  <h5 className="text-sm">Lead</h5>
                </div>
                <div
                  className={`option-card ${isCardActive("message")}`}
                  onClick={() => handleIconClick("message")}
                >
                  <svg
                    width={35}
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-301.000000, -860.000000)"
                          fill="#007FFF"
                        >
                          {" "}
                          <path
                            d="M325,860 C311.745143,860 301,869.949185 301,882.222222 C301,889.215556 304.489988,895.453481 309.944099,899.526963 L309.944099,908 L318.115876,903.515111 C320.296745,904.118667 322.607155,904.444444 325,904.444444 C338.254857,904.444444 349,894.495259 349,882.222222 C349,869.949185 338.254857,860 325,860 L325,860 Z M327.385093,889.925926 L321.273292,883.407407 L309.347826,889.925926 L322.465839,876 L328.726708,882.518519 L340.503106,876 L327.385093,889.925926 L327.385093,889.925926 Z"
                            id="Messenger"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h5 className="text-sm">Messenger</h5>
                </div>
                <div
                  className={`option-card ${isCardActive("story")}`}
                  onClick={() => handleIconClick("story")}
                >
                  <svg
                    width={35}
                    fill="#007FFF"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"
                      ></path>
                    </g>
                  </svg>
                  <h5 className="text-sm">Story</h5>
                </div>
                <div
                  className={`option-card ${isCardActive("reels")}`}
                  onClick={() => handleIconClick("reels")}
                >
                  <svg
                    width={35}
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
                        d="M7 5V19M17 5V19M3 8H7M17 8H21M3 16H7M17 16H21M3 12H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
                        stroke="#007FFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h5 className="text-sm">Reel</h5>
                </div>
              </div>

              {/* //fit// */}
              {activeComponent == "reels" || activeComponent == "story" ? (
                <div className="pl-[20px] pt-3 border-t-2">
                  <h4 className="text-[18px] font-medium pb-3">Ad Format</h4>
                  <div className="flex text-center items-center">
                    <div
                      className={`option-card  ${isFormatActive("original")}`}
                      onClick={() => setSize("original")}
                    >
                      <svg
                        width={35}
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
                            d="M7 5V19M17 5V19M3 8H7M17 8H21M3 16H7M17 16H21M3 12H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
                            stroke="#007FFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      <h5 className="text-sm">Original</h5>
                    </div>
                    <div
                      className={`option-card  ${isFormatActive("1:1")}`}
                      onClick={() => setSize("1:1")}
                    >
                      <svg
                        width={35}
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
                            d="M7 5V19M17 5V19M3 8H7M17 8H21M3 16H7M17 16H21M3 12H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
                            stroke="#007FFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      <h5 className="text-sm">1:1</h5>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {options ? (
            <div className=" optons-card p-5 rounded-md z-10">
              <div
                className="flex gap-3 mb-4"
                onClick={() => handleDownload("png")}
              >
                <svg
                  width="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1931_231)">
                    <path
                      d="M22.1681 26.6582C21.3081 26.6582 20.6113 27.355 20.6113 28.2139C20.6113 29.0727 21.3081 29.7696 22.1681 29.7696C23.027 29.7696 23.7238 29.0728 23.7238 28.2139C23.7238 27.355 23.027 26.6582 22.1681 26.6582Z"
                      fill="#373737"
                    />
                    <path
                      d="M27.3842 26.6582C26.5243 26.6582 25.8275 27.355 25.8275 28.2139C25.8275 29.0727 26.5243 29.7696 27.3842 29.7696C28.2431 29.7696 28.9399 29.0728 28.9399 28.2139C28.9399 27.355 28.2431 26.6582 27.3842 26.6582Z"
                      fill="#373737"
                    />
                    <path
                      d="M32.5209 22.0892L26.8495 17.4333C25.7977 16.5711 24.4791 16.0986 23.1174 16.0986H21.2961L19.7151 17.8561C19.1505 18.4823 18.3435 18.8418 17.5 18.8418C16.6566 18.8418 15.8495 18.4823 15.285 17.8561L13.704 16.0986H11.8815C10.5211 16.0986 9.2024 16.5711 8.15056 17.4333L2.47919 22.0892C1.26403 22.9679 0.470245 24.3941 0.470245 26.0093V30.1593C0.471339 32.8335 2.63676 34.9994 5.31036 34.9999H17.5H29.6885C32.3621 34.9994 34.5297 32.8334 34.5297 30.1593V26.0093C34.5298 24.3941 33.736 22.9679 32.5209 22.0892ZM31.7635 30.1593C31.7635 30.7365 31.533 31.2464 31.156 31.6262C30.7768 32.0033 30.2663 32.2332 29.6885 32.2337H5.31036C4.73375 32.2332 4.22324 32.0033 3.84399 31.6262C3.46582 31.2464 3.23654 30.7365 3.23654 30.1593V26.0093C3.23654 25.4321 3.46582 24.9217 3.84399 24.543C4.22324 24.1654 4.73375 23.9355 5.31036 23.9349H29.6885C30.2663 23.9355 30.7767 24.1654 31.156 24.543C31.5331 24.9217 31.7635 25.4322 31.7635 26.0093V30.1593Z"
                      fill="#373737"
                    />
                    <path
                      d="M16.5441 16.7232C16.7878 16.9939 17.1362 17.1483 17.5 17.1483C17.865 17.1483 18.2123 16.9939 18.4559 16.7232L23.3457 11.2894C23.6864 10.9123 23.7713 10.3699 23.5651 9.90575C23.3589 9.44214 22.8981 9.14334 22.3909 9.14334H20.0932V1.28611C20.0931 0.576133 19.5165 0 18.8065 0H16.1935C15.4835 0 14.908 0.576133 14.908 1.28611V9.14334H12.6103C12.1031 9.14334 11.6423 9.44214 11.435 9.90575C11.2288 10.3699 11.3148 10.9123 11.6545 11.2894L16.5441 16.7232Z"
                      fill="#373737"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1931_231">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p>Download PNG</p>
              </div>
              <div className="flex gap-3" onClick={() => handleDownload("jpg")}>
                <svg
                  width="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1931_231)">
                    <path
                      d="M22.1681 26.6582C21.3081 26.6582 20.6113 27.355 20.6113 28.2139C20.6113 29.0727 21.3081 29.7696 22.1681 29.7696C23.027 29.7696 23.7238 29.0728 23.7238 28.2139C23.7238 27.355 23.027 26.6582 22.1681 26.6582Z"
                      fill="#373737"
                    />
                    <path
                      d="M27.3842 26.6582C26.5243 26.6582 25.8275 27.355 25.8275 28.2139C25.8275 29.0727 26.5243 29.7696 27.3842 29.7696C28.2431 29.7696 28.9399 29.0728 28.9399 28.2139C28.9399 27.355 28.2431 26.6582 27.3842 26.6582Z"
                      fill="#373737"
                    />
                    <path
                      d="M32.5209 22.0892L26.8495 17.4333C25.7977 16.5711 24.4791 16.0986 23.1174 16.0986H21.2961L19.7151 17.8561C19.1505 18.4823 18.3435 18.8418 17.5 18.8418C16.6566 18.8418 15.8495 18.4823 15.285 17.8561L13.704 16.0986H11.8815C10.5211 16.0986 9.2024 16.5711 8.15056 17.4333L2.47919 22.0892C1.26403 22.9679 0.470245 24.3941 0.470245 26.0093V30.1593C0.471339 32.8335 2.63676 34.9994 5.31036 34.9999H17.5H29.6885C32.3621 34.9994 34.5297 32.8334 34.5297 30.1593V26.0093C34.5298 24.3941 33.736 22.9679 32.5209 22.0892ZM31.7635 30.1593C31.7635 30.7365 31.533 31.2464 31.156 31.6262C30.7768 32.0033 30.2663 32.2332 29.6885 32.2337H5.31036C4.73375 32.2332 4.22324 32.0033 3.84399 31.6262C3.46582 31.2464 3.23654 30.7365 3.23654 30.1593V26.0093C3.23654 25.4321 3.46582 24.9217 3.84399 24.543C4.22324 24.1654 4.73375 23.9355 5.31036 23.9349H29.6885C30.2663 23.9355 30.7767 24.1654 31.156 24.543C31.5331 24.9217 31.7635 25.4322 31.7635 26.0093V30.1593Z"
                      fill="#373737"
                    />
                    <path
                      d="M16.5441 16.7232C16.7878 16.9939 17.1362 17.1483 17.5 17.1483C17.865 17.1483 18.2123 16.9939 18.4559 16.7232L23.3457 11.2894C23.6864 10.9123 23.7713 10.3699 23.5651 9.90575C23.3589 9.44214 22.8981 9.14334 22.3909 9.14334H20.0932V1.28611C20.0931 0.576133 19.5165 0 18.8065 0H16.1935C15.4835 0 14.908 0.576133 14.908 1.28611V9.14334H12.6103C12.1031 9.14334 11.6423 9.44214 11.435 9.90575C11.2288 10.3699 11.3148 10.9123 11.6545 11.2894L16.5441 16.7232Z"
                      fill="#373737"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1931_231">
                      <rect width="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p>Download JPG</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="drop-shadow-lg"
          ref={ref}
          style={{ width: "100%", overflow: "hidden" }}
        >
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Fb;
