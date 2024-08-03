
import { Link, NavLink } from "react-router-dom";

const NavItem = ({label,address}) => {

    return (
        <div>
            <Link
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center mr-10 px-1 py-2 my-5  transition-colors duration-300 transform rounded-md   ${
          isActive ? '  text-[#E72F06]' : 'text-[#11152B]'
        }`
      }
    >
   

      <span className=' text-[17px] font-poppins  hover:text-[#C10000]  font-medium'>{label}</span>
    </Link>
 
        </div>
    );
};


export default NavItem;