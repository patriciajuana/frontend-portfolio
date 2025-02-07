<script setup lang="ts">
import { computed } from 'vue'

export interface PortfolioItemContent {
  modifier?: ''
  route: string
  heading: string
  subheading: string
  description: string
  link?: {
    href: string
    text: string
    target?: string
  }
  details: {
    heading: string
    content: string
  }[]
  tags: string[]
  image: string
  imageAlt: string
}

const props = defineProps<{
  content: PortfolioItemContent
  count: number
}>()

const formattedCount = computed(() => {
  return props.count < 10 ? `0${props.count}` : props.count
})

const formattedTags = computed(() => {
  return props.content.tags.join(', ')
})

const resolvedImagePath = computed(() => {
  return new URL(`../assets/images/${props.content.image}`, import.meta.url).href
})
</script>

<template>
  <div class="portfolio-item" :class="content.modifier">
    <div class="container">
      <div class="row">
        <div class="portfolio-item__body col-6">
          <h2>{{ content.heading }}</h2>
          <p class="portfolio-item__subheading mb-3">{{ content.subheading }}</p>
          <p class="mb-2">{{ content.description }}</p>
          <a
            v-if="content.link"
            class="portfolio-item__link"
            :href="content.link.href"
            :target="content.link.target"
          >
            {{ content.link.text }}
            <i
              v-if="content.link.target && content.link.target === '_blank'"
              class="fas fa-external-link-alt"
            ></i>
          </a>
          <div class="portfolio-item__sub row mt-4">
            <div class="col-lg-1"></div>
            <div class="col-lg-11">
              <p class="portfolio-item__count">
                <span>/{{ formattedCount }}</span>
              </p>
              <div class="mt-3">
                <dl v-for="(detail, i) in content.details" :key="i" class="row">
                  <dt class="col-3">{{ detail.heading }}</dt>
                  <dd class="col" v-html="detail.content"></dd>
                </dl>
                <div class="row mt-4">
                  <div class="col-6">
                    <RouterLink :to="content.route" class="btn btn-primary">Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="portfolio-item__image">
            <img class="img-fluid" :src="resolvedImagePath" :alt="content.imageAlt" />
            <p class="portfolio-item__tags">{{ formattedTags }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-item h2 {
  font-size: 80px;
  line-height: 1;
}
.portfolio-item__subheading {
  font-family: $font-oswald;
  font-size: 30px;
  text-transform: uppercase;
  color: $primary;
}
.portfolio-item__count {
  font-family: $font-oswald;
  font-size: 20px;
  border-bottom: 1px solid $gray-200;
}
.portfolio-item__count > span {
  border-bottom: 1px solid $black;
  display: inline-block;
  padding-bottom: 5px;
  padding-right: 5px;
}
.portfolio-item__image {
  position: relative;
}
.portfolio-item__tags {
  font-family: $font-oswald;
  font-weight: $font-weight-light;
  color: $gray-600;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: map-get($spacers, 5);
  padding-bottom: map-get($spacers, 1);

  &:after {
    //framing borders
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: map-get($spacers, 10);
    height: 100%;
    border-right: 1px solid $gray-200;
    border-bottom: 1px solid $gray-200;
  }
}
.portfolio-item__link {
  font-weight: $font-weight-medium;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.portfolio-item__link i {
  font-size: 12px;
}
</style>
