import { useEffect, useState } from 'react'
import FotoHero from '/assets/febri.jpg'
import { BiChevronDown } from 'react-icons/bi'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const fullText = 'Selamat Datang di Portofolio Saya'
  const typingSpeed = isDeleting ? 50 : 80


  useEffect(() => {
    const handleTyping = () => {
      const current = fullText.substring(0, typedText.length + (isDeleting ? -1 : 1))
      setTypedText(current)

      if (!isDeleting && current === fullText) {
        setTimeout(() => setIsDeleting(true), 1000) 
      } else if (isDeleting && current === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting])

  return (
    <div
      id="about"
      className="container h-[78vh] mx-auto flex flex-col-reverse md:flex-row items-center gap-5 justify-center"
    >
      {/* Text */}
      <div className="md:p-12 text-center md:text-left">
        <p className="text-lg font-medium text-white border-b-2 w-34 border-yellow-200">Hello World, I'm</p>
        <p className="animate-text text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
          Febri Nur Hidayat
          <span className="inline-block animate-wave origin-bottom">👋🏼</span>
        </p>
        <p
          id="typing"
            className="animate-text text-base md:text-lg text-cyan-200 mt-2 font-mono min-h-[2rem] w-[320px] md:w-[400px]"
        >
          {typedText}
          <span>|</span>
        </p>
      </div>

      {/* Foto */}
      <div className="animate-image md:ml-10 mt-6 md:mt-0">
        <img
          src={FotoHero}
          alt="febri"
          className="rounded-full border-4 border-cyan-400 object-cover md:w-60 md:h-60 lg:w-72 lg:h-72"
        />  
      </div>
      <div className="absolute right-0 bottom-0 left-0 overflow-hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="h-auto w-full origin-bottom transform transition-transform"
        >
            <path
                fill="#222831"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    </div>
    <div className="absolute bottom-17 left-1/2 z-20 -translate-x-1/2 transform animate-pulse">
        <div className="flex flex-col items-center">
            <span className="mb-2 text-sm text-white">Scroll</span>
            <BiChevronDown className="text-white" size={24} />
        </div>
    </div>
  </div>
  )
}

export default Hero;
