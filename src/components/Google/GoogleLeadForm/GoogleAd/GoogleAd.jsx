import React,{useEffect} from 'react'

function GoogleAd({mobile,setHeaderSize}) {
 
  useEffect(() => {
        if(mobile){
            setHeaderSize('394px');
        }else{
            setHeaderSize('632px')
        }
       
      }, [setHeaderSize,mobile]);
  
  return (
    <div className='bg-white p-5 rounded-lg'>
       <div className={`flex items-center ${mobile ? 'text-[12px]' : 'text-[14px]'}`}>
        <h3 className= {` ${mobile ? 'text-[12px]' :'text-[14px]'} font-bold text-gray-800`}>Ad</h3>
        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" fill="#000000"></circle> </g></svg>
        <h5 className='me-1 input-hover' contentEditable={true}>webqadmockups.com/google-ad-mockup </h5>
        <svg className='mt-1 me-2' fill="#525252" width="8px" height="8px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
        </div>
      <div className='text-[20px] font-normal text-[#1a0dab] mt-2'> <span className='input-hover' contentEditable={true}>Headline 1</span> <span className='input-hover' contentEditable={true}>|</span> <span className='input-hover' contentEditable={true}> Headline 2</span>  <span className='input-hover' contentEditable={true}>|</span> <span className='input-hover' contentEditable={true}> Headline 3</span></div>
    <span className={` ${mobile ? 'text-[12px]' :'text-[14px] input-hover'}`} contentEditable={true}>Description text</span>
    {!mobile ? (
    <div className='flex items-center gap-1 border w-fit p-1 rounded mt-3'>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 38 50" fill="none">
  <g clip-path="url(#clip0_2077_2)">
    <path d="M22.7236 4.89447C22.7236 2.18635 21.0619 0 19.0037 0C16.9452 0 15.2837 2.18635 15.2837 4.89447H10.7908V13.3705H27.2162V4.89447H22.7236Z" fill="#747272" stroke="#747272" stroke-width="0.135417"/>
    <path d="M28.7996 9.06073V15.4537H9.20739V9.06073H3.50806V50.0001H34.4921V9.06073H28.7996ZM9.36121 44.8848L6.86829 41.6051L7.98767 40.1322L9.36113 41.9388L12.6674 37.5881L13.7868 39.0609L9.36121 44.8848ZM9.36121 35.6298L6.86829 32.3502L7.98767 30.8772L9.36113 32.6839L12.6674 28.3331L13.7868 29.8061L9.36121 35.6298ZM9.36121 26.3748L6.86829 23.0942L7.98767 21.6214L9.36113 23.429L12.6674 19.0783L13.7868 20.5512L9.36121 26.3748ZM30.5719 43.1157H15.9701V41.0324H30.5719V43.1157ZM30.5719 33.8608H15.9701V31.7775H30.5719V33.8608ZM30.5719 24.6048H15.9701V22.5215H30.5719V24.6048Z" fill="#747272" stroke="#747272" stroke-width="0.135417"/>
  </g>
  <defs>
    <clipPath id="clip0_2077_2">
      <rect width="38" height="50" fill="white"/>
    </clipPath>
  </defs>
</svg>
   <h4 className={` ${mobile ? 'text-[12px]' :'text-[14px]'}`} ><span className='input-hover' contentEditable={true}>Learn more</span> <span>-</span> <span className='input-hover' contentEditable={true}>Extension text</span></h4>
   </div>
   ):(
    <div>
      <hr className='mt-2' />

    <div className='flex items-center gap-2 w-fit p-1 rounded mt-3'>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 38 50" fill="none">
  <g clip-path="url(#clip0_2077_2)">
    <path d="M22.7236 4.89447C22.7236 2.18635 21.0619 0 19.0037 0C16.9452 0 15.2837 2.18635 15.2837 4.89447H10.7908V13.3705H27.2162V4.89447H22.7236Z" fill="#747272" stroke="#747272" stroke-width="0.135417"/>
    <path d="M28.7996 9.06073V15.4537H9.20739V9.06073H3.50806V50.0001H34.4921V9.06073H28.7996ZM9.36121 44.8848L6.86829 41.6051L7.98767 40.1322L9.36113 41.9388L12.6674 37.5881L13.7868 39.0609L9.36121 44.8848ZM9.36121 35.6298L6.86829 32.3502L7.98767 30.8772L9.36113 32.6839L12.6674 28.3331L13.7868 29.8061L9.36121 35.6298ZM9.36121 26.3748L6.86829 23.0942L7.98767 21.6214L9.36113 23.429L12.6674 19.0783L13.7868 20.5512L9.36121 26.3748ZM30.5719 43.1157H15.9701V41.0324H30.5719V43.1157ZM30.5719 33.8608H15.9701V31.7775H30.5719V33.8608ZM30.5719 24.6048H15.9701V22.5215H30.5719V24.6048Z" fill="#747272" stroke="#747272" stroke-width="0.135417"/>
  </g>
  <defs>
    <clipPath id="clip0_2077_2">
      <rect width="38" height="50" fill="white"/>
    </clipPath>
  </defs>
</svg>
   <h4 className={`text-[14px] text-gray-500`} ><span className='input-hover' contentEditable={true}>Learn more</span> <span className={`${mobile ? 'hidden':''}`}>-</span> <br /> <span className='input-hover' contentEditable={true}>Extension text</span></h4>
   </div>
   </div>
   )}
    </div>
  )
}

export default GoogleAd
