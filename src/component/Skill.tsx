import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Impor Framer Motion

const Skill = () => {
  const [activeTab, setActiveTab] = useState("tech-stack");

  const tabButtonBaseClass =
    "inline-block px-4 py-3 rounded-lg transition-colors duration-200"; // Sedikit percepat transisi warna tombol
  const tabButtonActiveClass = "text-gray-50 bg-cyan-600 bg-opacity-20";
  const tabButtonInactiveClass =
    "text-gray-400 hover:text-white hover:bg-gray-700/50";

  const skillsData = {
    techStack: [
      { name: "HTML", iconSrc: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", status: "Advanced" },
      { name: "CSS", iconSrc: "https://cdn-icons-png.flaticon.com/512/732/732190.png", status: "Advanced" },
      { name: "Laravel", iconSrc: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", status: "Intermediate" },
      { name: "Python", iconSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", status: "Intermediate" },
      { name: "Bootstrap", iconSrc: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png", status: "Proficient" },
      { name: "Tailwind CSS", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", status: "Proficient" },
      { name: "JavaScript", iconSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", status: "Intermediate" },
      { name: "React", iconSrc: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", status: "Intermediate" },
    ],
    tools: [
      { name: "MySQL", iconSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", status: "Experienced" },
      { name: "GitHub", iconSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png", status: "Experienced" },
      { name: "Git", iconSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", status: "Experienced" },
      { name: "Visual Studio Code", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", status: "Experienced" },
      { name: "Figma", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", status: "Proficient" },
      { name: "Postman", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", status: "Proficient" },
    ],
  };

  // Variants untuk animasi
  // const sectionVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.4,
  //       ease: "easeOut",
  //       when: "beforeChildren", // Pastikan section muncul sebelum children
  //       staggerChildren: 0.1 // Stagger untuk children jika ada (misal, judul dan konten)
  //     },
  //   },
  // };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }

  const tabsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  }


  const skillsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", // Animasi grid selesai sebelum item
        staggerChildren: 0.05, // Stagger antar item skill
        duration: 0.2 // Durasi untuk grid container itu sendiri (misal fade in)
      },
    },
    exit: { // Animasi keluar untuk grid
      opacity: 0,
      transition: {
        duration: 0.15,
        when: "afterChildren", // Grid menghilang setelah children
        staggerChildren: 0.03,
        staggerDirection: -1 // Agar item menghilang dari akhir ke awal
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.3 // Walau spring, duration bisa pengaruhi seberapa cepat dimulai/diresponsifkan
      },
    },
    exit: { // Animasi keluar untuk item
        opacity: 0,
        y: -10,
        scale: 0.9,
        transition: {
            duration: 0.15
        }
    }
  };


  return (
    <motion.section
      id="skills"
      className="px-5 py-10 md:px-12 md:py-16 text-left min-h-screen"
      style={{ backgroundColor: "#222831" }}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }} 
    >
      <article data-page="skills" className="mx-auto max-w-screen-lg">
        <motion.header variants={titleVariants}> {/* Bisa juga pakai sectionVariants jika ingin stagger dari parent */}
          <div className="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center">
            <div
              className="h-px w-10 bg-cyan-200 md:w-20"
              // data-aos bisa dipertahankan atau diganti Framer Motion jika ingin konsisten
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
            &nbsp; Skills
          </div>
        </motion.header>

        <motion.section variants={tabsVariants}> {/* Animasi untuk kontainer tab dan kontennya */}
          <div>
            <ul className="flex flex-wrap text-sm font-medium text-center mb-8">
              <li className="mr-2">
                <motion.button
                  id="btn-tech-stack"
                  onClick={() => setActiveTab("tech-stack")}
                  className={`${tabButtonBaseClass} ${
                    activeTab === "tech-stack"
                      ? tabButtonActiveClass
                      : tabButtonInactiveClass
                  }`}
                  whileHover={{ y: -2, backgroundColor: activeTab !== "tech-stack" ? "rgba(55, 65, 81, 0.5)" : undefined }} // Contoh hover effect
                  whileTap={{ scale: 0.95 }}
                >
                  Tech Stack
                </motion.button>
              </li>
              <li className="mr-2">
                <motion.button
                  id="btn-tools"
                  onClick={() => setActiveTab("tools")}
                  className={`${tabButtonBaseClass} ${
                    activeTab === "tools"
                      ? tabButtonActiveClass
                      : tabButtonInactiveClass
                  }`}
                  whileHover={{ y: -2, backgroundColor: activeTab !== "tools" ? "rgba(55, 65, 81, 0.5)" : undefined }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tools
                </motion.button>
              </li>
            </ul>
          </div>

          <AnimatePresence mode="wait"> {/* mode="wait" agar animasi exit selesai sebelum enter dimulai */}
            {activeTab === "tech-stack" && (
              <motion.div
                key="tech-stack-content" // Key penting untuk AnimatePresence
                id="tech-stack-content"
                className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8"
                variants={skillsGridVariants}
                initial="hidden"
                animate="visible"
                exit="exit" // Menggunakan variant exit
              >
                {skillsData.techStack.map((skill, index) => (
                  <motion.div
                    key={skill.name} // Key lebih baik menggunakan nama skill yg unik
                    variants={skillItemVariants} // Terapkan item variant di sini
                    // initial, animate, exit di-handle oleh parent (skillsGridVariants)
                  >
                    <div className="sadowCustom sadowCustom shadow-md item-tech group flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 p-3 hover:bg-gray-800/50 transition-all duration-200 h-full"> {/* Perkecil duration transisi hover bg */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center lg:h-16 lg:w-16">
                        <motion.img
                          alt={skill.name}
                          className="img-tech h-[65%] w-[65%] object-contain lg:h-[80%] lg:w-[80%]"
                          src={skill.iconSrc}
                          loading="lazy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.05 + 0.1, duration: 0.2 }} // Delay berdasarkan index + delay awal, durasi singkat
                          whileHover={{ scale: 1.1 }} // Efek hover pada gambar
                        />
                      </div>
                      <div className="flex flex-col items-start text-sm md:text-base lg:text-lg">
                        <div className="tech font-medium text-white transition-all duration-200"> {/* text-secondary diubah ke text-white, atau sesuaikan */}
                          {skill.name}
                        </div>
                        <div className="status-tech opacity-0 group-hover:opacity-100 text-[10px] text-cyan-200 transition-opacity duration-200 md:text-xs lg:text-sm"> {/* Hanya transisi opacity */}
                          {skill.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "tools" && (
              <motion.div
                key="tools-content" // Key penting untuk AnimatePresence
                id="tools-content"
                className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8"
                variants={skillsGridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {skillsData.tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    variants={skillItemVariants}
                  >
                    <div className="sadowCustom shadow-md item-tech group flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 p-3 hover:bg-gray-800/50 transition-all duration-200 h-full">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center lg:h-16 lg:w-16">
                        <motion.img
                          alt={tool.name}
                          className="img-tech h-[65%] w-[65%] object-contain lg:h-[80%] lg:w-[80%]"
                          src={tool.iconSrc}
                          loading="lazy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.05 + 0.1, duration: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                        />
                      </div>
                      <div className="flex flex-col items-start text-sm md:text-base lg:text-lg">
                        <div className="tech font-medium text-white transition-all duration-200">
                          {tool.name}
                        </div>
                        <div className="status-tech opacity-0 group-hover:opacity-100 text-[10px] text-cyan-200 transition-opacity duration-200 md:text-xs lg:text-sm">
                          {tool.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </article>
    </motion.section>
  );
};

export default Skill;