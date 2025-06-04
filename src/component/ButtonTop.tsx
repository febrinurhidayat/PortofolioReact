// ButtonTop.tsx
import { useEffect, useState } from 'react';
import { BsAirplaneEnginesFill } from 'react-icons/bs';

const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsFlying(true);

    setTimeout(() => {
      setIsFlying(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 500); // waktu animasi
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-cyan-400 text-black shadow-md hover:bg-yellow-400 transition duration-300 ${
          isFlying ? 'fly' : ''
        }`}
        aria-label="Kembali ke atas"
      >
        <BsAirplaneEnginesFill size={24} />
      </button>
    )
  );
};

export default ButtonTop;
