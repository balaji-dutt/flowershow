import config from "../content/config";

const defaultConfig = {
  title: "Flowershow",
  description: "",
  showEditLink: false,
  showToc: true,
  author: "",
  authorLogo: "",
  authorUrl: "",
  // Google analytics key e.g. G-XXXX
  analytics: "",
  // content source directory for markdown files
  // DO NOT CHANGE THIS VALUE
  // if you have your notes in another (external) directory,
  // /content dir should be a symlink to that directory
  content: "content",
  avatarPlaceholder: "/_flowershow/avatarplaceholder.png",
  contentExclude: [],
  contentInclude: [],
  blogDir: "blog",
  peopleDir: "people",
  // Theme
  theme: {
    default: "dark",
    toggleIcon: "/_flowershow/theme-button.svg",
  },
  navLinks: [
    // { href: '/about', name: 'About' },
  ],
};

export const siteConfig = {
  ...defaultConfig,
  ...config,
  // prevent theme object overrides for
  // values not provided in userConfig
  theme: {
    ...defaultConfig.theme,
    ...config?.theme,
  },
};
