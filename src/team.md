---
layout: page
sidebar: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const _coreMembers = [
  {
    avatar: 'https://www.github.com/Innei.png',
    name: 'Innei',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Innei' },
      { icon: 'twitter', link: 'https://twitter.com/__oQuery' }
    ]
  },
  {
    avatar: 'https://github.com/suemor233.png',
    name: 'Suemor',
    title: 'Kami, Admin, Core Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/suemor233' },
      { icon: 'twitter', link: 'https://twitter.com/suemor233' }
    ],
  },
  {
    avatar: 'https://www.github.com/wibus-wee.png',
    name: 'Wibus',
    title: 'Core, Kami, Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/wibus-wee' },
      { icon: 'twitter', link: 'https://twitter.com/wibus_wee' }
    ],
  },
  {
    avatar: 'https://www.github.com/ttimochan.png',
    name: 'Timochan',
    title: 'Docker, Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ttimochan' },
    ],
  },
  {
    avatar: 'https://www.github.com/miaoermua.png',
    name: '喵二',
    title: 'Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/miaoermua' },
    ],
  }, 
  {
    avatar: 'https://www.github.com/wuhang2003.png',
    name: 'wuhang2003',
    title: 'Docs, Kami Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/wuhang2003' },
    ],
  },
  {
    avatar: 'https://www.github.com/akarachen.png',
    name: 'AkaraChen',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/akarachen' },
      { icon: 'twitter', link: 'https://twitter.com/object_nullll' }
    ],
  },
  {
    avatar: 'https://github.com/kidonng.png',
    name: 'kid',
    title: 'Kami Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/kidonng' },
    ]
  },
  {
    avatar: 'https://github.com/zhangmo8.png',
    name: 'xiaomo',
    title: 'Kami Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/zhangmo8' },
    ]
  },
]

const _partners = [
  {
    avatar: 'https://www.github.com/Sayyiku.png',
    name: 'Sayyiku',
    title: 'Documentation Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Sayyiku' },
    ],
  },
  {
    avatar: 'https://www.gravatar.com/avatar/example',
    name: '623337308',
    title: 'Documentation Contributor',
  },
  {
    avatar: 'https://www.github.com/zsbai.png',
    name: 'zsbai',
    title: 'Core Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/zsbai' },
    ],
  },
  {
    avatar: 'https://www.gravatar.com/avatar/example',
    name: 'Elmge',
    title: 'Documentation Contributor',
  },
  {
    avatar: 'https://github.com/VxRain.png',
    name: 'VxRain',
    title: 'Core Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/VxRain' },
    ]
  },
  {
    avatar: 'https://github.com/matto49.png',
    name: 'matto49',
    title: 'Admin Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/matto49' },
    ]
  },
  {
    avatar: 'https://github.com/ScrapW.png',
    name: 'ScrapW',
    title: 'Admin Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ScrapW' },
    ]
  }
  ];

const coreMembers = _coreMembers.sort(() => Math.random() - 0.5).sort((a, b) => {
  if (a.name === 'Innei') return -1
  if (b.name === 'Innei') return 1
  return 0
})
const partners = _partners.sort(() => Math.random() - 0.5)
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>
    OSS 是一项团队运动。我们是一群热爱开源的开发者。
    <small> ( 随机顺序 )</small>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>他们不是核心成员，但他们也是重要的贡献者。<small> ( 随机顺序 )</small></template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
