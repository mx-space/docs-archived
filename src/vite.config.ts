/*
 * @FilePath: /docs-next/src/vite.config.ts
 * @author: Wibus
 * @Date: 2022-04-03 08:02:49
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-03 18:21:04
 * Coding With IU
 */

import { defineConfig } from "vite";
import { NavbarFix } from "./.vitepress/plugins/navbar";

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
  },
  server: {
    hmr: {
      // overlay: false,
    },
  },
  plugins: [NavbarFix()],

  optimizeDeps: {
    exclude: ["@vue/theme"],
  },

  json: {
    stringify: true,
  },
});
