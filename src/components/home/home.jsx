import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/WebQmedia-Official-Logo.svg";
import fb from "../../assets/fblogo.webp";
import insta from "../../assets/logo-ig-png-32464.png";
import google from "../../assets/google-logo-9808.png";

function home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-200">
      <img src={logo} alt="Logo" />
      <h2 className="text-gray-500 text-3xl font-bold">Ads Mockup</h2>
      <div className="flex gap-3 mt-2">
        <img
          className="w-5 h-5 cursor-pointer"
          src={fb}
          alt="Facebook"
          onClick={() => handleNavigate("/facebook")}
        />
        <img
          className="w-5 h-5 cursor-pointer"
          src={insta}
          alt="Instagram"
          onClick={() => handleNavigate("/instagram")}
        />
        <img
          className="w-5 h-5 cursor-pointer"
          src={google}
          alt="Google"
          onClick={() => handleNavigate("/google")}
        />
      </div>
    </div>
  );
}

export default home;
