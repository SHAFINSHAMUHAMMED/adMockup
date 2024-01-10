import React, { useState, useEffect, useRef } from "react";

function SubmissionMessage({setHeaderSize}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const imageInputRef = useRef(null);

  useEffect(() => {
    setHeaderSize('390px');
  }, [setHeaderSize]);

  useEffect(() => {
    function handleWindowClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    window.addEventListener("click", handleWindowClick);

    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (e) => {
    const confirmed = window.confirm("Are you sure you want to delete this image?");
    if (confirmed) {
      setSelectedImage(null);
      e.stopPropagation();

    } else {
      if (e.target.classList.contains("delete-button")) {
        e.stopPropagation();
      }
    }
  };
  

  return (
    <>
      <div
        className="max-w-[390px] p-6 m-auto relative border border-gray-300   rounded-md rounded-b-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered || selectedImage ? (
          <div className=" flex justify-center border border-gray-300  mb-2 ">
            {selectedImage ? (
              <div className="google-sel-img w-full h-[175px]">
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <input
                  type="file"
                  ref={imageInputRef}
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <div
                  onClick={() => {
                    imageInputRef.current.click();
                  }}
                  className="google-img-buttons"
                >
                  <svg
                    className="edit-buttom"
                    width="25px"
                    height="25px"
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
                        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                    </g>
                  </svg>
                  <svg
                    onClick={handleDeleteImage}
                    className="delete-button"
                    width="25px"
                    height="25px"
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
                        d="M10 12V17"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M14 12V17"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M4 7H20"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <svg
                  width="54px"
                  height="54px"
                  viewBox="0 -2 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#504e4e"
                  stroke="#504e4e"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-340.000000, -3881.000000)"
                        fill="#707070"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M296,3725.5 C296,3724.948 296.448,3724.5 297,3724.5 C297.552,3724.5 298,3724.948 298,3725.5 C298,3726.052 297.552,3726.5 297,3726.5 C296.448,3726.5 296,3726.052 296,3725.5 L296,3725.5 Z M296.75,3728.75 L300,3733 L288,3733 L292.518,3726.812 L295.354,3730.625 L296.75,3728.75 Z M302,3734 C302,3734.552 301.552,3735 301,3735 L287,3735 C286.448,3735 286,3734.552 286,3734 L286,3724 C286,3723.448 286.448,3723 287,3723 L301,3723 C301.552,3723 302,3723.448 302,3724 L302,3734 Z M302,3721 L286,3721 C284.896,3721 284,3721.895 284,3723 L284,3735 C284,3736.104 284.896,3737 286,3737 L302,3737 C303.105,3737 304,3736.104 304,3735 L304,3723 C304,3721.895 303.105,3721 302,3721 L302,3721 Z"
                            id="image_picture-[#696969]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <br />
                <button
                  onClick={() => {
                    document.getElementById("imageInput").click();
                  }}
                  className="cursor-pointer mb-2"
                >
                  + Add Image
                </button>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>
        ) : null}

        <span
          className="text-[18px] font-semibold input-hover"
          contentEditable={true}
        >
          Business name
        </span>
        <br />
        <div className="flex flex-col items-center border mt-10">
        <svg style={{marginTop:'-20px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <rect x="0.5" y="0.5" width="34" height="34" rx="17" fill="white"/>
  <rect x="0.5" y="0.5" width="34" height="34" rx="17" stroke="#353333"/>
  <path d="M18 27C22.95 27 27 22.95 27 18C27 13.05 22.95 9 18 9C13.05 9 9 13.05 9 18C9 22.95 13.05 27 18 27Z" stroke="#0073FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path opacity="0.34" d="M13 18.5L15.9965 21L22.5 15" stroke="#0073FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <h4 className="text-[22px] font-semibold text-center mt-4 mb-4 input-hover" contentEditable={true}>Sent!</h4>
        <p className="text-[14px] text-gray-500 text-center mb-3 input-hover" contentEditable={true}>Description</p>
        <span className=" text-[16px] text-center font-medium border p-1 ps-4 pe-4 mb-4 text-blue-700 " contentEditable={true}> <span className="input-hover">Visit site</span></span>
        </div>
      </div>
    </>
  );
}

export default SubmissionMessage;
