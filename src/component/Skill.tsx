import { useState } from "react";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("tech-stack");

  const tabButtonBaseClass =
    "inline-block px-4 py-3 rounded-lg transition-colors duration-300";
  const tabButtonActiveClass = "text-gray-50 bg-cyan-600 bg-opacity-20";
  const tabButtonInactiveClass =
    "text-gray-400 hover:text-white hover:bg-gray-700/50";

  const skillsData = {
    techStack: [
      {
        name: "HTML",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        status: "Advanced",
      },
      {
        name: "CSS",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        status: "Advanced",
      },
      {
        name: "Laravel",
        iconSrc: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
        status: "Intermediate",
      },
      {
        name: "Python",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        status: "Intermediate",
      },
      {
        name: "Bootstrap",
        iconSrc:
          "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
        status: "Proficient",
      },
      {
        name: "Tailwind CSS",
        iconSrc:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        status: "Proficient",
      },
      {
        name: "JavaScript",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        status: "Intermediate",
      },
      {
        name: "React",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
        status: "Intermediate",
      },
    ],
    tools: [
      {
        name: "MySQL",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
        status: "Experienced",
      },
      {
        name: "GitHub",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        status: "Experienced",
      },
      {
        name: "Git",
        iconSrc:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        status: "Experienced",
      },
      {
        name: "Visual Studio Code",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        status: "Experienced",
      },
      {
        name: "Figma",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        status: "Proficient",
      },
      {
        name: "Postman",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        status: "Proficient",
      },
    ],
  };

  return (
    <div className="mt-10 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-40">
      <div
        id="skills"
        className="px-5 py-10 md:px-12 md:py-12 text-left text-cyan-50 min-h-screen"
        style={{ backgroundColor: "#222831" }}
      >
        <article data-page="skills" className="mx-auto max-w-screen-lg">
          {" "}
          <header>
            <div className="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center">
              {" "}
              <div
                className="h-px w-10 bg-cyan-200 md:w-20"
                data-aos="zoom-in-left"
                data-aos-duration="600"
              ></div>
              &nbsp; Skills
            </div>
          </header>
          <section>
            <div>
              <ul className="flex flex-wrap text-sm font-medium text-center mb-8">
                {" "}
                <li className="mr-2">
                  <button
                    id="btn-tech-stack"
                    onClick={() => setActiveTab("tech-stack")}
                    className={`${tabButtonBaseClass} ${
                      activeTab === "tech-stack"
                        ? tabButtonActiveClass
                        : tabButtonInactiveClass
                    }`}
                  >
                    Tech Stack
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    id="btn-tools"
                    onClick={() => setActiveTab("tools")}
                    className={`${tabButtonBaseClass} ${
                      activeTab === "tools"
                        ? tabButtonActiveClass
                        : tabButtonInactiveClass
                    }`}
                  >
                    Tools
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div
                id="tech-stack-content"
                className={`grid grid-cols-2 gap-4 pb-16 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8 ${
                  activeTab === "tech-stack" ? "block" : "hidden"
                }`}
              >
                {skillsData.techStack.map((skill, index) => (
                  <div key={index}>
                    <div className="sadow shadow-md item-tech group flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 p-3 hover:bg-gray-800/50 transition-all duration-300 h-full">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center lg:h-16 lg:w-16">
                        <img
                          alt={skill.name}
                          className="img-tech transition-all duration-300 h-[65%] w-[65%] object-contain lg:h-[80%] lg:w-[80%]"
                          src={skill.iconSrc}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col items-start text-sm md:text-base lg:text-lg">
                        <div className="tech font-medium text-secondary transition-all duration-300">
                          {skill.name}
                        </div>
                        <div className="status-tech opacity-0 group-hover:opacity-100 text-[10px] text-cyan-200 transition-all duration-300 md:text-xs lg:text-sm">
                          {skill.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                id="tools-content"
                className={`grid grid-cols-2 gap-4 pb-16 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8 ${
                  activeTab === "tools" ? "block" : "hidden"
                }`}
              >
                {skillsData.tools.map((tool, index) => (
                  <div key={index}>
                    <div className="sadow shadow-md item-tech group flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 p-3 hover:bg-gray-800/50 transition-all duration-300 h-full">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center lg:h-16 lg:w-16">
                        <img
                          alt={tool.name}
                          className="img-tech transition-all duration-300 h-[65%] w-[65%] object-contain lg:h-[80%] lg:w-[80%]"
                          src={tool.iconSrc}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col items-start text-sm md:text-base lg:text-lg">
                        <div className="tech font-medium text-secondary transition-all duration-300">
                          {tool.name}
                        </div>
                        <div className="status-tech opacity-0 group-hover:opacity-100 text-[10px] text-cyan-200 transition-all duration-300 md:text-xs lg:text-sm">
                          {tool.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Skill;
