import React, { useEffect } from "react";
import styles from "../about/about.module.css";

export default function About() {
  useEffect(() => {
    const elCursor = document.querySelector(`.${styles.cursor}`);
    const elPage = document.querySelector(`.${styles.page}`);

    // Agar element na mile to function exit kar jaaye
    if (!elCursor || !elPage) return;

    const lerp = (curr, next, ratio = 0.3) => {
      const delta = next - curr;
      if (Math.abs(delta) < 0.01) return next;
      return curr + (next - curr) * ratio;
    };

    const point = { x: 0, y: 0, scale: 1 };
    const current = { x: 0, y: 0, scale: 1 };

    function update() {
      current.x = lerp(current.x, point.x);
      current.y = lerp(current.y, point.y);
      current.scale = lerp(current.scale, point.scale, 0.1);

      if (elCursor) {
        elCursor.style.setProperty("--x", point.x);
        elCursor.style.setProperty("--y", point.y);
        elCursor.style.setProperty("--scale", point.scale);

        elCursor.style.setProperty("--lag-x", current.x);
        elCursor.style.setProperty("--lag-y", current.y);
        elCursor.style.setProperty("--lag-scale", current.scale);
      }

      requestAnimationFrame(update);
    }

    update();

    function onMove(e) {
      const rect = elPage.getBoundingClientRect();
      point.x = e.clientX - rect.left;
      point.y = e.clientY - rect.top;

      let target = e.target;
      if (target && target.dataset) {
        let size = 1;
        if ("shrink" in target.dataset) size = 0.5;
        else if ("expand" in target.dataset) size = 2;
        point.scale = size;
      }
    }

    elPage.addEventListener("mousemove", onMove);

    return () => {
      elPage.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Cursor */}
      <div className={styles.cursor}>
        <div className={styles.cursorOuter}></div>
        <div className={styles.cursorInner}></div>
      </div>

      {/* About Section */}
      <div className={styles.app}>
        <header className={styles.header}>
          <div>Freelance Hub</div>
        </header>

        <main>
          <h1>About Us</h1>

          {/* Continuous Scroller */}
          <div className={styles.scrollWrapper}>
            <div className={styles.scrollTrack}>
              <div className={styles.scrollText}>
                We are{" "}
                <span className={styles.stroke} data-text="Focus Text">
                  Freelancers & Designers - Freelancers & Designers - Freelancers &
                  Designers - Freelancers & Designers
                </span>
              </div>
              <div className={styles.scrollText}>
                We are{" "}
                <span className={styles.stroke}>
                  Freelancers & Designers - Freelancers & Designers - Freelancers &
                  Designers - Freelancers & Designers
                </span>
              </div>
            </div>
          </div>

          <p className={styles.aboutText}>
            Welcome to <strong>Freelance Hub</strong> 🚀 — A place where
            developers, designers, and creators come together to build amazing
            projects. Our team specializes in <span>Web Development</span>,{" "}
            <span>UI/UX Design</span>, <span>Branding</span>, and{" "}
            <span>Mobile Apps</span>.
          </p>

          <div className={styles.actions}>
            <button data-shrink>Learn More</button>
            <button data-expand>Get Started</button>
          </div>
        </main>
      </div>
    </div>
  );
}
