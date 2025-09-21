import React from "react";
import styles from "../component/css/banner.module.css";
import { ReactTyped } from "react-typed";

const RainBanner = () => {
  const strings = [
    `<span class="emoji rocket"></span> We Build Scalable Web Apps`,
    `<span class="emoji paint"></span> Crafting Stunning UI/UX`,
    `<span class="emoji lightning"></span> Empowering Startups`,
  ].map(str => str.replace(/class=/g, "className=")); // Fix for React className

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1>
          Welcome to <span className={styles.highlight}>TechNova</span>
        </h1>

        <h2 className={styles.typingText}>
          <ReactTyped
            strings={strings}
            typeSpeed={60}
            backSpeed={40}
            loop
            smartBackspace
            showCursor
            cursorChar="|"
            contentType="html"
          />
        </h2>

        <p>
          TechNova is a next-gen startup transforming ideas into powerful
          digital products. From websites to full-scale web applications,
          we deliver innovation with speed and style.
        </p>

        <div className={styles.btnGroup}>
          <button className={styles.ctaBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>See Our Work</button>
        </div>
      </div>
    </div>
  );
};

export default RainBanner;
