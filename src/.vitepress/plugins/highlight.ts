/*
 * @FilePath: /docs-next/src/.vitepress/plugins/highlight.ts
 * @author: Wibus
 * @Date: 2022-04-03 17:04:34
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-03 20:33:50
 * Coding With IU
 */
import { getHighlighter } from 'shiki'

export default async() => {
  const highlighter = await getHighlighter({
    themes: [
      'vitesse-dark',
      'vitesse-light',
    ],
  })

  return (code: string, lang: string) => {

    const dark = highlighter
      .codeToHtml(code, { lang, theme: 'vitesse-dark' })
      .replace('<pre class="shiki"', '<pre v-pre class="shiki shiki-dark"')
    const light = highlighter
      .codeToHtml(code, { lang, theme: 'vitesse-light' })
      .replace('<pre class="shiki"', '<pre v-pre class="shiki shiki-light"')
    return dark + light
  }
}