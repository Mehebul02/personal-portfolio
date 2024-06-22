import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../shared/Container/Container";
import shap_bg from '../../../assets/images/shap_bg/shap_bg.png'
const About = () => {
    return (
      <div className="">
        <div className="w-full">
          <img className="w-full shadow-sm" src={shap_bg} alt="" />
        </div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-8 ">
                {/* image  */}
           <div className="col-span-6">
           <SectionTitle subHeading='VISIT MY PORTFOLIO & HIRE ME' heading='About Me'/>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis! A quas dolor vero perferendis! Provident aliquid, consequatur odio cum perferendis in et vero at rem ut accusamus amet natus architecto consectetur vitae sint non? Minus tempore, iste provident suscipit quo, illo, exercitationem dolores cum enim vitae ab minima eius officia velit culpa deserunt! Fuga ea aliquam rem dicta distinctio, corrupti magni expedita cum soluta id praesentium beatae eligendi et voluptatum facere vel recusandae nostrum nesciunt iure. Earum, quasi. Id dolorum molestias placeat dignissimos expedita aspernatur vero rerum suscipit, porro sunt, officia velit explicabo eius corporis, esse in totam. Qui, accusamus, temporibus perspiciatis placeat quaerat eum in aut quia quasi incidunt laborum. Reiciendis quidem vitae a harum doloribus eos quam!
           </div>
                {/* about  */}
           <div className="col-span-2">
           image
           </div>
        </div>
        </Container>
      </div>
    );
};

export default About;