import Container from "../../shared/Container/Container";
import banner from '../../../assets/images/banner/banner_2.png'
const Banner = () => {
    return (
       
           
            <div className="grid grid-cols-6 bg-[#ECF0F3] ">
               
                 {/* images  */}
                 <div className="col-span-2 p-10 rounded-lg">
                    <div>
                        <img className="bg-[#2a3c45] p-2 border-[10px] border-white shadow-2xl rounded-lg" src={banner} alt="" />
                        </div> 
                </div>
                {/* content  */}
                <div className="col-span-4">
                    content 
                </div>
              
            </div>
       
        
    );
};

export default Banner;