import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <p className={styles.footerTitle}>Piano Melodies Studio</p>
          <p className={styles.footerTagline}>Where Every Melody Sparks Joy</p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/pianomelodies_studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/p/Piano-Melodies-61567913116105/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/piano-melodies-llc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className={styles.footerNav}>
          <h4 className={styles.footerNavTitle}>Pages</h4>
          <ul className={styles.footerNavList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/recitals">Recitals</Link>
            </li>
            <li>
              <Link href="/joinus">Join Us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h4 className={styles.footerNavTitle}>Contact</h4>
          <p>
            <a href="mailto:pianomelodiesstudio@gmail.com">
              pianomelodiesstudio@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+17866516600">+1 (786) 651-6600</a>
          </p>
          <p>Miami, FL</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Piano Melodies Studio. All rights
          reserved.
        </p>
        <div className={styles.legalLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
