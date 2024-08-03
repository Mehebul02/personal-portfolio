import Container from "../shared/Container/Container";
import contact from "../../assets/images/banner/contact1.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Contact = () => {
  return (
    <Container>
      <div id="contact" className=" lg:my-20 ">
        <h1 className="text-3xl lg:text-4xl text-[#25282C] font-montserrat font-bold  uppercase border-b-4 border-[#FE135C] inline">
          Contact With Me
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* contact information */}
        <div className="w-[500px] bg-[#EAEFF1] rounded-lg p-4">
          <img className=" rounded-lg " src={contact} alt="" />
         <div className="space-y-2">
         <h1 className="text-2xl font-montserrat font-bold">Mehebul Alif</h1>
          <h1 className="text-md font-montserrat font-medium">Phone: +88016422-87450</h1>
          <h1 className="text-md font-montserrat font-medium">Email: mehebul212@gmail.com</h1>
          <h1 className="text-md font-montserrat font-medium">Location: Dhaka Bangladesh </h1>
          <div className="space-y-3">
      <h1 className="text-xl uppercase underline font-montserrat font-semibold ">Find With me</h1>
      <div className="flex flex-wrap space-x-8" >
       
      <a href='https://web.facebook.com/alif.islam.212?_rdc=1&_rdr' target="_blank">
      <h1 className="bg-gray-700 p-2 title rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500 hover:border-b-2 border-white">
      <FaFacebook className="text-white text-2xl" />
    </h1>
      </a>
     
       <a href='https://www.linkedin.com/in/mehebul-alif-9b865025b' target="_blank">
       <h1 className="bg-gray-700 p-2 rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500"><FaLinkedin  className="text-white text-2xl"/> </h1>
       </a>
       
        <h1 className="bg-gray-700 p-2 rounded-tl-lg rounded-br-lg hover:bg-gradient-to-t from-rose-500 to-red-500"><BsTwitterX className="text-white text-2xl"/></h1>
      </div>
    </div>
         </div>
        </div>
        {/* input type  */}
        <div className=" bg-[#CCD1DD] p-10 rounded-xl shadow-lg ">
          <div className="flex gap-4">
            {/* name  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text-lg font-montserrat font-semibold">
                  Name
                </span>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
            </label>
            {/* Phone  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text-lg font-montserrat font-semibold">
                  Phone
                </span>
              </div>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* Email  */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text-lg font-montserrat font-semibold">
                Email
              </span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
          </label>
          {/* Subject  */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text-lg font-montserrat font-semibold">
                Subject
              </span>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full "
            />
          </label>
          {/* text area  */}
          <label className="form-control">
            <div className="label">
              <span className="label-text-lg font-montserrat font-semibold">
                Your Message
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Message...."
            ></textarea>
          </label>
          <div className="mt-6 ">
            <button className="flex mx-auto justify-center items-center gap-3 text-xl text-white bg-[#fe135de8]  hover:bg-gradient-to-r from-red-500 to-neutral-500 shadow-lg   font-montserrat font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
