import React from "react";
import styles from "../component/css/SearchCategories.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import designImage from '../Assets/privacybackground.jpg';
import developmentImage from '../Assets/allproject.png';
import marketingImage from '../Assets/backgrond image.jpeg';

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { 
      id: 1, 
      title: "Design", 
      description: "We craft stunning logos, UI/UX designs, and brand identity for startups and freelance projects. Make your product visually appealing and memorable.",
      tags: ["Logo Design", "UI/UX", "Brand Identity", "Wireframe", "Prototype"],
      image: designImage,
      buttonText: "Let's Design Your Brand"
    },
    { 
      id: 2, 
      title: "Development", 
      description: "Build responsive websites, web apps, dashboards, and client portals for your startup or freelance business. We focus on performance and scalability.",
      tags: ["Web Development", "ReactJS", "NodeJS", "Full Stack", "API Integration", "Responsive"],
      image: developmentImage,
      buttonText: "Build Your Website Now"
    },
    { 
      id: 3, 
      title: "Marketing", 
      description: "Grow your startup or freelance business with digital marketing strategies. Social media campaigns, SEO, content marketing, and lead generation.",
      tags: ["SEO", "Social Media", "Lead Generation", "Content Marketing", "Ads Campaign"],
      image: marketingImage,
      buttonText: "Boost Your Business"
    },
    { 
      id: 4, 
      title: "Writing", 
      description: "We provide content strategy, copywriting, and blog writing services to help businesses communicate their message effectively.",
      tags: ["Copywriting", "Content Strategy", "Blog Writing", "SEO Content", "Editing"],
      image: marketingImage,
      buttonText: "Boost Your Business"
    },
  ];

  const handleClick = (title) => {
    // Sanitize title for URL: trim, lowercase, replace spaces with hyphens
    const urlTitle = title.trim().toLowerCase().replace(/\s+/g, '-');
    console.log("Navigating to:", `/category/${urlTitle}`); // Optional: for debugging
    navigate(`/category/${urlTitle}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 25
      },
    }),
    hover: {
      y: -10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Services</h2>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={styles.card}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleClick(service.title)}
          >
            <div className={styles.cardImageContainer}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              
              <div className={styles.tagsContainer}>
                {service.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <button className={styles.readMoreBtn}>
                {service.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
