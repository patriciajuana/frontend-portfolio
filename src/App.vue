<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'

const headerNavItems = [
  {
    route: '/web-apps',
    text: 'Web Apps',
    subitems: [
      {
        route: '/kyc',
        text: 'KYC Web App',
      },
    ],
  },
  {
    route: '/wordpress',
    text: 'WordPress',
  },
  {
    route: '/design',
    text: 'Design',
  },
  {
    route: '/fun-stuff',
    text: 'Fun Stuff',
  },
  {
    route: '/contact',
    text: 'Contact',
    subitems: [
      {
        href: 'mailto:patriciajuana@gmail.com',
        text: 'patriciajuana@gmail.com',
      },
      {
        href: 'mailto:patriciajuana@gmail.com',
        text: 'patriciajuana@gmail.com',
      },
      {
        href: 'mailto:patriciajuana@gmail.com',
        text: 'patriciajuana@gmail.com',
      },
    ],
  },
]
</script>

<template>
  <Header :header-nav-items="headerNavItems"></Header>
  <RouterView />
</template>

<style scoped lang="scss"></style>
