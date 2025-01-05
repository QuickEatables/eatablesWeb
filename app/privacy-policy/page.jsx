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
        Privacy Policy
      </h1>

      <div className={styles.cookie_wrapper}>

            <section className={styles.cookie_nav}>
              <p>ON THIS PAGE</p>
              <div className={styles.cookieNav_wrapper}>
 <Link className={styles.link}
                href="/terms-of-service"
                > Terms of Service</Link>
                <Link className={`${styles.link} ${
                    pathname === "/privacy-policy" ? styles.active : ""
                  }`}
                href="/privacy-policy"
                > Privacy Policy</Link>
                <Link className={styles.link}
                href="/cookies"
                > Cookie Policy</Link>
              </div>
            </section>
            
            <section className={styles.cookie_main}>
             <h1>PRIVACY POLICY FOR EATABLES</h1>
             
             <h2>Introduction</h2>
             <p>This privacy policy gives you information about how Quickeatables Delivery Limited collects and uses your personal data through your use of this websites, web applications and mobile applications, including any data you may provide when you register with us as a vendor, rider or customer, sign up to our newsletter, purchase a product or service, etc.</p>
             <p>Before using any of our Services, you are required to read, understand, and agree to this privacy policy alongside our terms and conditions.</p>
             <p>This website is not intended for children, and we do not knowingly collect data relating to children.</p>

             <h2>Controller</h2>
             <p>Quickeatables Delivery Limited is the data controller and responsible for your personal data (collectively referred to as "Eatables", "we", "us" or "our" in this privacy policy).</p>
             <p>We have appointed a data protection officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the information set out in the contact details section.</p>

             <h2>Scope</h2>
             <p>This policy applies to users of Eatables services in Nigeria and beyond. It describes how Eatables collects and use personal information to provide its Services. This policy applies to all users of our apps, websites, features, or other services anywhere in Nigeria and beyond, unless covered by a separate privacy policy. This policy specifically applies to:</p>
             <ul>
                <li>Riders: users who register on the platform for the purposes of carrying out door-step food delivery</li>
                <li>Vendors: users who sign up on Eatables for the purposes of providing food vendor services</li>
                <li>Customers/ Delivery Recipient: users who sign up for the purposes of ordering food items from a vendor on the Platform.</li>
                <li>Visitors: users who visit our website.</li>
             </ul>
             <p>This policy also applies to those who provide information to Eatables in connection with an application to use our Services, or whose information Eatables otherwise receives in connection with its Services. All those subject to this policy are referred to as "Users" for purposes of this policy. The practices described in this policy are subject to applicable laws in the places in which we operate. This means that we only engage in the practices described in this policy in a particular country or region if permitted under the laws of those places. Please contact us if you have questions about our practices.</p>

             <h2>1. The types of personal data we collect about you</h2>
             <p>Personal data means any information about an individual from which that person can be identified.</p>
             <p>We may collect, use, store and transfer different kinds of personal data about our Users which we have grouped together as follows:</p>
             <ul>
                <li>Identity Data includes first name, last name, username or similar identifier, marital status, title, date of birth and gender</li>
                <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                <li>Financial Data includes bank account and payment card details.</li>
                <li>Transaction Data includes details about payments to and from you, your order details, delivery information, date and time the service was provided, amount charged, distance travelled, and payment method. Additionally, if someone uses your promotion code, we may associate your name with that person.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device ID and other technology on the devices you use to access this website.</li>
                <li>Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                <li>Usage Data includes information about how you interact with and use our website, products and services.</li>
                <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences. We enable Users through the Eatables apps, websites, and other Services. For example, we enable vendors, riders and delivery recipients to call or text each other. To provide this service, Eatables receives some information regarding the calls or texts, including the date and time of the call/text and the content of the communications. Eatables may also use this information for customer support services (including to resolve disputes between users), for safety and security purposes, to improve our products and services and for analytics.</li>
             </ul>
             <p>i. Location Data includes your precise or approximate location information as determined through data such as GPS, IP address and WIFI. If you are a rider or delivery recipient, Eatables collects location information when our app is running in the foreground (app open and on-screen) or background (app open but not on screen) of your device.</p>
             <p>Eatables also collects this information when the Eatable app is running in the background of your device if this collection is enabled through your app settings or device permissions.</p>
             <p>Riders and delivery recipients may use our app without enabling it to collect their location information. However, this may affect the functionality available on your app. For example, if you do not enable Eatables to collect your location information, you will have to manually enter your pickup address. In addition, location information will be collected from the rider during your trip and linked to your account, even if you have not enabled Eatable to collect your location information.</p>
             <p>We also collect, use and share aggregated data such as statistical or demographic data which is not personal data as it does not directly (or indirectly) reveal your identity. For example, we may aggregate individuals' Usage Data to calculate the percentage of users accessing a specific website feature in order to analyse general trends in how users are interacting with our website to help improve the website and our service offering.</p>

             <h2>2. How is your personal data collected?</h2>
             <p>We use different methods to collect data from and about you including through:</p>
             <p>a. Your interactions with us. You may give us your personal data by filling in online forms or by corresponding with us by phone, email or otherwise. This includes personal data you provide when you:</p>
             <ul>
                <li>i. create an account with us;</li>
                <li>ii. place on order via a vendor on our platform;</li>
                <li>iii. subscribe to our publications;</li>
                <li>iv. request marketing to be sent to you;</li>
                <li>v. enter a competition, promotion or survey; or</li>
                <li>vi. give us feedback or contact us.</li>
             </ul>
             <p>b. Automated technologies or interactions. As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our cookie policy for further details.</p>
             <p>c. Third parties or publicly available sources. We will receive personal data about you from various third parties and publicly available sources.</p>

             <h2>3. How we use your personal data</h2>
             <h3>Legal basis</h3>
             <p>The law requires us to have a legal basis for collecting and using your personal data. We rely on one or more of the following legal bases:</p>
             <p>a. Performance of a contract with you: Where we need to perform the contract we are about to enter into or have entered into with you.</p>
             <p>b. Legitimate interests: We may use your personal data where it is necessary to conduct our business and pursue our legitimate interests, for example to prevent fraud and enable us to give you the best and most secure customer experience. We make sure we consider and balance any potential impact on you and your rights (both positive and negative) before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law).</p>
             <p>c. Legal obligation: We may use your personal data where it is necessary for compliance with a legal obligation that we are subject to. We will identify the relevant legal obligation when we rely on this legal basis.</p>
             <p>d. Consent: We rely on consent only where we have obtained your active agreement to use your personal data for a specified purpose, for example if you subscribe to an email newsletter.</p>

             <h3>Purposes for which we will use your personal data</h3>
             <p>Eatables collects and uses the information to enable reliable and convenient transportation, delivery and other products and services. Eatables uses the information it collects for purposes including:</p>
             <p>a. Providing services and features:</p>
             <p>Eatables uses the information we collect to provide, personalize, maintain and improve our products and services. This includes using the information to:</p>
             <ul>
                <li>i. Create and update your account.</li>
                <li>ii. Verify your identity.</li>
                <li>iii. Enable deliveries, and other services. This includes automated processing of your information to enable dynamic pricing in which the price of a ride is determined based on constantly varying factors such as the estimated time and distance of the predicted route, estimated traffic, and the number of riders and drivers using the service at a given moment.</li>
                <li>iv. Process or facilitate payments for those services.</li>
                <li>v. To track the progress of your delivery.</li>
                <li>vi. Enable features that allow you to share information with other people, such as when you submit a compliment about a rider or vendor or refer a friend to Eatables.</li>
                <li>vii. Enable features to personalize your account, such as creating bookmarks for your favourite vendors.</li>
                <li>viii. Perform internal operations necessary to provide our services, including troubleshooting software bugs and operational problems, conducting data analysis, testing, and research, and monitoring and analyzing usage and activity trends.</li>
             </ul>

             <p>b. Safety and security</p>
             <p>We use your data to help maintain the safety, security and integrity of our services and users. This includes:</p>
             <ul>
                <li>i. Screening riders and vendors prior to enabling their use of our services and at subsequent intervals, including thorough reviews of background checks, where permitted by law, to prevent the use of our services by dishonest or unsafe riders.</li>
                <li>ii. Using information from drivers' devices to identify unsafe driving behaviour, such as speeding, and to raise awareness among drivers regarding such behaviours.</li>
                <li>iii. Using the device, location, profile, usage and other information to prevent, detect and combat fraud or unsafe activities.</li>
                <li>iv. Using user ratings to encourage improvement by affected users, and as grounds for deactivating users with ratings below a certain minimum as may be required in their region. Calculation and deactivation may be done through an automated decision-making process.</li>
             </ul>

             <p>c. Customer support</p>
             <p>We use the information we collect (including recordings of customer support calls after notice to you and with your consent) to assist you when you contact our customer support services, including to:</p>
             <ul>
                <li>i. Direct your questions to the appropriate customer support person.</li>
                <li>ii. Investigate and address your concerns.</li>
                <li>iii. Monitor and improve our customer support responses.</li>
             </ul>

             <p>d. Research and development</p>
             <p>We may use the information we collect for testing, research, analysis and product development. This allows us to improve and enhance the safety and security of our services and develop new features and products.</p>

             <p>e. Communications among users</p>
             <p>Eatables uses the information we collect to enable communications between our users. For example, a rider may text or call a delivery recipient to confirm a pickup location, or a vendor may call a delivery recipient with information about their order.</p>

             <p>f. Communications from us</p>
             <p>Eatables may use the information we collect to communicate with you about products, services, promotions, studies, surveys, news, updates and events. We may use the information to promote and process contests and fulfill any related awards and serve you relevant ads and content about our services and those of our business partners. You may receive some of these communications based on your profile as a user. We may also use the information to inform you about elections, ballots, referenda and other policy processes that relate to our services. Where you would like to turn-off/opt out of this processing, click here. If you opt out of receiving marketing communications, you will still receive service-related communications that are essential for administrative or customer service purposes, for example relating to order confirmations, updates to our Terms and Conditions, checking that your contact details are correct.</p>

             <p>g. Legal proceedings and requirements</p>
             <p>We may use the information we collect to investigate or address claims or disputes relating to your use of our services, or as otherwise allowed by applicable law, or as requested by regulators, government entities, and official inquiries.</p>

             <h2>4. Third-party marketing</h2>
             <p>We will get your express consent before we share your personal data with any third party for their own direct marketing purposes.</p>

