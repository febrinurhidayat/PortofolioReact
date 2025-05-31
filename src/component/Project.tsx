import { FaLink } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";

const projectsData = [
  {
    id: 1,
    title: "Kalkulator Nilai Akhir",
    description: "Aplikasi web sederhana untuk menghitung nilai akhir berdasarkan beberapa komponen nilai.",
    imgSrc: "/assets/projek1.png", 
    techStack: "Laravel, Tailwind CSS, JavaScript",
    liveLink: "https://nilai.febridev.web.id",
    sourceCode: "#"
  },
  {
    id: 2,
    title: "E-Commerce",
    description: "Website E-Commerce sederhana untuk menjual produk fashion dengan fitur keranjang belanja dibuat untuk memenuhi projek akhir MSIB batc 7.",
    imgSrc: "/assets/projek1.png", 
    techStack: "Laravel, Bootstrap, JavaScript",
    liveLink: "#", 
    sourceCode: "#"
  },
  {
    id: 3,
    title: "Sistem Manajemen Toko",
    description: "Platform untuk menjual produk fashion dengan fitur keranjang belanja.",
    imgSrc: "/assets/projek1.png", 
    techStack: "laravel, Tailwind CSS, React", 
    liveLink: "#", 
    sourceCode: "#"
  },
  {
    id: 3,
    title: "Kalkulator Nilai Akhir",
    description: "Aplikasi web sederhana untuk menghitung nilai akhir berdasarkan beberapa komponen nilai.",
    imgSrc: "/assets/projek1.png", 
    techStack: "Laravel, Tailwind CSS, JavaScript",
    liveLink: "https://nilai.febridev.web.id",
    sourceCode: "#"
  },
  {
    id: 4,
    title: "E-Commerce",
    description: "Website E-Commerce sederhana untuk menjual produk fashion dengan fitur keranjang belanja dibuat untuk memenuhi projek akhir MSIB batc 7.",
    imgSrc: "/assets/projek1.png", 
    techStack: "Laravel, Bootstrap, JavaScript",
    liveLink: "#", 
    sourceCode: "#"
  },
  {
    id: 5,
    title: "Sistem Manajemen Toko",
    description: "Platform untuk menjual produk fashion dengan fitur keranjang belanja.",
    imgSrc: "/assets/projek1.png", 
    techStack: "laravel, Tailwind CSS, React", 
    liveLink: "#", 
    sourceCode: "#"
  },
];
const Project = () => {
  return (
    <section id="projects" className="px-5 py-5 md:px-12 md:py-10 text-left min-h-screen" style={{backgroundColor: "#004445"}}>
        <div className="text-white mx-auto max-w-screen-lg">
            <header>
                <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
                    <div className="h-[1px] w-10 bg-cyan-400 md:w-20" data-aos="zoom-in-left" data-aos-duration="600">
                    </div>
                    &nbsp; Project
                </div>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                projectsData.map((project) => (
                    <div
                    key={project.id}
                    className="relative flex flex-col h-full bg-[#1e1e1f] text-white p-4 sm:p-6 rounded-lg drop-shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 group">
                    <img
                        src={project.imgSrc}
                        alt={project.title || 'Project Screenshot'} 
                        className="rounded-lg mb-4 w-full h-48 object-cover" 
                        loading="lazy" 
                    />

                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3> 

                    <p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p> 

                    <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-auto pt-2">{project.techStack}</p> 

                    <div className="mt-4 flex justify-between items-center"> 
                        {project.sourceCode && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.sourceCode}
                            title="Lihat Kode Sumber"
                            className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                        >
                            <TbSourceCode className="mr-1" /> 
                            <span className="text-xs hidden sm:inline">Source Code</span> 
                        </a>
                        )}

                        {project.liveLink && (
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.liveLink}
                            title="Lihat Proyek Langsung"
                            className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                        >
                            <span className="text-xs hidden sm:inline mr-1">Live Demo</span> 
                            <FaLink/> 
                        </a>
                        )}
                    </div>
                    </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Project