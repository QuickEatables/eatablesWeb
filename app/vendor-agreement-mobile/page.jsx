"use client";
import "@styles/globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "@components/Nav";
import styles from "./page.module.css";
import Footer from "@components/Footer";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const Home = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const vendorId = searchParams.get('vendorId');
  
  const [vendorData, setVendorData] = useState({
    effectiveDate: '____ day of _______ 2024',
    vendorName: '___________',
    vendorAddress: '______________',
    vendorEmail: '',
    vendorPhone: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form state for updating vendor information
  const [formData, setFormData] = useState({
    day: '',
    month: '',
    year: '2024',
    vendorName: '',
    vendorAddress: '',
    vendorEmail: '',
    vendorPhone: ''
  });
  
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (vendorId) {
      fetchVendorData();
    }
  }, [vendorId]);

  const fetchVendorData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/vendor-agreement/${vendorId}`);
      const result = await response.json();
      
      if (result.success) {
        setVendorData(result.data);
      } else {
        setError('Failed to fetch vendor data');
      }
    } catch (err) {
      setError('Error fetching vendor data');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.green}></div>
      <div className={styles.cookie_wrapper}>

        <section className={styles.cookie_main}>
          <h4>Vendor Agreement</h4>
          <p>This Vendor Agreement (hereinafter referred to as "this Agreement") is made and entered into this {vendorData.effectiveDate} (hereinafter referred to as "Effective Date")</p>

          <h4>Between</h4>
          <p>Quickeatables Delivery Limited, a private limited liability company duly incorporated and registered under the laws of the Federal Republic Nigeria with registration number (RC) 7321515 and having as its registered office at 52 Saka Tinubu Victoria Island, Lagos State, (hereinafter referred to as "Eatables");</p>

          <p>and</p>

          <p>{vendorData.vendorName}, a company/business name duly incorporated under the laws of the Federal Republic of Nigeria and with its registered office at {vendorData.vendorAddress} Nigeria (hereinafter referred to as "Vendor") which expression shall where the context so admits include its subsidiaries, successor-in title and assigns on the other part.</p>

          <p>Eatables and the Vendor may be individually referred to as a "Party" and collectively as the "Parties", which expressions shall where the context so admits include their respective successors-in-title and assigns.</p>

          <h4>WHEREAS:</h4>
          <ul>
            <li>Eatables is is a online start-up food delivery company partnering with food vendors across Nigeria to provide ease in food delivery across the country through the use of technology.</li>
            <li>The Vendor is a restaurant operating in Abia state, Nigeria.</li>
            <li>The Vendor intends to sign up on the Eatbles online platform as a Vendor partner to provide food services to a broad range of customers via the platform.</li>
            <li>This Agreement describes the terms and conditions ("Terms and Conditions") for the use of the Eatables food delivery service (the "Service")</li>
          </ul>

          <p>THEREFORE, in consideration of the mutual obligations herein contained, it is hereby agreed to the terms and conditions as follows:</p>

          <h4>1. Interpretation</h4>
          <p>In this Agreement, the following expressions shall, unless the context otherwise requires, have the following meanings:</p>
          <p>
            "Customer" means any person(s) that places an order for an item from
            the Vendor through the Eatables Platform.
          </p>

          <p>
            "Rider" means an independent contractor engaged by Eatables for the
            purposes of providing last mile delivery/ dispatch services from the
            Vendor to the Customer while using Eatables Platform.
          </p>

          <p>
            "Terms & Conditions" means Unstructured Supplementary Service Data,
            which is a messaging protocol commonly used for sending short
            commands and requests without incurring connection or service
            charges.
          </p>

          <h2>2. Acceptance</h2>
          <p>
            By executing this document together with any copies, counterparts and
            addendums, it is agreed herein that the Parties have read,
            understood and accepted all the Terms and Conditions of Eatables.
          </p>

          <h2>3. The Agreement</h2>
          <h3>3.1</h3>
          <p>
            This Agreement, including the Terms and Conditions, constitutes the
            entire agreement between the Parties with respect to Eatables
            Services.
          </p>

          <h3>3.2</h3>
          <p>
            The clause headings of this Agreement are included for ease of
            reference only and are not to be taken into account in the
            interpretation of the content of the Agreement. Thus, clause
            headings are not to be considered as an integral part of this
            Agreement.
          </p>

          <h3>3.3</h3>
          <p>
            Should any provision of this Agreement prove to be unenforceable,
            illegal, invalid or otherwise void for whatever reason; the
            offending provision shall be deemed deleted and the remaining
            provisions shall continue in full force and effect. The invalid,
            illegal or unenforceable provision shall be replaced by a mutually
            acceptable provision, which, being valid, legal and enforceable,
            comes closest to the intention of the Parties with respect to the
            invalid, illegal, or unenforceable provision.
          </p>

          <h2>4. Commencement and Duration</h2>
          <h3>4.1</h3>
          <p>
            This Agreement shall take effect from the …………day of June 2024 (the
            "Effective Date") and shall continue in effect for a period of one
            thereafter ("Initial Term").
          </p>

          <h3>4.2</h3>
          <p>
            The Parties hereby agree that after the Initial Term, this Agreement
            may be renewed for an additional period upon the mutual agreement
            and renegotiations by the Parties.
          </p>

          <h2>5. Service Usage</h2>
          <h3>5.1</h3>
          <p>
            In order to use the Service after onboarding, the Vendor shall
            access the provided account through the Eatables web app, website or
            mobile application ("the Service Platform").
          </p>

          <h3>5.2</h3>
          <p>
            The Vendor agrees to comply with all applicable privacy policies,
            terms & conditions and app use directions. The Vendor shall not
            misuse its access to the Service Platform/the Service or data that
            becomes accessible to it by virtue of the onboarding on the Eatables
            Platform.
          </p>

          <h3>5.3</h3>
          <p>
            The Vendor shall take all commercially reasonable steps to maintain
            the strict confidentiality and security of its Eatables Vendor
            Account. These steps shall include, but not limited to: using strong
            passwords, enabling two-factor authentication for all accounts, and
            not sharing credentials with any unauthorised third party.
          </p>

          <h3>5.4</h3>
          <p>
            Vendor accepts all liabilities arising from any losses, costs,
            damages or other liabilities arising from unauthorized use of the
            login details to its Eatables Vendor Account.
          </p>

          <h3>5.5</h3>
          <p>
            Should the Vendor misuse the Service and/or intentionally or
            negligently misuse personal data of Customers, eg- by sending
            unsolicited messages or calls to Customers, the Vendor agrees to be
            held liable for any claims, loss, damage, regulatory fines or any
            other legal liability arising from such act.
          </p>

          <h3>5.6</h3>
          <p>
            The Vendor agrees that it shall only use Eatables Platform strictly
            for the purposes of this Agreement and nothing more.
          </p>

          <h2>6. Consideration</h2>
          <h3>6.1</h3>
          <p>
            The Parties agree that this onboarding process is gratis and the
            Vendor is not required to make any payment to Eatbles for this
            Service.
          </p>

          <h3>6.2</h3>
          <p>
            Eatables will use all reasonable endeavours to ensure the successful
            delivery of all orders made from the Vendor by the Customer through
            its Platform.
          </p>

          <h3>6.3</h3>
          <p>
            The Vendor shall be responsible for and bear all charges & taxes,
            applicable to the use of the Services, which accrue to the Vendor in
            accordance with the law.
          </p>

          <h3>6.4</h3>
          <p>
            Eatables shall be responsible for and bear all charges & taxes which
            accrue to it in accordance with the law.
          </p>

          <h2>7. Unauthorised Interference</h2>
          <h3>7.1</h3>
          <p>
            Notwithstanding the other liabilities defined in this Agreement, the
            Vendor will not interfere with or jeopardize the functionality or
            the operation of any part of the Service or attempt to interfere
            with or jeopardize the functionality or operation of any part of the
            Service. This includes, but is not limited to, attempting,
            permitting or assisting any person to gain unauthorised access to
            the Service, other accounts, computer systems or networks connected
            to the Service, through password mining or any other means, copy;
            tamper with; reverse engineer; de-compile; disassemble; re-write
            and/or re-engineer any part of the Service, the Eatables Website or
            any application used in, or provided as part of the Service.
          </p>

          <h2>8. Eatables Obligations</h2>
          <h3>8.1</h3>
          <p>
            Eatables shall provide the Service in accordance with this
            Agreement.
          </p>

          <h3>8.2</h3>
          <p>
            Eatables shall perform the Services with the highest level of care,
            skill and diligence in accordance with best practice in the
            industry.
          </p>

          <h3>8.3</h3>
          <p>
            Eatables shall at all times have and maintain during the term of
            this Agreement, all necessary licences and consents and comply with
            all applicable laws in relation to the Services.
          </p>

          <h3>8.4</h3>
          <p>
            Eatables agrees and undertakes that it shall not use information
            provided by the Vendor for any other purpose than as stated in this
            Agreement.
          </p>

          <h3>8.5</h3>
          <p>
            Eatables shall notify the Vendor, no later than 24 hours after
            delivery, following a successful delivery of an Order through
            Eatables.
          </p>

          <h3>8.6</h3>
          <p>
            Provide access to the Vendor to download delivery reports from its
            website showing the status of deliveries and the Vendor's progress
            on the Platform.
          </p>

          <h2>9. Adherence to Laws</h2>
          <h3>9.1</h3>
          <p>
            The Parties agree to abide by all applicable laws, regulations or
            service provider requirements related to the use of the Service.
            Eatables will provide the Vendor with clear and up-to-date
            information on any relevant regulations or restrictions that might
            impact their use of the Service.
          </p>

          <h3>9.2</h3>
          <p>
            Any complaint from a Customer will be regarded in a very serious
            light and the Parties will work together in good faith to address
            any such complaints and avoid any material breaches of this
            Agreement.
          </p>

          <h2>10. Privacy Policy and Confidentiality</h2>
          <h3>10.1</h3>
          <p>
            The Vendor acknowledges that all information provided by Eatables,
            including but not limited to customer data, message content, and
            usage statistics, is the confidential property of Eatables, and
            shall be for identification, order delivery or order rectification
            purposes only, unless otherwise agreed by the Parties. The Vendor
            agrees not to disclose or use any information submitted by Eatables
            for any purpose other than that for which the Vendor is using for
            the Service, and as otherwise expressly authorised by the Eatables
            in writing.
          </p>

          <h3>10.2</h3>
          <p>
            The Vendor acknowledges that all data provided by Eatables under
            this Agreement including Eatables customer's data remains the
            property of Eatables and will not be copied or used for any purpose
            outside the scope of this Agreement.
          </p>
          <h3>10.3</h3>
          <p>
            The Vendor shall not use any information or the personal data of Customer's provided by Eatables through the Provision of this Services and via its Platform, for its personal use, eg. Shall not directly contact the Customers or send advertising or marketing materials or notifications to the Customers using data collected by virtue of using the Eatables Platform or Services.
          </p>

          <h3>10.4</h3>
          <p>
            The Vendor shall protect Eatables' Customers' information using the same standard of care that it applies to safeguard its own confidential information and the information shall be stored in such a way as to prevent any unauthorized disclosure thereof.
          </p>

          <h3>10.5</h3>
          <p>
            Both Parties agree that neither party shall disclose to any third party any details whatsoever of this Agreement without the prior written consent of the other party except as may be provided in this Agreement or except as shall be required by a court of competent jurisdiction or regulatory authority, or its legal and professional advisors and that such obligation shall survive the expiry of this Agreement and shall endure for a period of three (3) years from the date of expiry or termination of this Agreement.
          </p>

          <h3>10.6</h3>
          <p>
            A breach of provision shall be a material breach of this Agreement and this clause shall survive the termination of expiration of this Agreement.
          </p>

          <h2>11. Termination</h2>
          <h3>11.1</h3>
          <p>
            A Party may terminate this Agreement with 30 (thirty) days' written notice if:
          </p>
          <ul>
            <li>
              upon the breach of any term of this Agreement by the other Party, provided that the defaulting Party neglects or fails to take any steps to remedy the breach after a seven (7) day written notice of a request to redeem the breach has been served on the defaulting Party or
            </li>
            <li>
              commits any fraudulent or unlawful conduct related to the use of the Service; or
            </li>
            <li>
              the other party loses its license and/or regulatory approval within which it operates.
            </li>
            <li>
              is the subject of a bankruptcy order, or becomes insolvent, or goes into voluntary or compulsory liquidation or a receiver or administrator is appointed over its assets;
            </li>
          </ul>

          <h3>11.2</h3>
          <p>
            Where a Party is obliged to defend any action against itself as a consequence of the other's breach, the defaulting party agrees to be responsible for all costs and expenses incurred by the other, including its legal and professional costs on a full indemnity basis.
          </p>

          <h3>11.3</h3>
          <p>
            Regardless of any other provision of this Agreement, Eatables reserves the right to terminate this Agreement forthwith or suspend the Service by notice to the Vendor if:
          </p>
          <ul>
            <li>
              The Vendor commits a material breach of this Agreement which cannot be remedied; or
            </li>
            <li>
              the Vendor fails to comply with any applicable laws, and the Vendor fails to rectify such non-compliance after been given reasonable notify of its non-compliance; or
            </li>
            <li>
              The Vendor consistently sends out wrong orders to Customers without a Customer consenting to an order switch; or
            </li>
            <li>
              any fines or any other claims are brought against Eatables by any Customer or any other third party arising from any aspect of the Parties' relationship (including in connection with any data breach, data compromise or theft of data held by the Vendor, irrespective of whether such breach, compromise, or theft was within Customer's control).
            </li>
          </ul>

          <h3>11.4</h3>
          <p>
            Any termination of the Agreement pursuant to Clause 11.3 shall be without prejudice to any other rights or remedies that Eatables may be entitled to under the Agreement or at law and shall not affect any accrued rights or liabilities of Eatables nor the coming into or continuance in force of any provision which is expressly or by implication intended to come into or continue in force on or after such Termination.
          </p>

          <h2>12. Notices and Grievance</h2>
          <h3>12.1</h3>
          <p>
            Any notice required by this Agreement or given in connection with it, shall be in writing and shall be given to the appropriate Party by personal delivery or via email.
          </p>

          <h3>12.2</h3>
          <p>
            Each Party shall promptly inform the other of any claims in respect of patent rights, copyrights, registered designs or other Intellectual Property rights, as it relates to this Agreement, and shall make no settlement thereof without giving to the other prior notice of the claim and a reasonable opportunity to deal with the same.
          </p>

          <h3>12.3</h3>
          <p>
            Notices authorised or required to be given by either Party under this Agreement shall be in writing and shall be deemed to be duly given if delivered personally or sent by first class pre-paid post (and confirmed by post) or by email addressed to the other Party at the address during registration (or to such other address as may be notified by the other Party in accordance with the terms of this agreement). Any such notice sent by post shall be deemed to have been given seven (7) days after the date of posting and if sent by email transmission at the time of dispatch.
          </p>

          <h2>13. Disclaimer/ Limitation of Liability</h2>
          <h3>13.1</h3>
          <p>
            The Vendor shall be responsible for maintaining the confidentiality of its account and password and shall notify Eatables immediately in writing if the confidentiality of the password has or may have been compromised.
          </p>

          <h3>13.2</h3>
          <p>
            Eatables shall not be liable for breach-of-contract damages suffered by the Vendor that are remote or speculative, or that could not have reasonably been foreseen on execution of this Agreement.
          </p>

          <h3>13.3</h3>
          <p>
            Eatables shall not be responsible for any injury, loss, liability, claim or damage of any kind suffered or incurred by the Vendor which results from or relates to the Service, the Terms and Conditions, Vendor's access to the Service Platform, utilization of the Service or reliance on any information contained on the Service Platform. However, this limitation of liability shall not apply to the extent that such damages are caused by Eatables' negligence, or willful misconduct.
          </p>

          <h3>13.4</h3>
          <p>
            Eatables will use commercially reasonable efforts to maintain the availability and uptime of the Platform and Service. However, Eatables does not warrant that the operation of the Service, Platform or any associated products will be uninterrupted nor error free, nor will it be 100% fail proof.
          </p>

          <h3>13.5</h3>
          <p>
            Eatables will promptly notify the Vendor about any anticipated or ongoing service disruptions and estimated restoration timeframes.
          </p>

          <h3>13.6</h3>
          <p>
            Without limiting Sub-Clause ‎13.3 above, Eatables will not be responsible, and its liability is excluded for the following:
          </p>
          <ul>
            <li>
              All statements made by Vendor or users of Vendor's account, including promos offered by the Vendor;
            </li>
            <li>
              The unavailability or the consequences of the unavailability of the Service Platform or the Service for any reason; including but not limited to failure of, malfunction or defect of any nature in the Internet network. However, if such incident occurs, Eatables will use its best endeavours to ensure successfully resuming its performance of its obligations as soon as reasonably possible;
            </li>
            <li>
              Any act or failure to act by any other third party involved in delivering the Service, including but not limited to the failure of the Rider to carry out the delivery of an order which has been placed by the Customer and packaged by the Vendor, except in the case where the negligent act of Eatables led to the failure;
            </li>
            <li>
              Any circumstances for any indirect, contingent or consequential loss (including, but without being limited to, loss of revenue, loss of data, loss of business or loss of profits) sustained or incurred by Vendor howsoever arising to the extent permitted by law.
            </li>
          </ul>
          <p>
            Save for cases of fraud, negligence and misconduct, a Eatbles liability under this Agreement will not exceed the fees paid under this Agreement during the twelve (12) month period preceding the date of the claim.
          </p>
          <h2>13. Indemnity</h2>
          <h3>13.7</h3>
          <p>
            The Vendor at its own expenses, shall indemnify, defend and hold harmless the Eatables, its affiliates and their respective employees, officers, directors, representatives and agents from and against all losses, damages, liabilities, settlements, costs and expenses arising out of or related to any claim, demand, suit, action or proceeding initiated by a third party arising out of or relating to:
          </p>
          <ul>
            <li>Any breach by the Vendor of this Agreement;</li>
            <li>A breach of any third-party intellectual property right;</li>
            <li>Any Vendor's service (food, beverages, snack, etc), content or other materials or services provided by the Vendor under this Agreement; or</li>
            <li>An allegation that the service provided by the Vendor to the Customers violates the Applicable Law.</li>
          </ul>

          <h3>13.8</h3>
          <p>
            Vendor is solely responsible for all acts or omissions that occur under its account or password, including the content of any transmissions through the Service.
          </p>

          <h2>14. Intellectual Property</h2>
          <h3>14.1</h3>
          <p>
            All information, right, title and interest relating to copyright, trademark, patents and trade names, trade secrets and any other proprietary rights, whether registered or unregistered and however embodied, communication media, and systems associated with the Service and/or Eatables' Website, Web Page, Mobile Application and the underlying services ("the Intellectual Property") shall vest in Eatables and remain the sole property of Eatables. By use of the Service, the Vendor does not obtain any rights in the infrastructure, content or software associated with the services.
          </p>

          <h3>14.2</h3>
          <p>
            The Parties agree not to use, challenge, or exploit the Intellectual Property rights of the other in any way unless the Party has been given prior written consent by the other Party.
          </p>

          <h3>14.3</h3>
          <p>
            The Service or the use of it may include material or content which is owned by third parties, and/or the rights in which vest in third parties. The Vendor may not use, copy, exploit or publish any aspect of the Service or use of the Service, without the prior written consent of the owner of the rights therein.
          </p>

          <h3>14.4</h3>
          <p>
            Each Party shall promptly inform the other of any claims in respect of patent rights, copyrights, registered designs or other Intellectual Property rights and shall make no settlement thereof without giving to the other prior notice of the claim and a reasonable opportunity to deal with the same.
          </p>

          <h2>15. Governing Law and Disputes</h2>
          <h3>15.1</h3>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of Nigeria.
          </p>

          <h3>15.2</h3>
          <p>
            All disputes arising from the operation of this Agreement shall be settled amicably by both Parties through mutual discussion. If the Parties are unable to resolve the dispute through mutual discussion within fourteen (14) days after either Party notifies the other in writing that there is a dispute, the dispute shall be referred to arbitration at the Abia State Multi-Door Courthouse ("AMDC"), which shall be conducted in accordance with the AMDC arbitration Rules (which rules are deemed to be incorporated by reference into this clause).
          </p>

          <h3>15.3</h3>
          <p>
            The arbitration shall be held in Abia State, Nigeria and conducted in the English language.
          </p>

          <h3>15.4</h3>
          <p>
            The decision/award of the AMDC shall be final and binding on the Parties. The cost of arbitration shall be borne equally by the parties unless awarded by the AMDC.
          </p>

          <h3>15.5</h3>
          <p>
            This clause shall survive the termination of this Agreement and shall accordingly apply at all times to all dispute concerning this Agreement or any matter hereunder.
          </p>

          <h2>16. Force Majeure</h2>
          <h3>16.1</h3>
          <p>
            Where the terms of this Agreement cannot be performed or cannot be performed fully as a result of unforeseeable force majeure and the consequences of which are not -preventive or unavoidable, the Party experiencing such force majeure shall promptly inform the other Party of the situation by written notice within 5 (five) days of the event occurring including reasons why the Agreement cannot be performed partially or fully, or why the performance of this Agreement needs to be delayed.
          </p>

          <h3>16.2</h3>
          <p>
            The Parties shall to the best of their abilities take all measures to minimise the adverse effect of the force majeure. If this force majeure event results in a delay of the performance of a Party's obligation under this Agreement, extending beyond five (5) days, the Parties may have a meeting to discuss a resolution of the force majeure and how to proceed with the Agreement, but where no resolution is reached 7 business days after such meeting, either Party may terminate this Agreement upon written notice to such effect. The Parties shall be relieved of their further contractual obligations, except for their accrued right and obligations.
          </p>

          <h2>17. Representations and Warranties</h2>
          <p>
            Eatables warrants and represents that:
          </p>

          <h3>17.1</h3>
          <p>
            it has full capacity and authority as well as all the necessary licenses, permits and consent to enter into and perform in terms of this Agreement;
          </p>

          <h3>17.2</h3>
          <p>
            it is able to provide the Service herein referred, and its Service shall be carried out to best industry standards; and shall be carried out by competent and diligent personnel;
          </p>

          <h3>17.3</h3>
          <p>
            it is not aware of any matter within their reasonable control or subject to any contractual obligation that is likely to have an adverse effect on their ability to perform their obligation under this Agreement;
          </p>

          <h3>17.4</h3>
          <p>
            Eatables neither warrants that the operation of the Service, Platform or any associated products will be uninterrupted nor error free, nor will it be 100% fraud or fail proof. However, Eatables warrants that it shall use its best endeavours to ensure that the Service and Platform always operates optimally in accordance with best industry standards during the term of this Agreement.
          </p>

          <h3>17.5</h3>
          <p>
            Eatables will provide prior written notice of any material changes to the Services.
          </p>

          <h3>17.6</h3>
          <p>
            the Service carried out hereunder shall be performed in compliance with the applicable laws of the Federal Republic of Nigeria.
          </p>

          <h2>18. Data Protection</h2>
          <h3>18.1</h3>
          <p>
            The Vendor acknowledge and agree that all data provided by Eatables, or to which the Vendor may be exposed to, shall constitute confidential information and where applicable, intellectual property belonging to Eatables.
          </p>

          <h3>18.2</h3>
          <p>
            The Parties warrant, represent and undertake that:
          </p>
          <ul>
            <li>It shall at all times strictly comply with all provisions and requirement of Nigeria Data Protection Act 2023, the Nigeria Data Protection Regulation 2019 and every extant policy and regulation governing data protection in Nigeria.</li>
            <li>It shall ensure that all systems and operations which is used for the Service, including all systems on which data is processed as in furtherance of the Service, shall at all times be of minimum standard required by all applicable laws and be of a standard no less than the standard which are in compliance with the best industry practice for the protection, control and use of data;</li>
            <li>It shall take appropriate, reasonable, technical, commercial and organisational measures to prevent the loss of, damage to or unauthorised destruction of data and the unlawful access to or processing of data. The measures taken must at all times be of a minimum standard required by all applicable laws and be of a standard no less than the standards which are in compliance with the best industry practice for the protection, control and use of data.</li>
          </ul>

          <h3>18.3</h3>
          <p>
            The Parties shall immediately notify the other Party of any data security compromises or suspected security compromises of which it becomes aware of in so far as it affects its obligations under this Agreement.
          </p>

          <h3>18.4</h3>
          <p>
            The Parties acknowledge and agree that any breach of its obligations under this clause shall be deemed a material breach of this Agreement and this clause shall survive the termination of expiration of this Agreement.
          </p>

          <h2>19. Miscellaneous</h2>
          <h3>19.1</h3>
          <p>
            An amendment of this Agreement shall be subject to the mutual agreement by both Parties prior to effecting same in the Agreement.
          </p>

          <h3>19.2</h3>
          <p>
            No delay, neglect or forbearance on the part of either Party in enforcing against the other Party any term or condition of this Agreement shall either be, or be deemed to be, a waiver or in any way prejudice any right of that party under this Agreement.
          </p>

          <h3>19.3</h3>
          <p>
            The Parties acknowledge that this Agreement and its performance does not create a partnership or joint venture between the Parties. The Parties agree that, for purposes of this Agreement, each Party shall be solely responsible for its own acts and omissions. Neither of the Parties shall be responsible for any loss or damage caused by the act or omission of the other Party or by virtue of this Agreement except as provided for in this Agreement.
          </p>

          <h3>19.4</h3>
          <p>
            The performance of this Agreement is the duty of each Party.
          </p>

          <h3>19.5</h3>
          <p>
            The Vendor shall not assign its performance of this Agreement to a third party.
          </p>

          <h3>19.6</h3>
          <p>
            This Agreement constitutes the whole agreement between the Parties and supersedes all previous agreements between the Parties relating to its subject matter.
          </p>

        </section>
      </div>

    </div>
  );
};

export default Home;
