<script setup lang="ts">
import { tagMap } from '@/data/tagMapData'
import { PortfolioItemContent } from '@/interfaces/portfolioItemContent'
import { resolveImagePath } from '@/utils/paths'
import { computed } from 'vue'

const props = defineProps<{
  modifiers?: string
  content: PortfolioItemContent
  count: number
  catchHeading?: string
  moreCTA?: {
    route: string | { name: string; params?: Record<string, any> }
    text: string
  }
  isFeatured?: boolean
}>()

const formattedCount = computed(() => {
  return props.count < 10 ? `0${props.count}` : props.count
})

const formattedTags = computed(() => {
  const tags = props.content.cardTags?.map((e) => tagMap(e))
  return tags ? tags.join(', ') : ''
})
</script>

<template>
  <div class="portfolio-item pt-0 pb-4 pt-lg-12 pb-lg-8" :class="modifiers">
    <div class="container">
      <div class="portfolio-item__layout row flex-column-reverse flex-lg-row">
        <div class="portfolio-item__body col-12 col-lg-6">
          <h2>{{ content.heading }}</h2>
          <p class="portfolio-item__subheading mb-1 mb-lg-3">{{ content.subheading }}</p>
          <div class="portfolio-item__description mb-2" v-html="content.description"></div>
          <ul v-if="content.links" class="list-unstyled d-flex gap-2">
            <li v-for="(link, i) in content.links" :key="i">
              <a v-if="link" class="portfolio-item__link" :href="link.href" :target="link.target">
                {{ link.text }}
                <i
                  v-if="link.target && link.target === '_blank'"
                  class="fas fa-external-link-alt"
                ></i>
              </a>
            </li>
          </ul>
          <div class="portfolio-item__sub row mt-2 mt-lg-4">
            <div class="col-lg-1"></div>
            <div class="col-lg-11">
              <p class="portfolio-item__count">
                <span>/{{ formattedCount }}</span>
              </p>
              <div class="portfolio-item__details mt-3">
                <dl v-for="(detail, i) in content.details" :key="i" class="row">
                  <dt class="col col-12 col-md-3">{{ detail.heading }}</dt>
                  <dd class="col mt-1 mt-lg-0" v-html="detail.content"></dd>
                </dl>
                <div class="portfolio-item__cta d-flex flex-wrap gap-1">
                  <RouterLink :to="`/${content.id}`" class="btn btn-secondary">Details</RouterLink>
                  <RouterLink v-if="moreCTA" :to="moreCTA.route" class="btn btn-primary">
                    {{ moreCTA.text }}
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio-item__image-column col-12 col-lg-6">
          <div class="portfolio-item__image">
            <img
              class="img-fluid"
              :src="resolveImagePath(props.content.images?.featured?.src)"
              alt=""
            />
            <p class="portfolio-item__tags">{{ formattedTags }}</p>
            <p v-if="isFeatured" class="portfolio-item__featured" v-html="catchHeading"></p>
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

  @include media-breakpoint-down(xl) {
    font-size: 50px;
  }
  @include media-breakpoint-down(md) {
    font-size: 40px;
  }
}
.portfolio-item__subheading {
  font-family: $font-oswald;
  font-size: 30px;
  text-transform: uppercase;
  color: $primary;

  @include media-breakpoint-down(xl) {
    font-size: 25px;
  }
  @include media-breakpoint-down(md) {
    font-size: 22px;
  }
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
  text-transform: capitalize;
  color: $gray-600;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: map-get($spacers, 5);
  padding-bottom: map-get($spacers, 1);

  @include media-breakpoint-down(md) {
    display: none;
  }

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
    pointer-events: none;

    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
.portfolio-item__link {
  font-weight: $font-weight-medium;
  text-decoration: none;
}
.portfolio-item__link i {
  font-size: 12px;
}
.portfolio-item__details dl > dt {
  font-weight: $font-weight-semibold;
}
.portfolio-item__details dl > dd {
  font-weight: $font-weight-light;
}

.portfolio-item__details dl > dd ::v-deep(ul) {
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  //color: $gray-600;
  color: $primary;
  text-transform: uppercase;
  position: absolute;
  top: calc(map-get($spacers, 5) * -1);
  left: 0;
  width: 100%;
  text-align: right;
  padding-right: map-get($spacers, 10);

  @include media-breakpoint-down(lg) {
    display: none;
  }

  &:after {
    //framing line
    content: '';
    width: 100%;
    height: 1px;
    //background-color: $gray-400;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: calc(100% - map-get($spacers, 8));
    transform-origin: left;
    transform: scaleX(10) translateY(-50%);
  }
}
.portfolio-item__description {
  font-weight: $font-weight-light;

  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.portfolio-item__description ::v-deep(> p:last-child) {
  margin-bottom: 0;
}

//Modifiers: --reverse
.portfolio-item--reverse {
  @include media-breakpoint-up(lg) {
    .portfolio-item__layout.row {
      flex-direction: row-reverse !important;
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
}

//Modifiers: --dark
.portfolio-item--dark {
  background-color: #2d2d2d;

  h2,
  ::v-deep(
    p:not(.portfolio-item__subheading):not(.portfolio-item__tags):not(.portfolio-item__featured)
  ),
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
}
</style>
