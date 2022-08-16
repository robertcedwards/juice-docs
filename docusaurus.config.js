// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juicebox Docs',
  tagline: 'Fund your thing.',
  url: 'https://info.juicebox.money',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Juicebox', // Usually your GitHub org/user name.
  projectName: 'Juicebox Protocol', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/jbx-protocol/juice-docs-v2/blob/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/jbx-protocol/juice-docs-v2/blob/main',
          blogSidebarTitle: 'Articles',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Licensed under the MIT License`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  themeConfig: {
    image: 'img/juicedocs.png',
    metadata: [{ name: 'keywords', content: 'Juicebox, juicebox, crypto, cryptocurrency, ethereum, Ethereum, fundraising, treasury, treasury management, Juicebox DAO, JuiceboxDAO, juiceboxdao, juicebox dao, dao tooling, dao, daos, erc20, nft, decentralized, funding, web3, Web3' }],
    algolia: {
      appId: '6C0XLHGK46',
      apiKey: 'cf4910b7f8d618e1ee356e575db8120b',
      indexName: 'juicebox',
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      logo: {
        alt: 'Juicebox Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'dev',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'user',
          label: 'Project Creators',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'dao',
          label: 'Juicebox DAO',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
            type: 'localeDropdown',
            position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'right',
          items: [
            {
              label: 'Juicebox',
              to: 'https://juicebox.money',
            },
            {
              label: 'Discord',
              to: 'https://discord.gg/juicebox',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/juiceboxETH',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/jbx-protocol',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: 'solidity',
      additionalLanguages: ['solidity'],
    },
    metadata: [
      {
        name: "google-site-verification",
        content: "0Jp7zERBL5i76DiM-bODvBGgbjuVMEQGSuwOchP_ZnE",
      },
    ],
  },
  scripts: [
    {
      src: "https://energetic-unwavering.juicebox.money/script.js",
      defer: true,
      "data-site": "UMYOVGDG",
    },
  ],
};
module.exports = config;
