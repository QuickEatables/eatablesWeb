'use client'
import '@styles/globals.css';
import Image from 'next/image';
import Nav from '@components/Nav';
import styles from './page.module.css';
import Footer from '@components/Footer'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Home = () => {

  const pathname = usePathname();

  


  return (
    <div className={styles.main}>
      <div className={styles.green}>

      </div>

      <Nav />

      

      <h1 className={styles.trans_h1}>
        Cookie Policy
      </h1>

      <div className={styles.cookie_wrapper}>

            <section className={styles.cookie_nav}>
              <p>ON THIS PAGE</p>
              <div className={styles.cookieNav_wrapper}>


              <Link className={styles.link}
              href="/terms-of-service"
              > Terms of Service</Link>
              <Link className={styles.link}
              href="/privacy"
              >Privacy Policy</Link>
              <Link className={`${styles.link} ${
                    pathname === '/cookies' ? styles.active : ''
                  }`}
              href="/cookies"
              > Cookie Policy</Link>


              </div>

            </section>
            
            <section className={styles.cookie_main}>
              <h1>
                Cookie Policies
              </h1>
              <p>
              Our website uses cookies to distinguish you from other users of our website, web apps, mobile application (‘Platform’). This helps us to provide you with a valuable experience when you browse our Platform and allows us to improve our Platform.
              
              <br/>
              <br/>
              A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive. We use cookies and similar technologies for purposes such as:
              </p>

              <ul>
                <li>
                  Authenticating users.
                </li>
                <li>Remembering user preferences nd settings.</li>
                <li>Determining the popularity of a vendor</li>
                <li>Delivering and measuring the effectiveness of advertising campaigns.</li>
                <li> Analyzing site traffic and trends, and generally understanding the online behaviours and interests of peopole who interact with our services. We may also allow others to proivde audience measurement and analytics services for us, to serve advertisements on our behalf across the internet, and to entitities may use cookies, web eacons, SDKs, and other technologies to identify your device when you visit our Platform and use our services, as well as when you visit other online sites and services.</li>
              </ul>
              <p>we Use the following cookies</p>

              <ol>
                <li><strong>Strictly necessary cookies:</strong> These are cookies that are required for the operation of our Platform. These essential cookies are always enabled because our Platform would not work properly without them. They include, for example, cookies that enable you to log into secure areas of our Platforms. You can switch off these cookies in your settings, but you may then not be able to access all or parts of our Platform.
                </li>
                <li>
                  <strong>Analytical or perormance cookies:</strong> These allow us to recognise and count the number of visitors and to see how visitors move around our Platform when they are using it. This helps us to improve the way our Platforms works, for example, by ensuring that users are finding what they are looking for easily.
                </li>
                <li>
                  <strong>Functionality cookies:</strong> These are used to recognise you when you return to our Platforms. This enables us to personalise our content for you, greet you by name and remember your preferences, for example, your choice of language or region.
                </li>
                <li>
                  <strong>Targeting cookies:</strong> These cookies record your visit to our Platform, the pages you have visited and the links you have followed. We will use this information to make our Platform more relevant to your interests. We may also share this information with third parties for this purpose so that they can serve you with relevant advertising on their websites.

                </li>
              </ol>

              <p><strong>We do not share the information collecte by the cookies with any third parties.</strong></p>

              <p>
              You can choose which analytical, functionality and targeting cookies we can set by clicking on the button(s). You can also choose to "Reject All" cookies via your settings. However, if you use your settings to block all cookies (including essential cookies) you may not be able to access all or parts of our Platform. If you have any questions or concerns about our use of cookies, please send us an email at support@quickeatables.com
              </p>
            </section>

      </div>

          <section className={ styles.sectionFour }>
                
                <div className={styles.empty}>

                    <h2
                    className={styles.h_4}
                    > Eatables dey for you</h2>
                    <p className={styles.stp} style={{color: 'black'}}> Stop worrying. Just place your order in seconds</p>

                    <div className={styles.vdownloadLinkContainer}>

                      <Link className={styles.downloadLink}
                      href="https://play.google.com/store/apps/details?id=com.eatables.app"
                      ><Image src="assets/images/playstore.svg"
                      width={15}
                      height={15}
                      alt="playstore icon"/> Download on Playstore</Link>
                      <Link
                      href="https://apps.apple.com/us/app/eatables/id6502586489"
                      className={styles.downloadLink}
                      > <Image src="assets/images/apple.svg"
                      width={15}
                      height={15}
                      alt="apple icon"
                      />Download on App Store</Link>
                    </div>

                </div>

        </section>

     

      <div className={styles.footerWrapper}>
      <Footer />
      </div>
      

    </div>
  )
}

export default Home;