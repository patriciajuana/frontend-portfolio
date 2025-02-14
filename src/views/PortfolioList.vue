<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Masonry from 'masonry-layout'
import { apps } from '@/data/portfolioListData'
import api from '@/mocks/api'
import { resolveImagePath } from '@/utils/paths'

const props = defineProps<{ id: string }>()
const grid = ref(null)
const portfolioList = ref()
const portfolioItems = ref()

onMounted(async () => {
  await initData()
  initMasonry()
})

const initData = async () => {
  switch (props.id) {
    case 'web-app-portfolios':
      portfolioList.value = apps
      break
  }

  if (!portfolioList.value) return

  portfolioItems.value = await getPortfolioItems(portfolioList.value)
}

const getPortfolioItems = async (ids: string[]) => {
  try {
    const response = await api.get('/portfolio-items', {
      params: {
        ids: ids.join(','),
      },
    })
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const initMasonry = async () => {
  await nextTick()
  grid.value &&
    new Masonry(grid.value, {
      itemSelector: '.js-grid-item',
      gutter: 20,
    })
}

const getRandomCardHeight = () => {
  const heights = ['short', 'medium', 'tall']

  return heights[Math.floor(Math.random() * heights.length)]
}
</script>

<template>
  <div class="portfolio-list">
    <div class="container">
      <div class="portfolio-list__header row">
        <div class="col col-8">
          <h1>Web Apps</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat tempore
            velit delectus atque iste et quos dolore beatae nemo ducimus blanditiis fugit quasi
            cumque adipisci nihil aut ut cupiditate.
          </p>
        </div>
      </div>
      <ul class="portfolio-list__grid list-unstyled ps-0 mt-3" ref="grid">
        <li
          v-for="item in portfolioItems"
          :key="item.id"
          class="js-grid-item portfolio-list__grid-item"
          :class="`portfolio-list__grid-item--${getRandomCardHeight()}`"
        >
          <PortfolioCard :content="item"></PortfolioCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-list__header h1 {
  font-size: 120px;
  line-height: 1;
  text-transform: uppercase;
  position: relative;

  &:after {
    //framing
    content: '';
    position: absolute;
    top: 20px;
    left: 100%;
    width: 100%;
    height: 90px;
    background-color: $gray-100;
    display: none;
  }
}
.portfolio-list__header p {
  width: 80%;
}

.portfolio-list__grid-item {
  width: calc((100% - 40px) / 3);
  margin-bottom: 20px;
}
.portfolio-list__grid-item {
  $max-height: 500px;

  &--short {
    height: $max-height * 0.4;
  }

  &--medium {
    height: $max-height * 0.7;
  }

  &--tall {
    height: $max-height;
  }
}

.portfolio-list__grid-item {
  :deep(.portfolio-card),
  :deep(.portfolio-card > a),
  :deep(.portfolio-card__image) {
    height: 100%;
  }
}
</style>
