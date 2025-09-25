import React from 'react';
import { motion } from "framer-motion";
import styles from '../about/middle.module.css';
import img from "../../Assets/ux.png";
import ourmission from "../../Assets/ourmission.png";
import ourstory from "../../Assets/our story.png";

const EcoSection = () => {
  // Fade + Slide for paragraphs
  const fadeSlide = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Pop + Fade for headings
  const popFade = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={popFade}
        >
          Driven by Creativity & Technology
        </motion.span>
      </h1>

      {/* Section 1: Content Left, Image Right */}
      <div className={styles.section}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popFade}
          >
            Our Mission
          </motion.h2>
          <p>
            We are a passionate team of freelancers committed to delivering creative, 
            modern, and high-quality digital solutions. Our mission is to bring ideas 
            to life through technology, innovation, and user-focused designs that help 
            businesses grow in the digital world.
          </p>
        </motion.div>

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={ourmission} alt="Team" />
        </motion.div>
      </div>

      {/* Section 2: Image Left, Content Right */}
      <div className={styles.section}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={ourstory} alt="Office" />
        </motion.div>

        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popFade}
          >
            Our Story
          </motion.h2>
          <p>
            Since starting our journey in 2018, we have successfully worked with 
            50+ clients across different industries. From small startups to growing 
            businesses, we have delivered projects with transparency, dedication, 
            and creativity. Every project is an opportunity for us to learn, grow, 
            and create something meaningful.
          </p>
          <div className={styles.smallImage}>
            <motion.img
              src={img}
              alt="Story"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcoSection;
