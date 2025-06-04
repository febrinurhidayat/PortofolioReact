import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
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

  // Variants untuk animasi
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const headerLineTitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "circOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "circOut" },
    },
  };

  const introTextParentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const introTextChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const contactInfoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const socialIconsContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const socialIconItemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 10 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="px-5 py-10 md:px-12 md:py-16 text-left min-h-screen"
      style={{ backgroundColor: "#021C1E" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="text-white mx-auto max-w-screen-lg">
        <motion.div>
          <motion.div
            className="text-2xl font-bold text-white mb-5 title-section flex items-center"
            variants={headerLineTitleVariants}
          >
            <motion.div
              className="h-[1px] w-10 bg-cyan-400 md:w-20"
              variants={lineVariants}
            ></motion.div>
            &nbsp;Contact
          </motion.div>

          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16"
            variants={introTextParentVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-100 dark:text-white"
              variants={introTextChildVariants}
            >
              Hubungi Saya
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-300 dark:text-gray-300"
              variants={introTextChildVariants}
            >
              Punya pertanyaan, ide proyek, atau hanya ingin menyapa? Saya akan
              senang mendengar dari Anda!
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bagian utama konten (grid) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={gridContainerVariants}
        >
          {/* Kartu Informasi Kontak */}
          <motion.div
            className="bg-gray-800/70 dark:bg-gray-800 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl" // Sedikit transparansi dan shadow lebih besar
            variants={cardVariants}
          >
            <motion.h3
              className="text-2xl font-semibold text-cyan-300 dark:text-white mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.3 },
              }}
            >
              Informasi Kontak
            </motion.h3>
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                },
              }}
            >
              <motion.div
                className="flex items-start"
                variants={contactInfoItemVariants}
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-cyan-400 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-3">
                  <p className="text-base text-gray-300 dark:text-gray-300">
                    Email
                  </p>
                  <a
                    href="mailto:febrinurhidayat35364@gmail.com"
                    className="text-yellow-300 hover:text-yellow-400 dark:text-yellow-200 dark:hover:text-yellow-300 font-medium break-all"
                  >
                    febrinurhidayat35364@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                variants={contactInfoItemVariants}
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-cyan-400 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-3">
                  <p className="text-base text-gray-300 dark:text-gray-300">
                    Lokasi
                  </p>
                  <p className="text-yellow-300 dark:text-yellow-200 font-medium">
                    Jawa Tengah, Indonesia
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.h4
              className="text-xl font-semibold text-cyan-300 dark:text-white mt-8 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              Temukan Saya Di
            </motion.h4>
            <motion.div
              className="flex space-x-5"
              variants={socialIconsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                    variants={socialIconItemVariants}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="h-7 w-7 sm:h-8 sm:w-8" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Kartu Peta */}
          <motion.div
            className="bg-gray-800/70 dark:bg-gray-800 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl flex items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-full h-72 sm:h-80 overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.759173392772!2d109.08817607476398!3d-7.601166992413756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656f004e577d6f%3A0x6f0ba228f5058e0a!2sFebri%20Nur%20Hidayat!5e0!3m2!1sid!2sid!4v1749063133084!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
