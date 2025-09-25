// contentData.js

const contentData = {
  // 🔹 Cards Section
  "All Cards": {
    definition: "This shows all cards available in the library.",
    code: `<div>All Cards example code...</div>`,
    details:
      "All cards are pre-designed UI components that you can reuse. They are responsive and customizable for different use cases.",
  },
  "Info Card": {
    definition: "Info Card is used to display quick information with title and description.",
    code: `<div className="info-card">Info Card Example</div>`,
    details:
      "Info cards are lightweight and used for highlighting short information like stats, announcements, or quick details.",
  },
  "Product Card": {
    definition: "Product Card is used in e-commerce websites to showcase product details.",
    code: `<div className="product-card">
  <img src="product.jpg" alt="Product" />
  <h3>Product Name</h3>
  <p>$99.99</p>
  <button>Add to Cart</button>
</div>`,
    details:
      "Product cards usually contain product image, price, title, description, and a button for adding to cart or buying.",
  },
  "Profile Card": {
    definition: "Profile Card displays information about a person.",
    code: `<div className="profile-card">
  <img src="avatar.jpg" alt="User" />
  <h3>John Doe</h3>
  <p>Web Developer</p>
</div>`,
    details:
      "Profile cards are often used in social media apps, team sections, and contact cards to show user identity, avatar, and links.",
  },
  "Blog Card": {
    definition: "Blog Card is used to show a blog preview with image and title.",
    code: `<div className="blog-card">
  <img src="blog-thumbnail.jpg" alt="Blog" />
  <h3>Blog Title</h3>
  <p>Short description...</p>
  <button>Read More</button>
</div>`,
    details:
      "Blog cards generally show thumbnail image, title, short description, and a read more button. They improve UX for blogs and articles.",
  },

  // 🔹 Components Section
  Buttons: {
    definition: "Buttons are clickable UI elements used to trigger actions.",
    code: `<button className="btn-primary">Click Me</button>`,
    details:
      "Buttons come in many variants like primary, secondary, outline, and icon buttons. They can perform navigation, form submission, etc.",
  },
  Forms: {
    definition: "Forms allow users to input and submit data.",
    code: `<form>
  <input type="text" placeholder="Enter Name" />
  <button type="submit">Submit</button>
</form>`,
    details:
      "Forms include input fields, dropdowns, checkboxes, and submit buttons. They are used to collect and validate user data.",
  },
  Navbar: {
    definition: "A Navbar (Navigation Bar) is a UI component that helps users navigate between different pages or sections of an application.",
    code: `import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional css

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;`,
    details:
      "The Navbar component contains a logo/title and navigation links. We use React Router's `Link` component for navigation instead of `<a>` tag, because `Link` prevents full page reload and provides faster routing.",
  },
  Modal: {
    definition: "Modal is a popup dialog box that overlays the page content.",
    code: `<div className="modal">
  <h2>Modal Title</h2>
  <p>This is a modal content.</p>
  <button>Close</button>
</div>`,
    details:
      "Modals are used to display important messages, forms, or confirmation boxes without leaving the current page.",
  },
  Dropdown: {
    definition: "Dropdown is a list of options that appears on clicking a button.",
    code: `<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>`,
    details:
      "Dropdowns are used to provide multiple choices in a compact form. They can be single-select or multi-select.",
  },
};

export default contentData;
