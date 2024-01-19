import React, { useState, useEffect, useRef } from "react";
import webq from "../../../assets/WebQmedia-Official-Logo.svg";

function InstaFeeds({ setHeaderSize, mobile, adImage, setadImage }) {
  const [profileImg, setProfileImg] = useState("");
  const myRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeaderSize("90%");
    } else {
      if (mobile) {
        setHeaderSize("320px");
      } else {
        setHeaderSize("496px");
      }
    }
  }, [setHeaderSize, mobile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setProfileImg(URL.createObjectURL(file));
    } else {
      setProfileImg("");
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

  return (
    <div
      ref={myRef}
      className={` bg-white ${
        mobile ? "max-w-[320px]" : "max-w-[496px]"
      } m-auto `}
    >
      <div className="border border-gray-300 rounded z-1 p-[12px]">
        <div className="flex justify-between items-start p-4 pb-0 bg-white">
          <div className="flex mb-2 items-center">
            <label
              htmlFor="profile-upload"
              className="profile-label cursor-pointer"
            >
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="User avatar"
                  className={`rounded-full object-cover z-1 ${
                    mobile ? "w-[35px] h-[35px]" : "w-[60px] h-[60px] "
                  } `}
                />
              ) : (
                <img
                  className={`rounded-full object-contain z-1 border p-1 ${
                    mobile ? "w-[35px] h-[35px]" : "w-[60px] h-[60px] "
                  }`}
                  src={webq}
                  alt=""
                />
              )}
              <svg
                className="pen-icon"
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
            <div className={` ${mobile ? "ml-1 mt-0" : "ml-3 mt-2"}`}>
              <h4
                type="text"
                className={`ps-1 input-hover w-[100%] font-semibold ${
                  mobile ? "text-[14px]" : "text-[16px]"
                }`}
                style={{ outline: "none" }}
                contentEditable={true}
              >
                companyName
              </h4>
              <div className="flex items-center ps-1">
                <h6 className="text-xs text-slate-600 mr-2">Sponsored</h6>
              </div>
            </div>
          </div>
          <svg
            width={20}
            className={`${mobile ? "rotate-90" : ""}`}
            data-v-46e5644d=""
            fill="currentColor"
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
        </div>

        <label htmlFor="upload-ad-image" className="cursor-pointer banner-img">
          <img
            src={adImage}
            alt="Ad"
            className={` ${mobile ? "w-full h-fit" : "w-full h-fit"}`}
          />
          <svg
            className="pen-icon2"
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
        <input
          id="upload-ad-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange2}
          style={{ display: "none" }}
        />

        <div className="flex justify-between items-center bg-white  border-gray-300 p-3 pt-3 pb-3">
          <h4
            type="text"
            className=" w-[100%] text-[14px] font-medium  bg-transparent whitespace-nowrap"
            style={{ outline: "none", lineHeight: "0px" }}
          >
            <span className="input-hover" contentEditable>
              {" "}
              Download{" "}
            </span>
          </h4>

          <svg
            width={15}
            data-v-45aa4ba6=""
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >
            <g data-v-45aa4ba6="">
              <g data-v-45aa4ba6="">
                <polygon
                  data-v-45aa4ba6=""
                  points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 "
                ></polygon>
              </g>
            </g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
            <g data-v-45aa4ba6=""></g>
          </svg>
        </div>
        <hr />
        <div className="ps-3 pe-3 bg-white mt-3">
          <div className="flex justify-between ">
            <div className="flex gap-1">
              <svg
                widths={15}
                data-v-45aa4ba6=""
                aria-label="Like"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  data-v-45aa4ba6=""
                  d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                ></path>
              </svg>
              <svg
                widths={15}
                data-v-45aa4ba6=""
                aria-label="Comment"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  data-v-45aa4ba6=""
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
              <svg
                widths={15}
                data-v-45aa4ba6=""
                aria-label="Share Post"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  data-v-45aa4ba6=""
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  data-v-45aa4ba6=""
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
            <svg
              widths={15}
              data-v-45aa4ba6=""
              aria-label="Save"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                data-v-45aa4ba6=""
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
          <h4
            className="input-hover text-[14px] font-medium  bg-transparent whitespace-nowrap mt-2"
            contentEditable={true}
          >
            99 <span>views</span>
          </h4>
          <h4>
            <span
              className="input-hover text-[14px] font-medium  bg-transparent whitespace-nowrap"
              contentEditable={true}
            >
              Company.com
            </span>{" "}
            <span
              className="input-hover text-[14px] font-normal  bg-transparent"
              contentEditable={true}
            >
              Ad Mockups lets you create fast and easy mockups all in one place.
              Test it out!{" "}
            </span>
          </h4>
          <h4
            className=" text-[14px] font-normal  bg-transparent text-gray-400"
            contentEditable={true}
          >
            <span className="input-hover">View all 10 comments</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default InstaFeeds;
