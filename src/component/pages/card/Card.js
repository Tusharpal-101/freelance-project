// src/component/pages/card/CardSection.jsx
import React, { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./card.module.css";
import { cards } from "../card/Carddata";

const Card = ({ card }) => {
  const cardRef = useRef(null);

  // Motion values for tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Convert tilt values to degrees
  const rotateXDeg = useTransform(rotateX, (v) => `${v}deg`);
  const rotateYDeg = useTransform(rotateY, (v) => `${v}deg`);

  // Strong glowing shadow effect
  const boxShadow = useTransform(
    [rotateX, rotateY],
    ([latestX, latestY]) =>
      `0px ${-latestX}px ${20 + Math.abs(latestX + latestY)}px rgba(0,0,0,0.5),
       0px 0px 30px rgba(255,255,255,0.15)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x / rect.width) - 0.5) * 35;
    const rotateXValue = ((y / rect.height) - 0.5) * -35;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={styles.card}
      ref={cardRef}
      style={{
        rotateX: rotateXDeg,
        rotateY: rotateYDeg,
        boxShadow,
        perspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.07 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 130, damping: 12 }}
    >
      {/* Card Image */}
      <div className={styles.cardInner}>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src={card.img} alt={card.title} loading="lazy" />
          </div>
          {card.liveLink && (
            <div className={styles.icon}>
              <a
                href={card.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBox}
              >
                <span>LIVE</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.content}>
        <h3>{card.title}</h3>

        <div className={styles.subtitleRow}>
          <p>{card.subtitle}</p>
          {card.codeLink && (
            <a
              href={card.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.codeButton}
            >
              CODE
            </a>
          )}
        </div>

        {card.technologies && card.technologies.length > 0 && (
          <div className={styles.tagsRow}>
            {card.technologies.map((tech, idx) => (
              <span key={idx} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function CardSection() {
  const { name } = useParams();
  const categoryName = (name || "").toLowerCase();

  const categoryMap = useMemo(
    () => ({
      design: "design",
      development: "web development",
      marketing: "marketing",
      writing: "writing",
    }),
    []
  );

  const filteredCards = useMemo(() => {
    if (!categoryName || categoryName === "all") return cards;
    const actualCategory = categoryMap[categoryName] || categoryName;
    return cards.filter(
      (card) => (card.category || "").toLowerCase() === actualCategory
    );
  }, [categoryName, categoryMap]);

  return (
    <section className={styles.cardSection}>
      <h2 className={styles.heading}>
        {categoryName === "all"
          ? "All Projects"
          : name
          ? `${name} Projects`
          : "Projects"}
      </h2>

      <motion.div
        className={styles.cardsGrid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <p style={{ color: "#fff", fontSize: "1.2rem" }}>
            ⚠ No projects found for this category.
          </p>
        )}
      </motion.div>
    </section>
  );
}
