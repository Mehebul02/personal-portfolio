import Container from "../../shared/Container/Container";
import banner from '../../../assets/images/banner/banner_2.png'
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
    return (
       
           
            <div className=" bg-[#ECF0F3] mt-10">
               
               <Container>
               <div className="grid grid-cols-6">
                     {/* images  */}
                 <div className="col-span-2 p-10 rounded-lg">
                    <div>
                        <img className="bg-[#2a3c45]  p-2 border-[10px] border-white shadow-2xl rounded-tl-3xl rounded-br-3xl" src={banner} alt="" />
                        </div> 
                </div>
                {/* content  */}
                <div className="col-span-4 p-20">
                 <div className="space-y-4">
                 <h5 className="text-xl font-poppins font-semibold">WELCOME TO MY WORLD</h5> 
                   <h1 className="text-6xl text-[#25282C] font-montserrat font-bold">Hi, I’m <span className="text-[#FE135C]">Mehebul Alif</span> </h1><br />
                   <span className="text-5xl font-montserrat font-semibold"> <span 
                   className="">
                   <span className="text-[#FE135C]">a</span>
                    <TypeAnimation
  sequence={[
  
    500,
    ' web', //  Continuing previous Text
    500,
    ' web developer',
    500,
    ' web',
    500,
    
    
    '',
    500,
  ]}
  style={{ fontSize: '' }}
  repeat={Infinity}
/>
                    </span> </span>
                 </div>
                </div>
                </div>
               </Container>
              
            </div>
       
        
    );
};

export default Banner;