import styles from './footer.module.css'
import Image from 'next/image'

const Footer = ({isVendorPage}) => {
  return (
    <section className={ styles.main
    }
    >
      
    <div className={styles.spts}>

        <div> 

          <h2> Social</h2>
            <div className={styles.socials}>
              <Image
                src="/assets/images/instagram.svg"
                width={20}
                height={20}
                alt="instagram"
              />
              <p>Instagram</p>
            </div>

            <div className={styles.socials}>
                <Image
                    src="/assets/images/whatsapp.svg"
                    width={20}
                    height={20}
                    alt="whatsapp"
                  />
                  <p>WhatsApp</p>
          </div>
      </div>

      <div> 
          <h2> Products</h2>
          <p>Customers</p>
          <p>Vendors</p>
          <p>Riders</p>

      </div>

      <div> 
          <h2>Transparency</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Vendor Agreeement</p>
          <p>Rider Agreeement</p>
          <p>Cookie Policy</p>
      </div>

      <div> 
          <h2> Support</h2>
          <p>Help Center</p>
      </div>
   
   
   </div>
   <div className={styles.rightsReserved}>
            <p> 2024 <strong>Eatables</strong> | All Rights Reserved</p>
          </div>

        
    </section>
  )
}

export default Footer