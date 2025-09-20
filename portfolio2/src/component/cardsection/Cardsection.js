import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../cardsection/cardsection.module.css';
import Hireme from "../../Assets/hire me.png";
import allproject from "../../Assets/project.png";
import design from "../../Assets/ux.png";
import webdev from "../../Assets/webdev.png";
import writing from "../../Assets/writing.png";
import marketing from "../../Assets/marketing.png";

export default function CardSectionNav() {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    switch (type) {
      case 'all':
        navigate('/category/all');
        break;
      case 'design':
        navigate('/category/design');
        break;
      case 'webdev':
        navigate('/category/web development');
        break;
      case 'writing':
        navigate('/category/writing');
        break;
      case 'marketing':
        navigate('/category/marketing');
        break;
      case 'hire':
        navigate('/contact');
        break;
      default:
        navigate('/category/all');
    }
  };

  return (
    <div className={styles['trade-section']}>
      <div className={styles['trade-grid']}>

        {/* Big card - All Projects */}
        <div className={`${styles.card} ${styles['card-large']}`}>
          <div className={styles['card-text']}>
            <h2>All Projects</h2>
            <p>Browse all my work — Web Development, Design, Writing & Marketing.</p>

            {/* Button + Link inline */}
            <div className={styles['card-actions']}>
              <button
                className={styles.ctaBtn}
                onClick={() => handleNavigation('all')}
              >
                View All
              </button>
              <a
                href="#"
                className={styles.learnMore}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('all');
                }}
              >
                Learn more &gt;
              </a>
            </div>
          </div>

          <div className={styles['card-image']}>
            <img src={allproject} alt="All projects demo" className={styles.bigImage} />
          </div>
        </div>

        {/* Small card 1 - Design */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Design Projects</h3>
          <p>UI/UX, branding, logos and creative visuals.</p>
          <img src={design} alt="Design demo" className={styles.smallImage} />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('design');
            }}
          >
            See Designs &gt;
          </a>
        </div>

        {/* Small card 2 - Web Development */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Web Development</h3>
          <p>Responsive websites & ReactJS apps.</p>
          <img src={webdev} alt="Web development demo" className={styles.smallImage} />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('webdev');
            }}
          >
            View Work &gt;
          </a>
        </div>

        {/* Small card 3 - Writing */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Writing Projects</h3>
          <p>Blogs, guides, and engaging articles.</p>
          <img src={writing} alt="Writing demo" className={styles.smallImage} />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('writing');
            }}
          >
            Read More &gt;
          </a>
        </div>

        {/* Small card 4 - Marketing */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Marketing Campaigns</h3>
          <p>Social media, promotions and product launches.</p>
          <img src={marketing} alt="Marketing demo" className={styles.smallImage} />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('marketing');
            }}
          >
            Explore Campaigns &gt;
          </a>
        </div>

        {/* Small card 5 - Hire Me */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Hire Me</h3>
          <p>Looking for a developer or designer? Let’s collaborate.</p>
          <img src={Hireme} alt="Hire me demo" className={styles.smallImage} />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('hire');
            }}
          >
            Contact Me &gt;
          </a>
        </div>

      </div>
    </div>
  );
}
