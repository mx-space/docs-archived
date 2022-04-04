/*
 * @FilePath: /docs-next/src/.vitepress/plugins/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 08:00:56
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-04 19:13:13
 * Coding With IU
 */
import type { Plugin } from 'vite'

// Due to https://github.com/vuejs/theme/commit/842e4451fbf13925d1c67aa4274f86fc5a8510f7
export function NavbarFix(): Plugin {
  return {
    name: 'navbar-fix',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('VPNavBarTitle.vue') && !id.endsWith('.css')) {
        return `
<template>
  <a class="VPNavBarTitle" href="/">
  <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="79px" viewBox="0 0 80 79" version="1.1">
  <!-- Generator: Sketch 59 (86127) - https://sketch.com -->
  <title>Group</title>
  <desc>Created with Sketch.</desc>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Custom-Preset" transform="translate(-10.000000, -10.000000)">
          <g id="Group" transform="translate(10.000000, 10.000000)">
              <g transform="translate(0.756668, 0.000666)" fill-rule="nonzero">
                  <g id="Shape-2" fill="#000000">
                      <path d="M39.1693023,0 C17.5365319,0 0,17.5365319 0,39.1693023 C0,60.8020728 17.5365319,78.3386047 39.1693023,78.3386047 C60.8020728,78.3386047 78.3386047,60.8020728 78.3386047,39.1693023 C78.3386047,17.5365319 60.8020728,0 39.1693023,0 Z M39.1693023,73.9864599 C19.9406566,73.9864599 4.3521447,58.3979481 4.3521447,39.1693023 C4.3521447,19.9406566 19.9406566,4.3521447 39.1693023,4.3521447 C58.3979481,4.3521447 73.9864599,19.9406566 73.9864599,39.1693023 C73.9864599,58.3979481 58.3979481,73.9864599 39.1693023,73.9864599 Z" id="Shape"/>
                  </g>
                  <circle id="Oval" cx="39.1693023" cy="39.1693023" r="31.5265116"/>
              </g>
              <g transform="translate(19.756668, 19.000666)" id="Shape" stroke="#000000" stroke-width="1.8">
                  <path d="M20.0448094,40.0465116 L0,20.0448094 L20.0448094,0 L40.0465116,20.0017023 L20.0448094,40.0465116 Z M36.2325581,22.8837209 L29.0858272,16.1484414 L20.0447821,7.62790698 L3.81395349,22.8837209 M28.6046512,17.1627907 L13.3488372,32.4186047 M11.4418605,17.1627907 L26.6976744,32.4186047"/>
              </g>
          </g>
      </g>
  </g>
</svg>
    <span class="text">Mix Space</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}
.VPNavBarTitle:hover {
  opacity: 0.6;
}
.logo {
  position: relative;
}
.logo + .text {
  padding-left: 8px;
}
.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
      `
      }
    },
  }
}