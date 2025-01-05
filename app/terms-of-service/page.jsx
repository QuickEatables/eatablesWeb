"use client";
import "@styles/globals.css";
import Image from "next/image";
import Nav from "@components/Nav";
import styles from "./page.module.css";
import Footer from "@components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Home = () => {
  const pathname = usePathname();

  return (
    <div className={styles.main}>
      <div className={styles.green}></div>

      <Nav />

      <h1 className={styles.trans_h1}>Terms of Service</h1>

      <div className={styles.cookie_wrapper}>
        <section className={styles.cookie_nav}>
          <p>ON THIS PAGE</p>
          <div className={styles.cookieNav_wrapper}>
            <Link
              className={`${styles.link} ${
                pathname === "/terms-of-service" ? styles.active : ""
              }`}
              href="/terms-of-service">
              {" "}
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
          <h1>
            Terms and Conditions Of Use - Quickeatables Delivery Limited
            ("Eatables")
          </h1>
          <p>
            <strong>Terms (Last Modified in June 2024)</strong>
          </p>
          <p>
            The following outlines the terms of use of the Eatables services –
            web applications, mobile applications, content, products, and
            website ("the Services"). Before using any of the Eatables Services,
            you are required to read, understand, and agree to these terms.
          </p>

          <h2>1. Contractual Relationship</h2>
          <p>
            These terms and conditions of use ("Terms") govern the access or use
            by you of the Services made available by Quickeatables Delivery
            Limited ("Eatables").
          </p>
          <p>
            PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE
            SERVICES.
          </p>
          <p>
            Your access and use of the Services constitute your agreement to be
            bound by these Terms, which establishes a contractual relationship
            between you and Eatables. If you do not agree to these Terms, you
            may not access or use the Services. These Terms expressly supersede
            prior agreements or arrangements with you. Eatables reserves the
            right to immediately terminate these Terms or any Services with
            respect to you, or generally cease offering or deny access to the
            Services or any portion thereof, at any time for any reason.
          </p>
          <p>
            Supplemental terms may apply to some of the Services, such as
            policies for a particular event, activity, or promotion, and such
            supplemental terms will be disclosed to you in connection with the
            applicable Services. Supplemental terms are in addition to and shall
            be deemed a part of the Terms for the purposes of the applicable
            Services.
          </p>
          <p>
            Eatables may amend the Terms related to the Services from time to
            time. Amendments will be effective upon posting of such updated
            Terms at this website or the amended policies or supplemental terms
            on the applicable Service. Your continued access or use of the
            Services after such posting constitutes your consent to be bound by
            the Terms, as amended.
          </p>

          <h2>2. The Services</h2>
          <h3>2.1. The Services</h3>
          <p>
            The Services constitute a technology platform that enables users of
            Eatables mobile applications, web applications, products, contents,
            or websites provided as part of the Services, to arrange and
            schedule food delivery services with vendors of such services,
            including independent third-party logistics providers ("rider")
            under agreement with Eatables. Unless otherwise agreed by Eatables
            in a separate written agreement with you, the Services are made
            available solely for your personal, non-commercial use.
          </p>
          <p>
            You acknowledge that Eatables does not provide transportation or
            logistics services or function as a transportation carrier and that
            all such transportation or logistics services are provided by
            independent third-party contractors who are not employed by
            Eatables. Eatables has no responsibility or liability for any order
            delivery services voluntarily provided to any user by any vendor or
            rider using the application. Eatables has no responsibility for the
            actions or conduct of riders, vendors or users. Eatables has no
            obligation to intervene in or be involved in any way in disputes
            that may arise between riders and vendors. You understand and accept
            that Eatables has no control over the identity or actions of the
            riders.
          </p>

          <h3>2.2. License Grant</h3>
          <p>
            a. Eatables grants you a revocable, non-exclusive, non-transferable,
            limited right to access, install and use the Application on your
            Device solely in connection with your use of the Services,
          </p>
          <p>
            b. access and use any content, information and related materials
            that may be made available through the Services, in each case solely
            for your personal, non-commercial use. Any rights not expressly
            granted herein are reserved by Eatables.
          </p>
          <p>
            The term "Application" shall refer to and consist of the following:
          </p>
          <ul>
            <li>
              the mobile and web software application including, without
              limitation, any software code, scripts, interfaces, graphics,
              displays, text, documentation and other components;
            </li>
            <li>
              any updates, modifications or enhancements to the items listed in
              subsection (i); and
            </li>
            <li>
              any specific website the Application directs you to via any
              browser located on a phone, personal computer or such other device
              ("Device") that is hosted by Eatables.
            </li>
          </ul>

          <h3>2.3. Restrictions on Use</h3>
          <p>
            You shall use the Services strictly in accordance with these Terms
            and shall not:
          </p>
          <ul>
            <li>
              decompile, reverse engineer, disassemble, attempt to derive the
              source code of, or decrypt the Application;
            </li>
            <li>
              make any modification, adaptation, improvement, enhancement,
              translation or derivative work from the Application;
            </li>
            <li>
              violate any applicable laws, rules or regulations in connection
              with your access or use of the Services;
            </li>
            <li>
              remove, alter or obscure any proprietary notice (including any
              notice of copyright or trademark) of Eatables or its affiliates,
              partners, suppliers or the licensors of the Services;
            </li>
            <li>
              use the Application or any part of the Services for any
              revenue-generating endeavour, commercial enterprise, or other
              purposes for which it is not designed or intended;
            </li>
            <li>
              use the Services for creating a product, service or software that
              is, directly or indirectly, competitive with or in any way a
              substitute for any services, product or software offered by
              Eatables; or
            </li>
            <li>
              use any proprietary information or interfaces of Eatables or other
              intellectual property of Eatables in the design, development,
              manufacture, licensing or distribution of any applications,
              accessories or devices for use with the Services.
            </li>
          </ul>

          <h3>2.4. Restriction on transfer</h3>
          <p>
            You may not rent, lease, lend, sublicense, or transfer the Services,
            the license or any of the rights granted hereunder. Any attempted
            transfer in contravention of these Terms shall be null and void and
            of no force or effect.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All copyrights, patents, trademarks, trade secrets, and other
            intellectual property rights associated with the Services are, and
            shall remain, the property of Eatables. Except as expressly stated
            in this Terms, you are not granted any intellectual property rights
            in or to the Services by any means whatsoever.
          </p>

          <h2>4. Vendors Services and Content</h2>
          <p>
            The Services may be made available or accessed in connection with
            the Vendor's product and content (including advertising) that
            Eatables does not control. You acknowledge that different terms of
            use and privacy policies may apply to your use of such third-party
            services and content. Eatables does not endorse such third-party
            services and content and in no event shall Eatables be responsible
            or liable for any products or services of such third-party
            providers.
          </p>
          <p>
            Eatables hereby disclaims any representation, warranty or guaranty
            regarding the third-party services and content whether express,
            implied or statutory, including, without limitation, the implied
            warranties of merchantability or fitness for a particular purpose,
            and any representation, warranty or guaranty regarding the
            availability, quality, reliability, completeness, or legality of the
            third-party products and services. Eatables reserves the right to
            restrict or deny access to any Vendor and services otherwise
            accessible through the Services, however, Eatables has no obligation
            to restrict or deny access even if requested by you.
          </p>
          <p>
            A "Vendor" is any user who sign up on Eatables for the purposes of
            providing food vendor services
          </p>

          <h2>5. Product Quality</h2>
          <p>
            In the instance where the product ordered from a Vendor through the
            use of the Services is not accurate, incomplete or has missing
            items, the following procedure shall be adopted to resolve such
            discrepancy.
          </p>
          <ul>
            <li>
              CONTACT CUSTOMER SUPPORT: Reach out to the customer support team
              on the Eatables mobile app immediately. They can assist you in
              addressing the problem and finding a solution.
            </li>
            <li>
              PROVIDE DETAILS: When contacting customer support, make sure to
              provide all relevant details such as your order ID, the items
              received and the discrepancies you've noticed. The more
              information you provide, the faster they can help you.
            </li>
            <li>
              DOCUMENT EVIDENCE: If possible, take pictures of the items you
              received showing the inaccuracies or missing items. This visual
              evidence can support your case when discussing the issue with
              customer support.
            </li>
            <li>
              REQUEST RESOLUTION: Clearly communicate what resolution you are
              seeking. Whether it is a refund, replacement of the missing items,
              or any other form of compensation, make sure to express your
              expectations.
            </li>
          </ul>
          <p>
            Notwithstanding the provisions of this paragraph, Eatables shall not
            be liable for whatever discrepancy that has occurred and such
            resolution steps as aforementioned shall be deemed sufficient and
            final.
          </p>

          <h2>6. Eatables' Marks</h2>
          <p>
            You are not authorized to use Eatables' trademarks in any
            advertising, publicity or any other commercial manner without the
            prior written consent of Eatables which may be withheld for any or
            no reason.
          </p>

          <h2>7. Infringement Acknowledgement (Vendors Only)</h2>
          <p>
            You acknowledge and agree that, in the event of a third-party claim
            that the Application or your possession or use of our Services as a
            Vendor infringes any third party's intellectual property rights, you
            will be responsible for the investigation, defense, settlement and
            discharge of any such claim of intellectual property infringement.
            You will, however, promptly notify Eatables in writing of such a
            claim.
          </p>

          <h2>8. Your Use of the Services</h2>
          <h3>8.1 User Accounts</h3>
          <p>
            To use some aspects of the Services, you may be required to register
            for and maintain an active personal user account ("Account").
            Account registration requires you to submit to Eatables certain
            personal information, such as your name, address, mobile phone
            number and age. You agree to maintain accurate, complete, and
            up-to-date information in your Account. Your failure to maintain
            accurate, complete, and up-to-date Account information, may result
            in your inability to access and use the Services or Eatables'
            termination of this Terms with you. You are responsible for all
            activity that occurs under your Account, and you agree to maintain
            the security and secrecy of your Account username and password at
            all times.
          </p>

          <h3>8.2 User Requirements and Conduct</h3>
          <p>
            You may not assign or otherwise transfer your Account to any other
            person or entity. You agree to comply with all applicable laws when
            using the Services, and you may only use the Services for lawful
            purposes. In your use of the Services, you will not cause nuisance,
            annoyance, inconvenience, or property damage, to a vendor, rider or
            delivery recipient or any other party. In certain instances, you may
            be asked to provide proof of identity to access or use the Services,
            and you agree that you may be denied access to or use of the
            Services if you refuse to provide proof of identity.
          </p>

          <h3>8.3 Network Access and Devices</h3>
          <p>
            You are responsible for obtaining the data network access necessary
            to use the Services. Your mobile network's data and messaging rates
            and fees may apply if you access or use the Services from a
            wireless-enabled device and you shall be responsible for such rates
            and fees. You are responsible for acquiring and updating compatible
            hardware or devices necessary to access and use the Services and
            Applications and any updates thereto. Eatables does not guarantee
            that the Services, or any portion thereof, will function on any
            particular hardware or devices. In addition, the Services may be
            subject to malfunctions and delays inherent in the use of the
            Internet and electronic communications.
          </p>

          <h2>9. Use of Information</h2>
          <h3>9.1 Consent to use information</h3>
          <p>
            You authorize and consent to the collection, storage and use, by
            Eatables and its affiliates, partners and agents, of any information
            and data related to or derived from your use of the Services and any
            information or data that you provide to Eatables.NG and its
            affiliates, partners and licensors ("Information"). The Information
            may include, without limitation, the following types of information
            and data, in an aggregate search request, search results, patterns,
            data and suggestions based on user actions.
          </p>

          <h3>9.2 Privacy Policy</h3>
          <p>
            You represent that you shall comply with the provisions of the
            Eatables Privacy Policy, which sets forth and describes the
            practices of Eatables concerning the collection, use and disclosure
            of Information in connection with your use of the Services.
          </p>

          <h2>10. Termination</h2>
          <p>
            Eatables may, in its sole and absolute discretion, at any time and
            for any or no reason, suspend or terminate the license and the
            rights afforded to you hereunder with or without prior notice. If
            you fail to comply with any terms and conditions of this Terms, the
            license and any rights afforded to you under this Terms, Eatables
            shall terminate automatically, without any notice or other action by
            Eatables. Upon the termination of this Term, you shall cease all use
            of the Services and uninstall the Application.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
            You acknowledge and agree that the Services and Application are
            provided on an "as is" and "as available" basis, and that your use
            of or reliance upon the Services and any Vendor product and services
            accessed thereby is at your sole risk and discretion. Eatables
            hereby disclaim any representations, warranties and guarantees
            regarding the application and Vendor products and services, whether
            express, implied or statutory, and including, without limitation,
            the implied warranties of merchantability, quality, fitness for
            consumption, and non-infringement. Furthermore, Eatables makes no
            warranty that (i) the Services and/or Vendor's product and services
            will meet your requirements; (ii) the Services and/ or Vendor's
            product and services will be uninterrupted, accurate, reliable,
            timely, secure or error-free; (iii) the quality of any products,
            services, information or other material accessed or obtained by you
            through the Services will be as represented or meet your
            expectations; or (iv) any errors in the Services or Vendor's product
            and services will be corrected. No advice or information, whether
            oral or written, obtained by you from Eatables or from the
            Application shall create any representation, warranty or guaranty.
            Furthermore, you acknowledge that Eatables has no obligation to
            correct any errors or otherwise support or maintain the Application
            and/or Service.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            Under no circumstances shall Eatables be liable for any indirect,
            incidental, consequential, special or exemplary damages arising out
            of or in connection with your access or use of or inability to
            access or use the Services or and any third-party content and
            services, whether or not the damages were foreseeable and whether or
            not Eatables was advised of the possibility of such damages. Without
            limiting the generality of the foregoing, Eatables aggregate
            liability to you (whether under contract, tort, statute or
            otherwise) shall not exceed the amount of 200,000 naira (two hundred
            thousand naira only). The foregoing limitations will apply even if
            the above-stated remedy fails of its essential purpose.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify, defend and hold harmless Eatables and each
            of its officers, directors, agents and employees (the "Indemnified
            Parties") from and against any claim, proceeding, loss, damage,
            fine, penalty, interest and expense (including, without limitation,
            fees for attorneys and other professional advisors) arising out of
            or in connection with the following: (i) your access to or use of
            the Services or third-party content and services; (ii) your breach
            of this Terms; (iii) your violation of law in connection with your
            use of the Services; (iv) your negligence or willful misconduct in
            connection with your use of the Services; or (v) your violation of
            the rights of a third party, including the infringement by you of
            any intellectual property or misappropriation of any proprietary
            right or trade secret of any person or entity. These obligations
            will survive any termination of this Terms.
          </p>

          <h2>14. Compatibility</h2>
          <p>
            Eatables does not warrant that the Services will be compatible or
            interoperable with your Device or any other piece of hardware,
            software, equipment or device installed on or used in connection
            with your Device. You acknowledge and agree that Eatables shall have
            no liability to You for any losses suffered resulting from or
            arising in connection with compatibility or interoperability
            problems.
          </p>

          <h2>15. Product Claims</h2>
          <p>
            You acknowledge that you are responsible for addressing any
            third-party claims relating to your use of the Services and agree to
            notify Eatables of any third-party claims relating to the
            Application of which you become aware. Furthermore, you release
            Eatables from any liability resulting from your use of the Services
            including, without limitation, the following:
          </p>
          <ul>
            <li>any product liability claims;</li>
            <li>
              any claim that the Application fails to conform to any applicable
              legal or regulatory requirement; and
            </li>
            <li>
              any claim arising under consumer protection or similar
              legislation.
            </li>
          </ul>

          <h2>16. Miscellaneous</h2>
          <h3>16.1 Governing Law</h3>
          <p>
            This agreement shall be deemed to take place in Nigeria and shall be
            governed by and construed in accordance with the laws of the Federal
            Republic of Nigeria.
          </p>
          <p>
            You agree that in the case of a grievance against Eatables, that
            mediation and arbitration proceedings shall be adopted by the
            parties in accordance with the Arbitration and Mediation Act 2023
            and the award of the arbitrator shall be binding.
          </p>

          <h3>16.2 Severability</h3>
          <p>
            If any provision of this Terms is held to be invalid or
            unenforceable with respect to a party, the remainder of this Terms,
            or the application of such provision to persons other than those to
            whom it is held invalid or unenforceable shall not be affected and
            each remaining provision of this Terms shall be valid and
            enforceable to the fullest extent permitted by law.
          </p>

          <h3>16.3 Entire Agreement</h3>
          <p>
            This Terms constitute the entire agreement with respect to the use
            of the Services.
          </p>
        </section>
      </div>

      <section className={styles.sectionFour}>
        <div className={styles.empty}>
          <h2 className={styles.h_4}> Eatables dey for you</h2>
          <p className={styles.stp} style={{ color: "black" }}>
            {" "}
            Stop worrying. Just place your order in seconds
          </p>

          <div className={styles.vdownloadLinkContainer}>
            <Link
              className={styles.downloadLink}
              href="https://play.google.com/store/apps/details?id=com.eatables.app">
              <Image
                src="assets/images/playstore.svg"
                width={15}
                height={15}
                alt="playstore icon"
              />{" "}
              Download on Playstore
            </Link>
            <Link
              href="https://apps.apple.com/us/app/eatables/id6502586489"
              className={styles.downloadLink}>
              {" "}
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
  );
};

export default Home;
