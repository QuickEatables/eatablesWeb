"use client"
import "@styles/globals.css"
import Image from "next/image"
import Nav from "@components/Nav"
import styles from "./page.module.css"
import Footer from "@components/Footer"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Home = () => {
  const pathname = usePathname()

  return (
    <div className={styles.main}>
      <div className={styles.green}></div>

      <Nav />

      <h1 className={styles.trans_h1}>Delete Account</h1>

      <div className={styles.cookie_wrapper}>
        <section className={styles.cookie_nav}>
          <p>ON THIS PAGE</p>
          <div className={styles.cookieNav_wrapper}>
            <Link
              className={`${styles.link} ${
                pathname === "/delete-account" ? styles.active : ""
              }`}
              href="/delete-account">
              {" "}
              Delete Account
            </Link>
 <Link className={styles.link} href="/vendor-agreement">
              Vendor Agreement
            </Link>
            <Link className={styles.link} href="/contractor-agreement">
              Contractor Agreement
            </Link>
            <Link className={styles.link} href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className={styles.link} href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className={styles.link} href="/cookies">
              {" "}
              Cookie Policy
            </Link>
          </div>
        </section>

        <section className={styles.cookie_main}>
          <p>To delete your account and all saved details on Eatables, Eatables Rider or Eatables vendor managed by QuickEatables Delivery Limited ("we", "our", "us"), check below.</p>

          <h2>Collecting and Using your Personal Data</h2>
          <h3>Types of Data Collected</h3>
          
          <h4>Personal Data</h4>
          <p>While using Our Service, We may ask you to provide Us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
          
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
          </ul>

          <h4>Addresses</h4>
          <p>Your addresses are collected and saved to allow us deliver your orders to your precise location.</p>
          <p>To permanently delete your addresses on the Eatables app:</p>

          <ul>
            <li>Click Account on the navbar</li>
            <li>Click Addresses</li>
            <li>Click the delete icon on each of your addresses you want to delete</li>
          </ul>

          <p>To delete your full account including all personal data, Go to the Accounts page from the navbar of your app and click "Delete Account".</p>
        </section>
      </div>

      <section className={styles.sectionFour}>
        <div className={styles.empty}>
          <h2 className={styles.h_4}>Eatables dey for you</h2>
          <p className={styles.stp} style={{color: "black"}}>Stop worrying. Just place your order in seconds</p>

          <div className={styles.vdownloadLinkContainer}>
            <Link 
              className={styles.downloadLink}
              href="https://play.google.com/store/apps/details?id=com.eatables.app"
            >
              <Image 
                src="assets/images/playstore.svg"
                width={15}
                height={15}
                alt="playstore icon"
              /> 
              Download on Playstore
            </Link>
            <Link
              className={styles.downloadLink}
              href="https://apps.apple.com/us/app/eatables/id6502586489"
            >
              <Image 
                src="assets/images/apple.svg"
                width={15}
                height={15}
                alt="apple icon"
              />
              Download on App Store
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  )
}

export default Home