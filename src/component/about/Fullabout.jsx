import React from 'react';
import { motion } from "framer-motion";
import styles from '../about/fullabout.module.css';
import img from "../../Assets/webdev.png";
import Middle from "../about/Middle.jsx";

const AboutPage = () => {
  // Variants for fade + slide
  const fadeSlide = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variants for pop + fade
  const popFade = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <motion.h1
            variants={fadeSlide}
            initial="hidden"
            animate="visible"
          >
            ABOUT<br />— FREELANCE HUB
          </motion.h1>
          <motion.p
            variants={fadeSlide}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Freelance Hub is a platform where creativity meets opportunity.  
            We connect talented freelancers with businesses and individuals 
            who need quality services done on time.
          </motion.p>
        </div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={img} alt="Freelance Work Collaboration" />
        </motion.div>
      </section>

      {/* Middle Section */}
      <section className={styles.middleSection}>
        <motion.div
          className={styles.middleText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 variants={popFade}>SINCE 2023</motion.h2>
          <motion.h3 variants={popFade}>
            BUILDING BRIDGES BETWEEN CLIENTS AND FREELANCERS
          </motion.h3>
          <motion.p variants={fadeSlide}>
            Our mission is to empower freelancers by giving them a stage to 
            showcase their skills, while providing clients with trusted 
            professionals to bring their ideas to life.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer Text */}
      <section className={styles.footerText}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Freelance Hub, we believe in quality, transparency, and growth.  
          With every project, we aim to create lasting partnerships 
          that go beyond work.
        </motion.p>
      </section>

      <Middle />
    </div>
  );
};

export default AboutPage;
