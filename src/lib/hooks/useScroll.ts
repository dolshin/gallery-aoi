import { useCallback, useEffect, useState } from "react";
import { useThrottleFunc } from "./useThrottleFunc";

export const useScroll = () => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = useThrottleFunc(() => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition >= 400) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return { isActive, scrollTop };
};
