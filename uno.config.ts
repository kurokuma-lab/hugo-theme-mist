import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

const themeExtension = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#4a4a4a',
    border: '#e5e7eb',
    hover: '#f8f9fa',
    link: '#2563eb',
    'link-hover': '#1d4ed8',
    table: {
      bg: '#ffffff',
      header: '#f8f9fa',
      border: '#e5e7eb',
      hover: '#f3f4f6',
    },
    hr: '#e5e7eb',
    blockquote: '#f9fafb'
  },
  spacing: {
    content: '1.5rem',
    paragraph: '0.75rem',
    section: '3rem'
  },
  fontFamily: {
    serif: ['Linux Libertine', 'Times New Roman', 'serif'],
    sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    mono: ['SF Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
  },
  fontSize: {
    base: '1.0625rem',
    h1: '1.5rem',
    h2: '1.375rem',
    h3: '1.25rem',
    h4: '1.125rem',
    h5: '1rem',
    h6: '0.875rem',
    small: '0.9375rem'
  },
  lineHeight: {
    normal: '1.7',
    tight: '1.3'
  }
}

export default defineConfig({
  theme: {
    ...themeExtension
  },
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
  preflights: [
    {
      getCSS: () => `
        /* Base Content Styles */
        .post-content {
          font-family: var(--un-font-sans);
          color: var(--un-colors-primary);
          line-height: var(--un-line-height-normal);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          padding: 0 var(--un-spacing-content);
          box-sizing: border-box;
        }

        /* Typography */
        .post-content h1,
        .post-content h2,
        .post-content h3,
        .post-content h4,
        .post-content h5,
        .post-content h6 {
          font-family: var(--un-font-serif);
          font-weight: 500;
          color: var(--un-colors-primary);
          line-height: var(--un-line-height-tight);
        }

        .post-content h1 { font-size: var(--un-font-size-h1); margin: var(--un-spacing-section) 0 1.5rem; }
        .post-content h2 { font-size: var(--un-font-size-h2); margin: calc(var(--un-spacing-section) * 0.8) 0 1.25rem; }
        .post-content h3 { font-size: var(--un-font-size-h3); margin: calc(var(--un-spacing-section) * 0.6) 0 1rem; }
        .post-content h4 { font-size: var(--un-font-size-h4); margin: 1.5rem 0 0.75rem; }
        .post-content h5 { font-size: var(--un-font-size-h5); margin: 1.25rem 0 0.5rem; }
        .post-content h6 { font-size: var(--un-font-size-h6); margin: 1rem 0 0.5rem; color: var(--un-colors-secondary); }

        /* Links */
        .post-content a {
          color: var(--un-colors-primary);
          text-decoration: none;
          border-bottom: 1px solid var(--un-colors-border);
          transition: border-color 0.2s ease;
        }

        .post-content a:hover {
          border-color: var(--un-colors-primary);
        }

        /* Lists */
        .post-content ul,
        .post-content ol {
          padding-left: 2rem;
          margin: 1.25rem 0;
        }

        .post-content li + li {
          margin-top: 0.5rem;
        }

        /* Images */
        .post-content img:not(.figure-container *) {
          max-width: 100%;
          height: auto;
          margin: var(--un-spacing-content) auto;
          display: block;
        }

        /* Tables */
        .post-content .table-wrapper {
          width: 100%;
          overflow-x: auto;
          margin: var(--un-spacing-content) 0;
        }

        .post-content table:not(.highlight *) {
          margin: var(--un-spacing-content) auto;
          width: fit-content;
          min-width: 50%;
          max-width: 90%;
          border-collapse: collapse;
          font-size: var(--un-font-size-small);
          line-height: 1.4;
          background-color: var(--un-colors-table-bg);
          border: 1px solid var(--un-colors-table-border);
          text-align: center;
        }

        .post-content th:not(.highlight *),
        .post-content td:not(.highlight *) {
          padding: 0.5rem 1rem;
          border: 1px solid var(--un-colors-table-border);
        }

        .post-content th:not(.highlight *) {
          background-color: var(--un-colors-table-header);
          font-weight: 600;
          border-bottom: 2px solid var(--un-colors-table-border);
        }

        .post-content tr:hover:not(.highlight *) {
          background-color: var(--un-colors-table-hover);
        }

        /* Code */
        .post-content code:not(.highlight *) {
          font-family: var(--un-font-mono);
          font-size: 0.9em;
          background: var(--un-colors-hover);
          padding: 0.2em 0.4em;
          border-radius: 3px;
        }

        .post-content pre:not(.highlight *) {
          background: var(--un-colors-hover);
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }

        /* Math */
        .post-content .katex {
          font-size: 1.1em;
        }

        .post-content .katex-display {
          overflow-x: auto;
          max-width: 100%;
          margin: 2rem 0;
          padding: 0.5rem 0;
        }

        /* Horizontal Rule */
        .post-content hr {
          margin: var(--un-spacing-section) auto;
          width: 30%;
          border-top: 2px solid var(--un-colors-hr);
        }

        /* Blockquotes */
        .post-content blockquote {
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          background: var(--un-colors-blockquote);
          border-left: 4px solid var(--un-colors-border);
          font-style: italic;
        }
      `
    }
  ]
})