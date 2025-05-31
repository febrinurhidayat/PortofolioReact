import { useEffect, useState } from 'react'
import FotoHero from '/assets/febri.jpg'

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
      className="container h-screen mx-auto flex flex-col-reverse md:flex-row items-center gap-5 justify-center"
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
    </div>
  )
}

export default Hero
