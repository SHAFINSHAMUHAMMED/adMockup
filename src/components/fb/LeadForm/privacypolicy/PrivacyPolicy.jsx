import React, { useState, useEffect, useRef } from "react";
import image from "../../../../assets/img.jpg";
function PrivacyPolicy() {

  const [uploadedImage, setUploadedImage] = useState(image);
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setUploadedImage(URL.createObjectURL(file));
    } else {
      setUploadedImage("");
    }
  };

  return (
    <div className="border border-gray-300 bg-gray-200 rounded bottom-0 max-w-[530px]">

      <label htmlFor="upload-ad-image" className="cursor-pointer banner-img">
        <img
          src={uploadedImage}
          alt="Ad"
          className="w-full max-h-[260px]"
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

      <div className="question-main bg-white w-[95%] p-5 rounded-xl m-auto">
        <h3 className="text-base font-medium input-hover " contentEditable={true}>Terms and Conditions for Mocup</h3>
        <p className="  text-sm mt-2 mb-3 text-gray-400">By clicking Submit, you agree to send your info to webq who agrees to use it according to their privacy policy. Facebook will also use it subject to our Data Policy, including to auto-fill forms for ads. <u>View Facebook Data Policy</u>.</p>
        </div>
      <div className="icons flex justify-evenly pt-3 pb-3 bg-white">
        <button className="bg-blue-500 w-[95%] text-white font-bold m-auto p-2 ps-8 pe-8 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
