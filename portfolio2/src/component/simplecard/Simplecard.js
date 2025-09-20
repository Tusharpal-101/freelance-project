import React from "react";
import styles from "./simplecard.module.css";
import personImg from "../../../src/Assets/portfolioimage-removebg-preview.png"; // Replace with your image path

export default function SimpleCard() {
  return (
    <section className={styles.hero}>
      <div className={styles.contentBox}>
        <div className={styles.text}>
          <h1>
            Hi, We’re <span style={{ color: "#00ff84" }}>FreelanceX</span> <br />
            Your Creative Web Partner
          </h1>
          <p>
            We are a small freelance startup helping businesses with 
            <strong> Web Development</strong>, <strong>UI/UX Design</strong>, 
            and <strong>Branding</strong>.  
            Our goal is to create modern, responsive, and impactful websites 
            that connect you with your clients.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>View Work</button>
            <button className={styles.secondaryBtn}>Hire Us</button>
          </div>
        </div>

        <div className={styles.imageBox}>
          <img src={personImg} alt="Freelance Team" />
        </div>
      </div>
    </section>
  );
}
