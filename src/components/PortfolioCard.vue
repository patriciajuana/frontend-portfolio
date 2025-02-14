<script setup lang="ts">
import { PortfolioItemContent } from '@/interfaces/portfolioItemContent'
import { resolveImagePath } from '@/utils/paths'

const props = defineProps<{ content: PortfolioItemContent }>()
</script>

<template>
  <article class="portfolio-card">
    <RouterLink :to="`/${content.id}`">
      <div class="portfolio-card__image">
        <img :src="resolveImagePath(content.cardImage)" :alt="content.cardImageAlt" />
      </div>
      <div class="portfolio-card__content">
        <h2>
          {{ content.heading }}
          <i class="fa-solid fa-arrow-right-long"></i>
        </h2>
        <p class="portfolio-card__subheading">{{ content.subheading }}</p>
        <ul class="portfolio-card__tags list-unstyled">
          <li>Vue3</li>
          <li>NodeJS</li>
          <li>Express</li>
        </ul>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped lang="scss">
.portfolio-card {
  position: relative;
  overflow: clip;
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
    opacity: 0;
    transition: opacity 0.25s ease-out;
  }
}
.portfolio-card__image img {
  width: 100%;
  height: 100%;
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
}
.portfolio-card__content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: calc(100% - 40px);
}
.portfolio-card__tags {
  display: flex;
  transform: translateY(50px);
  opacity: 0;
  transition:
    transform 0.8s $ease-expo-out,
    opacity 0.5s ease-out;
}
.portfolio-card__tags > li {
  color: $white;
}
.portfolio-card__tags > li:not(:first-child):before {
  content: ', ';
}
</style>
