import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "sertifikat", "projects", "contact"];
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

  const navItems = ["about", "skills","sertifikat", "projects", "contact"];

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

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "tween",
        stiffness: 100,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 0.77, 0.47, 0.97],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-lg bg-black/50 border-b border-cyan-400 py-2 shadow-xl"
            : "backdrop-blur-sm bg-black/20 py-5"
        }`}
      >
        <div className="container mx-auto px-5 flex justify-between items-center">
          <motion.a
            href="#about"
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-wide cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={() => {
              setActiveSection("about"); 
              closeMobileMenu();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-cyan-400">&lt;</span>
            Portofolio
            <span className="text-cyan-400">/&gt;</span>
          </motion.a>

          <motion.div 
            className="hidden md:flex md:space-x-8 text-white font-medium text-lg"
            variants={navVariants}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                variants={itemVariants}
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item); 
                }}
                className={`link relative group uppercase text-sm tracking-wider ${
                  activeSection === item ? "text-cyan-400" : "hover:text-cyan-300"
                } transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item ? "w-full" : "w-0" 
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="hidden md:flex space-x-5"
            variants={navVariants}
          >
            {socialIcons.map((social) => {
              const IconComponent = social.icon; 
              return (
                <motion.div
                  key={social.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={social.url}
                    title={social.name}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <IconComponent
                      className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg pt-20 md:hidden"
          >
            <div className="container mx-auto px-5 flex flex-col items-center space-y-10">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  variants={mobileItemVariants}
                  href={`#${item}`}
                  onClick={() => {
                    setActiveSection(item);
                    closeMobileMenu();    
                  }}
                  className={`text-2xl font-medium uppercase tracking-wider ${
                    activeSection === item ? "text-cyan-400" : "text-white"
                  } transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}

              <motion.div 
                className="flex space-x-8 pt-10"
                variants={mobileItemVariants}
              >
                {socialIcons.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={social.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                        onClick={closeMobileMenu}
                        title={social.name}
                      >
                        <IconComponent
                          className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-all duration-300"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;