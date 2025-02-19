<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerNavItems from '@/data/headerNavItemsData'

const footerNavItems = headerNavItems.filter((e) => e.text.toLowerCase().indexOf('contact') === -1)
const footerContactItem = headerNavItems.find((e) => e.text.toLowerCase() === 'contact')
</script>

<template>
  <Header :header-nav-items="headerNavItems"></Header>
  <RouterView />
  <Footer :footer-nav-items="footerNavItems" :footer-contact-item="footerContactItem"></Footer>
</template>

<style scoped lang="scss"></style>
