import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  { title: "Project 1", description: "A React-based project", tech: "React" },
  { title: "Project 2", description: "Laravel API project", tech: "Laravel" },
];

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="p-4 border rounded shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
