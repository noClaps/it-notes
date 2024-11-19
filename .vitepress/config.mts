import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true,
  },
  cleanUrls: true,

  title: "Information Theory Notes",
  description: "Information Theory Notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      { text: "Prerequisites", link: "/prerequisites" },
      { text: "Week 1", link: "/week-1" },
      { text: "Week 2", link: "/week-2" },
      { text: "Week 3", link: "/week-3" },
      { text: "Week 4", link: "/week-4" },
      { text: "Week 5", link: "/week-5" },
    ],
    socialLinks: [
      { icon: "gitlab", link: "https://gitlab.com/noClaps/it-notes" },
    ],
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
    },
  },
});
