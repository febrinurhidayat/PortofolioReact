import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + (window.innerHeight / 3); 

      let currentSection = "";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (window.scrollY < 100 && currentSection === "") { 
        setActiveSection("about");
      } else if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = ["about", "skills", "projects", "contact"];

  const socialIcons = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/_febrinh/?igsh=MTkxMzhoZHl0bGw4dA==",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100049951054333&mibextid=ZbWKwL",
      icon: FaFacebook,
    },
    {
      name: "GitHub",
      url: "https://github.com/febrinurhidayat",
      icon: FaGithub,
    },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-lg bg-black/70 py-2 shadow-xl"
            : "backdrop-blur-sm bg-white/20 py-4"
        }`}
      >
        <div className="container mx-auto px-5 flex justify-between items-center">
          <a
            href="#about"
            className="text-3xl font-extrabold tracking-wide cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={() => {
              setActiveSection("about"); 
              closeMobileMenu();
            }}
          >
            <span className="text-cyan-400">&lt;</span>
            Portofolio
            <span className="text-cyan-400">/&gt;</span>
          </a>

          <div className="hidden md:flex md:space-x-8 text-white font-medium text-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item); 
                }}
                className={`link relative group uppercase text-sm tracking-wider ${
                  activeSection === item ? "text-cyan-400" : "hover:text-cyan-300"
                } transition-colors duration-300`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item ? "w-full" : "w-0" 
                  }`}
                ></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex space-x-5">
            {socialIcons.map((social) => {
              const IconComponent = social.icon; // Ambil komponen ikon
              return (
                <Link
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  to={social.url}
                  title={social.name}
                  // Atur warna dasar dan hover untuk ikon di sini
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <IconComponent
                    // Terapkan styling ukuran dan efek hover
                    className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen} 
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0" 
        } pt-20 md:hidden`} 
      >
        <div className="container mx-auto px-5 flex flex-col items-center space-y-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActiveSection(item);
                closeMobileMenu();    
              }}
              className={`text-2xl font-medium uppercase tracking-wider ${
                activeSection === item ? "text-cyan-400" : "text-white"
              } transition-colors duration-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <div className="flex space-x-8 pt-10">
            {socialIcons.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  to={social.url}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  onClick={closeMobileMenu}
                  title={social.name}
                >
                  <IconComponent
                    className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;