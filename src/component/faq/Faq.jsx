import React, { useState } from "react";
import styles from "../faq/faq.module.css";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What kind of freelance services do you provide?",
      answer:
        "I specialize in web development (ReactJS, JavaScript, MERN stack), UI/UX design, and creating responsive, SEO-friendly websites tailored to client requirements.",
    },
    {
      id: 2,
      question: "How can I hire you for my project?",
      answer:
        "You can contact me through the website’s contact form, email me directly, or connect via LinkedIn. Once I understand your requirements, we can discuss pricing and timelines.",
    },
    {
      id: 3,
      question: "What is the usual project timeline?",
      answer:
        "Project timelines depend on the complexity of the work. A small website may take 1–2 weeks, while larger applications can take 4–6 weeks or more. I always share a clear timeline before starting.",
    },
    {
      id: 4,
      question: "Do you offer revisions if I want changes?",
      answer:
        "Yes, I provide free revisions (usually 2–3 rounds) to make sure the project meets your expectations. Additional revisions can be discussed if needed.",
    },
    {
      id: 5,
      question: "How much will my project cost?",
      answer:
        "The cost depends on the project’s scope and features. I offer flexible packages — hourly rates, fixed-price projects, and custom pricing for long-term clients.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "I accept UPI, bank transfer, PayPal, and credit/debit cards. An upfront advance (usually 30–40%) is required to start the project.",
    },
    {
      id: 7,
      question: "How will we communicate during the project?",
      answer:
        "I stay in touch via email, WhatsApp, or Zoom/Google Meet calls. You’ll get regular updates on progress so you are always informed.",
    },
    {
      id: 8,
      question: "Do you also provide long-term support after project delivery?",
      answer:
        "Yes, I provide maintenance and support services, including bug fixes, updates, and feature enhancements as per client requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <span className={styles.badge}>Frequently Asked Questions</span>
        <h2 className={styles.title}>Your questions answered</h2>
        <p className={styles.subtitle}>
          Here are the most common questions clients ask me before hiring. 
          This will help you understand how I work and what you can expect when collaborating with me.
        </p>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{faq.question}</h3>
              <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} My Freelance Startup. All rights reserved.</p>
      </footer>
    </div>
  );
}
