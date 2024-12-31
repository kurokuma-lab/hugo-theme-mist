import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'


const themes = {
  default: {
    breakpoints: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
    },
  }
};

const selectedTheme = themes['default'];

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      }
    })
  ],
  theme: {
    extends: selectedTheme
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          /* Typography */
          --serif-font: "Linux Libertine", "Times New Roman", serif;
          --sans-font: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --mono-font: "SF Mono", SFMono-Regular, Consolas, monospace;

          /* Font Sizes */
          --base-size: 1.0625rem; /* 17px */
          --h1-size: 1.5rem; /* 24px */
          --h2-size: 1.375rem; /* 22px */
          --h3-size: 1.25rem; /* 20px */
          --h4-size: 1.125rem; /* 18px */
          --h5-size: 1rem; /* 16px */
          --h6-size: 0.875rem; /* 14px */
          --small-size: 0.9375rem; /* 15px */

          /* Spacing */
          --content-gap: 1.5rem;
          --paragraph-spacing: 0.75rem;
          --line-height: 1.7;
          --section-gap: 3rem;

          /* Colors */
          --text-primary: #1a1a1a;
          --text-secondary: #4a4a4a;
          --border-color: #e5e7eb;
          --hover-color: #f8f9fa;
          --link-color: #2563eb;
          --link-hover: #1d4ed8;
          --table-bg: #ffffff;
          --table-header-bg: #f8f9fa;
          --table-border: #e5e7eb;
          --table-hover: #f3f4f6;
          --hr-color: #e5e7eb;
          --blockquote-bg: #f9fafb;
      }

      .post-content {
          font-family: var(--sans-font);
          color: var(--text-primary);
          line-height: var(--line-height);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          padding: 0 1rem;
          box-sizing: border-box;
      }

      /* Handle wide content */
      .post-content pre,
      .post-content table,
      .post-content img {
          max-width: 100%;
          overflow-x: auto;
      }

      /* Headers */
      .post-content h1,
      .post-content h2,
      .post-content h3,
      .post-content h4,
      .post-content h5,
      .post-content h6 {
          font-family: var(--serif-font);
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.3;
          transition: color 0.2s ease;
      }

      .post-content h1 {
          font-size: var(--h1-size);
          margin: var(--section-gap) 0 1.5rem;
      }

      .post-content h2 {
          font-size: var(--h2-size);
          margin: calc(var(--section-gap) * 0.8) 0 1.25rem;
      }

      .post-content h3 {
          font-size: var(--h3-size);
          margin: calc(var(--section-gap) * 0.6) 0 1rem;
      }

      .post-content h4 {
          font-size: var(--h4-size);
          margin: 1.5rem 0 0.75rem;
      }

      .post-content h5 {
          font-size: var(--h5-size);
          margin: 1.25rem 0 0.5rem;
      }

      .post-content h6 {
          font-size: var(--h6-size);
          margin: 1rem 0 0.5rem;
          color: var(--text-secondary);
      }

      /* Text elements */
      .post-content p {
          margin-bottom: var(--paragraph-spacing);
          hyphens: auto;
      }

      .post-content a {
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1px solid var(--border-color);
          transition: border-color 0.2s ease;
      }

      .post-content a:hover {
          border-color: var(--text-primary);
      }


      /* Lists - better indentation */
      .post-content ul,
      .post-content ol {
          padding-left: 2rem;
          margin: 1.25rem 0;
      }

      .post-content li+li {
          margin-top: 0.5rem;
      }

      /* Exclude images inside figure shortcode */
      .post-content img:not(.figure-container *)  {
          max-width: 100%;
          height: auto;
          margin: var(--content-gap) auto;
          display: block;
        }

      /* Tables */
      /* Table wrapper for scrolling */
      .post-content .table-wrapper {
          width: 100%;
          overflow-x: auto;
          margin: var(--content-gap) 0;
      }

      /* Table styles */
      .post-content table:not(.highlight *) {
          margin: var(--content-gap) auto;
          width: fit-content;
          min-width: 50%;
          max-width: 90%;
          border-collapse: collapse;
          font-size: var(--small-size);
          line-height: 1.4;
          background-color: var(--table-bg);
          border: 1px solid var(--table-border);
          text-align: center;
      }

      .post-content th:not(.highlight *),
      .post-content td:not(.highlight *) {
          padding: 0.5rem 1rem;
          border: 1px solid var(--table-border);
      }

      .post-content th:not(.highlight *) {
          background-color: var(--table-header-bg);
          font-weight: 600;
          border-bottom: 2px solid var(--table-border);
      }

      .post-content tr:hover:not(.highlight *) {
          background-color: var(--table-hover);
      }

      /* Math and Code */
      .post-content code:not(.highlight *) {
          font-family: var(--mono-font);
          font-size: 0.9em;
          background: var(--hover-color);
          padding: 0.2em 0.4em;
          border-radius: 3px;
      }

      .post-content pre:not(.highlight *) {
          background: var(--hover-color);
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
      }

      /* Horizontal rule - refined */
      .post-content hr {
          margin: var(--section-gap) auto;
          width: 30%;
          border-top: 2px solid var(--hr-color);
      }

      .post-content .katex {
          font-size: 1.1em;
      }

      /* Handle math overflow */
      .post-content .katex-display {
          overflow-x: auto;
          max-width: 100%;
          margin: 2rem 0;
          padding: 0.5rem 0;
      }

      /* Blockquotes */
      .post-content blockquote {
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          background: var(--blockquote-bg);
          border-left: 4px solid var(--border-color);
          font-style: italic;
      }
      `
    }
  ]
});