<h2>5. Cookies</h2>
<p>For more information about the cookies we use and how to change your cookie preferences, please see ___________.</p>

<h2>6. Disclosures of your personal data</h2>
<p>We may share the information we collect:</p>

<h3>a. With other users</h3>
<p>If you are a rider, we may share information with a delivery recipient including name and photo; vehicle make, license plate; location; average rating provided by other delivery recipients; the total number of trips; for how long you have been using the Eatables app; and contact information. If you choose to complete a rider profile, we may also share any information associated with that profile, including information that you submit and compliments that past customers have submitted about you on other delivery platforms. The delivery recipient will also receive a receipt containing information such as a breakdown of amounts charged, your first name, photo, and a map of the route you took.</p>

<h3>b. At your request</h3>
<p>This includes sharing your information with:</p>
<ul>
  <li>i. With the general public when you submit content to a public forum: we love hearing from our users, including through public forums such as our blogs, social media, and certain features on our network. When you communicate with us through those channels, your communications may be viewable by the public.</li>
  <li>ii. With the owner of the accounts that you may use: if you use a profile associated with another party, we may share your order information with the owner of that profile.</li>
</ul>

<h3>c. With our service providers and business partners</h3>
<p>We may provide information to its vendors, consultants, marketing partners, research firms, and other service providers or business partners. This may include:</p>
<ul>
  <li>i. Payment processors and facilitators.</li>
  <li>ii. Background check providers (riders and vendors only).</li>
  <li>iii. Cloud storage providers.</li>
  <li>iv. Marketing partners and marketing platform providers.</li>
  <li>v. Data analytics providers.</li>
  <li>vi. Research partners, including those performing surveys or research projects in partnership with us or on our behalf.</li>
  <li>vii. Consultants, lawyers, accountants and other professional service providers.</li>
  <li>viii. Fleet partners.</li>
