import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp, FaTelegram, FaInstagram, FaShareAlt } from "react-icons/fa";
import styles from "./css/SocialSidebar.module.css";

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.sidebar}>
      <ul>
        {/* Main Toggle Icon */}
        <li onClick={() => setOpen(!open)}>
          <a href="#!" className={styles.mainIcon}>
            <FaShareAlt />
            <span>Socials</span>
          </a>
        </li>

        {/* Show social icons only if open */}
        {open && (
          <>
            <li>
              <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noreferrer">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/your-username" target="_blank" rel="noreferrer">
                <FaTelegram />
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your-username" target="_blank" rel="noreferrer">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
