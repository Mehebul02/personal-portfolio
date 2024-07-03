import { FaDownload } from "react-icons/fa";

const ResumeButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1JNLO5Nv4QdhR7DSxP3TWV9zf11KuBIRF/view?usp=sharing "'; 
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div>
             <button onClick={handleDownload} className="flex justify-center items-center gap-3 text-xl text-white bg-[#2A3C45] border-2 hover:bg-gradient-to-r from-red-500 to-neutral-500 shadow-lg   font-montserrat font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1">
      Download Resume <FaDownload/>
    </button>
        </div>
    );
};

export default ResumeButton;