</ul>

<h3>d. For legal reasons or in the event of a dispute</h3>
<p>We may share your information if we believe it is required by applicable law, regulation, operating agreement, legal process or governmental request, or where the disclosure is otherwise appropriate due to safety or similar concerns. This includes sharing your information with law enforcement officials, government authorities, airports (if required by the airport authorities as a condition of operating on airport property), or other third parties as necessary to enforce our terms of service, user agreements, or other policies, to protect our rights or property or the rights, safety or property of others, or in the event of a claim or dispute relating to your use of our services. If you use another person's credit card, we may be required by law to share information with that credit card holder, including trip information. This also includes sharing your information with others in connection with, or during negotiations of, any merger, sale of company assets, consolidation or restructuring, financing, or acquisition of all or a portion of our business by or into another company.</p>

<h3>e. With your consent</h3>
<p>We would get your express consent before we share your information other than described in this policy.</p>

<h2>7. International transfers</h2>
<p>We do not transfer your personal data outside Nigeria.</p>

<h2>8. Data security</h2>
<p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instruction and they are subject to a duty of confidentiality.</p>
<p>We have put in place procedures to deal with any suspected personal data breach and will notify you and the Nigeria Data Protection Commission of a breach where we are legally required to do so.</p>

<h2>9. Data retention</h2>
<h3>How long will we use your personal data for?</h3>
<p>Eatables requires user profile information to provide its services and retains such information for as long you maintain your account.</p>
<p>We retain certain information, including transaction, location, device, and usage information, for a minimum of 7 years in connection with regulatory, tax, insurance and other requirements in the places in which it operates. Once such information is no longer necessary to provide our Services, enable customer support, enhance the user experience or other operational purposes, we will take steps to prevent access to or use of such information for any purpose other than compliance with these requirements or purposes of safety, security and fraud prevention and detection.</p>
<p>We may also retain certain information if necessary for its legitimate business interests, such as fraud prevention and enhancing users' safety and security. For example, if we shut down a user's account because of unsafe behavior or security incidents, we may retain certain information about that account to prevent that user from opening a new one in the future.</p>
<p>You may request deletion of your account at any time through the Privacy Settings on our platforms. Following such request, we shall delete the information that it is not required to retain. In certain circumstances, we may be unable to delete your account, such as if there is an outstanding credit on your account or an unresolved claim or dispute. Upon resolution of the issue preventing deletion, we will delete your account as described above</p>

