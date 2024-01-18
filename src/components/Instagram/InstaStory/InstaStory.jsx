import React, { useState, useEffect, useRef } from "react";
import image from "../../../assets/img.jpg";
import webq from "../../../assets/WebQmedia-Official-Logo.svg";
import ColorThief from "colorthief";
function InstaStory({ setHeaderSize, mobile, format, adImage, setadImage  }) {
  const [profileImgs, setProfileImgs] = useState("");
  const [uploadedImages, setUploadedImages] = useState(image);
  const [bgGradient, setBgGradient] = useState(
    "linear-gradient(to right, #ffffff, #ffffff)"
  );
  const imgRef = useRef(null);
  const myRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setHeaderSize("320px");
  }, [setHeaderSize]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setProfileImgs(URL.createObjectURL(file));
    } else {
      setProfileImgs("");
    }
  };
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setadImage(URL.createObjectURL(file));
    } else {
      setadImage("");
    }
  };

  useEffect(() => {
    const imageElement = imgRef.current;

    const onLoad = () => {
      extractColors();
    };

    if (imageElement && imageElement.complete) {
      extractColors();
    } else if (imageElement) {
      imageElement.addEventListener("load", onLoad);
    }

    // Cleanup function
    return () => {
      if (imageElement) {
        imageElement.removeEventListener("load", onLoad);
      }
    };
  }, [adImage]);

  const extractColors = () => {
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(imgRef.current, 3); // Extracts 4 dominant colors
    const gradientColors = palette.map((color) => `rgb(${color.join(",")})`);
    const gradient = `linear-gradient(to bottom, ${gradientColors.join(", ")})`;
    setBgGradient(gradient);
  };

  const handleImageClick = () => {
    if (format === "1:1") {
      fileInputRef.current.click();
    }
  };
  const placeholderStyle = {
    width: "100%",
    height: "344px",
    marginTop: "28px",
    marginBottom: "20px",
  };

  return (
    <div ref={myRef} className="w-[320px] h-[602px] m-auto relative">
      {format == "1:1" ? (
        <img
          className="absolute h-full object-cover z-5 rounded-[10px]"
          onClick={handleImageClick}
          src={adImage}
          alt=""
        />
      ) : (
        ""
      )}

      <div
        className=" pt-3 m-auto h-full"
        style={{ background: bgGradient, borderRadius: "10px" }}
      >
        <div className="container-div">
          <div className="loading-div"></div>
        </div>

        <div className="flex justify-between ps-3 pe-3 pt-3 ">
          <div className="flex gap-2 items-center z-10">
            <label
              htmlFor="profile-upload"
              className="profile-label cursor-pointer"
            >
              {profileImgs ? (
                <img
                  src={profileImgs}
                  alt="User avatar"
                  className="rounded-full object-cover p-1"
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid white",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <img
                  className="p-1 object-contain"
                  src={webq}
                  alt=""
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid white",
                    borderRadius: "50%",
                  }}
                />
              )}
              <svg
                className="pen-icon"
                width={10}
                fill="#ffffff"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)"
                stroke="#ffffff"
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
                    d="M277.974 49.076c65.267-65.379 171.733-65.49 237.448 0l232.186 232.187 1055.697 1055.809L1919.958 1920l-582.928-116.653-950.128-950.015 79.15-79.15 801.792 801.68 307.977-307.976-907.362-907.474L281.22 747.65 49.034 515.464c-65.379-65.603-65.379-172.069 0-237.448Zm1376.996 1297.96-307.977 307.976 45.117 45.116 384.999 77.023-77.023-385-45.116-45.116ZM675.355 596.258l692.304 692.304-79.149 79.15-692.304-692.305 79.149-79.15ZM396.642 111.88c-14.33 0-28.547 5.374-39.519 16.345l-228.94 228.94c-21.718 21.718-21.718 57.318 0 79.149l153.038 153.037 308.089-308.09-153.037-153.036c-10.972-10.971-25.301-16.345-39.63-16.345Z"
                    fill-rule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <div>
              <h5
                className="text-white font-semibold input-hover "
                contentEditable={true}
              >
                Company Name
              </h5>
              <p className="text-[12px]  text-white font-normal ">Sponsored</p>
            </div>
          </div>
          <div className="">
            <svg
              width={20}
              data-v-46e5644d=""
              fill="white "
              viewBox="0 0 20 20"
            >
              <g
                data-v-46e5644d=""
                fill-rule="evenodd"
                transform="translate(-446 -350)"
              >
                <path
                  data-v-46e5644d=""
                  d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
                ></path>
              </g>
            </svg>

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
                <g id="Menu / Close_SM">
                  {" "}
                  <path
                    id="Vector"
                    d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
        {format == "1:1" ? (
          <div style={placeholderStyle}></div>
        ) : (
          <label
            htmlFor="upload-ad-image"
            className="cursor-pointer banner-img "
          >
            <img
              ref={imgRef}
              src={adImage}
              alt="Ad"
              crossOrigin="anonymous"
              className="w-full h-[200px] mt-28 mb-20 "
            />
            <svg
              className="pen-icon2 me-32 mt-7"
              width={20}
              fill="#ffffff"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(90)"
              stroke="#ffffff"
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
                  d="M277.974 49.076c65.267-65.379 171.733-65.49 237.448 0l232.186 232.187 1055.697 1055.809L1919.958 1920l-582.928-116.653-950.128-950.015 79.15-79.15 801.792 801.68 307.977-307.976-907.362-907.474L281.22 747.65 49.034 515.464c-65.379-65.603-65.379-172.069 0-237.448Zm1376.996 1297.96-307.977 307.976 45.117 45.116 384.999 77.023-77.023-385-45.116-45.116ZM675.355 596.258l692.304 692.304-79.149 79.15-692.304-692.305 79.149-79.15ZM396.642 111.88c-14.33 0-28.547 5.374-39.519 16.345l-228.94 228.94c-21.718 21.718-21.718 57.318 0 79.149l153.038 153.037 308.089-308.09-153.037-153.036c-10.972-10.971-25.301-16.345-39.63-16.345Z"
                  fill-rule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </label>
        )}
        <input
          ref={fileInputRef}
          id="upload-ad-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange2}
          style={{ display: "none" }}
        />

        <h3
          className={`text-white text-md font-medium ps-5 ${
            format == "1:1" ? "hidden" : "block"
          } `}
          contentEditable={true}
        >
          <span className="input-hover">Try Ad MockUp free Now</span>
        </h3>
        <div className="icons flex justify-evenly pt-16 pb-3">
          <button
            className=" button-nxt  text-black font-bold m-auto p-2 ps-8 pe-8 rounded-2xl bg-white "
            contentEditable={true}
          >
            <svg
              width={15}
              data-v-46e5644d=""
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <g data-v-46e5644d="">
                <g data-v-46e5644d="">
                  <polygon
                    data-v-46e5644d=""
                    points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 "
                  ></polygon>
                </g>
              </g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
              <g data-v-46e5644d=""></g>
            </svg>
            <span className="input-hover">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstaStory;
