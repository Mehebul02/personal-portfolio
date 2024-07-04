import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    const projects = [
        {
          title: "Project One",
          description: "This is a brief description of project one.",
          imageUrl: "https://via.placeholder.com/300x200",
          projectLink: "https://pet-adoption-ed896.web.app",
        },
        {
          title: "Project Two",
          description: "This is a brief description of project two.",
          imageUrl: "https://via.placeholder.com/300x200",
          projectLink: "https://example.com/project-two",
        },
        // Add more projects here
      ];
    return (
        <div className="my-36">
      
        <div className="text-center md:w-4/12  mx-auto  ">
          <h1 className="text-[#FE135C] font-montserrat font-semibold  mb-2 lg:mb-4 ">
          VISIT MY PROJECTS & HIRE ME
          </h1>
          <h1 className="text-3xl lg:text-6xl text-[#25282C] font-montserrat font-bold  uppercase">
          Projects
          </h1>
        <div className="divider"></div>
        </div>
        {/* card projects  */}
        <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
        </div>
    );
};

export default Projects;