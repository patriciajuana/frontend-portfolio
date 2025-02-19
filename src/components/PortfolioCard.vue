<script setup lang="ts">
import { tagMap } from '@/data/tagMapData'
import { PortfolioItemContent } from '@/interfaces/portfolioItemContent'
import { resolveImagePath } from '@/utils/paths'

const props = defineProps<{ content: PortfolioItemContent; highlightedTag?: string }>()
</script>

<template>
  <article class="portfolio-card">
    <RouterLink :to="`/${content.id}`">
      <div class="portfolio-card__image">
        <img :src="resolveImagePath(content.images?.card?.src)" :alt="content.images?.card?.alt" />
      </div>
      <div class="portfolio-card__content">
        <h2>
          {{ content.heading }}
          <i class="fa-solid fa-arrow-right-long"></i>
        </h2>
        <p class="portfolio-card__subheading">{{ content.subheading }}</p>
        <ul v-if="content.cardTags" class="portfolio-card__tags list-unstyled">
          <li v-for="(tag, i) in content.cardTags" :key="i">
            <p
              class="portfolio-card__tag mb-0"
              :class="{
                'is-highlighted': highlightedTag?.toLowerCase() === tag.toLowerCase(),
              }"
            >
              {{ tagMap(tag) }}
            </p>
          </li>
        </ul>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped lang="scss">
.portfolio-card {
  position: relative;
  overflow: clip;
  border-radius: 4px;
  // box-shadow: 0 4px 8px 4px rgba($black, 0.2);
}
.portfolio-card:hover {
  .portfolio-card__image img {
    transform: scale(1.1);
  }

  h2,
  .portfolio-card__subheading,
  .portfolio-card__tags,
  .portfolio-card__image:after {
    opacity: 1;
    transform: none;
  }
}
.portfolio-card a:hover {
  text-decoration: none;
}
.portfolio-card__image {
  position: relative;

  &:after {
    //overlay
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($black, 0.8);
    opacity: 0.3;
    transition: opacity 0.25s ease-out;

    @include media-breakpoint-down(xl) {
      opacity: 1;
      background: linear-gradient(45deg, rgba($black, 1) 25%, transparent);
    }
  }
}
.portfolio-card__image img {
  width: 100%;
  height: 100%;
  object-position: center top;
  object-fit: cover;
  transition: transform 0.25s ease-out;
}
.portfolio-card h2 {
  font-size: 30px;
  color: $white;
  transform: translateX(-100%);
  opacity: 0;
  transition:
    transform 0.8s $ease-expo-out,
    opacity 0.5s ease-out;

  @include media-breakpoint-down(xl) {
    opacity: 1;
    transform: none;
  }
}
.portfolio-card h2 i {
  font-size: 14px;
  transform: translateY(-3px);
}
.portfolio-card__subheading {
  font-family: $font-oswald;
  font-size: 20px;
  text-transform: uppercase;
  color: $primary;
  transform: translateX(50%);
  opacity: 0;
  transition:
    transform 0.8s $ease-expo-out,
    opacity 0.5s ease-out;

  @include media-breakpoint-down(xl) {
    opacity: 1;
    transform: none;
  }
}
.portfolio-card__content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: calc(100% - 40px);
}
.portfolio-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: map-get($spacers, 1);
  transition:
    transform 0.8s $ease-expo-out,
    opacity 0.5s ease-out;

  position: relative;
  z-index: 0;
}
.portfolio-card__tag {
  color: rgba($white, 0.8);
  border-radius: 4px;
  border: 1px solid rgba($white, 0.2);
  background-color: rgba($black, 1);
  padding: 5px 10px;
  text-transform: capitalize;
}
.portfolio-card__tag.is-highlighted {
  background-color: $primary;
  border-color: rgba($primary, 0.5);
  color: $white;
}
</style>
