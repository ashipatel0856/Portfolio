import React from 'react'
import {FiMenu,FiX} from 'react-icons/fi';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className='bg-transparent'>
        <div  className='text-white py-5 flex justify-between items-center'>
         <div className="text-lg font-semibold cursor-pointer">

          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">ASHISH</span>
          <span className="text-[#8245ec]">   </span>
          <span className="text-white">KUMAR</span>
          <span className="text-[#8245ec]">&gt;</span>  
          </div>
                </div>

    </nav>
  )
}

export default Navbar