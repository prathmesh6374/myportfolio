import React, { useState } from "react";
import companyImage from "../../src/DCDIUM.png"; // Updated path to src folder

function Experience() {
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const experiences = [
    {
      id: 1,
      companyLogo: companyImage, 
      companyName: "Tech Corp",
      description: "Worked as a Software Engineer for 2 years, specializing in full-stack development and cloud integration.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090197!2d-122.41941538468132!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808edc7fefcb%3A0x7f93d8231b2bfa0!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1636958165486!5m2!1sen!2sus",
    },
    {
      id: 2,
      companyLogo: companyImage, 
      companyName: "Innovate Labs",
      description: "Developed scalable web applications and collaborated with cross-functional teams for innovative projects.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090197!2d-122.41941538468132!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808edc7fefcb%3A0x7f93d8231b2bfa0!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1636958165486!5m2!1sen!2sus",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map(({ id, companyLogo, companyName, description, mapUrl }) => (
          <div
            key={id}
            className="relative flex flex-col items-center md:items-start border-[2px] rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Company Logo */}
            <div
              onMouseEnter={() => setHoveredCompany(id)}
              onMouseLeave={() => setHoveredCompany(null)}
              className="relative"
            >
              <img
                src={companyLogo}
                alt={`${companyName} Logo`}
                className="w-24 h-24 mb-4 cursor-pointer hover:scale-110 transition-transform duration-200"
              />

              {/* Tooltip/Map */}
              {hoveredCompany === id && (
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 w-72">
                  <iframe
                    src={mapUrl}
                    className="w-full h-48 border-0 rounded-lg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <p className="mt-2 text-sm text-gray-500">Location of {companyName}</p>
                </div>
              )}
            </div>

            {/* Company Details */}
            <h2 className="text-xl font-semibold mb-2">{companyName}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
