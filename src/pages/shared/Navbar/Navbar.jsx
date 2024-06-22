import { Button, Navbar } from 'flowbite-react';
import img_logo from '../../../assets/images/logo/logo.png'
import Container from '../Container/Container';
const Navbars = () => {
    return (
     
            <div className=' border-b-[2px]   max-w-[2520px] mx-auto xl:px-10 p-2 md:px-10 sm:px-2 px-4'>
        
        <Navbar className='bg-[#ECF0F3]' fluid rounded>
          <Navbar.Brand>
            <img src={img_logo} className=" mr-3 w-32 " alt=" Logo" />
            {/* <span className="text-3xl text-gray-700  font-serif font-semibold self-center whitespace-nowrap   dark:text-white">Alif</span> */}
          </Navbar.Brand>
          <div className=" ">
            {/* <Button>Get started</Button> */}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className='text-xl  font-montserrat'>
            
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
            <Navbar.Link href="#">Skills</Navbar.Link>
           
            
          </Navbar.Collapse>
        </Navbar>
            </div>
        
    );
};

export default Navbars;