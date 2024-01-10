import React, { useState,useEffect } from 'react';
import Ad from './GoogleAd/GoogleAd';
import GoogleForm from './GoogleForm/GoogleForm';
import SubmissionMessage from './SubmissionMessage/SubmissionMessage'


function GoogleLeadForm({setHeaderSize,mobile}) {
  const [activeComponent, setActiveComponent] = useState('Ad');

  // useEffect(() => {
  //   setHeaderSize('532px');
  // }, [setHeaderSize]);
  
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Ad':
        return <Ad mobile={mobile} setHeaderSize={setHeaderSize} />;
        case 'LeadForm':
            return <GoogleForm mobile={mobile} setHeaderSize={setHeaderSize}/>
        case 'SubmissionMessage': 
            return < SubmissionMessage mobile={mobile} setHeaderSize={setHeaderSize}/>
      default:
        return null;
    }
  };

  const handleFooterClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      {renderActiveComponent()}
      <footer className='mb-5 mt-8'>
        <h5 className='text-center text-sm font-semibold mb-4'>LEAD FORM STATE</h5>
        <div className='flex justify-evenly'>
          <h5 className={`h5-hover ${activeComponent === 'Ad' ? 'active' : 'text-gray-400'}`} onClick={() => handleFooterClick('Ad')}>AD</h5>
          <h5 className={`h5-hover ${activeComponent === 'LeadForm' ? 'active' : 'text-gray-400'}`} onClick={() => handleFooterClick('LeadForm')}>Lead Form</h5>
          <h5 className={`h5-hover ${activeComponent === 'SubmissionMessage' ? 'active' : 'text-gray-400'} text-center`} onClick={() => handleFooterClick('SubmissionMessage')}>Submission Message</h5>
        </div>
      </footer>
    </>
  )
}

export default GoogleLeadForm;
