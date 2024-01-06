import React,{useState,useEffect,useRef} from 'react'
import image from "../../../../assets/img.jpg";
import fb from "../../../../assets/fblogo.webp"
function ad() {
    const [profileImg, setProfileImg] = useState("");
    const [companyName, setCompanyName] = useState("Default Company Name");
    const [adText, setAdText] = useState("Try Ad Mocup Now! its free");
    const [adText2, setAdText2] = useState("Try Ad Mocup Now! its free");
    const [adP, setAdP] = useState("Ad Mockups lets you create fast and easy mockups all in one place. Test it out!");
  
    const [uploadedImage, setUploadedImage] = useState(image);
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
        setUploadedImage(URL.createObjectURL(file));
      } else {
        setUploadedImage("");
      }
    };
  
    return (
      <div className="border border-gray-300 rounded bottom-0 bg-white">
        <div className="flex justify-between items-start p-4 pb-0">
          <div className="flex">
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
                    width: "60px",
                    height: "60px",
                  }}
                />
              ) : (
                  <img src={fb} alt=""  style={{ width: "60px", height: "60px" }} />
                
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
            <div className="ml-3 mt-2">
              <input
                type="text"
                className="ps-1 input-hover w-[100%] font-semibold"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ outline: "none", fontSize:'16px' }}
                placeholder="Company Name"
              />
              <div className="flex items-center ps-1">
                <h6 className="text-sm text-slate-600 mr-2">Sponsored</h6>
                <svg className="mt-1 " width={14} data-v-46e5644d="" fill="currentColor" viewBox="0 0 16 16" title="Shared with Public"><title data-v-46e5644d="">Shared with Public</title><g data-v-46e5644d="" fill-rule="evenodd" transform="translate(-448 -544)"><g data-v-46e5644d=""><path data-v-46e5644d="" d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path data-v-46e5644d="" d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path data-v-46e5644d="" fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
              </div>
            </div>
          </div>
          <svg
            width={20}
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
        <input
          type="text"
          className=" ps-4 mt-2 w-full input-hover font-medium"
          value={adText}
          onChange={(e) => setAdText(e.target.value)}
          style={{ outline: "none" }}
          placeholder="Try Ad Mocup Now! its free"
        />
  
        <label htmlFor="upload-ad-image" className="cursor-pointer banner-img">
          <img
            src={uploadedImage}
            alt="Ad"
            className="w-full mt-2 max-h-[260px]"
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
  
        <div className="flex justify-evenly items-center bg-[#F0F2F5] border-b-2 border-gray-300 p-5 pt-3 pb-3">
          <div className="w-9/12" >
          <input
                type="text"
                className="p-1 input-hover w-[100%] text-[14px] font-medium  bg-transparent whitespace-nowrap"
                value={companyName.toUpperCase()}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ outline: "none", lineHeight:'0px' }}
                placeholder="Company Name"
              />  
              <input
                type="text"
                className=" input-hover w-[100%] text-[17px] font-semibold leading-0 bg-transparent"
                value={adText2}
                onChange={(e) => setAdText2(e.target.value)}
                style={{ outline: "none", lineHeight:'0px' }}
                placeholder="adText2"
              />
              <input
                type="text"
                className=" input-hover w-[80%] text-[15px] leading-0 bg-transparent"
                value={adP}
                onChange={(e) => setAdP(e.target.value)}
                style={{ outline: "none", lineHeight:'0px',color:'gray', wordBreak:'break-word', overflow:'hidden', whiteSpace:'nowrap',textOverflow:'ellipsis' }}
                placeholder="ad paragraph"
              />   
          </div>
          
           <div className="relative">
           <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className=" input-hover text-gray-600 bg-gray-300 hover:bg-gray-400 h-[30px] font-medium text-sm px-3 py-1 text-center inline-flex items-center rounded-md"
        type="button"
        contentEditable={true}
      >
        Download
      </button>
      </div>
  
        </div>
  
        <div className="icons flex justify-evenly pt-3 pb-3">
          <button className='bg-blue-500 text-white font-bold m-auto p-2 ps-8 pe-8 rounded-full'>Next</button>
        </div>
      </div>
    );
        }

export default ad
