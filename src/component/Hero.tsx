
const Hero = () => {
  return (
    <div id="about"
        className="container h-screen mx-auto flex flex-col-reverse md:flex-row items-center gap-5 justify-center">
        <div className="md:p-12 ">
            <p className="text-lg font-medium text-white">Hello World, I'm</p>
            <p className="animate-text text-2xl md:text-3xl font-extrabold text-white">Febri Nur Hidayat👋🏼</p>
            <p id="typing" className="animate-text typing text-base md:text-lg"></p>
        </div>

        <div className="animate-image md:ml-10 mt-6 md:mt-0">
            <img src="/assets/febri.jpg" alt="saya"
                className="rounded-full border-4 border-amber-200 object-cover md:w-60 md:h-60 lg:w-72 lg:h-72" />
        </div>
    </div>
  )
}

export default Hero
