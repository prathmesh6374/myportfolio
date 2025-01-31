import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Prathmesh, a passionate student with a keen eye for <b>Data Analysis</b>. With a background in IT, I strive to create impactful and stunning visualization solutions that leave a lasting impression.
        </p>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc list-inside">
          <li>
            Completed <b>Bachelor of Computer Application (BCA)</b> in 2023 with an SGPA of <b>8.91 (2nd rank)</b>.
          </li>
          <li>
            Currently pursuing <b>Master of Computer Application (MCA)</b> at <b>K.K. Wagh College, Pune University, Nashik</b>, expected completion in <b>2025</b>.
          </li>
        </ul>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul className="list-disc list-inside">
          <li>Excel</li>
          <li>Power BI</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Tableau</li>
        </ul>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <ul className="list-disc list-inside">
          <li>
            Stood 2nd in the entire academics of BCA with an SGPA of <b>8.91</b>.
          </li>
          <li>
            Honored with a certificate and cash prize for academic excellence.
          </li>
        </ul>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <ul className="list-disc list-inside">
          <li>
            My mission is to leverage my skills and creativity to deliver innovative data analysis solutions that exceed expectations.
          </li>
          <li>
            Committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
