import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/images/logo/logo.png'
import { BsTwitterX } from 'react-icons/bs';
const Footer = () => {
    return (
       <div className='lg:mt-24'>
        <div className="divider shadow-2xl"></div>
         <footer className="footer  text-base-content p-10 my-5 lg:">
            
            <aside>
              <img className='w-32' src={logo} alt="" />
              <div className="space-y-6 mt-3">
      {/* <h1 className="text-xl uppercase underline font-montserrat font-semibold ">Find With me</h1> */}
      <div className="flex flex-wrap space-x-10 " >
      
      <a href='https://web.facebook.com/alif.islam.212?_rdc=1&_rdr' target="_blank">
      <h1 className="bg-gray-700 p-2 title rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500 hover:border-b-2 border-white">
      <FaFacebook className="text-white text-2xl" />
    </h1>
      </a>
     
       <a href='https://www.linkedin.com/in/mehebul-alif-9b865025b' target="_blank">
       <h1 className="bg-gray-700 p-2 rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500"><FaLinkedin  className="text-white text-2xl"/> </h1>
       </a>
       
        <h1 className="bg-gray-700 p-2 rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500"><BsTwitterX className="text-white text-2xl"/></h1>
      </div>
    </div>
            </aside>
            <nav>
              <h6 className="text-xl text-[#FE135C] font-montserrat font-semibold ">
              QUICK LINK</h6>
              <a className="link link-hover font-montserrat font-medium">Home</a>
              <a className="link link-hover font-montserrat font-medium">About</a>
              <a className="link link-hover font-montserrat font-medium">Skill</a>
              <a className="link link-hover font-montserrat font-medium">Contact</a>
             
            </nav>
            <nav>
            <h6 className="text-xl text-[#FE135C] font-montserrat font-semibold ">
            RESOURCES</h6>
            <a className="link link-hover font-montserrat font-medium">Authentication</a>
            <a className="link link-hover font-montserrat font-medium">System Status</a>
            <a className="link link-hover font-montserrat font-medium">Terms of Service</a>
            <a className="link link-hover font-montserrat font-medium">Pricing</a>
            <a className="link link-hover font-montserrat font-medium">Over Right</a>
            </nav>
            <nav>
            <h6 className="text-xl text-[#FE135C] font-montserrat font-semibold ">
            DEVELOPERS</h6>
            <a className="link link-hover font-montserrat font-medium">Documentation</a>
            <a className="link link-hover font-montserrat font-medium">Authentication</a>
            <a className="link link-hover font-montserrat font-medium">API Reference</a>
            <a className="link link-hover font-montserrat font-medium">Support</a>
            <a className="link link-hover font-montserrat font-medium">Open Source</a>
            </nav>
            
          </footer>
          <footer className="footer footer-center bg-[#98A6BA] text-base-content p-4">
  <aside>
    <p className='text-lg text-black'>Copyright © ${new Date().getFullYear()} - All right reserved by <span className='text-[#FE135C] font-medium'>Mehebul Alif</span></p>
  </aside>
</footer>
       </div>
    );
};

export default Footer;