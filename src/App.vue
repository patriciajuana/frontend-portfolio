<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerNavItems from '@/data/headerNavItems'
</script>

<template>
  <Header :header-nav-items="headerNavItems"></Header>
  <RouterView />
</template>

<style scoped lang="scss"></style>
