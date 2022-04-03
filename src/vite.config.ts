/*
 * @FilePath: /docs-next/src/vite.config.ts
 * @author: Wibus
 * @Date: 2022-04-03 08:02:49
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-03 16:59:03
 * Coding With IU
 */

import { defineConfig } from "vite";
import { NavbarFix } from './.vitepress/plugins/navbar'

export default defineConfig(async() => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      NavbarFix(),
    ],

    optimizeDeps: {
      exclude: [
        '@vue/theme'
      ]
    }
  }
})