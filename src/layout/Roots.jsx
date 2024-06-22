
import { Outlet } from 'react-router-dom';


import Navbar from '../pages/shared/Navbar/Navbar';

const Roots = () => {
    return (
        <div className='bg-gradient-to-t from-zinc-200 to-slate-400'>
            <Navbar/>
           <div className=' min-h-screen'>
           <Outlet/>
           </div>
        </div>
    );
};

export default Roots;