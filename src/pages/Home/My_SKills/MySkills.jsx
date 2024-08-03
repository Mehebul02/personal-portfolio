import Container from "../../shared/Container/Container";
import html from '../../../assets/images/skill/html.png'
import css from '../../../assets/images/skill/css.png'
import tailwind from '../../../assets/images/skill/tailwind.png'
import javaScript from '../../../assets/images/skill/javascript.png'
import react from '../../../assets/images/skill/react.png'
import firebase from '../../../assets/images/skill/firebase.png'
import nodejs from '../../../assets/images/skill/nodeJs.png'
import mongodb from '../../../assets/images/skill/Mongodb.png'
import git from '../../../assets/images/skill/git.png'
import figma from '../../../assets/images/skill/figma.png'
const MySkills = () => {
  return (
    <Container>
      <div id="skills" className="my-24 ">
     <div className="" >
         {/* title  */}
         <div className="text-center md:w-4/12 my-5 mx-auto mt-  ">
          <h1 className="text-[#FE135C] font-montserrat font-semibold  mb-2 lg:mb-4 ">
            VISIT MY SKILL & HIRE ME
          </h1>
          <h1 className="text-3xl lg:text-5xl text-[#25282C] font-montserrat font-bold  uppercase">
            My Skill
          </h1>
<div className="divider"></div>
        </div>
        {/* Skill icon */}
        <div className="max-w-[1000px] mx-auto">
          {/* <h1 className="text-xl font-montserrat font-bold my-10 border-b-2 border-red-700 w-32">Front-End</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
          {/* html  */}
        <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={html} alt="" />
</div>
          {/* css  */}
        <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={css} alt="" />
</div>
          {/* tailwind  */}
        <div className="w-28 flex justify-center items-center bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={tailwind} alt="" />
</div>
          {/* javascript  */}
        <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={javaScript} alt="" />
</div>
          {/* react */}
        <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={react} alt="" />
</div>
          {/* firebase */}
        <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={firebase} alt="" />
</div>

          {/* Node js  */}
        <div className="w-28 flex justify-center items-center bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={nodejs} alt="" />
</div>
          {/* mongodb */}
        <div className="w-28 flex justify-center items-center bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={mongodb} alt="" />
</div>
          {/* git */}
        <div className="w-28 flex justify-center items-center bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={git} alt="" />
</div>
          {/* figma */}
        <div className="w-28 flex justify-center items-center bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <img className="  hover:scale-105 transition duration-300 ease-in-out" src={figma} alt="" />
</div>
      

        </div>
        </div>
     </div>
        
      </div>
    </Container>
  );
};

export default MySkills;
