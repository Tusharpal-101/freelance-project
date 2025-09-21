import React, { useState } from "react";
import styles from "../contact/contact.module.css";
import img from "../../Assets/portfolioimage-removebg-preview.png"

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ⚡️ Fake API call simulation
    setTimeout(() => {
      alert("Message sent! ✅ I'll reply within 24 hours.");
      setLoading(false);
    }, 2000);
  };

  return (
    <section className={styles.section}>
      {/* Heading */}
      <div className={styles.heading}>
        <h1>
          Let’s <span className={styles.gradient}>Work Together</span>
        </h1>
        <p>
          I’m open to freelance opportunities. Whether you have a project or
          just want to say hi, feel free to reach out. Let’s build something
          amazing!
        </p>
      </div>

      {/* Contact Box */}
      <div className={styles.container}>
        {/* Left Side Form */}
        <div className={styles.formSide}>
          <h2>Contact Me</h2>
          <p>
            Looking for a <b>developer</b> or <b>designer</b> for your next
            project? Fill out this form and I’ll respond quickly to discuss your
            idea.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input type="text" placeholder="Your Name" required />
              <input
                type="text"
                placeholder="Company / Brand (Optional)"
              />
            </div>
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number (Optional)" />

            {/* Project type dropdown */}
            <select className={styles.select}>
              <option value="">Project Type</option>
              <option>Website</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>Branding</option>
              <option>Other</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Tell me about your project..."
              rows="4"
              required
            ></textarea>

            {/* File upload */}
            <input type="file" className={styles.fileInput} />

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.ctaBtn}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                "Send Message 🚀"
              )}
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className={styles.imageSide}>
          <img
            src={img}
            alt="Freelancer"
          />
          <p>
            “Every great collaboration starts with a conversation. Let’s connect
            and bring your ideas to life.”
          </p>
          <span>– Your Freelance Partner</span>
        </div>
      </div>
    </section>
  );
}
