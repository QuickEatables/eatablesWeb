'use client'
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import styles from './nav.module.css';
import { usePathname } from 'next/navigation';
import { CiMenuFries   } from "react-icons/ci";
const Nav = () => {

  const pathname = usePathname();
  const [isNavDisplayVisible, setNavDisplayVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const navDisplay = () => {
    setNavDisplayVisible(!isNavDisplayVisible);
   
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

  
    if(isNavDisplayVisible && scrollPosition > 48) {
      navDisplay();
      
    }
    //  alert(scrollPosition);
   
  }, [scrollPosition]);


  return (
    <>
    <nav className={`${styles.nav} ${pathname === '/transparency' ? styles.greenBg : '' }`}>
  
    <div >
      <Image src="assets/images/logo.svg" alt="Eatables logo" width={100} height={100} 
      
      className={`${pathname=== '/transparency' ? styles.trans_navImage : ''}`}
      
      />
    </div>


    <div className={`${styles.navLink} ${pathname=='/transparency' ? styles.trans_navLink : ''}`}>
          <Link
            href="/customer"
            className={`${styles.navItem} ${
              pathname === '/customer' ? styles.active : ''
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


    <nav className= {`${styles.navmobile} ${
              pathname === '/transparency' ? styles.trans_navmobile : ''
            }`}>
                    <Image
                        src="/assets/images/logo-mobile.svg"
                        width={40}
                        height={40}
                        className={styles.image}
                        alt="logo-mobile"
                        />
                        <p onClick={navDisplay}
                          className={styles.navButton}
                        ><CiMenuFries  size="30px" /></p>
                </nav> 
                

                {
                
                isNavDisplayVisible && (

                    <div className={styles.mobileFlex}>
                    <div className={`${styles.navlist} ${isNavDisplayVisible ? styles.visible : ''}`}>
                        <Link className={styles.a}  href="/customer"> Customer </Link>
                        <Link className={styles.a}  href="/vendor" > Vendor </Link>
                        <Link className={styles.a}  href="/rider">Rider </Link>
                       
                    </div>
                        
    
                </div>
                )
                


                }
    </>
  )
}

export default Nav