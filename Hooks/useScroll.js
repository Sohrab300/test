import { useEffect, useState } from "react";

const useScrollPosition = (abcd) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [abcd]);

  return scrollPosition;
};

export default useScrollPosition;
