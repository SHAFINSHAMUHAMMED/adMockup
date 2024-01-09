import React from 'react'

function GoogleAd({mobile}) {
  return (
    <div className='bg-white p-5'>
       <div className={`flex items-center ${mobile ? 'text-[12px]' : 'text-[14px]'}`}>
        <h3 className= {` ${mobile ? 'text-[12px]' :'text-[14px]'} font-bold text-gray-800`}>Ad</h3>
        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" fill="#000000"></circle> </g></svg>
        <h5 className='me-1 input-hover' contentEditable={true}>webqadmockups.com/google-ad-mockup </h5>
        <svg className='mt-1 me-2' fill="#525252" width="8px" height="8px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
        </div>
      <div className='text-[20px] font-normal text-[#1a0dab] mt-2'> <span className='input-hover' contentEditable={true}>Headline 1</span> <span>|</span> <span className='input-hover' contentEditable={true}> Headline 2</span>  <span>|</span> <span className='input-hover' contentEditable={true}> Headline 3</span></div>
    <span className={` ${mobile ? 'text-[12px]' :'text-[14px] input-hover'}`} contentEditable={true}>Description text</span>
    <div className='flex items-center gap-1 border w-fit p-1 rounded mt-3'>
    <svg fill="#636363" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>clipboard2</title> <path d="M26 32h-20c-1.105 0-2-0.894-2-1.996v-25.014c0-1.103 0.895-1.996 2-1.996h6v1.996h-5c-0.552 0-1 0.446-1 0.998v23.018c0 0.551 0.448 0.998 1 0.998h18c0.553 0 1-0.447 1-0.998v-23.018c0-0.552-0.447-0.998-1-0.998h-5v-1.996h6c1.104 0 2 0.894 2 1.996v25.014c0 1.102-0.896 1.996-2 1.996zM25 5.988v23.018h-18v-23.018h1v4.055h16v-4.055h1zM11 13.037h-1v0.998h1v-0.998zM11 15.033h-1v0.998h1v-0.998zM11 17.029h-1v0.998h1v-0.998zM11 19.025h-1v0.998h1v-0.998zM11 21.021h-1v0.998h1v-0.998zM11 23.018h-1v0.998h1v-0.998zM11 25.014h-1v0.998h1v-0.998zM22 13.037h-10v0.998h10v-0.998zM22 15.033h-10v0.998h10v-0.998zM22 17.029h-10v0.998h10v-0.998zM22 19.025h-10v0.998h10v-0.998zM22 21.021h-10v0.998h10v-0.998zM22 23.018h-10v0.998h10v-0.998zM22 25.014h-10v0.998h10v-0.998zM22 5.988c0.553 0 1 0.446 1 0.998 0 0.551 0 1.996 0 1.996h-14c0 0 0-1.445 0-1.996s0.447-0.998 1-0.998h3c0 0 0.012-1.274 0.012-2.896 0-1.684 1.3-3.092 2.988-3.092s3.033 1.48 3.033 3.103c0 1.746-0.033 2.885-0.033 2.885h3zM16 2.994c-0.553 0-1 0.446-1 0.998s0.447 0.998 1 0.998 1-0.447 1-0.998c0-0.552-0.447-0.998-1-0.998z"></path> </g></svg>
   <h4 className={` ${mobile ? 'text-[12px]' :'text-[14px]'}`} ><span className='input-hover' contentEditable={true}>Learn more</span> <span>-</span> <span className='input-hover' contentEditable={true}>Extension text</span></h4>
   </div>
    </div>
  )
}

export default GoogleAd
