import Container from "../../shared/Container/Container";
import banner from '../../../assets/images/banner/banner_2.png'
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
    return (
       
           
            <div className="  mt-10">
               
               <Container>
               <div className="grid grid-cols-1 lg:grid-cols-6">
                     {/* images  */}
                 <div className="lg:col-span-2 p-10 rounded-lg">
                    <div>
                        <img className="bg-[#2a3c45]  p-2 border-[12px] border-white shadow-2xl rounded-tl-3xl rounded-br-3xl" src={banner} alt="" />
                        </div> 
                </div>
                {/* content  */}
                <div className="col-span-4 lg:p-20">
                 <div className="space-y-2 lg:space-y-4 ">
                 <h5 className="lg:text-xl font-poppins font-semibold">WELCOME TO MY WORLD</h5> 
                   <h1 className="text-2xl lg:text-6xl text-[#25282C] font-montserrat font-bold">Hi, I’m <span className="text-[#FE135C]">Mehebul Alif</span> </h1> 
                   <span className="lg:text-5xl font-montserrat font-semibold"> <span 
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

                    <p className="text-md font-montserrat font-medium">I am a dedicated and passionate programmer specializing in web development. As a web Developer, I utilize my skills and knowledge in JavaScript, React JS, Firebase, HTML, and CSS to design and develop state-of-the-art, user-friendly, and optimized websites.
                    In addition to my front-end expertise, I have back-end development skills, including experience with payment gateways like Stripe, Node.js, and MongoDB.</p>
                 </div>
                </div>
                </div>
               </Container>
              
            </div>
       
        
    );
};

export default Banner;