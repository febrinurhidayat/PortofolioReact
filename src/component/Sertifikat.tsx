import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Sertifikat = () => {
  const sertifikat = [
    {
      id: 1,
      title: "RHCSA",
      description: "",
      imgSrc: "/assets/redhat.png",
      diperoleh: "29 Agustus 2024",
      berakhir: "#",
    },
    {
      id: 2,
      title: "Html",
      description: "",
      imgSrc: "/assets/html.png",
      diperoleh: "27 Desember 2024",
      berakhir: "#",
    },
    {
      id: 3,
      title: "Mysql",
      description: "",
      imgSrc: "/assets/mysql.png",
      diperoleh: "27 Desember 2024",
      berakhir: "#",
    },
    {
      id: 4,
      title: "Laravel",
      description: "",
      imgSrc: "/assets/laravel.png",
      diperoleh: "27 Desember 2024",
      berakhir: "#",
    },
    {
      id: 5,
      title: "CSS",
      description: "",
      imgSrc: "/assets/css.png",
      diperoleh: "27 Desember 2024",
      berakhir: "#",
    },
    {
      id: 6,
      title: "Microsoft",
      description: "",
      imgSrc: "/assets/microsoft.png",
      diperoleh: "14 September 2024",
      berakhir: "#",
    },
    {
      id: 7,
      title: "MSIB Batch 7",
      description: "",
      imgSrc: "/assets/msib.jpg",
      diperoleh: "31 Desember 2024",
      berakhir: "#",
    },
  ];

  return (
    <section
      id="sertifikat"
      className="px-5 py-10 md:px-12 md:py-16 text-left min-h-screen"
      style={{ backgroundColor: "#004430" }}
    >
      <div className="text-white mx-auto max-w-screen-lg">
        <header className="mb-10">
          <div className="text-2xl md:text-3xl font-bold flex items-center">
            <div className="h-[1px] w-10 bg-cyan-400 md:w-20"></div>
            &nbsp; Sertifikat & Pencapaian
          </div>
        </header>

        {sertifikat && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={sertifikat.length > 1}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: sertifikat.length > 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
                loop: sertifikat.length > 3,
              },
            }}
            className="pb-100"
          >
            {sertifikat.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-gray-800 p-5 rounded-lg shadow-lg h-full flex flex-col mt-10">
                  <div className="w-full h-48 sm:h-56 mb-4 rounded overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-full object-contain sm:object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-yellow-400 mt-1 sm:mt-0">{item.diperoleh}</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      {item.description || "Deskripsi sertifikat akan ditambahkan."}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Sertifikat;
