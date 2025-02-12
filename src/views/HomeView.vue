<script setup lang="ts">
import featuredPortfolioItemsData from '@/data/featuredPortfolioItemsData'
import api from '@/mocks/api'
import { onMounted, ref } from 'vue'

onMounted(() => {
  getFeaturedPortfolioItems()
})

const featuredPortfolioItems = ref()
const getFeaturedPortfolioItems = async () => {
  try {
    const response = await api.get('/portfolio-items', {
      params: {
        ids: featuredPortfolioItemsData.map((e) => e.id).join(','),
      },
    })
    featuredPortfolioItems.value = response.data
  } catch (err) {}
}

const moreCTA = (id: string) => {
  const data = featuredPortfolioItemsData.find((e) => e.id)
  return data?.moreCTA
}
</script>

<template>
  <main class="home-view">
    <HomeHero></HomeHero>
    <div class="home-view__featured">
      <section v-for="(item, i) in featuredPortfolioItems" :key="item.id">
        <PortfolioItem
          isFeatured
          :content="item"
          :count="i + 1"
          :moreCTA="moreCTA(item.id)"
        ></PortfolioItem>
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
.home-view__featured > section:last-child {
  ::v-deep(.portfolio-item) {
    padding-bottom: map-get($spacers, 10) !important;
  }
}
</style>
