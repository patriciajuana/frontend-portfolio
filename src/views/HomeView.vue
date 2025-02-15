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

const contentData = (id: string) => {
  return featuredPortfolioItems.value.find((e: any) => e.id === id)
}
</script>

<template>
  <main class="home-view">
    <HomeHero></HomeHero>
    <div v-if="featuredPortfolioItems" class="home-view__featured">
      <section v-for="(item, i) in featuredPortfolioItemsData" :key="item.id">
        <PortfolioItem
          isFeatured
          :modifiers="item.modifiers"
          :content="contentData(item.id)"
          :count="i + 1"
          :moreCTA="item.moreCTA"
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
