import Container from "../../shared/Container/Container";
import banner from "../../../assets/images/banner/banner_2.png";
import html1 from "../../../assets/images/logo/html (1).svg";

import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className=" mt-20 lg:mt-20  "style={{ backgroundImage: `url(${html1})`}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* images  */}
          <div className="lg:col-span-2 p-10 rounded-lg">
            <div>
              <img
                className="bg-[#2a3c45]  p-2 border-[12px] border-white shadow-2xl rounded-tl-3xl rounded-br-3xl"
                src={banner}
                alt=""
              />
            </div>
          </div>
          {/* content  */}
          <div className="col-span-4 lg:p-20">
            <div className="space-y-2 lg:space-y-8 ">
              <h5 className="lg:text-xl font-poppins font-semibold">
                WELCOME TO MY WORLD
              </h5>
              <div className="space-y-3">
                <h1 className="text-2xl lg:text-6xl text-[#25282C] font-montserrat font-bold">
                  Hi, I’m <span className="text-[#FE135C]">Mehebul Alif</span>{" "}
                </h1>
                <h1 className="lg:text-5xl font-montserrat font-semibold ">
                  {" "}
                  <span className="">
                    <span className="text-[#FE135C]">a</span>
                    {/* type animation  */}
                    <TypeAnimation
                      sequence={[
                        500,
                        " web", 
                        500,
                        " web developer",
                        500,
                        " web",
                        500,

                        "",
                        500,
                      ]}
                      style={{ fontSize: "" }}
                      repeat={Infinity}
                    />
                  </span>{" "}
                </h1>
              </div>
              <p className="text-md font-montserrat font-medium leading-loose">
                I am a dedicated and passionate programmer specializing in web
                development. As a web Developer, I utilize my skills and
                knowledge in JavaScript, React JS, Firebase, HTML, and CSS to
                design and develop state-of-the-art, user-friendly, and
                optimized websites. In addition to my front-end expertise, I
                have back-end development skills, including experience with
                payment gateways like Stripe, Node.js, and MongoDB.
              </p>
            {/* <button className="text-xl text-[#2A3C45] border-2 bg-gradient-to-r from-gray-300 to-slate-400 shadow-lg   font-montserrat font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1">
      Contact
    </button> */}
    <div className="space-y-3">
      <h1 className="text-xl uppercase underline font-montserrat font-semibold ">Find With me</h1>
      <div className="flex flex-wrap space-x-8" >
        {/* Facebook  */}
      <a href='https://web.facebook.com/alif.islam.212?_rdc=1&_rdr' target="_blank">
      <h1 className="bg-gray-700 p-2 title rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500 hover:border-b-2 border-white">
      <FaFacebook className="text-white text-3xl" />
    </h1>
      </a>
        {/* linkedin  */}
       <a href='https://www.linkedin.com/in/mehebul-alif-9b865025b' target="_blank">
       <h1 className="bg-gray-700 p-2 rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500"><FaLinkedin  className="text-white text-3xl"/> </h1>
       </a>
        {/* Twitter  */}
        <h1 className="bg-gray-700 p-2 rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500"><BsTwitterX className="text-white text-3xl"/></h1>
      </div>
    </div>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  );
};

export default Banner;
