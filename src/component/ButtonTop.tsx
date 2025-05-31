import { useEffect, useState } from 'react';
import { LuArrowBigUpDash } from 'react-icons/lu';

const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-yellow-600 text-white shadow-md hover:bg-green-700 transition duration-300"
        aria-label="Kembali ke atas"
      >
        <LuArrowBigUpDash />
      </button>
    )
  );
};

export default ButtonTop;
