import React from 'react';
import styles from './document.module.css';

const DocumentationLayout = () => {
  return (
    <div className={styles.container}>
      {/* Main Layout */}
      <div className={styles.main}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Getting started</h3>
          <ul className={styles.sidebarList}>
            {[
              'Introduction',
              'Download',
              'Contents',
              'Browsers & devices',
              'JavaScript',
              'Webpack',
              'Parcel',
              'Vite',
              'Accessibility',
              'RFS',
              'RTL',
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className={index === 0 ? styles.active : styles.sidebarLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h3 className={styles.sidebarTitle}>Customize</h3>
          <ul className={styles.sidebarList}>
            {['Overview', 'Sass', 'Options', 'Color'].map((item, index) => (
              <li key={index}>
                <a href="#" className={styles.sidebarLink}>{item}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className={styles.content}>
          <h1>Quick start</h1>
          <p>
            Looking to quickly add Bootstrap to your project? Use the CDN links below, 
            and you’re good to go!
          </p>

          <h2>1. Create a new <code>index.html</code> file.</h2>
          <pre className={styles.codeBlock}>
            <code>{`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>`}</code>
          </pre>

          <h2>2. Include Bootstrap’s CSS and JS.</h2>
          <pre className={styles.codeBlock}>
            <code>{`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>`}</code>
          </pre>
        </main>

        {/* Right Sidebar */}
        
      </div>
    </div>
  );
};

export default DocumentationLayout;
