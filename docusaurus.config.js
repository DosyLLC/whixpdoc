import { themes } from "prism-react-renderer";

const config = {
  title: "Whixp",
  url: "https://whixp.dosy.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "dosy",
  projectName: "whixp",
  plugins: ["docusaurus-plugin-sass"],
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "az"],
  },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      defaultLanguage: "dart",
      additionalLanguages: ["dart", "yaml"],
      theme: themes.vsLight,
      darkTheme: themes.vsDark,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Whixp",
      logo: {
        alt: "Whixp",
        src: "img/logo_dark.svg",
        srcDark: "img/logo.svg",
        target: "_self",
        width: 32,
        height: 32,
      },
      items: [
        {
          to: "docs/introduction/what-is-xmpp",
          activeBasePath: "docs",
          label: "Documentation",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/vsevex/whixp",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Dosy. Built with Docusaurus.`,
    },
  },
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editLocalizedFiles: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/DosyLLC/whixpdoc",
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],
};

export default config;
