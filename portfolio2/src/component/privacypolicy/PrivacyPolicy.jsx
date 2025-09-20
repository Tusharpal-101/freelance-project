import React from "react";
import { motion } from "framer-motion";
import styles from "../privacypolicy/privacyPolicy.module.css";
import { privacyPolicySections } from "../privacypolicy/privacyPolicyData";

export default function PrivacyPolicy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.privacyContainer}>
      {/* Overlay with heading */}
      <div className={styles.overlay}>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className={styles.heading}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.8 }}
          className={styles.subHeading}
        >
          Transparency, Trust & Professionalism in Freelance Work
        </motion.p>
      </div>

      {/* Dynamic Sections */}
      <div className={styles.content}>
        {privacyPolicySections.map((section, index) => (
          <motion.section
            key={section.id}
            className={styles.section}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2>{section.title}</h2>

            {section.type === "paragraph" && <p>{section.content}</p>}

            {section.type === "list" && (
              <ul>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} My Freelance Startup. All rights reserved.</p>
      </footer>
    </div>
  );
}
