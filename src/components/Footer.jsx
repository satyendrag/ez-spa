import React from 'react'
import footerBgLeft from '../assets/footer-bg-1.png';
import footerBgRight from '../assets/footer-bg-2.png';
import logo from '../assets/logo_white.png';
import timeTableIcon from '../assets/ic_timetable.png'
import dialIcon from '../assets/ic_dial.png';
import locationIcon from '../assets/ic_location.png';
import mailIcon from '../assets/ic_mail.png';
const Footer = () => {
  return (
    <div
      className="w-full"  
      style={{backgroundImage:`url(${footerBgLeft})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}

    > 
 
      <div className={`w-[80%] mx-auto  flex justify-between text-white py-[48px]`}>
           <div className='w-[30%]'>
             <img src={logo} alt='EZ SPA' className='w-[105px] h-[92px]' />
             <p className='font-open_sans font-normal text-white text-[14px] leading-7 mt-4'>Mauris non nisi semper, lacinia neque in, <br/>Dapibus leo. Curabitur sagittis  libero <br/> Tincidunt tempor finibus. Mauris at <br /> Dignissim ligula.</p>
             <div className='flex justify-start gap-5 mt-[20px] items-center'>
                <img src={timeTableIcon} alt="timetable" className='w-[30px] h-[30px]'/>
                <div >
                    <h5 className='font-open_sans font-semibold text-[16px] leading-7'>Monday - Saturday:</h5>
                    <p className='font-open_sans font-normal  text-[14px] leading-7'>9:30AM - 7:00PM</p>
                </div>
             </div>
           </div>
           <div>
                <h1 className='font-open_sans font-semibold leading-7 text-[18px] mt-5'>OTHER LINKS</h1>
                <ul>
                <li className='mt-[17px]'><a href="#">Home</a> </li>
                <li className='mt-[11px]'><a href="#" className='font-open_sans text-[14px] leading-[29px]'>About Us</a> </li>
                <li className='mt-[11px]'><a href="#" className='font-open_sans text-[14px] leading-[29px]'>Service</a> </li>
                <li className='mt-[11px]'><a href="#" className='font-open_sans text-[14px] leading-[29px]'>Our Team</a> </li>
                <li className='mt-[11px]'><a href="#" className='font-open_sans text-[14px] leading-[29px]'>Contact Us</a></li>
                </ul>
           </div>
           <div>
                <h1 className='font-open_sans font-semibold leading-7 text-[18px] mt-5'>OUR SERVICES</h1>
                <ul>
                <li className='mt-[17px]'><a href="#" className=''>Facials</a> </li>
                <li className='mt-[11px]'><a href="#" className=' font-open_sans text-[14px] leading-[29px]'>Waxing</a> </li>
                <li className='mt-[11px]'><a href="#" className=' font-open_sans text-[14px] leading-[29px]'>Massage</a> </li>
                <li className='mt-[11px]'><a href="#" className=' font-open_sans text-[14px] leading-[29px]'>Mineral Baths</a> </li>
                <li className='mt-[11px]'><a href="#" className=' font-open_sans text-[14px] leading-[29px]'>Body Treatments</a></li>
                <li className='mt-[11px]'><a href="#" className=' font-open_sans text-[14px] leading-[29px]'>Geothermal Spa</a></li>
                </ul>
           </div>
           <div>
                <h1 className='font-open_sans font-semibold leading-7 text-[18px] mt-5'>GET IN TOUCH</h1>
                <div className='mt-[17px] justify-start gap-5  items-center flex'>
                    <img src={locationIcon} alt="location icon" className='w-[15px] h-[20px]' />
                    <p className='font-open_sans font-normal  text-[14px] leading-7'>Envato, Level 13, 2 Elizabeth <br/> Victoria 3000 India</p>
                </div>
                <div className='mt-[17px] justify-start gap-5  items-center flex'>
                    <img src={dialIcon} alt="Dial icon" className='w-[15px] h-[20px]'/>
                    <p className='font-open_sans font-normal  text-[14px] leading-7'>{"+61 (0) 3 8376 6284"}</p>
                </div>
                <div className='mt-[17px] justify-start gap-5  items-center flex'>
                    <img src={mailIcon} alt="mail icon" className='w-[15px] h-[12px]' />
                    <p className='font-open_sans font-normal  text-[14px] leading-7'>noreply@envato.com</p>
                </div>
           </div>
      </div>
            <div className='w-[80%] mx-auto'>
                <hr className='h-[2px] w-[100%]'/>
                <p className='pt-[14px] pb-[20px] text-white text-center font-open_sans text-[14px] leading-7'> Copyright © 2022 EZ SPA . All rights reserved.</p>
                
            </div>
    </div>
  )
}

export default Footer