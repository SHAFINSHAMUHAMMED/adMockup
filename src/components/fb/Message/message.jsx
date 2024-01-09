import React,{useState,useEffect,useRef} from 'react'
import image from "../../../assets/img.jpg";
import fb from "../../../assets/fblogo.webp"

function message({setHeaderSize}) {
    const [profileImg, setProfileImg] = useState("");
  const [uploadedImage, setUploadedImage] = useState(image);

  useEffect(() => {
    setHeaderSize('375px');
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
      setUploadedImage(URL.createObjectURL(file));
    } else {
      setUploadedImage("");
    }
  };
  return (
    <div className='flex align-top justify-evenly items-center w-[380px] m-auto pt-3 pb-3 rounded-md bg-white'>
      <div>
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
              width={15}
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
      </div>
      <div className='flex flex-col gap-1' style={{lineHeight:'15px'}}>
      <div className='flex gap-2 items-center '>
      <h4 className='text-lg font-semibold input-hover' contentEditable={true}>Company Name</h4>
      <span className='bg-gray-400 text-xs rounded-sm p-[1px]'>Ad</span>
      </div>
      <p className='text-gray-400 input-hover' contentEditable={true}>Try Ad Mocup Now!</p>
      <span className='text-blue-600 text-sm cursor-pointer' style={{lineHeight:'-10px'}}>View More</span>
</div>
      <svg
          width={20}
          height={20}
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

        <div>
        <label htmlFor="upload-ad-icon" className="cursor-pointer banner-img">
        <img
          src={uploadedImage}
          alt="Ad"
          className=" h-[60px] w-[60px] rounded-lg object-cover"
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
        id="upload-ad-icon"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: "none" }}
      />
        </div>
    </div>
  )
}

export default message
