/*
 * @FilePath: /docs-next/src/.vitepress/plugins/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 08:00:56
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-03 21:04:08
 * Coding With IU
 */
import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";
const navbarTemplate = fs.readFileSync(
  path.resolve(__dirname, "../transformer/navbar.vue"),
  {
    encoding: "utf-8",
  }
);
// Due to https://github.com/vuejs/theme/commit/842e4451fbf13925d1c67aa4274f86fc5a8510f7
export function NavbarFix(): Plugin {
  return {
    name: "navbar-fix",
    enforce: "pre",
    transform(code, id) {
      if (id.includes("VPNavBarTitle.vue") && !id.endsWith(".css")) {
        return navbarTemplate;
      }
    },
  };
}
