import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NeoApps Docs',
  // tagline: 'Create Apps with Generative AI',
  favicon: 'img/Favicon_neoapps.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Neoapps', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // homePage: 'intro',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false
        //{
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      } satisfies Preset.Options,
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig: {

        algolia: {
          // The application ID provided by Algolia
          appId: 'YOUR_APP_ID',
    
          // Public API key: it is safe to commit it
          apiKey: 'YOUR_SEARCH_API_KEY',
    
          indexName: 'YOUR_INDEX_NAME',
    
          // Optional: see doc section below
          contextualSearch: true,
    
          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          //externalUrlRegex: 'external\\.com|domain\\.com',
    
          // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
          // replaceSearchResultPathname: {
          //   from: '/docs/', // or as RegExp: /\/docs\//
          //   to: '/',
          // },
    
          // Optional: Algolia search parameters
          //searchParameters: {},
    
          // Optional: path for search page that enabled by default (`false` to disable it)
         // searchPagePath: 'search',
    
          //... other Algolia params
        },




    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'NeoApps.AI Logo',
        src: 'img/neoapps_ai_logo.png',
        srcDark: 'img/neoapps_ai_logo_dark.png',
      },
      items: [
        {
          to: '/Roadmap',
          position: 'left',
          label: 'Roadmap',
        },
        {
          to: '/Change-log',
          position: 'left',
          label: 'Changelog',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/intro',
            },
            {
              label: 'Getting Started',
              to: '/category/getting-started-with-neoappsai',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Pricing',
              to: 'https://neoapps.ai/index-ai-pricing',
            },
            {
              label: 'FAQs',
              to: 'https://neoapps.ai/helpcenter-faqs',
            },
            {
              label: 'Terms of Services',
              to: 'https://neoapps.ai/page-terms-of-use',
            },
            {
              label: 'Privacy Policy',
              to: 'https://neoapps.ai/page-privacy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/showcase/neoapps-ai/',
            },
          ]
        },
         {
          title: 'More',
          items: [
            {
              label: 'NeoApps.AI',
              to: 'https://neoapps.ai/',
            },
          ],
        },
      ],
      logo: {
        alt: 'NeoApps.AI Logo',
        //src: 'img/neoapps_ai_logo.png',
        src: 'img/neoapps.ico',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Neopric, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
