import { FaLink } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react"; 

const projectsData = [
  {
    id: 1,
    title: "Kalkulator Nilai Akhir",
    description: "Aplikasi web sederhana yang dirancang untuk menghitung nilai akhir mahasiswa berdasarkan beberapa komponen nilai seperti tugas, UTS, dan UAS. Memudahkan mahasiswa untuk melihat nilai akhir agar dapat mengira nilai yang ingin di dapatkan.",
    imgSrc: "/assets/projek1.png",
    techStack: "Laravel, Tailwind CSS, JavaScript",
    liveLink: "https://nilai.febridev.web.id",
    sourceCode: "#"
  },
  {
    id: 2,
    title: "E-Commerce Fashion",
    description: "Sebuah platform E-Commerce yang dikembangkan untuk menjual produk fashion. Dilengkapi fitur-fitur standar seperti katalog produk, detail produk, keranjang belanja, dan proses checkout. Proyek ini dibuat untuk memenuhi tugas akhir program MSIB Batch 7.",
    imgSrc: "/assets/e-commerce.png",
    techStack: "Laravel, Bootstrap, JavaScript",
    liveLink: "https://toko.febridev.web.id/",
    sourceCode: "#"
  },
  {
    id: 3,
    title: "Remove Background",
    description: "Sebuah software untuk menghapus latar belakang dan mengganti background.",
    imgSrc: "/assets/removeBg.png",
    techStack: "Flask, Tailwind, JavaScript",
    liveLink: "https://remove.febridev.web.id/",
    sourceCode: "#"
  },
];

const Project = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const handleCardFlip = (projectId: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId] 
    }));
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "circOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.7, ease: "circOut", delay: 0.3 },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const cardEntryVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.4 },
    },
  };

  const flipVariants = {
    unflipped: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <motion.section
      id="projects"
      className="px-5 py-10 md:px-12 md:py-16 text-left min-h-screen"
      style={{ backgroundColor: "#004445" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-white mx-auto max-w-screen-lg">
        <motion.header variants={headerVariants}>
          <div className="text-2xl font-bold text-white mb-10 title-section flex items-center">
            <motion.div
              className="h-[1px] w-10 bg-cyan-400 md:w-20"
              variants={lineVariants}
            ></motion.div>
            &nbsp; Project
          </div>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8"
          variants={gridVariants}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card-container cursor-pointer"
              variants={cardEntryVariant}
              style={{ perspective: "1000px" }}
              onClick={() => handleCardFlip(project.id)} 
            >
              <motion.div
                className="relative w-full h-[450px] sm:h-[480px] rounded-lg"
                style={{ transformStyle: "preserve-3d" }}
                initial="unflipped" 
                animate={flippedCards[project.id] ? "flipped" : "unflipped"} 
                variants={flipVariants}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {/* Bagian Depan Kartu */}
                <motion.div
                  className="absolute w-full h-full bg-[#222831] p-5 sm:p-6 rounded-lg shadow-xl flex flex-col justify-between"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <img
                      src={project.imgSrc}
                      alt={project.title || 'Project Screenshot'}
                      className="rounded-md mb-4 w-full h-48 sm:h-52 object-cover"
                      loading="lazy"
                    />
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm font-medium">{project.techStack}</p>
                  </div>
                  <p className="text-xs text-yellow-500 mt-3 text-center">Klik untuk detail</p> 
                </motion.div>

                {/* Bagian Belakang Kartu (Deskripsi & Link) */}
                <motion.div
                  className="absolute w-full h-full bg-[#222831] p-5 sm:p-6 rounded-lg shadow-xl flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4 flex-grow overflow-y-auto max-h-[200px] sm:max-h-[220px] custom-scrollbar pr-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex justify-end items-center space-x-4">
                    {project.sourceCode && project.sourceCode !== "#" && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.sourceCode}
                        title="Lihat Kode Sumber"
                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center text-sm p-2 rounded-md hover:bg-gray-700/50"
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <TbSourceCode size={20} className="mr-1.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.liveLink}
                        title="Lihat Proyek Langsung"
                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center text-sm p-2 rounded-md hover:bg-gray-700/50"
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <FaLink size={18} className="mr-1.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Project;