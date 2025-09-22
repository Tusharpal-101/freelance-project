import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./document.module.css";

// Categories data
const categories = {
  Cards: ["All Cards", "Info Card", "Product Card", "Profile Card", "Blog Card"],
  Components: ["Buttons", "Forms", "Navbar", "Modal", "Dropdown"],
  fotter: ["Buttons", "Forms", "Navbar", "Modal", "Dropdown"],
};

// Content for each category
const contentData = {
  "All Cards": "This shows all cards available in the library.",
  "Info Card": "Info Card example content...",
  "Product Card": "Product Card example content...",
  "Profile Card": "Profile Card example content...",
  "Blog Card": "Blog Card example content...",
  "Buttons": "Button component examples...",
  "Forms": "Form component examples...",
  "Navbar": "Navbar component examples...",
  "Modal": "Modal component examples...",
  "Dropdown": "Dropdown component examples...",
};

// Reusable dropdown component
const CategoryDropdown = ({ title, categories, selectedCategory, setSelectedCategory }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  return (
    <div className={styles.dropdownWrapper}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {title}{" "}
        <span style={{ float: "right" }}>
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {open && (
        <ul className={styles.dropdownList}>
          {categories.map((cat, index) => (
            <li
              key={index}
              className={selectedCategory === cat ? styles.active : ""}
              onClick={() => {
                setSelectedCategory(cat);
                setOpen(false);
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DocumentationLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Cards");
  const [sidebarWidth, setSidebarWidth] = useState(220);
  const isResizing = useRef(false);
  const navigate = useNavigate();

  // Back button function
  const goBack = () => {
    navigate("/"); // previous page: navigate(-1)
  };

  // Sidebar resizing functions
  const startResize = (e) => {
    if (e.button !== 0) return;
    isResizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  };

  const handleResize = (e) => {
    if (!isResizing.current) return;
    const newWidth = e.clientX;
    if (newWidth >= 150 && newWidth <= 500) {
      setSidebarWidth(newWidth);
    }
  };

  const stopResize = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Sidebar */}
        <aside
          className={styles.sidebar}
          style={{ width: sidebarWidth, position: "relative" }}
        >
          {/* Back Button */}
          <button className={styles.buttongoback} onClick={goBack}>
            ← Back
          </button>

          {/* Render all category dropdowns dynamically */}
          {Object.keys(categories).map((title) => (
            <CategoryDropdown
              key={title}
              title={title}
              categories={categories[title]}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}

          {/* Resizer handle */}
          <div
            style={{
              width: "15px",
              cursor: "col-resize",
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              zIndex: 100,
              backgroundColor: "transparent",
            }}
            onMouseDown={startResize}
          />
        </aside>

        {/* Content */}
        <main className={styles.content}>
          <h1>{selectedCategory}</h1>
          <p>{contentData[selectedCategory]}</p>
         
          
        </main>
      </div>
    </div>
  );
};

export default DocumentationLayout;
