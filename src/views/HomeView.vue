<script setup>
import portfolioItems from '@/data/featurePortfolioItems'
</script>

<template>
  <main class="home-view">
    <HomeHero></HomeHero>
    <div class="home-view__featured">
      <section v-for="(item, i) in portfolioItems" :key="i">
        <PortfolioItem :content="item" :count="`${i + 1}`"></PortfolioItem>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home-view__featured > section:first-child {
  margin-top: -72px;

  ::v-deep(.portfolio-item) {
    padding-top: map-get($spacers, 20) !important;
  }
}
</style>
