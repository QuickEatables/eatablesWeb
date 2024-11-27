'use client'
import '@styles/globals.css';
import Image from 'next/image';
import Nav from '@components/Nav';
import styles from './page.module.css';
import Footer from '@components/Footer'
import Link from 'next/link';
import useScrollReveal from '@components/useScrollReveal';
import EmblaCarousel from '@components/EmblaCarousel'
import {useState, useEffect} from 'react';

export const Home = () => {

  useScrollReveal([
    `.${styles.sectionOneImage}`,
    `.${styles.sell_deliver}`,
    `.${styles.sell_deliver2}`,   
  ]);

  const [slides, setSlides] = useState([
    "/assets/images/rcarousel_1.svg",
    "/assets/images/rcarousel_2.svg",
    "/assets/images/rcarousel_3.svg", 
  ]);

  useEffect(()=>{
    const updateSlidesForScreen = () => {
    if(typeof window !== "undefined" && window.matchMedia("(max-width: 830px)").matches){
      setSlides([
        "/assets/images/rcarousel_1-mobile.svg",
        "/assets/images/rcarousel_2-mobile.svg",
        "/assets/images/rcarousel_3-mobile.svg", 
      ]);
    } else {
      setSlides([
        "/assets/images/rcarousel_1.svg",
        "/assets/images/rcarousel_2.svg",
        "/assets/images/rcarousel_3.svg", 
      ]);
    }

    };

    updateSlidesForScreen();

    if(typeof window !== "undefined"){

      window.addEventListener('resize', updateSlidesForScreen);
    }

    return () => {

      if(typeof window !== "undefined"){

        window.removeEventListener('resize', updateSlidesForScreen);

      }
    }
  

  }, []);


  return (
    <div className={styles.main}>
      <Nav />
      <section className={styles.sectionOne}>
      <div className={styles.sectionOneLeftItem}>
     <h1 className={styles.headOrder}>Deliver and Earn</h1>
      <p className={styles.headBody}>Become a rider with Eatables and start earning today!</p>

      <div className={styles.downloadLinkContainer}>

<Link className={styles.downloadLink}
href="#"
><Image src="assets/images/playstore.svg"
width={15}
height={15}
alt="playstore icon"/> Download on Playstore</Link>
<Link
href="#"
className={styles.downloadLink}
> <Image src="assets/images/apple.svg"
width={15}
height={15}
alt="apple icon"
/>Download on App Store</Link>
</div>
      </div>


      <picture style={{}}>
          <source 
          media="(max-width: 1300px)" 
          srcSet="/assets/images/bikeman-mobile.png"
        />
        <Image 
          className={styles.sectionOneImage}
          src="/assets/images/bikeman.png"
          width={600}
          height={400}
          alt="bikeman"
          // sizes="(max-width: 768px) 100vw,
          //  (max-width: 1200px) 50vw,
          //  33vw"

          priority // Ensures this image loads faster
  
        />
    </picture>

      </section>

      <section className={styles.vsectionTwo}>

      <div className={styles.carouselContainer}>
          <EmblaCarousel slides={slides} />
          </div>
        
      </section>

      <section className={styles.sectionThree}>
        <h2 className={styles.h_2}>
          Join Eatables and expand your reach
        </h2>
        <div className={styles.sell_deliverContainer}>
          <picture>
            <source
            media="(max-width: 1300px)"
            srcSet="/assets/images/vorder-mobile.png"
            />

                <Image
                src="/assets/images/vorder_fromus.png"
                width={500}
                height={400}
                className={styles.sell_deliver}
                alt="vorder_fromus"
            />

          </picture>
         <picture>
          <source
          media="(max-width: 1300px)"
          srcSet="/assets/images/vdeliver_withus-mobile.png"
          />

            <Image
            
            src="/assets/images/vdeliver_withus.png"
            width={500}
            height={400}
            className={styles.sell_deliver2}
            alt="deliver_withus"
            
            />
         </picture>
         
        </div>
        <br />
        <br />
        <h2
        className={styles.h_3}
        style={{color: 'white'}}
        > Bringing convenience to you</h2>
        <p className={styles.stp} > We have partnered with stores around you.</p>


        <div className={styles.partnersContainer}>
          <p className={styles.partners}> GGM Farms </p>
          <p className={styles.partners}> LeoMart </p><p className={styles.partners}> Chop Beta with Johnny & Neighbours </p><p className={styles.partners}> Ido's Kitchen </p><p className={styles.partners}> Obatext Shawarma </p><p className={styles.partners}> Foodby_BB </p><p className={styles.partners}> Shugas Confectionery </p><p className={styles.partners}> Pryme Chaw </p><p className={styles.partners}> AZSeasos Restaurants </p><p className={styles.partners}> Choicey Treats </p>
          <p className={styles.partners}> Zinny's Taste </p><p className={styles.partners}> 247 Shawarma </p><p className={styles.partners}> BrishFoods </p><p className={styles.partners}> Yummy Bite Shawarma </p><p className={styles.partners}> JC's Bistro</p><p className={styles.partners}> Duke's Kitchen </p><p className={styles.partners}> Chimama's Kitchen </p><p className={styles.partners}> DD's Fast Food </p><p className={styles.partners}> Sips and Snacks </p><p className={styles.partners}> Exito</p><p className={styles.partners}> Fortune's Meshai Republic</p><p className={styles.partners}> Platter Grillz </p><p className={styles.partners}> Chop Chaw</p>
          <p className={styles.partners}> Hangover Wine Store</p> 
          <p className={styles.partners}> Chat n Chew</p> 
        </div>

          

      </section>

      <section className={
        styles.sectionFour
      }>
          <div className={styles.empty}>

                <h2
              className={styles.h_4}
              > Eatables dey for you</h2>
              <p className={styles.stp} style={{color: 'black'}}> Stop worrying. Just place your order in seconds</p>

              <div className={styles.vdownloadLinkContainer}>

              <Link className={styles.downloadLink}
              href="#"
              ><Image src="assets/images/playstore.svg"
              width={15}
              height={15}
              alt="playstore icon"/> Download on Playstore</Link>
              <Link
              href="#"
              className={styles.downloadLink}
              > <Image src="assets/images/apple.svg"
              width={15}
              height={15}
              alt="apple icon"
              />Download on App Store</Link>
              </div>

          </div>

      </section>

      <Footer  isVendorPage={true}/>
      

    </div>
  )
}

export default Home;