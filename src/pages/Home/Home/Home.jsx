import Contact from "../../Contact/Contact";
import Education from "../../education/Education";
import Projects from "../../projects/Projects";
import About from "../About/About";
import Banner from "../Banner/Banner";
import MySkills from "../My_SKills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <MySkills/>
            <Projects/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Home;