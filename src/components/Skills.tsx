import React from "react";

const skills: string[] = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "PHP", "Laravel"];

const Skills: React.FC = () => (
  <section className="p-10 bg-gray-50">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
