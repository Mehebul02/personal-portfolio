
import { Outlet } from 'react-router-dom';


import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/Home/footer/Footer';
import '@fontsource/inter';
import Navbars from '../pages/shared/Navbar/Navbar';
import Home from '../pages/Home/Home/Home';

const Roots = () => {
    return (
        <div className='bg-gradient-to-t from-zinc-200 to-slate-400'>
            <Navbars/>
            <Home/>
           {/* <div className=' min-h-screen'> */}
           {/* <Outlet/> */}
           {/* </div> */}
           <Footer/>
        </div>
    );
};

export default Roots;