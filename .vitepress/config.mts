import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Starfish",
  description: "The AI workspace for teams — documentation and guides",
  srcDir: "docs",
  outDir: ".vitepress/dist",
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
  ],

  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: false,

    nav: [
      { text: "Guide", link: "/getting-started/introduction" },
      { text: "Integrations", link: "/integrations/overview" },
      { text: "Tools", link: "/tools/terminal" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "Installation", link: "/getting-started/installation" },
          { text: "Quick Start", link: "/getting-started/quick-start" },
          { text: "Setup Wizard", link: "/getting-started/setup-wizard" },
        ],
      },
      {
        text: "Chat & AI",
        items: [
          { text: "Using Chat", link: "/chat/using-chat" },
          { text: "Models & Providers", link: "/chat/models" },
          { text: "Prompt Builder", link: "/chat/prompt-builder" },
          { text: "Permissions & Safety", link: "/chat/permissions" },
          { text: "Artifacts", link: "/chat/artifacts" },
        ],
      },
      {
        text: "Agents",
        items: [
          { text: "Overview", link: "/agents/overview" },
          { text: "Managing Agents", link: "/agents/managing-agents" },
          { text: "Knowledge Packs", link: "/agents/knowledge-packs" },
        ],
      },
      {
        text: "Integrations",
        items: [
          { text: "Overview", link: "/integrations/overview" },
          { text: "Google Workspace", link: "/integrations/google-workspace" },
          { text: "Google Marketing Suite", link: "/integrations/google-marketing" },
          { text: "ClickUp", link: "/integrations/clickup" },
          { text: "GitHub", link: "/integrations/github" },
          { text: "Figma", link: "/integrations/figma" },
          { text: "Vercel", link: "/integrations/vercel" },
          { text: "Facebook Ads", link: "/integrations/facebook-ads" },
          { text: "Zapier", link: "/integrations/zapier" },
          { text: "Canva", link: "/integrations/canva" },
          { text: "GoHighLevel", link: "/integrations/gohighlevel" },
          { text: "Apify", link: "/integrations/apify" },
          { text: "Stitch", link: "/integrations/stitch" },
          { text: "Playwright", link: "/integrations/playwright" },
        ],
      },
      {
        text: "Built-in Tools",
        items: [
          { text: "Terminal", link: "/tools/terminal" },
          { text: "Browser", link: "/tools/browser" },
          { text: "File Management", link: "/tools/files" },
        ],
      },
      {
        text: "Media Generation",
        items: [
          { text: "Image Generation", link: "/media/image-generation" },
          { text: "Video Generation", link: "/media/video-generation" },
        ],
      },
      {
        text: "Settings",
        items: [
          { text: "General Settings", link: "/settings/general" },
          { text: "Keyboard Shortcuts", link: "/settings/keyboard-shortcuts" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/cainandanton/starfish-releases/releases" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Built by Starfish Solutions",
      copyright: "Copyright © 2026 Starfish Solutions",
    },
  },

  // Force dark mode as default
  appearance: "dark",

  vite: {},
});
