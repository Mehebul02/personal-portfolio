import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../shared/Container/Container";
import shap_bg from "../../../assets/images/shap_bg/shap_bg.png";

import ImageSlide from "./ImageSlide";
import ResumeButton from "../../shared/button/ResumeButton";
import Education from "../../education/Education";
const About = () => {
  return (
    <div id="about" className="" >
      <div className="w-full">
        <img className="w-full shadow-sm" src={shap_bg} alt="" />
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:mt-16">
          {/* image  */}
          <div className="col-span-5 space-y-9">
            <SectionTitle
              subHeading="VISIT MY PORTFOLIO & HIRE ME"
              heading="About Me"
            />
            <p className="text-md text-black font-montserrat font-medium lg:w-[720px] leading-loose">
              "I'm Mehebul Alif, a graduate with a Diploma in Computer
              Technology from Jhenaidah Polytechnic Institute. My passion lies
              in web development, where I specialize in Front End technologies
              such as JavaScript, ReactJS, Firebase, HTML, and CSS.
              Additionally, I have experience in back-end development using
              Node.js, MongoDB, and Next.js, and I am adept at integrating
              payment gateways."
            </p>

            {/* resume button  */}
            <ResumeButton />
          </div>
          {/* about  */}
          <div className="col-span-3">
            {/* image collection  */}
            <ImageSlide />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
