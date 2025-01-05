// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import {useState, useEffect} from 'react';
// import styles from './nav.module.css';
// import { usePathname } from 'next/navigation';
// import { CiMenuFries   } from "react-icons/ci";
// const Nav = () => {

//   const pathname = usePathname();
//   const [isNavDisplayVisible, setNavDisplayVisible] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(window.scrollY);

//   const navDisplay = () => {
//     setNavDisplayVisible(!isNavDisplayVisible);
   
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {

  
//     if(isNavDisplayVisible && scrollPosition > 48) {
//       navDisplay();
      
//     }
//     //  alert(scrollPosition);
   
//   }, [scrollPosition]);


//   return (
//     <>
//     <nav className={`${styles.nav} ${pathname === '/transparency' ? styles.greenBg : '' }`}>
  
//     <div >
//       <Image src="assets/images/logo.svg" alt="Eatables logo" width={100} height={100} 
      
//       className={`${pathname=== '/transparency' ? styles.trans_navImage : ''}`}
      
//       />
//     </div>


//     <div className={`${styles.navLink} ${pathname=='/transparency' ? styles.trans_navLink : ''}`}>
//           <Link
//             href="/"
//             className={`${styles.navItem} ${
//               pathname === '/' ? styles.active : ''
//             }`}
//           >
//             Customer
//           </Link>
//           <Link
//             href="/vendor"
//             className={`${styles.navItem} ${
//               pathname === '/vendor' ? styles.active : ''
//             }`}
//           >
//             Vendor
//           </Link>
//           <Link
//             href="/rider"
//             className={`${styles.navItem} ${
//               pathname === '/rider' ? styles.active : ''
//             }`}
//           >
//             Rider
//           </Link>
//         </div>
//     </nav>


//     <nav className= {`${styles.navmobile} ${
//               pathname === '/transparency' ? styles.trans_navmobile : ''
//             }`}>
//                     <Image
//                         src="/assets/images/logo-mobile.svg"
//                         width={40}
//                         height={40}
//                         className={styles.image}
//                         alt="logo-mobile"
//                         />
//                         <p onClick={navDisplay}
//                           className={styles.navButton}
//                         ><CiMenuFries  size="30px" /></p>
//                 </nav> 
                

//                 {
                
//                 isNavDisplayVisible && (

//                     <div className={styles.mobileFlex}>
//                     <div className={`${styles.navlist} ${isNavDisplayVisible ? styles.visible : ''}`}>
//                         <Link className={styles.a}  href="/"> Customer </Link>
//                         <Link className={styles.a}  href="/vendor" > Vendor </Link>
//                         <Link className={styles.a}  href="/rider">Rider </Link>
                       
//                     </div>
                        
    
//                 </div>
//                 )
                


//                 }
//     </>
//   )
// }

// export default Nav


'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './nav.module.css';
import { usePathname } from 'next/navigation';
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const pathname = usePathname();
  const [isNavDisplayVisible, setNavDisplayVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Initialize to 0 instead of window.scrollY

    const legalPages = ['/terms-of-service', '/privacy', '/cookies', '/contractor-agreement', '/vendor-agreement', '/delete-account'];

  const navDisplay = () => {
    setNavDisplayVisible(!isNavDisplayVisible);
  };

  useEffect(() => {
    // Ensure this runs in the browser
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (isNavDisplayVisible && scrollPosition > 48) {
      navDisplay();
    }
  }, [scrollPosition]);

  return (
    <>
      <nav className={`${styles.nav} ${legalPages.includes(pathname) ? styles.greenBg : ''}`}>
        <div>
<Link href="/">
          <Image
            src="assets/images/logo.svg"
            alt="Eatables logo"
            width={150}
            height={100}
            className={`${legalPages.includes(pathname) ? styles.trans_navImage : styles.navImage}`}
          /></Link>
        </div>

        <div className={`${styles.navLink} ${legalPages.includes(pathname) ? styles.trans_navLink : ''}`}>
          <Link
            href="/"
            className={`${styles.navItem} ${
              pathname === '/' ? styles.active : ''
            }`}
          >
            Customer
          </Link>
          <Link
            href="/vendor"
            className={`${styles.navItem} ${
              pathname === '/vendor' ? styles.active : ''
            }`}
          >
            Vendor
          </Link>
          <Link
            href="/rider"
            className={`${styles.navItem} ${
              pathname === '/rider' ? styles.active : ''
            }`}
          >
            Rider
          </Link>
        </div>
      </nav>

      <nav
        className={`${styles.navmobile} ${
          legalPages.includes(pathname) ? styles.trans_navmobile : ''
        }`}
      >
<Link href="/">
        <Image
          src="/assets/images/logo-mobile.svg"
          width={40}
          height={40}
          className={styles.image}
          alt="logo-mobile"
        /></Link>
        <p onClick={navDisplay} className={styles.navButton}>
          <CiMenuBurger size="30px" color='rgba(5, 68, 37, 1)'/>
        </p>
      </nav>

      {isNavDisplayVisible && (
        <div className={styles.mobileFlex}>
          <div
            className={`${styles.navlist} ${
              isNavDisplayVisible ? styles.visible : ''
            }`}
          >
            <Link className={styles.a} href="/">
              Customer
            </Link>
            <Link className={styles.a} href="/vendor">
              Vendor
            </Link>
            <Link className={styles.a} href="/rider">
              Rider
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
