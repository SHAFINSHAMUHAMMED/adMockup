import React, { useState, useEffect, useRef } from 'react';

function GoogleForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, label: "Name", placeholder: "Enter Your Answer." },
    { id: 2, label: "Place", placeholder: "Enter Your Answer." },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to remove a questionss
  const removeQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleSelectQuestion = (label,e) => {
    e.preventDefault();
    const newId =
      questions.length > 0 ? Math.max(...questions.map((q) => q.id)) + 1 : 1;
    setQuestions([
      ...questions,
      { id: newId, label: label, placeholder: "Enter Your Answer." },
    ]);
    setIsDropdownOpen(false);
  };

  const dropdownOptions = [
    "Name","Place","Email", "Phone", "First name", "Last name","Full name","Country","State","City","Pincode" // Add more optionsss
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  return (
    <>
    <div
      className='max-w-[390px] p-6 m-auto relative border border-gray-300 border-b-0  rounded-md rounded-b-none'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered || selectedImage ? (
  <div
    className='border border-gray-300 rounded-md  mb-2'
    style={{ width: '342px', height: '200px' }}
  >
    {selectedImage ? (
        <div>
      <img
        src={selectedImage}
        alt='Selected Image'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      </div>
    ) : (
      <div className='flex flex-col items-center justify-center'>
        <svg width="54px" height="54px" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#504e4e" stroke="#504e4e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>image_picture [#696969]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -3881.000000)" fill="#707070"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296,3725.5 C296,3724.948 296.448,3724.5 297,3724.5 C297.552,3724.5 298,3724.948 298,3725.5 C298,3726.052 297.552,3726.5 297,3726.5 C296.448,3726.5 296,3726.052 296,3725.5 L296,3725.5 Z M296.75,3728.75 L300,3733 L288,3733 L292.518,3726.812 L295.354,3730.625 L296.75,3728.75 Z M302,3734 C302,3734.552 301.552,3735 301,3735 L287,3735 C286.448,3735 286,3734.552 286,3734 L286,3724 C286,3723.448 286.448,3723 287,3723 L301,3723 C301.552,3723 302,3723.448 302,3724 L302,3734 Z M302,3721 L286,3721 C284.896,3721 284,3721.895 284,3723 L284,3735 C284,3736.104 284.896,3737 286,3737 L302,3737 C303.105,3737 304,3736.104 304,3735 L304,3723 C304,3721.895 303.105,3721 302,3721 L302,3721 Z" id="image_picture-[#696969]"> </path> </g> </g> </g> </g></svg>
        <br />
        <button
          onClick={() => {
            document.getElementById('imageInput').click();
          }}
          className='cursor-pointer mb-2'
        >
          + Add Image
        </button>
        <input
          type='file'
          id='imageInput'
          accept='image/*'
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
    )}
  </div>
) : null}

      <span className='text-[18px] font-semibold input-hover' contentEditable={true}>Business name</span>
      <br />
      <p className=' text-[14px] text-gray-600 mt-2 mb-2 '> <span className='input-hover'  contentEditable={true}> Description </span></p>
      {questions.map((question) => (
          <div key={question.id} className="question-container flex flex-col mb-3">
            <input
              className="border p-2 ps-5 google-input"
              type="text"
              placeholder={question.label}
            />
            <button
              onClick={() => removeQuestion(question.id)}
              className="close google-icon-close"
            >
              × Remove Field
            </button>
          </div>
        ))}
          {isHovered && (
        <div className="questions-input-container mb-3">
          <button onClick={toggleDropdown} className="btn-add-question">+ Add Question</button>
          {isDropdownOpen && (
            <ul className="inline-dropdown">
              {dropdownOptions.map(option => (
                <li key={option}>
                  <a href="#" onClick={(e) => handleSelectQuestion(option,e)} className="inline-dropdown-item">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <p className='text-[12px] leading-4 p-1 '>By submitting, you agree to send your info to Business name so that they can contact you about the above request. Business name agrees to use your info in accordance with their privacy policy. Google will also use your info in accordance with our privacy policy.</p>
    </div>
    <div className='max-w-[390px] m-auto relative border border-gray-300 border-t-0 rounded-md rounded-t-none text-right '>
        <hr />
        <button className='bg-blue-600 text-white font-medium p-1 ps-4 pe-4 rounded-md me-3 mt-3 mb-3'>Submit</button>
    </div>
    </>
  );
}

export default GoogleForm;
