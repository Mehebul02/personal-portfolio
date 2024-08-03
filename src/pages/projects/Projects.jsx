import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    const projects = [
        {
          id: 1,
          title: "Pet Adoption ",
          description: "Manage pet adoptions effectively with our streamlined admin dashboard, featuring comprehensive oversight, adoption tracking, user management, analytics, communication tools, customization, security, and continuous improvement.",
          imageUrl: "https://i.ibb.co/42MbF7c/pet-adeption.png",
          projectLink: "https://pet-adoption-ed896.web.app",
          technologies: ["React", "Firebase", "Tailwind CSS" ,"Node js","Mongodb"],
          date: "2023-06-15",
          
        },
        {
            id: 2,
            title: "Case Study",
            description: "This full-stack application project features a comprehensive dashboard designed for efficient management and user interaction. The dashboard serves as the central hub, providing administrators and users with essential tools and insights for streamlined operations.",
            imageUrl: "https://i.ibb.co/McrV59L/case-study.png",
            projectLink: "https://case-study-b14df.web.app",
            technologies: ["React", "Firebase", "Tailwind CSS" ,"Node js","Mongodb"],
            date: "2023-05-11",
      
        },
        {
            id: 2,
            title: "Artistic Vistas",
            description: "In this case study, we examine the development and implementation of a dashboard for a full-stack application project aimed at streamlining pet adoption processes. The project required a centralized interface for administrators to manage pet listings, track adoption requests, handle user accounts, and analyze data.",
            imageUrl: "https://i.ibb.co/qmCJTvz/aritise-vista.png",
            projectLink: "https://artistic-vistas-auth.web.app/",
            technologies: ["React", "Firebase", "Tailwind CSS" ,"Node js","Mongodb"],
            date: "2023-04-17",
      
        }
        // Add more projects here
      ];
    return (
        <div id="project" className="my-36">
      
        <div className="text-center md:w-4/12  mx-auto  ">
          <h1 className="text-[#FE135C] font-montserrat font-semibold  mb-2 lg:mb-4 ">
          VISIT MY PROJECTS & HIRE ME
          </h1>
          <h1 className="text-3xl lg:text-5xl text-[#25282C] font-montserrat font-bold  uppercase">
          Projects
          </h1>
        <div className="divider"></div>
        </div>
        {/* card projects  */}
        <div className="container mx-auto p-4 lg:mt-10">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            technologies={project.technologies}
            date={project.date}
            status={project.status}
          />
        ))}
      </div>
    </div>
        </div>
    );
};

export default Projects;