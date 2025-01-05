import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({isVendorPage}) => {
  return (
    <section className={ styles.main
    }
    >
      
    <div className={styles.spts}>

        <div> 

          <h2> Social</h2>
            <Link href="https://www.instagram.com/eatablesapp_ng?" target="_blank" rel="noopener noreferrer">
              <div className={styles.socials}>
                <Image
                  src="/assets/images/instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                />
                <p>Instagram</p>
              </div>
            </Link>
            <Link href="https://www.tiktok.com/@eatablesng?_t=ZM-8snBzCf7ILF&_r=1" target="_blank" rel="noopener noreferrer">
              <div className={styles.socials}>
                <Image
                  src="/assets/images/tiktok.svg"
                  width={20}
                  height={20}
                  alt="tiktok"
                />
                <p>TikTok</p>
              </div>
            </Link>
            <Link href="https://x.com/eatablesng?s=21" target="_blank" rel="noopener noreferrer">
              <div className={styles.socials}>
                <Image
                  src="/assets/images/x.svg"
                  width={20}
                  height={20}
                  alt="x"
                />
                <p>X (Twitter)</p>
              </div>
            </Link>
            <Link href="https://www.facebook.com/share/1E6NKDwfHN/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <div className={styles.socials}>
                <Image
                  src="/assets/images/facebook.svg"
                  width={20}
                  height={20}
                  alt="facebook"
                />
                <p>Facebook</p>
              </div>
            </Link>

      </div>

      <div> 
          <h2>Products</h2>
          <Link href="/">
            <p>Customers</p>
          </Link>
          <Link href="/vendor">
            <p>Vendors</p>
          </Link>
          <Link href="/rider">
            <p>Riders</p>
          </Link>

      </div>

      <div> 
          <h2>Transparency</h2>
          <Link href="/terms-of-service">
              <p>Terms of Service</p>
          </Link>
          <Link href="/privacy-policy">
              <p>Privacy Policy</p>
          </Link>
          <Link href="/cookies">
              <p>Cookie Policy</p>
          </Link>
      </div>

      {/* <div> 
          <h2>Support</h2>
          <p>Help Center</p>
      </div> */}
   
   
   </div>
   <div className={styles.rightsReserved}>
            <p> 2024 <strong>Eatables</strong> | All Rights Reserved</p>
          </div>

        
    </section>
  )
}

export default Footer