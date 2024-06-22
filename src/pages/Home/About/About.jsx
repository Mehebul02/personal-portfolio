import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../shared/Container/Container";
import shap_bg from '../../../assets/images/shap_bg/shap_bg.png'
import { FaDownload } from "react-icons/fa";
import ImageSlide from "./ImageSlide";
const About = () => {
    return (
      <div className="">
        <div className="w-full">
          <img className="w-full shadow-sm" src={shap_bg} alt="" />
        </div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-8 lg:mt-16">
                {/* image  */}
           <div className="col-span-5 space-y-5">
           <SectionTitle subHeading='VISIT MY PORTFOLIO & HIRE ME' heading='About Me'/>
           <p className="text-md text-black font-montserrat font-medium w-[720px]">"I'm Mehebul Alif, a graduate with a Diploma in Computer Technology from Jhenaidah Polytechnic Institute. My passion lies in web development, where I specialize in Front End technologies such as JavaScript, ReactJS, Firebase, HTML, and CSS. Additionally, I have experience in back-end development using Node.js, MongoDB, and Next.js, and I am adept at integrating payment gateways."</p>
          <button className="flex justify-center items-center gap-3 text-xl text-[#2A3C45] border-2 bg-gradient-to-r from-gray-300 to-slate-400 shadow-lg   font-montserrat font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1">
      Download My Resume <FaDownload/>
    </button>
           </div>
                {/* about  */}
           <div className="col-span-3">
          <ImageSlide/>
           </div>
        </div>
        </Container>
      </div>
    );
};

export default About;