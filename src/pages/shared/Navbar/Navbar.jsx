// import { Button, Navbar } from 'flowbite-react';
// import img_logo from '../../../assets/images/logo/logo.png'
// import Container from '../Container/Container';
// import { Link } from 'react-router-dom';
// import MenuItem from '../MenuItem/MenuItem';
// import NavItem from './NavIbarItem';

// const Navbars = () => {
  
//     return (
     
//             <div className=''>
//         {/* bg-[#ECF0F3] */}
     
//        <Navbar className='bg-gradient-to-r from-zinc-300 to-slate-400 fixed top-0  w-full  z-50 border-b-[2px] ' fluid rounded>
//           <Navbar.Brand>
//             <img src={img_logo} className="  w-32 " alt=" Logo" />
//           </Navbar.Brand>
//           <div className=" ">
//             {/* <Button>Get started</Button> */}
//             <Navbar.Toggle />
//           </div>
//           <Navbar.Collapse className='text-xl  font-montserrat'>
//           <NavItem label="Home" address=""></NavItem>
//           <NavItem label="About" address="about"></NavItem>
//           <NavItem label="Skills" address="skills"></NavItem>
//           <NavItem label="Contact" address="contact"></NavItem>
//             {/* <button className='text-  text-[#FE135C]'>Say Hello</button> */}
           
            
//           </Navbar.Collapse>
//         </Navbar>
      
     
//             </div>
        
//     );
// };

// export default Navbars;

import { Link } from "react-scroll";
import logo from '../../../assets/images/logo/logo.png'
import resume from '../../../../public/resume (8).pdf'
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
// import SocialLInks from "./SocialLInks";
const navigation = [
  { title: "Home", link: "home",  },
  { title: "About", link: "about", delay: 0.1 },
  { title: "Skills", link: "skills",  delay: 0.2 },
  { title: "Project", link: "project",  delay: 0.3 },
  { title: "Education", link: "education",  delay: 0.3 },
  { title: "Contact", link: "contact",  delay: 0.4 },
];
const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };
  return (
    <div className="h-20 shadow-lg bg-[#95A3B8] shadow-[#d2d2d2] px-4 lg:px-0 sticky top-0 z-50 ">
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-24 opacity-75 hover:opacity-100 duration-200 cursor-pointer"
        />
        <div className="hidden md:inline-flex items-center gap-7">
          <div className="flex text-[16px] gap-7">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                to={item?.link}
                smooth={true}
                duration={500}
                offset={-80}
                className="font-medium hover:text-[#FE135C] cursor-pointer duration-300"
              >
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: item?.delay }}
                >
                  <span className="text-designColor mr-1">
                    {item?.value}
                    {item?.value && "."}
                  </span>
                  <span className="uppercase tracking-wide">{item?.title}</span>
                </motion.p>
              </Link>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href={resume}
            target="blank"
            className="px-4 py-2 rounded-md font-medium text-[#121212] text-[13px] tracking-wider uppercase border border-[#FE135C] hover:bg-hoverColor duration-200"
          >
            Resume
          </motion.a>
        </div>
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300" />
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end z-50"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative scrollBarHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-4 right-4 duration-200"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-5">
                  {navigation?.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="font-medium text-darkText hover:text-designColor cursor-pointer duration-300"
                    >
                      <motion.li
                        onClick={() => setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        <span className="text-designColor">
                          {item?.value} {item?.value && "."}{" "}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
                <a href={resume} target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-4 py-2 rounded-md font-medium text-designColor text-[13px] tracking-wider uppercase border border-[#FE135C] hover:bg-[#FE135C] duration-300"
                  >
                    Resumefff
                  </motion.button>
                </a>
                {/* <SocialLInks className="flex-row items-center gap-5" /> */}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeIn" }}
                  className="text-sm w-72 tracking-widest text-designColor text-center mt-4"
                  href="mailto:mehebul2122@gmail.com"
                >
                  <p className="text-darkText hover:text-designColor hover:underline underline-offset-4 duration-200">
                    reactbd@proton.me
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;