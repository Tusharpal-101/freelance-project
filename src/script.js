import React from "react";
import styles from "../src/component/css/script.module.css";

// Raindrop component
const Raindrop = ({ left, delay, duration }) => {
  return (
    <div
      className={styles.raindrop}
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

// Dot component
const Dot = ({ top, left, delay, duration }) => {
  return (
    <div
      className={styles.dot}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

const RainBanner = () => {
  // Raindrops
  const raindrops = Array.from({ length: 150 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  }));

  // Dots (floating)
  const dots = Array.from({ length: 30 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
  }));

  return (
    <div className={styles.banner}>
      {/* Rain Layer */}
      <div className={styles.rainLayer}>
        {raindrops.map((drop, i) => (
          <Raindrop
            key={`drop-${i}`}
            left={drop.left}
            delay={drop.delay}
            duration={drop.duration}
          />
        ))}
      </div>

      {/* Dot Layer */}
      <div className={styles.dotLayer}>
        {dots.map((dot, i) => (
          <Dot
            key={`dot-${i}`}
            top={dot.top}
            left={dot.left}
            delay={dot.delay}
            duration={dot.duration}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1>Welcome to Rainy Banner</h1>
        <p> We build modern websites and web apps with stunning UI/UX design. Let's bring your ideas to life! 🚀</p>
      </div>
        <button className={styles.ctaBtn}>Hire Me</button>
    </div>
  );
};

export default RainBanner;
