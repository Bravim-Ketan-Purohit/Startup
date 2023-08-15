import React from "react";

const TechStack = () => {
  const techData = [
    // { name: "Next.js", logo: ./logos/icons8-nextjs.svg },
    { name: "React", logo: "/react-logo.svg" },
    { name: "Node.js", logo: "/nodejs-logo.svg" },
    { name: "Express", logo: "/express-logo.svg" },

    // Add more technologies and their logos
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">
          Our Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {techData.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center text-gray-300"
            >
              <img
                src={tech.logo}
                alt={`Logo`}
                className="h-12 w-12 mb-2"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
