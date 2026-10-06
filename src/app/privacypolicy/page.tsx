import styles from "./styles.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.privacyPolicyPage}>
      <header className={styles.pageBanner}>
        <h1>Privacy Policy</h1>
        <p>Last updated: October 2026</p>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.sectionContainer}>
          <section className={styles.faqSection}>
            <h2>Information We Collect</h2>
            <p>
              We value your privacy and keep data collection to an absolute
              minimum. We do <strong>not</strong> use tracking cookies,
              analytics services, or passive background data collection tools on
              this website.
            </p>
            <p>
              The only personal information we receive is what you voluntarily
              provide to us through our Google Form if you express interest in
              enrolling in piano classes:
            </p>
            <p>
              • Your Name
              <br />• Your Phone Number
            </p>
          </section>

          <section className={styles.faqSection}>
            <h2>How We Use Your Information</h2>
            <p>
              The name and phone number you submit via our Google Form are used
              solely for the following purposes:
            </p>
            <p>
              • To contact you regarding potential piano lesson scheduling,
              availability, or inquiries.
              <br />• To follow up with you directly if you decide to sign up
              for classes.
            </p>
            <p>
              We do <strong>not</strong> sell, rent, trade, or share your
              contact details with third-party marketers or advertisers under
              any circumstances.
            </p>
          </section>

          <section className={styles.faqSection}>
            <h2>Third-Party Services (Google Forms)</h2>
            <p>
              Our sign-up form is hosted via Google Forms (a service provided by
              Google LLC). When you submit information through the form, your
              data is processed and stored in accordance with Google's privacy
              protocols. You can review Google's Privacy Policy for more details
              on how they secure data.
            </p>
          </section>

          <section className={styles.faqSection}>
            <h2>Cookies and Tracking</h2>
            <p>
              Our website itself does not drop tracking cookies or monitor your
              browsing behavior. However, because our sign-up form is powered by
              Google, embedded Google content may set necessary operational
              cookies according to Google's standard practices.
            </p>
          </section>

          <section className={styles.faqSection}>
            <h2>Data Retention and Deletion</h2>
            <p>
              We retain your contact information only as long as necessary to
              coordinate piano lessons with you. If you choose not to proceed
              with lessons or wish to have your information deleted, simply
              notify us using the contact details below, and we will delete your
              submission from our records.
            </p>
          </section>

          <section className={styles.faqSection}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to
              have your submitted contact details removed, please reach out to
              us directly:
            </p>
            <p>
              <strong>
                <a href="mailto:pianomelodiesstudio@gmail.com">
                  pianomelodiesstudio@gmail.com
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="tel:+17866516600">+1 (786) 651-6600</a>
              </strong>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
