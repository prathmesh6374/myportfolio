import React from "react";

function Certification() {
  const cardItem = [
    {
      id: 1,
      logo: "/python.png",
      name: "Coursera Data Analyst",
      link: "https://coursera.org/share/18bcc4be94db2d54598f4ed87dd00831",
    },
    {
      id: 2,
      logo: "/python.png",
      name: "Coursera Data Analyst",
      link: "https://coursera.org/share/18bcc4be94db2d54598f4ed87dd00831",
    },
    {
      id: 3,
      logo: "/css.jpg",
      name: "CSS Mastery",
      link: "https://example.com",
    },
    {
      id: 4,
      logo: "/javascript.png",
      name: "JavaScript Basics",
      link: "https://example.com",
    },
  ];

  return (
    <div
      name="Certification"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Certification</h1>
        <p>I've more than 2 years of experience in below technologies.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-11 my-3 mx-5">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-lg md:w-[250px] md:h-[300px] shadow-md p-3 cursor-pointer hover:scale-105 duration-300 relative group"
              key={id}
            >
              <img src={logo} className="w-[200px] mb-3" alt={`${name} Logo`} />
              <div className="text-center font-medium">{name}</div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 bg-blue-500 text-white py-1 px-4 rounded-md text-sm transition-all duration-300 hover:bg-blue-600 opacity-0 group-hover:opacity-100"
              >
                Verify
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certification;