<h2>10. Your legal rights</h2>
<p>You have a number of rights under data protection laws in relation to your personal data.</p>
<p>You have the right to:</p>
<ul>
  <li>a. Request access to your personal data (commonly known as a "subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</li>
  <li>b. Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</li>
  <li>c. Request erasure of your personal data in certain circumstances. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</li>
  <li>d. Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) as the legal basis for that particular use of your data (including carrying out profiling based on our legitimate interests). In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your right to object. You also have the absolute right to object any time to the processing of your personal data for direct marketing purposes.</li>
  <li>e. Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</li>
  <li>f. Withdraw consent: you may withdraw your consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</li>
  <li>g. Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in one of the following scenarios:</li>
</ul>
<ul>
  <li>i. If you want us to establish the data's accuracy;</li>
  <li>ii. Where our use of the data is unlawful but you do not want us to erase it;</li>
  <li>iii. Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or</li>
  <li>iv. You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
</ul>
<p>If you wish to exercise any of the rights set out above, please contact our data protection officer via eatablesng@gmail.com_____</p>

<h2>11. No fee usually required</h2>
<p>You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</p>

<h2>12. What we may need from you</h2>
<p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p>

<h2>13. Contact details</h2>
<p>If you have any questions about this privacy policy or about the use of your personal data or you want to exercise your privacy rights, please contact us in the following ways:</p>
<p>Email address: support@quickeatbles.com</p>
<p>Telephone number: +2349125151780</p>

<h2>14. Information Security</h2>
<p>We have put appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized manner, or disclosed. We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions. We are equally aware of the obligation imposed on us by law regarding data protection and privacy.</p>

<h2>15. Complaints</h2>
<p>You have the right to object to our processing of personal data, including for marketing purposes based on profiling and/or automated decision-making, subject to our right to retain or use the information as permitted by the law.</p>
<p>Users in Nigeria also have the right to file a complaint relating to our handling of their personal information with the Nigerian Data Protection Commission (NDPC). Head Office at No.12 Clement Isong Street, Asokoro, Abuja, Nigeria  Mobile: +2349160615551, E-mail: info@ndpc.gov.ng web: www.ndpc.gov.ng.</p>
<p>However, we encourage users to first file such complaints and submit questions and comments to the Company's Data Processing Officer via eatablesng@gmail.com__________.</p>

<h2>16. Changes to the privacy policy and your duty to inform us of changes</h2>
<p>We keep our privacy policy under regular review. If we make changes, we will notify you of the changes through our platforms or by posting updates on our website, or through others means, such as email.</p>
<p>It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us, for example a new address or email address.</p>

<h2>17. Third-party links</h2>
<p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.</p>

<p><strong>Effective Date: June 2024</strong></p>
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