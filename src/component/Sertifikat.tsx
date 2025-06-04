import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'; // Impor motion

const Sertifikat = () => {
  const sertifikat = [
    { id: 1, title: "RHCSA", description: "", imgSrc: "/assets/redhat.png", diperoleh: "29 Agustus 2024", berakhir: "#" },
    { id: 2, title: "Html", description: "", imgSrc: "/assets/html.png", diperoleh: "27 Desember 2024", berakhir: "#" },
    { id: 3, title: "Mysql", description: "", imgSrc: "/assets/mysql.png", diperoleh: "27 Desember 2024", berakhir: "#" },
    { id: 4, title: "Laravel", description: "", imgSrc: "/assets/laravel.png", diperoleh: "27 Desember 2024", berakhir: "#" },
    { id: 5, title: "CSS", description: "", imgSrc: "/assets/css.png", diperoleh: "27 Desember 2024", berakhir: "#" },
    { id: 6, title: "Microsoft", description: "", imgSrc: "/assets/microsoft.png", diperoleh: "14 September 2024", berakhir: "#" },
    { id: 7, title: "MSIB Batch 7", description: "", imgSrc: "/assets/msib.jpg", diperoleh: "31 Desember 2024", berakhir: "#" },
  ];


  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, 
        ease: "easeOut",
        when: "beforeChildren", 
        staggerChildren: 0.15,  
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "circOut" },
    },
  };

  const swiperContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        duration: 0.3,
      },
    },
  };


  return (
    <motion.section
      id="sertifikat"
      className="px-5 py-10 md:px-12 md:py-16 text-left min-h-screen"
      style={{ backgroundColor: "#004430" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }} 
    >
      <div className="text-white mx-auto max-w-screen-lg">
        <motion.header className="mb-10" variants={headerVariants}>
          <div className="text-2xl md:text-3xl font-bold flex items-center">
            <motion.div 
              className="h-[1px] w-10 bg-cyan-400 md:w-20"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1, transition: { duration: 0.6, delay: 0.2, ease: "circOut" } }}
            ></motion.div>
            &nbsp; Sertifikat & Pencapaian
          </div>
        </motion.header>

        {sertifikat && sertifikat.length > 0 && ( 
          <motion.div variants={swiperContainerVariants}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={sertifikat.length > 1} 
              pagination={{ clickable: true, dynamicBullets: true }} 
              navigation={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: sertifikat.length >= 2 ? 2 : 1, 
                  loop: sertifikat.length > 2,
                },
                1024: {
                  slidesPerView: sertifikat.length >= 3 ? 3 : (sertifikat.length === 2 ? 2 : 1), 
                  spaceBetween: 24,
                  loop: sertifikat.length > 3,
                },
              }}
              className="pb-12 pt-2 md:pb-16" 
            >
              {sertifikat.map((item, index) => ( 
                <SwiperSlide key={item.id} className="h-auto self-stretch">
                  <motion.div
                    className="bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl shadow-xl h-full flex flex-col mt-2 sm:mt-0" 
                    variants={cardVariants}
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }} 

                  >
                    <motion.div 
                      className="w-full h-48 sm:h-56 mb-4 rounded-lg overflow-hidden shadow-md"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10}}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-full h-full object-contain sm:object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">{item.title}</h3> 
                        <p className="text-xs sm:text-sm text-yellow-300 mt-1 sm:mt-0">{item.diperoleh}</p>
                      </div>
                      <p className="text-gray-300 text-sm mt-2"> 
                        {item.description || "Tidak Ada Deskripsi Untuk Sertifikat Ini"}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Sertifikat;