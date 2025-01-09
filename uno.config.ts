import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'


const themes = {
    default: {
        breakpoints: {
            'sm': '768px',
            'md': '1024px',
            'lg': '1280px',
        },
        fontFamily: {
            serif: ['Source Han Serif SC', 'Linux Libertine', 'STSong', 'Times New Roman', 'serif'],
            sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Microsoft JhengHei', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            mono: ['SF Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
        },
        fontSize: {
            base: '1.0625rem', /* 17px */
            h1: '1.5rem', /* 24px */
            h2: '1.375rem', /* 22px */
            h3: '1.25rem', /* 20px */
            h4: '1.125rem', /* 18px */
            h5: '1rem', /* 16px */
            h6: '0.875rem', /* 14px */
            small: '0.9375rem' /* 15px */
        },
        colors: {
            primary: '#1a1a1a',
            secondary: '#4a4a4a',
            border: '#e5e7eb',
            hover: '#f8fafc',
            'list-border': '#94a3b8',
            link: '#94a3b8',
            'link-hover': '#1a1a1a',
            'table-bg': '#ffffff',
            'table-header': '#f8fafc',
            'table-border': '#e5e7eb',
            'table-hover': '#f3f4f6',
            'hr': '#e5e7eb',
            'blockquote': '#f8fafc'
        },
        spacing: {
            content: '1.5rem',
            paragraph: '0.75rem',
            section: '3rem',
            'line-height': 1.7
        }
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
            getCSS: (t) => `
        :root {
            /* Typography */
            --serif-font: ${t.theme.extends.fontFamily.serif.join(', ')};
            --sans-font: ${t.theme.extends.fontFamily.sans.join(', ')};
            --mono-font: ${t.theme.extends.fontFamily.mono.join(', ')};


            /* Font Sizes */
            --base-size: ${t.theme.extends.fontSize.base};
            --h1-size: ${t.theme.extends.fontSize.h1};
            --h2-size: ${t.theme.extends.fontSize.h2};
            --h3-size: ${t.theme.extends.fontSize.h3};
            --h4-size: ${t.theme.extends.fontSize.h4};
            --h5-size: ${t.theme.extends.fontSize.h5};
            --h6-size: ${t.theme.extends.fontSize.h6};
            --small-size: ${t.theme.extends.fontSize.small};

            /* Spacing */
            --content-gap: ${t.theme.extends.spacing.content};
            --paragraph-spacing: ${t.theme.extends.spacing.paragraph};
            --line-height: ${t.theme.extends.lineHeight};
            --section-gap: ${t.theme.extends.spacing.section};

            /* Colors */
            --text-primary: ${t.theme.extends.colors.primary};
            --text-secondary: ${t.theme.extends.colors.secondary};
            --border-color: ${t.theme.extends.colors.border};
            --list-border: ${t.theme.extends.colors['list-border']};
            --hover-color: ${t.theme.extends.colors.hover};
            --link-color: ${t.theme.extends.colors.link};
            --link-hover: ${t.theme.extends.colors['link-hover']};
            --table-bg: ${t.theme.extends.colors['table-bg']};
            --table-header-bg: ${t.theme.extends.colors['table-header']};
            --table-border: ${t.theme.extends.colors['table-border']};
            --table-hover: ${t.theme.extends.colors['table-hover']};
            --hr-color: ${t.theme.extends.colors.hr};
            --blockquote-bg: ${t.theme.extends.colors.blockquote};
        }

        .post-content {
            font-family: var(--sans-font);
            color: var(--text-primary);
            line-height: var(--line-height);
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
            padding: 0 0.5rem;
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
            border-bottom: 1px solid var(--link-color);
            transition: border-color 0.2s ease;
        }

        .post-content a:hover {
            color: var(--text-primary);
            border-color: var(--link-hover);
        }


        /* Lists - better indentation */
        .post-content ul,
        .post-content ol {
            padding-left: 2.25rem;
            margin: 1.25rem 0;
        }

        .post-content ul {
            list-style: none;
        }

        .post-content ul li {
            position: relative;
        }

        /* Dash marker for all ul list items */
        .post-content ul li::before {
            content: "-";
            position: absolute;
            left: -1.25rem;
            font-size: 1rem;
            color: var(--list-border);
            transition: all 0.2s ease;
        }

        /* Hover effect for dash marker */
        .post-content ul li:hover::before {
            color: var(--primary-color);
        }

        .post-content ol {
            list-style: none;
            counter-reset: custom-counter;
        }

        .post-content ol li {
            position: relative;
            counter-increment: custom-counter;
        }

        .post-content ol li::before {
            content: counter(custom-counter);
            position: absolute;
            left: -2rem;
            width: 1.5rem;
            height: 1.5rem;
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 500;
            color: #64748b;
            transition: all 0.2s ease;
        }

        .post-content ol li:hover::before {
            background-color: #f1f5f9;
            border-color: #94a3b8;
        }

        .post-content li+li {
            margin-top: 0.75rem;
        }

        .post-content li {
            line-height: 1.6;
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
            font-size: 0.8em;
            background: var(--hover-color);
            padding: 0.2em 0.4em;
            border-radius: 0.4em;
            border: 1px solid var(--border-color);
            display: inline-block;
        }

        .post-content pre:not(.highlight *) {
            font-family: var(--mono-font);
            background: var(--hover-color);
            padding: 1rem;
            border-radius: 4px;
            overflow-x: auto;
            border: 1px solid var(--border-color);
            display: inline-block;
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
    `}
    ]
});