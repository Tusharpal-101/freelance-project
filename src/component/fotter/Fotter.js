import React from "react";
import { Link } from "react-router-dom"; // React Router DOM import
import styles from "../fotter/fotter.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Name<span>Company</span></div>

      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3>ADDRESS</h3>
          <p><strong>DELHI OFFICE</strong></p>
          <p>Rajouri Garden</p>
          <p>New Delhi, India</p>
        </div>

        <div className={styles.column}>
          <h3>SOCIALS</h3>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className={styles.column}>
          <h3>CONTACT</h3>
          <p>Email: <a href="mailto:tusharpal@email.com">company@email.com</a></p>
          <p>This number is only demo Phone: +91 98765 43210</p>
        </div>

        <div className={styles.column}>
          <h3>PAGES</h3>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/card">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to= "/privacyPolicy">PrivacyPolicy</Link>
           
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} company name. All Rights Reserved.</p>
        <p>Made with ❤️ by our Team</p>
      </div>
    </footer>
  );
}
