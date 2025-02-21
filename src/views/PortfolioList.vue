<script setup lang="ts">
import { ref, onMounted, nextTick, computed, watch } from 'vue'
import Masonry from 'masonry-layout'
import api from '@/mocks/api'
import { tagMap } from '@/data/tagMapData'

const props = defineProps<{ filterBy?: string; filters?: string[] }>()
const grid = ref(null)
const portfolioItems = ref()
const masonry = ref()

onMounted(async () => {
  await initData()
  await initMasonry()

  selectedTag.value = props.filterBy
  filterList(selectedTag.value)
})
watch(
  () => props.filterBy,
  (e) => {
    selectedTag.value = e
    filterList(selectedTag.value)
  },
)

const initData = async () => {
  portfolioItems.value = await getPortfolioItems()
  sortItemsByName()
}

const getPortfolioItems = async () => {
  try {
    const response = await api.get('/portfolio-items')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const initMasonry = async () => {
  await nextTick()
  if (!grid.value) return
  masonry.value = new Masonry(grid.value, {
    itemSelector: '.js-grid-item',
    gutter: 20,
  })
}

const getRandomCardHeight = () => {
  const heights = ['short', 'medium', 'tall']
  //const heights = ['medium', 'tall']
  //const heights = ['short']

  return heights[Math.floor(Math.random() * heights.length)]
}

const selectedTag = ref()
const filterList = (tag?: string) => {
  //update current selected tag (e.g., highlight tags in card)
  selectedTag.value = tag || ''

  //sortList
  if (selectedTag) {
    sortItemsByTag(selectedTag.value)
  } else {
    sortItemsByName()
  }

  //update masonry
  nextTick(() => {
    masonry.value.reloadItems()
    masonry.value.layout()
  })
}

const sortItemsByTag = (tag: string) => {
  const taggedItems = portfolioItems.value.filter((item: any) => {
    const cardTags = item.cardTags.map((cTag: string) => cTag.toLowerCase())

    return cardTags.includes(tag.toLowerCase())
  })
  const unTaggedItems = portfolioItems.value.filter((item: any) => {
    const cardTags = item.cardTags.map((cTag: string) => cTag.toLowerCase())

    return !cardTags.includes(tag.toLowerCase())
  })

  //place tagged items on top of list
  const items = [...taggedItems, ...unTaggedItems]
  portfolioItems.value = items
}
const sortItemsByName = () => {
  portfolioItems.value = portfolioItems.value.sort((a: any, b: any) =>
    a.heading.localeCompare(b.heading),
  )
}

const heading = computed(() => {
  if (selectedTag.value) {
    return tagMap(selectedTag.value)
  }
  return 'All'
})
</script>

<template>
  <div class="portfolio-list mt-8 mt-md-4 mt-lg-0">
    <div class="container">
      <div class="portfolio-list__header row justify-content-between">
        <div class="col col-xl-4 d-none d-xl-block">
          <div class="portfolio-list__header-arrow"></div>
        </div>
        <div class="col col-12 col-xl-7">
          <h1>
            <span class="text-primary">{{ heading }}</span> Portfolio
          </h1>
          <ul
            v-if="filters"
            class="list-unstyled d-flex flex-column flex-md-row flex-wrap gap-1 mt-2 mt-lg-4"
          >
            <li>
              <RouterLink
                :to="{ name: 'portfolios', params: { filterBy: '' } }"
                class="portfolio-list__filter-button btn"
                :class="selectedTag ? 'btn-outline-dark' : 'btn-primary'"
                >All</RouterLink
              >
            </li>
            <li v-for="item in filters" :key="item">
              <RouterLink
                :to="{ name: 'portfolios', params: { filterBy: item } }"
                class="portfolio-list__filter-button btn"
                :class="
                  selectedTag?.toLowerCase() === item.toLowerCase()
                    ? 'btn-primary'
                    : 'btn-outline-dark'
                "
              >
                {{ tagMap(item) }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <ul class="portfolio-list__grid list-unstyled ps-0 mt-2 mt-lg-6" ref="grid">
        <li
          v-for="item in portfolioItems"
          :key="item.id"
          class="js-grid-item portfolio-list__grid-item"
          :class="[`portfolio-list__grid-item--${getRandomCardHeight()}`]"
        >
          <PortfolioCard :content="item" :highlightedTag="selectedTag"></PortfolioCard>
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

  @include media-breakpoint-down(xl) {
    font-size: 80px;
  }
  @include media-breakpoint-down(md) {
    font-size: 50px;
  }
}
.portfolio-list__header-arrow {
  //background-color: red;
  margin-top: 20px;
  position: relative;
  height: 70px;

  &:before {
    //arrow line
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $black;
    transform-origin: right;
    transform: translateY(-50%) scaleX(10);
  }
  &:after {
    //arrow head
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    aspect-ratio: 1;
    border: 1px solid $black;
    border-left-color: transparent;
    border-bottom-color: transparent;
    transform: translateX(-13px) rotate(45deg);
  }
}
.portfolio-list__header p {
  width: 80%;
}

.portfolio-list__grid-item {
  width: calc((100% - 40px) / 3);
  margin-bottom: 20px;

  @include media-breakpoint-down(xl) {
    width: calc((100% - 40px) / 2);
  }

  @include media-breakpoint-down(md) {
    width: 100%;
  }
}

$max-height: 500px;
.portfolio-list__grid-item--short {
  height: $max-height * 0.5;

  @include media-breakpoint-down(md) {
    height: $max-height;
  }
}
.portfolio-list__grid-item--medium {
  height: $max-height * 0.7;

  @include media-breakpoint-down(md) {
    height: $max-height;
  }
}
.portfolio-list__grid-item--tall {
  height: $max-height;
}

.portfolio-list__grid-item {
  :deep(.portfolio-card),
  :deep(.portfolio-card > a),
  :deep(.portfolio-card__image) {
    height: 100%;
  }
}

.portfolio-list__filter-button {
  text-transform: capitalize;
}
</style>
