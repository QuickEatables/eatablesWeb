'use client'
import '@styles/globals.css';
import Image from 'next/image';
import Nav from '@components/Nav';
import styles from './page.module.css';
import styles2 from '../page.module.css';
import Footer from '@components/Footer'
import Link from 'next/link';
import useScrollReveal from '@components/useScrollReveal';
import EmblaCarousel from '@components/EmblaCarousel'
import {useState, useEffect} from 'react';

export const Home = () => {

  useScrollReveal([
    `.${styles2.sectionOneImage}`,
    `.${styles.sell_deliver}`,
    `.${styles.sell_deliver2}`,
    `.${styles2.gwp_right}`, 
    `.${styles2.gwp_left}`,  
  ]);

  const [slides, setSlides] = useState([
    { image1:  "/assets/images/rphone1.svg", image2: "/assets/images/rphone1_msg.svg" },
    { image1:  "/assets/images/rphone2.svg", image2: "/assets/images/rphone2_msg.svg" },
    { image1:  "/assets/images/rphone3.svg", image2: "/assets/images/rphone3_msg.svg" },  
  ]);

  useEffect(()=>{
    const updateSlidesForScreen = () => {
    if(typeof window !== "undefined" && window.matchMedia("(max-width: 830px)").matches){
      setSlides([
        { image1:  "/assets/images/rphone1.svg", image2: "/assets/images/rphone1_msg.svg" },
        { image1:  "/assets/images/rphone2.svg", image2: "/assets/images/rphone2_msg.svg" },
        { image1:  "/assets/images/rphone3.svg", image2: "/assets/images/rphone3_msg.svg" }, 
      ]);
    } else {
      setSlides([
        { image1:  "/assets/images/rphone1.svg", image2: "/assets/images/rphone1_msg.svg" },
        { image1:  "/assets/images/rphone2.svg", image2: "/assets/images/rphone2_msg.svg" },
        { image1:  "/assets/images/rphone3.svg", image2: "/assets/images/rphone3_msg.svg" }, 
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

  <div className={styles.doodle}>
      <Nav />

      

      <section className={styles2.sectionOne}>

       
      <div className={styles2.sectionOneLeftItem}>
     <h1 className={styles.headOrder}
     
     >Deliver and earn </h1>
      <p className={styles.headBody}
     
      >Become a rider with Eatables and start earning today! .</p>

      <div className={styles2.downloadLinkContainer}>

<Link className={styles2.downloadLink}
href="https://play.google.com/store/apps/details?id=com.eatables.rider"
><Image src="assets/images/playstore.svg"
width={15}
height={15}
alt="playstore icon"/> Download on Playstore</Link>
<Link
href="https://apps.apple.com/us/app/eatables-rider/id6502586842"
className={styles2.downloadLink}
> <Image src="assets/images/apple.svg"
width={15}
height={15}
alt="apple icon"
/>Download on App Store</Link>
</div>
      </div>

      <div className={styles2.gwp_container}>

        <picture style={{}}>
            <source 
            media="(max-width: 830px)" 
            srcSet="/assets/images/bikeman-mobile.png"
          />
          <Image 
            className={styles2.sectionOneImage}
            src="/assets/images/rider_main.png"
            width={750}
            height={500}
            alt="girl with phone"

            
          />
        </picture>

        <Image 
        className={styles2.gwp_right}
        src="/assets/images/vopen_right.svg"
        width={200}
        height={200}
        alt="gwp_right"
        />
        <Image 
        className={styles2.gwp_left}
        src="/assets/images/vopen_left.svg"
        width={200}
        height={200}
        alt="gwp_left"
        />
    </div>

      </section>

      <section className={styles.vsectionTwo}>

      <div className={styles.carouselContainer}>
          <EmblaCarousel slides={slides} />
          </div>
        
      </section>
      </div>

      <section className={styles.sectionThree}>
        <h2 className={styles2.h_3} style={{color: 'white', marginTop: '20vw'}}>
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
                height={350}
                className={styles.sell_deliver}
                alt="sell_deliver"
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
            height={350}
            className={styles.sell_deliver2}
            alt="deliver_withus"
            
            />
         </picture>
         
        </div>
        <br />
        <br />
        <h2
        className={styles2.h_3}
        style={{color: 'white'}}
        > Bringing convenience to you</h2>
        <p className={styles2.stp} > We have partnered with stores around you.</p>


        {/* <div className={styles.partnersContainer}>
          <p className={styles.partners}> GGM Farms </p>
          <p className={styles.partners}> LeoMart </p><p className={styles.partners}> Chop Beta with Johnny & Neighbours </p><p className={styles.partners}> Ido's Kitchen </p><p className={styles.partners}> Obatext Shawarma </p><p className={styles.partners}> Foodby_BB </p><p className={styles.partners}> Shugas Confectionery </p><p className={styles.partners}> Pryme Chaw </p><p className={styles.partners}> AZSeasos Restaurants </p><p className={styles.partners}> Choicey Treats </p>
          <p className={styles.partners}> Zinny's Taste </p><p className={styles.partners}> 247 Shawarma </p><p className={styles.partners}> BrishFoods </p><p className={styles.partners}> Yummy Bite Shawarma </p><p className={styles.partners}> JC's Bistro</p><p className={styles.partners}> Duke's Kitchen </p><p className={styles.partners}> Chimama's Kitchen </p><p className={styles.partners}> DD's Fast Food </p><p className={styles.partners}> Sips and Snacks </p><p className={styles.partners}> Exito</p><p className={styles.partners}> Fortune's Meshai Republic</p><p className={styles.partners}> Platter Grillz </p><p className={styles.partners}> Chop Chaw</p>
          <p className={styles.partners}> Hangover Wine Store</p> 
          <p className={styles.partners}> Chat n Chew</p> 
        </div> */}

<div  className={styles2.partners_imgContainer}>
        <picture>

        <source 
          media="(max-width: 830px)" 
          srcSet="/assets/images/partners-mobile.svg"
        />

      <Image
        className={styles2.partners_img}
        src="/assets/images/partners.svg"
        alt="partners"
        width={100}
        height={200}
      />

        </picture>
      
    </div>
          

      </section>

      <section className={
        styles.sectionFour
      }>
          <div className={styles.empty}>

                <h2
              className={styles2.h_3}
              style={{color: 'black', textAlign: 'center', width:'100%'}}
              > Eatables dey for you</h2>
              <p className={styles2.stp} style={{color: 'black'}}> Stop worrying. Just place your order in seconds</p>

              <div className={styles.vdownloadLinkContainer}>

              <Link className={styles2.downloadLink}
              href="https://play.google.com/store/apps/details?id=com.eatables.rider"
              ><Image src="assets/images/playstore.svg"
              width={15}
              height={15}
              alt="playstore icon"/> Download on Playstore</Link>
              <Link
              href="https://apps.apple.com/us/app/eatables-rider/id6502586842"
              className={styles2.downloadLink}
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