import React, { useRef } from "react";
import styles from "../shadecanvas/ShaderCanvas.module.css";
import img from "../../Assets/portfolioimage.jpg";
import react from "../../Assets/react.png";
import javascript from "../../Assets/javascript.png";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import mongodb from "../../Assets/mongodb.png";
import node from "../../Assets/node.png";
import figma from "../../Assets/figma.png"; // fixed space issue
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    title: "HTML",
    description: "Strong foundation in semantic HTML for accessible and SEO-friendly web pages.",
    image: html,
  },
  {
    title: "CSS",
    description: "Expertise in Flexbox, Grid, animations, and responsive design.",
    image: css,
  },
  {
    title: "Javascript",
    description: "Dynamic scripting for interactive web experiences.",
    image: javascript,
  },
  {
    title: "React.js",
    description: "Building interactive UI with hooks, components, and state management.",
    image: react,
  },
  {
    title: "Node.js",
    description: "Backend development with Express.js, REST APIs, and server-side logic.",
    image: node,
  },
  {
    title: "Express.js",
    description: "Creating robust APIs and middleware for scalable web apps.",
    image: img,
  },
  {
    title: "MongoDB",
    description: "NoSQL database expertise with schema design and queries.",
    image: mongodb,
  },
  {
    title: "Mongoose",
    description: "ODM for MongoDB, schema validation, and database relationships.",
    image: img,
  },
  {
    title: "Figma",
    description: "UI/UX design, prototyping, and collaborative design workflows.",
    image: figma,
  },
  {
    title: "CorelDraw",
    description: "Graphic design and vector illustration for branding & creatives.",
    image: img,
  },
  {
    title: "Framer",
    description: "Prototyping and interactive design for modern web/mobile apps.",
    image: img,
  },
  {
    title: "Digital Marketing",
    description: "SEO, SEM, content, and campaign strategy.",
    image: img,
  },
  {
    title: "Instagram Promotion",
    description: "Social media growth strategies and branding campaigns.",
    image: img,
  },
  {
    title: "Online Mern Stack Course",
    description: "End-to-end MERN development training.",
    image: img,
  },
  {
    title: "C/C++/Python/JS Course",
    description: "Programming language fundamentals and practice.",
    image: img,
  },
  {
    title: "Data Entry",
    description: "Efficient and accurate data entry skills.",
    image: img,
  },
];

const Collections = () => {
  const miniCardGridRef = useRef(null);

  const scrollLeft = () => {
    if (miniCardGridRef.current) {
      miniCardGridRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (miniCardGridRef.current) {
      miniCardGridRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.pageWrap}>
      <section className={styles.postSliders}>
        <h2 className={styles.sectionHeading}>My Skills</h2>

        <div className={styles.postSlider}>
          {/* Header card */}
          <div className={`${styles.postSliderHeader} ${styles.headerCard}`}>
            <h1>TechNova</h1>
            <h2 className={styles.headerCardTitle}>Tech & Design Skills</h2>
            
            <p className={styles.headerCardSponsor}>
  At <strong>TechNova</strong>, I help clients build modern, responsive and 
  user-friendly digital solutions. From <em>UI/UX design</em> to full-stack 
  <em>web development</em>, e-commerce platforms, and branding — I deliver 
  creative and scalable services tailored to your business needs.
</p>

            {/* TechNova centered box */}
            {/* <div className={styles.techBox}>
              <div className={styles.techBoxInner}>
                <span className={styles.techBoxTitle}>TECHNOVA</span>
                <small className={styles.techBoxSub}>UI • React • MERN</small>
              </div>
            </div> */}

            {/* Scroll buttons */}
            <div className={styles.scrollButtons}>
              <button onClick={scrollLeft} className={styles.scrollButton}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={scrollRight} className={styles.scrollButton}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          {/* Mini Card Grid */}
          <div className={styles.miniCardGrid} ref={miniCardGridRef}>
            {skills.map((skill, index) => (
              <article key={index} className={styles.miniCard}>
                <h3 className={styles.miniCardTitle}>{skill.title}</h3>
                <div className={styles.miniCardDescription}>
                  {skill.description}
                </div>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className={styles.miniCardImg}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
