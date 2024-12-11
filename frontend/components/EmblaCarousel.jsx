import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from './embla.module.css';

// const EmblaCarousel = ({ slides }) => {
//   const autoplayOptions = { delay: 3000, stopOnInteraction: false }; // Resumes autoplay after interaction
//   const autoplay = Autoplay(autoplayOptions);

//   // Initialize Embla Carousel with the autoplay plugin
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onPointerUp = () => {
//       autoplay.play(); // Resume autoplay after user interaction ends
//     };

//     emblaApi.on("pointerUp", onPointerUp);

//     return () => {
//       emblaApi.off("pointerUp", onPointerUp);
//     };
//   }, [emblaApi, autoplay]);

//   return (
//     <div className={styles.embla}>
//       <div className={styles.embla__viewport} ref={emblaRef}>
//         <div className={styles.embla__container}>
//           {slides.map((slide, index) => (
//             <div className={styles.embla__slide} key={index}>
//               <img src={slide} alt={`Slide ${index + 1}`} className={styles.embla__slide__img
//               } />
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

const EmblaCarousel = ({ slides }) => {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };
  const autoplay = Autoplay(autoplayOptions);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerUp = () => {
      autoplay.play();
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
              <div className={styles.embla__slide__content}>
                <img src={slide.image1} alt={`Slide ${index + 1} - Image 1`} className={styles.embla__slide__img} />
                <img src={slide.image2} alt={`Slide ${index + 1} - Image 2`} className={styles.embla__slide__img2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;