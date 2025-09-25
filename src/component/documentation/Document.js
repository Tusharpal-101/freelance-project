// DocumentationLayout.jsx
import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp, FaCopy, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./document.module.css";
import contentData from "../documentation/ContentData";

const categories = {
  Cards: ["All Cards", "Info Card", "Product Card", "Profile Card", "Blog Card"],
  Components: ["Buttons", "Forms", "Navbar", "Modal", "Dropdown"],
};

// 🔹 Dropdown Component
function CategoryDropdown(props) {
  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen(!open);
  }

  function selectCategory(cat) {
    props.setSelectedCategory(cat);
    setOpen(false);
  }

  return (
    <div className={styles.dropdownWrapper}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {props.title}
        <span style={{ float: "right" }}>
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {open && (
        <ul className={styles.dropdownList}>
          {props.categories.map(function (cat, index) {
            return (
              <li
                key={index}
                className={props.selectedCategory === cat ? styles.active : ""}
                onClick={function () {
                  selectCategory(cat);
                }}
              >
                {cat}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function DocumentationLayout() {
  const [selectedCategory, setSelectedCategory] = useState("All Cards");
  const [sidebarWidth, setSidebarWidth] = useState(220); // default fixed width
  const isResizing = useRef(false);
  const navigate = useNavigate();

  // 🔹 Back button
  function goBack() {
    navigate("/");
  }

  // 🔹 Start resizing
  function startResize(e) {
    if (e.button !== 0) return; // sirf left mouse button
    isResizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  }

  // 🔹 Handle resizing
  function handleResize(e) {
    if (!isResizing.current) return;

    const sidebarLeft = document
      .querySelector(`.${styles.sidebar}`)
      .getBoundingClientRect().left;

    const newWidth = e.clientX - sidebarLeft;

    if (newWidth >= 180 && newWidth <= 500) {
      setSidebarWidth(newWidth);
    }
  }

  // 🔹 Stop resizing
  function stopResize() {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  }

  // 🔹 Copy code
  function copyCode() {
    navigator.clipboard.writeText(contentData[selectedCategory].code);
    alert("✅ Code copied to clipboard!");
  }

  // 🔹 Download code
  function downloadCode() {
    const element = document.createElement("a");
    const file = new Blob([contentData[selectedCategory].code], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedCategory.replace(/\s+/g, "_")}.jsx`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* 🔹 Sidebar */}
        <aside
          className={styles.sidebar}
          style={{ width: sidebarWidth, position: "relative" }}
        >
          {/* Back Button */}
          <button className={styles.buttongoback} onClick={goBack}>
            ← Back
          </button>

          {/* 🔹 Render dropdowns */}
          {Object.keys(categories).map(function (title) {
            return (
              <CategoryDropdown
                key={title}
                title={title}
                categories={categories[title]}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}

          {/* Resizer handle */}
          <div
            style={{
              width: "8px",
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

        {/* 🔹 Content */}
        <main className={styles.content}>
          <h1>{selectedCategory}</h1>

          <h2>Definition</h2>
          <p>{contentData[selectedCategory].definition}</p>

          <h2>Example Code</h2>
          <div className={styles.codeBlock}>
            <div className={styles.codeActions}>
              <button onClick={copyCode}>
                <FaCopy /> Copy
              </button>
              <button onClick={downloadCode}>
                <FaDownload /> Download
              </button>
            </div>
            <pre>
              <code>{contentData[selectedCategory].code}</code>
            </pre>
          </div>

          <h2>Explanation</h2>
          <p>{contentData[selectedCategory].details}</p>
        </main>
      </div>
    </div>
  );
}

export default DocumentationLayout;
