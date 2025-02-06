<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

const navItems = [
  {
    link: '#',
    text: 'Web Apps',
    subitems: [
      {
        link: '#',
        text: 'test',
      },
    ],
  },
  {
    link: '#',
    text: 'WordPress',
    subitems: [
      {
        link: '#',
        text: 'test',
      },
    ],
  },
]
</script>

<template>
  <Header :nav-items="navItems"></Header>

  <RouterView />
</template>

<style scoped lang="scss"></style>
