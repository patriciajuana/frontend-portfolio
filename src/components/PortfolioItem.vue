<script setup lang="ts">
import { computed } from 'vue'

export interface PortfolioItemContent {
  modifier?: string
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
  cta?: {
    buttonModifier?: string
    route: string
    text: string
  }[]
  isFeatured?: boolean
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
  <div class="portfolio-item pt-12 pb-4" :class="content.modifier">
    <div class="container">
      <div class="portfolio-item__layout row">
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
              <div class="portfolio-item__details mt-3">
                <dl v-for="(detail, i) in content.details" :key="i" class="row">
                  <dt class="col-3">{{ detail.heading }}</dt>
                  <dd class="col" v-html="detail.content"></dd>
                </dl>
                <div class="portfolio-item__cta d-flex gap-1">
                  <div v-for="(ctaItem, i) in content.cta" :key="i">
                    <RouterLink
                      :to="ctaItem.route"
                      class="btn"
                      :class="ctaItem.buttonModifier || 'btn-primary'"
                      v-html="ctaItem.text"
                    ></RouterLink>
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
            <p v-if="content.isFeatured" class="portfolio-item__featured">Featured Portfolio</p>
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
.portfolio-item__details dl > dt {
  font-weight: $font-weight-semibold;
}
.portfolio-item__details dl > dd ::v-deep(ul) {
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
}
.portfolio-item__cta .btn ::v-deep(i) {
  font-size: 12px;
  margin-left: 8px;
}
.portfolio-item__featured {
  font-size: 14px;
  font-weight: $font-weight-medium;
  color: $gray-600;
  text-transform: uppercase;
  position: absolute;
  top: calc(map-get($spacers, 5) * -1);
  left: 0;
  width: 100%;
  text-align: right;
  padding-right: map-get($spacers, 10);

  &:after {
    //framing line
    content: '';
    width: 100%;
    height: 1px;
    background-color: $gray-400;
    position: absolute;
    top: 50%;
    left: calc(100% - map-get($spacers, 8));
    transform-origin: left;
    transform: scaleX(10) translateY(-50%);
  }
}

//Modifiers: --reverse
.portfolio-item--reverse {
  .portfolio-item__layout.row {
    flex-direction: row-reverse;
  }

  .portfolio-item__tags {
    left: 0;
    bottom: 0;
    padding-right: 0;
    padding-left: map-get($spacers, 5);

    &:after {
      //framing borders
      top: 0;
      left: 0;
      border-left: 1px solid $gray-200;
      border-right: 0;
    }
  }

  .portfolio-item__featured {
    text-align: left;
    padding-right: 0;
    padding-left: map-get($spacers, 10);

    &:after {
      //framing line
      left: unset;
      right: calc(100% - map-get($spacers, 8));
      transform-origin: right;
    }
  }
}

//Modifiers: --dark
.portfolio-item--dark {
  background-color: #2d2d2d;

  h2,
  p:not(.portfolio-item__subheading):not(.portfolio-item__tags):not(.portfolio-item__featured),
  dt,
  dd {
    color: $white;
  }

  .portfolio-item__count {
    border-color: $gray-700;
  }
  .portfolio-item__count > span {
    border-color: $gray-100;
  }

  .portfolio-item__tags {
    color: $gray-500;

    &:after {
      //framing borders
      border-color: $gray-700;
    }
  }

  .portfolio-item__featured {
    color: $gray-500;

    &:after {
      //framing line
      background-color: $gray-700;
    }
  }
}
</style>
