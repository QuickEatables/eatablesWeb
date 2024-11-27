// import React, { useCallback, useEffect, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import styles from './embla.module.css'

// const EmblaCarousel = ({ slides }) => {
//   const autoplayOptions = { delay: 3000 }; // 3-second autoplay delay
//   const autoplay = Autoplay(autoplayOptions);

//   // Initialize Embla Carousel with the autoplay plugin
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

//   // Pause autoplay on hover
//   const carouselRef = useRef(null);
//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.addEventListener("mouseenter", () => autoplay.stop());
//       carouselRef.current.addEventListener("mouseleave", () => autoplay.play());
//     }
//     return () => {
//       if (carouselRef.current) {
//         carouselRef.current.removeEventListener("mouseenter", () => autoplay.stop());
//         carouselRef.current.removeEventListener("mouseleave", () => autoplay.play());
//       }
//     };
//   }, [autoplay]);

//   return (
//     <div className={styles.embla} ref={carouselRef}>
//       <div className={styles.embla__viewport} ref={emblaRef}>
//         <div className={styles.embla__container}>
//           {slides.map((slide, index) => (
//             <div className={styles.embla__slide} key={index}>
//               <img src={slide} alt={`Slide ${index + 1}`} className={styles.embla__slide__img} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Example navigation buttons (optional) */}
//       {/* <button onClick={() => emblaApi && emblaApi.scrollPrev()}>Prev</button>
//       <button onClick={() => emblaApi && emblaApi.scrollNext()}>Next</button> */}
//     </div>
//   );
// };

// export default EmblaCarousel;


import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from './embla.module.css';

const EmblaCarousel = ({ slides }) => {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false }; // Resumes autoplay after interaction
  const autoplay = Autoplay(autoplayOptions);

  // Initialize Embla Carousel with the autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerUp = () => {
      autoplay.play(); // Resume autoplay after user interaction ends
    };

    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, autoplay]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} className={styles.embla__slide__img
              } />
            </div>
          ))}
        </div>
      </div>

      {/* Example navigation buttons (optional) */}
      {/* <button onClick={() => emblaApi && emblaApi.scrollPrev()}>Prev</button>
      <button onClick={() => emblaApi && emblaApi.scrollNext()}>Next</button> */}
    </div>
  );
};

export default EmblaCarousel;
