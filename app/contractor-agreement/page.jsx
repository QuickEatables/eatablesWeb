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

      <h1 className={styles.trans_h1}>Contractor Agreement</h1>

      <div className={styles.cookie_wrapper}>
        <section className={styles.cookie_nav}>
          <p>ON THIS PAGE</p>
          <div className={styles.cookieNav_wrapper}>
            <Link
              className={`${styles.link} ${
                    pathname === "/contractor-agreement" ? styles.active : ""
              }`}
              href="/contractor-agreement">
              {" "}
              Contractor Agreement
            </Link>
            <Link className={styles.link} href="/vendor-agreement">
              Vendor Agreement
            </Link>
            <Link className={styles.link} href="/delete-account">
              Delete Account
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
          <h2>1. Introduction</h2>
          <p>
            This Independent Rider Agreement (the "Agreement") is made ……………...this day of ………………….2024
          </p>

          <p>BETWEEN</p>

          <p>
            Quickeatables Delivery Limited, a private limited liability company duly incorporated and registered under the laws of the Federal Republic Nigeria with registration number (RC) 7321515 and having as its registered office at _______________, (hereinafter referred to as "Company")
          </p>

          <p>AND</p>

          <p>
            …………….. of ______________ (hereinafter referred to as the "Rider").
          </p>

          <p>
            The Company and the Rider shall be individually referred to as the "Party" and collectively referred to as the "Parties" as and when the context of this Agreement so requires
          </p>

          <h2>2. Recitals</h2>
          <p>WHEREAS:</p>
          <ul>
            <li>The Company is a start-up food delivery company partnering with food vendors across Nigeria to provide ease in food delivery across Nigeria.</li>
            <li>The Rider is an independent provider of general delivery services including food delivery services.</li>
            <li>The Company has engaged the Rider, and the Rider agrees to provide to the Company general delivery services subject to the terms of this Agreement.</li>
          </ul>

          <p>The Parties hereby agree as follows:</p>

          <h2>3. Commencement and Duration</h2>
          <p>
            This Agreement shall take effect from the …………day of June 2024 (the "Effective Date") and shall continue in effect for a period of one thereafter ("Initial Term").
          </p>

          <p>
            The Parties hereby agree that after the Initial Term, this Agreement may be renewed for an additional period of 1 (one) (the "Renewal Term") upon the mutual agreement of the Parties.
          </p>

          <h2>4. Scope Of Work</h2>
          <p>
            The Rider shall fully perform the Services in a timely, efficient, safe, and lawful manner and shall be solely responsible for determining the most effective, efficient, and safe manner to perform the Services, including determining route selection, provided that the Rider shall have recourse to the request order schedule or Delivery Opportunity by customers as may be provided by the Company.
          </p>

          <p>
            The Company shall notify the Rider of the opportunity to complete deliveries from restaurants or other businesses to consumers in accordance with orders placed by consumers through the Company's platform ("Delivery Opportunity"). Where the Rider accepts a Delivery Opportunity the Rider shall retrieve the orders from restaurants or other businesses on time and safely, ensure the order is accurately filled according to the consumer's request, restaurant, and/or business specifications, and complete delivery orders to consumers in a safe and timely manner.
          </p>

          <p>
            The Rider agrees to immediately notify the Company in writing at where he becomes unable to perform the Services.
          </p>

          <p>
            The Parties agree that the Rider is not engaged on an exclusive basis with the Company and may engage in his/her own business, separate and apart from the Company's business, provided that the Rider executes his duty and business with the Company in an efficient and timely manner.
          </p>

          <h2>5. Representation</h2>
          <p>
            Rider represents that he/she has the appropriate license to carry out delivery services within Abia State in Nigeria.
          </p>

          <p>
            The Rider represents that he/she legally carries on delivery services within its Abia State in Nigeria.
          </p>

          <p>
            The Rider represents that he/she is not wanted by any public authority in Nigeria.
          </p>

          <h2>6. Fee & Payment Terms</h2>
          <p>
            The total professional fees payable to the Rider is ________ only.
          </p>

          <p>
            Professional fees are exclusive of all applicable taxes.
          </p>

          <p>
            The Rider shall be responsible for all expenses incurred while performing the services under this Agreement.
          </p>

          <p>
            The Rider shall be solely responsible for the payment of any applicable tax and levies provided for by any law or regulation.
          </p>
          <h2>5. Independent Contractor Status</h2>
          <p>
            The Rider is an independent contractor, and the Rider shall not be deemed an employee of the Company. In its capacity as an independent contractor, the Rider agrees and represents, and the Company agrees, as follows:
          </p>
          <ul>
            <li>The Rider has the right to perform services for others during the term of this Agreement.</li>
            <li>The Rider has the sole right to control and direct the means, manner, and method by which the services required under this Agreement will be performed. The Rider shall select the routes taken, starting, and closing times, days of work, and the order the work is to be performed.</li>
            <li>The Rider shall not be required to wear any uniforms or bear an ID cards of the Company as the staff of the Company.</li>
            <li>The services to be rendered under this Agreement shall be performed by the Rider personally and the Rider shall not assign his/her responsibility under this Agreement.</li>
            <li>The Rider shall not receive any training from the Company in the professional skills necessary to perform the services required by this Agreement.</li>
            <li>Other than the Commission fee payable to the Rider, the Rider shall not be entitled to any benefits, remuneration or compensation accruing to the staff of the Company.</li>
            <li>This Agreement does not create any employment relationship between the Company and the Rider.</li>
          </ul>

          <h2>6. Liability</h2>
          <p>
            The Rider shall be deemed to have represented that he possesses the necessary skills and expertise required to carry out the Agreement. Therefore, the Company shall not be liable either in tort, contract or criminal or otherwise for any act, omission, or negligence whatsoever.
          </p>

          <h2>7. Termination</h2>
          <p>
            The Company shall be entitled to terminate the Agreement upon the issuance of thirty (30) days written notice to the Rider. In the event of termination, the Rider shall immediately hand over all properties in his possession or custody, belonging to the Company, to the Company.
          </p>

          <p>
            The Rider may terminate this Agreement upon issuance of thirty (30) days written notice to the Company or payment in lieu of thirty (30) days.
          </p>

          <p>
            The Company shall terminate this Agreement immediately and without notice to the Rider, where the Rider breaches any part of this Agreement including and not limited to:
          </p>
          <ul>
            <li>Refusing to accept orders within its proximity more than twice in a month.</li>
            <li>Tampering with the orders or package of a customer.</li>
            <li>Consistently delays unreasonably in delivering customer's orders.</li>
          </ul>

          <h2>8. Personal Representation</h2>
          <p>
            The Rider agrees that by his acceptance of this Agreement, he shall be personally responsible for the deliverables as contained herein.
          </p>

          <h2>9. Conflict of Interest</h2>
          <p>
            By signing this letter, the Rider hereby warrants that no conflict of interest exists in relation to the Agreement.
          </p>

          <h2>10. Liability to Third Party</h2>
          <p>
            It is hereby understood and agreed that the Company shall not be vicariously liable for any loss or injury occasioned to a third party by virtue of the Rider's acts or omissions, but such shall be the full liability of the Rider.
          </p>

          <h2>11. Confidentiality</h2>
          <p>
            The Rider undertakes to use all reasonable endeavours to keep and shall keep secret all confidential information and will not disclose such confidential information to any third party, save as permitted by law. The Company must be notified, and its written consent must be obtained prior to such disclosures.
          </p>

          <h2>12. Data Protection</h2>
          <p>
            All data processing under this Agreement shall be in line with the provisions of the Nigeria Data Protection Act 2023, the Nigeria Data Protection Regulation and all extant data protection laws, regulations and guidelines in Nigeria.
          </p>

          <p>
            By signing this Agreement, the Rider has consented to the processing of every personal information willingly given by him to the Company for the purposes of this Agreement.
          </p>

          <p>
            The Rider, when handling personal data emanating from the Company, during this Agreement, shall comply with the data protection policies of the Company, the Nigeria Data Protection Act 2023 and all extant data protection laws, regulations and guidelines in Nigeria.
          </p>

          <p>
            The Rider shall not use the personal data of customers or emanating from vendors for his/her own personal use.
          </p>

          <p>
            Upon termination of this Agreement or any subsequent renewal thereof, the Company shall retain all personal information of the Rider in accordance with its data retention and data destruction policies.
          </p>
          <h2>13. Dispute Resolution</h2>
          <h3>13.1</h3>
          <p>
            If any dispute arises out of or in relation to this Agreement, the parties shall use their best endeavors to resolve such dispute amicably in the mutual interest of both parties.
          </p>

          <h3>13.2</h3>
          <p>
            Any dispute, which cannot be mutually resolved amicably by the Parties within 30 (thirty) days, shall be referred to arbitration at the Abia State Multi-Door Courthouse ("AMDC"), which shall be conducted in accordance with the AMDC arbitration Rules (which rules are deemed to be incorporated by reference into this clause).
          </p>

          <h3>13.3</h3>
          <p>
            The arbitration shall be held in Abia State, Nigeria and conducted in the English language.
          </p>

          <h3>13.4</h3>
          <p>
            The decision/award of the AMDC shall be final and binding on the Parties. The cost of arbitration shall be borne equally by the parties unless awarded by the AMDC.
          </p>

          <h2>14. Standard Contractual Requirement</h2>
          <h3>14.1</h3>
          <p>
            Acceptance of Agreement and of the terms and conditions herein shall be deemed to occur when the Rider appends his signature in the execution/acceptance portion at the end of this letter.
          </p>

          <h2>15. Applicable Law</h2>
          <h3>15.1</h3>
          <p>
            The construction and administration of this agreement and determination of the rights and duties of the parties hereunder shall be governed by law of the Federal Republic of Nigeria.
          </p>

          <h2>16. E-Signature Consent</h2>
          <h3>16.1</h3>
          <p>
            You consent that the provision of this Agreement to you electronically shall have the same meaning and effect as if provided in paper form. A text message or email alerting you that this Agreement is available electronically, provided that it is made available online shall have the same meaning and effect as if the Company has provided this Agreement to you in paper form.
          </p>

          <h3>16.2</h3>
          <p>
            You agree that the Company may modify or change the methods of disclosure described herein and that the Lender may send you this Agreement in paper form at its option. You can obtain a paper copy of an electronic Agreement at no charge, provided that such a request is made within a reasonable time after we first provide the electronic Agreement to you. To request a paper copy of an Agreement, contact Customer Care at _______.
          </p>

          <h3>16.3</h3>
          <p>
            You also agree that the Company is not responsible for any delay or failure in your receipt of any text message or email notice that is not caused by the Company's failure to send such a notice to the phone number or email address you have provided for that purpose.
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
