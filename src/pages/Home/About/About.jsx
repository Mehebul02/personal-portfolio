import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../shared/Container/Container";
import shap_bg from '../../../assets/images/shap_bg/shap_bg.png'
import { FaDownload } from "react-icons/fa";
import ImageSlide from "./ImageSlide";
const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1JNLO5Nv4QdhR7DSxP3TWV9zf11KuBIRF/view?usp=sharing "'; // Update this path to your resume file
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return (
      <div className="">
        <div className="w-full">
          <img className="w-full shadow-sm" src={shap_bg} alt="" />
        </div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-8 lg:mt-16">
                {/* image  */}
           <div className="col-span-5 space-y-9">
           <SectionTitle subHeading='VISIT MY PORTFOLIO & HIRE ME' heading='About Me'/>
           <p className="text-md text-black font-montserrat font-medium w-[720px] leading-loose">"I'm Mehebul Alif, a graduate with a Diploma in Computer Technology from Jhenaidah Polytechnic Institute. My passion lies in web development, where I specialize in Front End technologies such as JavaScript, ReactJS, Firebase, HTML, and CSS. Additionally, I have experience in back-end development using Node.js, MongoDB, and Next.js, and I am adept at integrating payment gateways."</p>
          <button onClick={handleDownload} className="flex justify-center items-center gap-3 text-xl text-white bg-[#2A3C45] border-2 hover:bg-gradient-to-r from-red-500 to-neutral-500 shadow-lg   font-montserrat font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1">
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