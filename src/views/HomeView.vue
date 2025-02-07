<script setup>
import portfolioItems from '@/data/homePortfolioItems'
</script>

<template>
  <main>
    <HomeHero></HomeHero>
    <PortfolioItem
      v-for="(item, i) in portfolioItems"
      :key="i"
      :content="item"
      :count="`${i + 1}`"
    ></PortfolioItem>
  </main>
</template>
