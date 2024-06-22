import { Button, Navbar } from 'flowbite-react';
import img_logo from '../../../assets/images/logo/logo.png'
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import NavItem from './NavIbarItem';
const Navbars = () => {
    return (
     
            <div className=''>
        {/* bg-[#ECF0F3] */}
     
       <Navbar className='bg-gradient-to-r from-zinc-300 to-slate-400 fixed top-0  w-full  z-50 border-b-[2px] ' fluid rounded>
          <Navbar.Brand>
            <img src={img_logo} className=" mr-3 w-32 " alt=" Logo" />
            {/* <span className="text-3xl text-gray-700  font-serif font-semibold self-center whitespace-nowrap   dark:text-white">Alif</span> */}
          </Navbar.Brand>
          <div className=" ">
            {/* <Button>Get started</Button> */}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className='text-xl  font-montserrat'>
          <NavItem label="Home" address="/"></NavItem>
          <NavItem label="About" address="/about"></NavItem>
          <NavItem label="Contact" address="/contact"></NavItem>
          <NavItem label="Skills" address="/skills"></NavItem>
            {/* <button className='text-  text-[#FE135C]'>Say Hello</button> */}
           
            
          </Navbar.Collapse>
        </Navbar>
      
     
            </div>
        
    );
};

export default Navbars;