import React from 'react'
import logo from '../assets/logo.png'
import Button from './Button';
import ellipse from '../assets/elipse.png'
const Navbar = () => {
  return (
    <div
      className="w-full bg-white sticky top-0 z-40"     
    > 
 
      <div className={`w-[80%] mx-auto flex justify-between py-4`}>
            <div>
                <img src={logo} alt="EZ SPA" className='w-[84px] h-[72px]' />
            </div>
            <div className='flex justify-between gap-[84px] items-center'>
                <a href="#" className='font-open_sans leading-5 text-[16px] p-4 text-white' style={
                    {backgroundImage:`url(${ellipse})`,  backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",}
                }>Home</a>
                <a href="#" className='font-open_sans leading-5 text-[16px] '>About Us</a>
                <a href="#" className='font-open_sans leading-5 text-[16px]'>Service</a>
                <a href="#" className='font-open_sans leading-5 text-[16px]'>Our Team</a>
                <Button title="Contact Us" />
            </div>
      </div>
    </div>
  );
  
}

export default Navbar