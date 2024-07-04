import { MdOutlineCastForEducation } from "react-icons/md";
import Container from "../shared/Container/Container";

const Education = () => {
  return (
<Container>
  
<div>
<div className="text-center md:w-4/12 my-10 mx-auto  ">
          {/* <h1 className="text-[#FE135C] font-montserrat font-semibold  mb-2 lg:mb-4 ">
          VISIT MY PROJECTS & HIRE ME
          </h1> */}
          <h1 className="flex justify-center items-center gap-4 text-2xl lg:text-5xl text-[#25282C] font-montserrat font-bold  uppercase">
          <MdOutlineCastForEducation/>  Education
          </h1>
         <div className="divider"></div>
       </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end bg-slate-300 hover:bg-white p-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
      <time className="font-mono italic">2020-2024</time>
      <div className="text-2xl font-montserrat font-bold my-2 px-3">Diploma In Computer Technology</div>
      
      <h1 className="text-md text-[#FE135C] font-medium font-montserrat p-2">Jhenaidah Polytechnic Institute , Jhenaidah</h1>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10 bg-slate-300 hover:bg-white p-2 rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
      <time className="font-mono italic">2018-2020</time>
      <div className="text-2xl font-montserrat font-bold my-2 px-3">S.S.C</div>
      <h1 className="text-md text-[#FE135C] font-medium font-montserrat p-2">A S, K,MP High School , Bheramara Kushtia</h1>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    
  
   
    
   
  </li>
</ul>
    </div>
    
</Container>
  );
};

export default Education;
