import { useEffect } from 'react';

const useScrollReveal = (selectors) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(50px)';
          }
        });
      },
      { threshold: 0.2 } // Adjust this value for sensitivity
    );

    const elements = selectors.map((selector) => document.querySelector(selector));
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [selectors]);
};

export default useScrollReveal;
