import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

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
  return (
    <section
      id="contact"
      className="px-5 py-5 md:px-12 md:py-10 text-left min-h-screen"
      style={{ backgroundColor: "#021C1E;" }}
    >
      <div className="text-white mx-auto max-w-screen-lg">
        <header>
          <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            <div
              className="h-[1px] w-10 bg-cyan-400 md:w-20"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
            &nbsp; Contact
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                Hubungi Saya
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Punya pertanyaan, ide proyek, atau hanya ingin menyapa? Saya
                akan senang mendengar dari Anda!
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Informasi Kontak
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400"
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
                        <p className="text-base text-gray-700 dark:text-gray-300">
                          Email
                        </p>
                        <a
                          href="mailto:emailanda@example.com"
                          className="text-yellow-400 hover:text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 font-medium"
                        >
                          febrinurhidayat35364@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400"
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
                        <p className="text-base text-gray-700 dark:text-gray-300">
                          Lokasi
                        </p>
                        <p className="text-yellow-300 dark:text-yellow-200 font-medium">
                          Jawa Tengah, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Temukan Saya Di
                  </h4>
                  <div className="flex space-x-5">
                    {socialIcons.map((icon) => {
                      const IconComponent = icon.icon;
                      return (
                        <a
                          key={icon.name}
                          href={icon.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <IconComponent className="h-6 w-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
                  <div className="h-64 overflow-hidden rounded-xl shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.7638257865465!2d109.08841247476393!3d-7.600661892414239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656f825e1d5c83%3A0xf947498cbd4d8cf7!2sFebri%20nur%20hidayat!5e0!3m2!1sid!2sid!4v1748778943447!5m2!1sid!2sid"
                      width="600"
                      height="450"
                      style={{ border: 0}}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Contact;
