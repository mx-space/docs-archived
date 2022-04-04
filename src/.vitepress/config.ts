// @ts-ignore
import base from "@vue/theme/config";
import { resolve } from "path";
import { UserConfig } from "vitepress";
import navBar, {
  deployBar,
  devBar,
  helpBar,
  introduceBar,
  optionsBar,
} from "./configs/navbar";
import highlight from "./plugins/highlight";

const themeConfig = async () => {
  const config = await base();
  // @ts-ignore
  config.markdown.highlight = await highlight();
  return config;
};

const sidebar = [
  { text: "介绍", items: introduceBar },
  { text: "部署", items: deployBar },
  { text: "设置", items: optionsBar },
  { text: "帮助", items: helpBar },
  { text: "开发", items: devBar },
];

const config: UserConfig = {
  extends: themeConfig,

  title: "Mix Space",
  description: "An alternative personal space.",
  lang: "zh-CN",
  outDir: resolve(__dirname, "../../dist"),

  scrollOffset: "header",

  themeConfig: {
    editLink: {
      repo: "mx-space/docs",
      text: "编辑此页",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/mx-space" }],

    nav: navBar,
    sidebar: {
      "/introduce/": sidebar,
      "/options/": sidebar,
      "/deploy/": sidebar,
      "/help/": sidebar,
      "/dev/": sidebar,
    },
    footer: {
      license: {
        text: "AGPLv3 License",
        link: "https://github.com/mx-space/mx-server/blob/master/LICENSE",
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Innei`,
    },
  },
  vue: {
    reactivityTransform: true,
  },
};

export default config;
