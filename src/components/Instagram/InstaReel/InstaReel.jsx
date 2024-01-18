import React, { useState, useEffect, useRef } from "react";
import image from "../../../assets/img.jpg";
import webq from "../../../assets/WebQmedia-Official-Logo.svg";
function InstaReel({ setHeaderSize, mobile, format, adImage, setadImage  }) {
  const [profileImg, setProfileImg] = useState("");
  const [uploadedImage, setUploadedImage] = useState(image);
  const myRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setHeaderSize("320px");
  }, [setHeaderSize]);

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
    <div ref={myRef} className="m-auto w-[320px]">
      {format == "1:1" ? (
        <img
          className="absolute h-full object-cover z-1 rounded-[10px]"
          onClick={handleImageClick}
          src={adImage}
          alt=""
        />
      ) : (
        ""
      )}
      <div className="bg-black  m-auto flex flex-col rounded-lg pb-5 ">
        <div className="flex justify-between ps-5 pe-3 pt-5 z-10">
          <h1 className="text-white text-[32px] font-[700]">Reels</h1>

          <svg
            width="25"
            viewBox="0 0 597 587"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M299 166.334C271.97 166.334 245.547 174.35 223.073 189.367C200.598 204.384 183.081 225.728 172.737 250.7C162.393 275.674 159.687 303.154 164.96 329.664C170.233 356.174 183.249 380.527 202.363 399.64C221.476 418.75 245.827 431.767 272.337 437.04C298.85 442.314 326.327 439.607 351.3 429.264C376.273 418.92 397.617 401.404 412.633 378.93C427.653 356.454 435.667 330.03 435.667 303C435.71 285.04 432.207 267.25 425.353 250.65C418.5 234.048 408.437 218.964 395.737 206.265C383.037 193.565 367.953 183.5 351.353 176.648C334.75 169.795 316.96 166.29 299 166.334ZM299 392C281.397 392 264.19 386.78 249.553 377C234.92 367.224 223.511 353.324 216.775 337.06C210.039 320.797 208.277 302.904 211.711 285.637C215.145 268.374 223.621 252.514 236.067 240.067C248.513 227.621 264.373 219.145 281.637 215.711C298.903 212.277 316.797 214.039 333.06 220.776C349.323 227.512 363.223 238.92 373 253.554C382.78 268.19 388 285.397 388 303C388 326.604 378.623 349.244 361.933 365.934C345.243 382.624 322.603 392 299 392ZM473.333 160.667C473.333 167.26 471.38 173.705 467.717 179.186C464.053 184.668 458.847 188.941 452.757 191.463C446.667 193.986 439.963 194.646 433.497 193.36C427.03 192.074 421.093 188.899 416.43 184.238C411.77 179.576 408.593 173.637 407.307 167.171C406.02 160.704 406.68 154.002 409.203 147.911C411.727 141.821 416 136.615 421.48 132.952C426.963 129.289 433.407 127.334 440 127.334C448.84 127.334 457.32 130.846 463.57 137.097C469.823 143.348 473.333 151.827 473.333 160.667ZM563.667 194.001C564.637 152.562 549.18 112.421 520.667 82.334C490.74 53.457 450.58 37.6327 409 38.334C365.667 36.334 232.333 36.334 189 38.334C147.574 37.437 107.46 52.8843 77.3337 81.334C48.8217 111.421 33.3643 151.562 34.3337 193.001C32.3337 236.334 32.3337 369.667 34.3337 413C33.3643 454.44 48.8217 494.58 77.3337 524.667C107.46 553.117 147.574 568.564 189 567.667C233 570.334 365 570.334 409 567.667C450.44 568.637 490.58 553.18 520.667 524.667C549.18 494.58 564.637 454.44 563.667 413C565.667 369.667 565.667 236.334 563.667 193.001V194.001ZM507 460.667C502.473 472.134 495.643 482.544 486.927 491.26C478.21 499.977 467.8 506.807 456.333 511.334C404.587 521.797 351.687 525.384 299 522C246.427 525.387 193.634 521.8 142 511.334C130.536 506.807 120.123 499.977 111.408 491.26C102.692 482.544 95.8597 472.134 91.3337 460.667C77.3337 425.334 80.3337 342 80.3337 303.334C80.3337 264.667 77.3337 181.001 91.3337 146.001C95.732 134.423 102.516 123.9 111.244 115.113C119.973 106.327 130.452 99.4746 142 95.0006C193.634 84.5333 246.427 80.9467 299 84.334C351.687 80.9523 404.587 84.539 456.333 95.0006C467.8 99.5266 478.21 106.359 486.927 115.075C495.643 123.79 502.473 134.203 507 145.667C521 181.001 517.667 264.334 517.667 303C517.667 341.667 521 425.334 507 460.334V460.667Z"
              fill="white"
            />
          </svg>
        </div>
        {format == "1:1" ? (
          <div style={placeholderStyle}></div>
        ) : (
          <label
            htmlFor="upload-ad-image"
            className="cursor-pointer banner-img h-[200px] mt-28 mb-20"
          >
            <img
              src={adImage}
              alt="Ad"
              crossOrigin="anonymous"
              className="w-full h-[230px]  "
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
        )}
        <input
          ref={fileInputRef}
          id="upload-ad-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange2}
          style={{ display: "none" }}
        />
        <div className="flex justify-between items-center ps-3 pe-5 z-10">
          <div className="w-[80%]">
            <div className="flex  gap-2 items-center">
              <label
                htmlFor="profile-upload"
                className="profile-label cursor-pointer"
              >
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="User avatar"
                    className="rounded-full object-cover"
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid white",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
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
              <div className="">
                <h5
                  className="text-white font-semibold input-hover "
                  contentEditable={true}
                >
                  Company Name
                </h5>
                <p
                  className="text-[12px]  text-white font-normal "
                  style={{ lineHeight: "10px" }}
                >
                  Sponsored
                </p>
              </div>
            </div>
            <div className="flex justify-evenly items-center mt-5 mb-5 w-[90%]">
              <div className="icons flex justify-evenly w-full ">
                <button
                  className=" button flex items-center justify-between w-full  text-black font-bold m-auto p-2 ps-4 pe-5 rounded-lg bg-white"
                  contentEditable={true}
                >
                  <span className="input-hover">Download</span>
                  <svg
                    width="13"
                    height="13"
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
                </button>
              </div>
            </div>
            <p
              className="text-gray-300  mt-3 w-[100%] text-xs"
              contentEditable={true}
            >
              <span className="input-hover">
                Ad Mockups lets you create fast and easy mockups all in one
                place. Test it out!
              </span>
            </p>
          </div>
          <div>
            <svg
              widths={20}
              className="cursor-pointer mb-4"
              data-v-45aa4ba6=""
              aria-label="Like"
              color="white"
              fill="white"
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
              widths={20}
              className="cursor-pointer mb-4"
              data-v-45aa4ba6=""
              aria-label="Comment"
              color="white"
              fill="white"
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
              widths={20}
              className="cursor-pointer mb-4"
              data-v-45aa4ba6=""
              aria-label="Share Post"
              color="white"
              fill="white"
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

            <svg
              widths={20}
              data-v-45aa4ba6=""
              aria-label="More options"
              fill="white"
              height="20"
              viewBox="0 0 48 48"
              width="20"
              class="_8-yf5"
            >
              <circle
                data-v-45aa4ba6=""
                clip-rule="evenodd"
                cx="8"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                data-v-45aa4ba6=""
                clip-rule="evenodd"
                cx="24"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                data-v-45aa4ba6=""
                clip-rule="evenodd"
                cx="40"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstaReel;
