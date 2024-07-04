import { useState } from "react";

const ProjectsCard = ({  title, description, imageUrl, projectLink, technologies, date  }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105">
      <img className="w-full h-62 p-6 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4 space-y-2">
        <h3 className="font-bold text-xl font-montserrat text-gray-900">{title}</h3>
        <div className="flex flex-wrap">
        <p className="text-gray-700 mb-2">{expanded ? description : `${description.substring(0, 36)}...`}</p>
        {description.length > 100 && (
          <button
            onClick={toggleExpanded}
            className="text-blue-500 text-sm hover:underline focus:outline-none"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
        </div>
        <div className="">
          <div className="flex flex-wrap  items-center">
          <h4 className="font-bold text-gray-900 font-montserrat">Technologies: </h4>
            {technologies.map((tech, index) => (
              <p key={index} className="text-gray-700 font-poppins text-sm"> {tech} ,</p>
            ))}
          </div>
        </div>
        <div className="">
          <p className="text-gray-700"><strong>Date:</strong> {date}</p>
         
        </div>
      </div>
      <div className="px-6 pb-4 pt-4 flex justify-end">
        <a
          href={projectLink}
          className="bg-[#FE135C] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Project
        </a>
      </div>
    </div>
    );
};

export default ProjectsCard;