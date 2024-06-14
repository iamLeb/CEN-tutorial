import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="z-10 fixed bottom-4 right-4 ">
        <FaArrowAltCircleUp size={26} color="#FFFFFF" />
      </button>
    )
  );
};

export default ScrollButton;
