import React, { useState, useEffect, useRef } from "react";
import fb from "../../../assets/fblogo.webp";
function reels({ setHeaderSize, format, adImage, setadImage }) {
  const [profileImg, setProfileImg] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      // Example breakpoint for mobile devices
      setHeaderSize("90%");
    } else {
      setHeaderSize("321px");
    }
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
    <div
      className={`${
        format == "1:1" ? "bg-transparent" : "bg-black"
      } m-auto flex flex-col rounded-[10px]`}
    >
      {format == "1:1" ? (
        <div className="full-image">
          <img
            className=" absolute h-full object-cover z-1 rounded-[10px] "
            src={adImage}
            alt=""
          />
          <svg
            className="fixed top-[50%] left-[50%] cursor-pointer penIcon"
            onClick={handleImageClick}
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
        </div>
      ) : (
        ""
      )}
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
            className="w-[100%] h-[230px] object-cover  "
          />
          <svg
            className="pen-icon2 me-28 mt-10"
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

      <div className="flex gap-2 items-center ps-5 z-10">
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
              src={fb}
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
        <div className="z-10">
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
      <p className="text-white ms-5 mt-5 w-[60%] z-10" contentEditable={true}>
        <span className="input-hover">Try ad mockup now! its free</span>
      </p>
      <div className="flex justify-evenly items-center mt-5 mb-5 ps-5 pe-3 z-10">
        <div className="icons flex justify-evenly ">
          <button
            className=" button-nxt  text-black font-bold m-auto p-2 ps-8 pe-8 rounded-lg bg-white"
            contentEditable={true}
          >
            <span className="input-hover">Download</span>
          </button>
        </div>

        <svg
          className="cursor-pointer"
          width="35"
          viewBox="0 0 197 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="like-svgrepo-com 1">
            <rect
              width="197"
              height="192"
              rx="96"
              fill="white"
              fill-opacity="0.15"
            />
            <g id="Group 41393">
              <path
                id="Vector"
                d="M146.779 103.235C146.362 102.727 145.903 102.238 145.414 101.782C146.062 101.219 146.536 100.45 147.01 99.755C147.696 98.7361 148.276 97.7245 148.696 96.5658C149.636 93.9688 148.249 91.1916 146.509 89.2531C146.256 88.9698 145.971 88.705 145.676 88.4585C145.986 88.0944 146.286 87.7118 146.581 87.344C147.355 86.3802 148.204 85.376 148.427 84.1327C148.659 82.8673 148.507 81.6535 148.173 80.4175C147.506 77.9456 145.293 76.0328 143.136 74.7491C142.427 74.326 141.681 74.0134 140.908 73.7228C140.256 73.4837 139.49 73.4285 138.808 73.3439C137.629 73.2041 136.428 73.2262 135.241 73.2041C134.934 73.2004 134.627 73.1968 134.32 73.1968C131.098 73.1968 127.892 73.4469 124.674 73.583C121.521 73.7081 118.356 73.7301 115.198 73.7301C115.191 72.2955 115.195 70.861 115.138 69.4264C115.07 67.6166 115.028 65.8178 115.21 64.0081C115.335 63.3055 115.498 62.6103 115.623 61.9114C115.839 60.6754 116.085 59.4542 116.252 58.2035C116.563 55.9413 116.832 53.6312 116.533 51.3543C116.358 49.9859 116.135 48.6286 115.824 47.2896C115.513 45.9764 115.115 44.5933 114.368 43.4457C113.94 42.7835 113.406 42.1876 112.913 41.577C112.5 41.0731 112.068 40.5728 111.59 40.124C110.802 39.3663 109.881 38.7189 109.005 38.0531C108.217 37.4572 107.429 36.8502 106.58 36.3316C105.662 35.7688 104.669 35.3752 103.619 35.0956C103.365 35.0331 103.104 35 102.846 35C101.527 35 100.288 35.8571 99.9239 37.1372C99.8481 37.4094 99.8633 37.6852 99.8671 37.9575C99.8216 38.0237 99.742 38.0531 99.6965 38.123C99.4425 38.5497 99.3137 39.0132 99.3137 39.5061C99.1621 40.5765 99.0559 41.6469 98.9233 42.7137C98.4685 45.8918 97.79 49.0479 97.1646 52.204C96.6605 54.7826 96.2815 57.3906 95.315 59.8441C94.7806 61.0065 94.1817 62.1468 93.6018 63.2871C92.8551 64.7401 91.9531 66.1231 91.1192 67.5283C89.4894 70.2761 87.8179 72.9981 85.8698 75.5399C85.1307 76.4338 84.3651 77.2982 83.5502 78.1369C82.7807 78.9351 81.9545 79.6414 81.0827 80.3219C80.6127 80.6676 80.139 81.0024 79.6273 81.2893C79.2748 81.4842 78.9109 81.6461 78.5509 81.8153C78.5509 81.6351 78.5622 81.4585 78.5622 81.2819C78.5471 79.7296 77.2394 78.4385 75.6248 78.4385C75.4012 78.4385 75.1927 78.5194 74.9805 78.5673C74.8327 78.5341 74.6924 78.4606 74.5484 78.4606C74.4953 78.4606 74.4385 78.4643 74.3854 78.4679C70.6141 78.8321 66.8012 78.891 63.0072 78.9756C61.0893 79.016 59.1715 79.0675 57.246 79.0455C55.2979 79.0307 53.3307 78.8064 51.3902 78.9903C51.212 79.0087 51.0642 79.0602 50.8974 79.0933C50.6056 78.9976 50.3062 78.9094 49.9726 78.9094C48.43 78.9094 46.9025 80.2225 47.0049 81.7896C47.092 83.1101 47.1944 84.4086 47.2058 85.7291C47.2209 87.1049 47.2209 88.4843 47.2285 89.8527C47.2361 92.571 47.1641 95.2894 47.1982 98.0077C47.2778 103.375 47.3157 108.734 47.3157 114.093C47.3157 116.713 47.2437 119.321 47.1944 121.932C47.1527 124.228 47.1792 126.519 47.1299 128.807C47.1148 129.543 47.4483 130.205 47.9676 130.687C48.4906 131.323 49.2449 131.768 50.1128 131.706C54.2252 131.411 58.349 131.132 62.4728 131.165C63.6591 131.18 64.853 131.172 66.0469 131.172C66.8921 131.165 67.7487 131.165 68.6015 131.165C70.5345 131.165 72.5093 131.11 74.4271 131.32C75.1283 131.397 75.9394 130.981 76.417 130.518C76.6785 130.264 76.8832 129.955 77.0234 129.624C78.3083 129.377 79.3847 128.3 79.343 126.979C79.3354 126.758 79.3089 126.538 79.2937 126.321C79.3885 126.387 79.487 126.449 79.578 126.516C81.909 128.351 84.1452 130.319 86.6468 131.938C87.8407 132.71 89.027 133.53 90.3005 134.178C91.7484 134.913 93.2683 135.539 94.8223 136.024C97.6611 136.922 100.633 137.216 103.6 137.437C105.026 137.543 106.458 137.632 107.883 137.775C109.252 137.9 110.612 137.992 111.988 138C117.836 138.014 123.67 137.661 129.51 137.529C131.254 137.488 132.99 137.404 134.714 137.15C136.052 136.955 137.421 136.749 138.724 136.407C139.274 136.26 139.831 136.083 140.362 135.873C140.817 135.69 141.294 135.528 141.722 135.278C142.136 135.038 142.511 134.737 142.894 134.443C143.746 133.795 144.58 133.144 145.289 132.335C146.013 131.507 146.441 130.551 146.961 129.602C147.328 128.921 147.669 128.204 147.836 127.454C148.219 125.739 148.124 123.999 147.628 122.318C147.347 121.399 147.006 120.498 146.593 119.63C146.274 118.956 145.71 118.386 145.194 117.845C144.937 117.577 144.675 117.312 144.413 117.044C144.527 116.955 144.641 116.867 144.755 116.779C145.501 116.205 146.043 115.55 146.616 114.803C147.23 114.002 147.722 113.141 148.063 112.192C148.348 111.405 148.461 110.547 148.621 109.735C148.829 108.609 148.829 107.733 148.613 106.608C148.367 105.313 147.605 104.224 146.779 103.235ZM70.4587 125.927C69.8371 125.927 69.2193 125.92 68.6053 125.92C66.5662 125.934 64.5157 125.927 62.4765 125.967C60.4147 126.015 58.3452 126.122 56.2795 126.17C55.3547 126.199 54.4261 126.184 53.5013 126.17C53.1753 126.17 52.8494 126.184 52.5196 126.181C52.4931 122.153 52.5462 118.121 52.5462 114.09C52.5538 108.73 52.6409 103.364 52.7471 98.004C52.8039 95.2857 52.8835 92.5673 52.9138 89.849C52.929 88.4806 52.9214 87.1012 52.9214 85.7255C52.9252 85.2657 52.9176 84.8095 52.929 84.3497C54.3465 84.2504 55.7641 84.1952 57.1892 84.1548C59.107 84.0996 61.0249 84.0371 62.9503 83.9782C64.8303 83.9304 66.7216 83.9378 68.6015 83.9304C70.0001 83.9304 71.3987 83.9083 72.8011 83.8899C72.8845 85.788 72.9792 87.6861 73.0133 89.5878C73.0626 92.2436 73.1233 94.9031 73.165 97.559C73.2029 100.307 73.2862 103.043 73.3734 105.784C73.453 108.495 73.4947 111.199 73.525 113.91C73.5554 116.22 73.4758 118.53 73.5629 120.843C73.6122 121.962 73.6804 123.076 73.6994 124.187C73.707 124.754 73.6994 125.313 73.6918 125.875C72.6192 125.923 71.539 125.942 70.4587 125.927ZM142.905 118.199C142.916 118.191 142.924 118.184 142.935 118.177C142.954 118.162 142.973 118.147 142.996 118.132C142.966 118.154 142.935 118.177 142.905 118.199ZM143.174 94.8553C143.136 95.0025 143.095 95.1459 143.041 95.2894C142.655 96.0692 142.181 96.8343 141.669 97.5406C141.563 97.6583 141.457 97.7723 141.343 97.879C140.695 98.2726 139.983 98.5669 139.323 98.9457C138.345 99.5159 137.659 100.45 137.659 101.587C137.659 102.823 138.486 103.72 139.535 104.313C140.002 104.574 140.483 104.816 140.942 105.103C141.457 105.541 141.931 106.023 142.371 106.534C142.56 106.807 142.727 107.086 142.878 107.38C142.932 107.546 142.977 107.711 143.015 107.881C143.019 108.039 143.015 108.193 143.007 108.355C142.89 109.102 142.757 109.863 142.515 110.573C142.299 110.97 142.056 111.349 141.791 111.714C141.427 112.137 141.017 112.512 140.578 112.861C140.119 113.189 139.645 113.494 139.175 113.796C138.349 114.329 137.743 114.906 137.424 115.841C137.019 117.007 137.553 118.143 138.349 118.993C139.228 119.935 140.142 120.847 140.964 121.833C141.127 122.054 141.271 122.282 141.404 122.521C141.658 123.194 141.878 123.871 142.014 124.573C142.048 124.96 142.052 125.349 142.029 125.736C141.984 125.964 141.927 126.192 141.855 126.413C141.715 126.685 141.567 126.957 141.431 127.233C141.23 127.634 141.04 128.035 140.801 128.41C140.309 128.929 139.782 129.396 139.221 129.841C138.914 130.054 138.596 130.249 138.254 130.415C136.772 130.937 135.226 131.253 133.664 131.489C130.803 131.776 127.907 131.68 125.038 131.783C122.229 131.875 119.421 131.897 116.612 131.945C113.701 131.993 110.809 132.121 107.899 131.96C105.268 131.812 102.626 131.757 99.9997 131.452C98.0326 131.132 96.1451 130.613 94.2954 129.903C92.5633 129.101 90.9562 128.105 89.3681 127.064C87.7876 126.03 86.2488 124.937 84.7251 123.823C83.8837 123.187 83.0498 122.55 82.1895 121.951C81.4883 121.469 80.7416 121.06 80.0366 120.586C80.0101 120.564 79.9874 120.542 79.9608 120.516C79.65 120.247 79.2937 120.067 78.9223 119.942C78.9223 119.898 78.9185 119.854 78.9147 119.81C78.8351 117.132 78.7934 114.45 78.7404 111.769C78.6835 109.05 78.5888 106.332 78.5433 103.614C78.494 100.84 78.4864 98.0739 78.4864 95.2967C78.494 93.0492 78.4788 90.8017 78.4713 88.5542C78.4713 88.2231 78.4751 87.8921 78.4751 87.561C78.4864 87.5536 78.494 87.5463 78.5054 87.5426C79.4946 86.8805 80.681 86.4612 81.7612 85.9609C83.1939 85.2877 84.5205 84.2835 85.7182 83.2904C86.7605 82.4333 87.6853 81.4622 88.5987 80.4874C89.6107 79.4133 90.5545 78.2693 91.43 77.0885C93.0522 74.8888 94.3902 72.5162 95.8153 70.2062C96.5089 69.088 97.2328 67.9918 97.8999 66.8625C98.567 65.7516 99.1583 64.6003 99.7382 63.4416C100.405 62.1357 100.955 60.771 101.379 59.3769C101.576 58.7369 101.77 58.0931 101.864 57.4237C101.952 56.7983 102.031 56.1693 102.111 55.5403C102.774 50.957 103.79 46.4289 104.578 41.8603C105.158 42.2465 105.727 42.6585 106.288 43.0815C106.708 43.4052 107.125 43.7363 107.504 44.1041C108.065 44.6411 108.585 45.2223 109.081 45.8219C109.29 46.1052 109.479 46.3921 109.65 46.6937C110.279 48.3784 110.635 50.133 110.908 51.9024C111.147 54.0542 110.934 56.2355 110.658 58.3801C110.457 59.7411 110.237 61.1131 109.957 62.4631C109.646 63.9234 109.615 65.4132 109.559 66.8956C109.449 69.9524 109.828 72.9981 109.646 76.0549C109.585 76.9966 110.176 77.8021 110.969 78.2877C111.488 78.8542 112.219 79.2331 113.046 79.2294C115.354 79.2147 117.655 79.0381 119.963 78.9351C122.097 78.8284 124.234 78.8027 126.368 78.7328C128.445 78.6629 130.515 78.6335 132.592 78.6188C134.388 78.6114 136.17 78.6482 137.947 78.8542C138.486 78.9461 138.993 79.0786 139.505 79.2551C140.032 79.52 140.54 79.8179 141.025 80.1563C141.378 80.4469 141.715 80.7596 142.026 81.0943C142.177 81.3224 142.318 81.5578 142.45 81.8006C142.522 82.0213 142.579 82.2457 142.628 82.4737C142.636 82.5878 142.643 82.6981 142.643 82.8122C142.416 83.2021 142.147 83.5662 141.866 83.923C141.518 84.3571 141.154 84.7728 140.737 85.1406C140.343 85.3944 139.922 85.6004 139.49 85.8101C138.201 86.4207 137.371 88.0024 137.841 89.3561C138.122 90.1653 138.652 90.8606 139.463 91.2174C139.68 91.3093 139.896 91.3976 140.115 91.4822C140.51 91.6661 140.877 91.8868 141.233 92.1259C141.703 92.5158 142.136 92.9425 142.537 93.395C142.723 93.6672 142.894 93.9431 143.041 94.2337C143.091 94.3771 143.136 94.5169 143.174 94.664C143.178 94.7229 143.174 94.7891 143.174 94.8553ZM141.677 111.85C141.662 111.868 141.65 111.886 141.635 111.905C141.594 111.96 141.548 112.015 141.506 112.07C141.559 111.997 141.616 111.923 141.677 111.85Z"
                fill="white"
              />
            </g>
          </g>
        </svg>

        <svg
          className="cursor-pointer"
          width="35"
          viewBox="0 0 47 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="comment-svgrepo-com 1">
            <rect
              width="47"
              height="45"
              rx="22.5"
              fill="white"
              fill-opacity="0.15"
            />
            <path
              id="Vector"
              d="M24.4731 10C17.0159 10 10.9482 15.1796 10.9482 21.5479C10.9899 24.2473 12.0397 26.6933 13.7367 28.5297L13.731 28.523C13.1644 31.0042 11.921 33.1368 10.2079 34.7799L10.2031 34.7846C10.0778 34.9132 10 35.0894 10 35.2847C10 35.679 10.3189 35.999 10.7118 36C10.7631 36 10.8134 35.9943 10.8618 35.9838L10.8571 35.9848C14.1505 35.4523 17.07 34.1369 19.5121 32.2358L19.4694 32.2682C20.9585 32.7939 22.6755 33.0978 24.4636 33.0978C24.4674 33.0978 24.4722 33.0978 24.476 33.0978C31.9332 33.0978 38 27.9172 38 21.5489C38 15.1806 31.9323 10.001 24.475 10.001L24.4731 10ZM24.4731 31.6681C24.4579 31.6681 24.4399 31.6681 24.4219 31.6681C22.6831 31.6681 21.0183 31.3519 19.4817 30.7728L19.5785 30.8051C19.5235 30.788 19.4589 30.7775 19.3934 30.7766C19.3745 30.7747 19.3583 30.768 19.3393 30.768C19.1638 30.768 19.0034 30.8328 18.879 30.9394L18.88 30.9385C18.8705 30.9461 18.8572 30.9423 18.8477 30.9509C17.1421 32.3977 15.0797 33.4778 12.8141 34.0398L12.7116 34.0617C13.936 32.5063 14.8139 30.6204 15.1974 28.5592L15.2097 28.4801C15.2097 28.4744 15.2097 28.4668 15.2097 28.4601C15.2097 28.4401 15.2088 28.4192 15.2069 28.3992V28.402C15.2069 28.3973 15.2069 28.3925 15.2069 28.3877C15.2069 28.3696 15.2059 28.3525 15.205 28.3353V28.3373C15.2012 28.1649 15.1357 28.0086 15.0303 27.8896L15.0313 27.8905L15.0208 27.8648C13.4035 26.2485 12.3946 24.0187 12.3719 21.5537V21.5489C12.3719 15.9692 17.8008 11.4297 24.4731 11.4297C31.1455 11.4297 36.5744 15.9692 36.5744 21.5489C36.5744 27.1295 31.1464 31.669 24.4731 31.669V31.6681Z"
              fill="white"
            />
          </g>
        </svg>

        <svg
          className="cursor-pointer"
          width="35"
          viewBox="0 0 88 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="share-2-svgrepo-com 1" clip-path="url(#clip0_1930_206)">
            <g id="Group 41393">
              <g id="SVGRepo_bgCarrier">
                <path
                  id="Vector"
                  d="M88 41C88 18.3563 68.3005 0 44 0C19.6995 0 0 18.3563 0 41C0 63.6437 19.6995 82 44 82C68.3005 82 88 63.6437 88 41Z"
                  fill="#FAFAFA"
                  fill-opacity="0.15"
                />
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="Vector_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.5867 51.9664L68.0364 38.8801C68.6463 38.3765 69 37.6227 69 36.8267C69 36.0307 68.6463 35.2772 68.0364 34.7733L52.5867 21.6871C51.7625 20.9753 50.6091 20.8008 49.6148 21.2376C48.6206 21.6744 47.96 22.6461 47.9132 23.7406V28.902C26.223 25.1049 23 46.9254 23 58C28.0317 49.5635 38.8555 32.0655 47.9132 44.7202V49.8955C47.9538 50.9933 48.612 51.9709 49.6073 52.4119C50.6029 52.8528 51.7601 52.6799 52.5867 51.9664Z"
                  fill="white"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1930_206">
              <rect width="88" height="82" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="cursor-pointer"
          width="35"
          viewBox="0 0 49 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="options-horizontal-svgrepo-com (1) 1">
            <rect
              width="49"
              height="50"
              rx="24.5"
              fill="white"
              fill-opacity="0.15"
            />
            <path
              id="Vector"
              d="M24.5 28.7776C25.4614 28.7776 26.3834 28.4013 27.0633 27.7316C27.7431 27.0618 28.125 26.1534 28.125 25.2062C28.125 24.259 27.7431 23.3506 27.0633 22.6808C26.3834 22.011 25.4614 21.6348 24.5 21.6348C23.5386 21.6348 22.6166 22.011 21.9367 22.6808C21.2569 23.3506 20.875 24.259 20.875 25.2062C20.875 26.1534 21.2569 27.0618 21.9367 27.7316C22.6166 28.4013 23.5386 28.7776 24.5 28.7776ZM13.625 28.7776C14.5864 28.7776 15.5084 28.4013 16.1883 27.7316C16.8681 27.0618 17.25 26.1534 17.25 25.2062C17.25 24.259 16.8681 23.3506 16.1883 22.6808C15.5084 22.011 14.5864 21.6348 13.625 21.6348C12.6636 21.6348 11.7416 22.011 11.0617 22.6808C10.3819 23.3506 10 24.259 10 25.2062C10 26.1534 10.3819 27.0618 11.0617 27.7316C11.7416 28.4013 12.6636 28.7776 13.625 28.7776ZM35.375 28.7776C36.3364 28.7776 37.2584 28.4013 37.9383 27.7316C38.6181 27.0618 39 26.1534 39 25.2062C39 24.259 38.6181 23.3506 37.9383 22.6808C37.2584 22.011 36.3364 21.6348 35.375 21.6348C34.4136 21.6348 33.4916 22.011 32.8117 22.6808C32.1319 23.3506 31.75 24.259 31.75 25.2062C31.75 26.1534 32.1319 27.0618 32.8117 27.7316C33.4916 28.4013 34.4136 28.7776 35.375 28.7776Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default reels;
