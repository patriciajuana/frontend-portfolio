<script setup lang="ts">
import { PortfolioItemContent } from '@/interfaces/portfolioItemContent'
import portfolioItemsMetadata from '@/data/portfolioItemsMetadata'
import api from '@/mocks/api'
import { resolveImagePath } from '@/utils/paths'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{ id: string }>()

onMounted(() => {
  getPortfolioItem()
})
watch(
  () => props.id,
  () => {
    getPortfolioItem()
  },
)

const portfolioItem = ref()
const metadata = ref()
const getPortfolioItem = async () => {
  try {
    const response = await api.get('/portfolio-items', {
      params: {
        ids: props.id,
      },
    })
    portfolioItem.value = response.data[0]

    const meta = portfolioItemsMetadata.filter((e) => e.id === props.id)
    metadata.value = meta[0] || []
  } catch (err) {
    console.log(err)
  }
}
const getSequentialImagePath = (count: number) => {
  if (!portfolioItem.value.images?.gallery) return ''

  const fileName = portfolioItem.value.images?.gallery[0].src
  const lastDot = fileName.lastIndexOf('.')
  const name = fileName.substring(0, lastDot)
  const extension = fileName.substring(lastDot + 1)

  return resolveImagePath(`${name}-${count}.${extension}`)
}
</script>

<template>
  <div
    v-if="portfolioItem"
    class="portfolio-view"
    :class="[`portfolio-view--${portfolioItem.id}`, metadata.modifiers]"
  >
    <div class="portfolio-view__hero">
      <div class="container">
        <div class="portfolio-view__hero-layout row">
          <div class="col col-5">
            <h1>{{ portfolioItem.heading }}</h1>
            <p class="portfolio-view__subheading mt-1">{{ portfolioItem.subheading }}</p>
            <div class="portfolio-view__description my-3" v-html="portfolioItem.description"></div>
            <ul
              v-if="portfolioItem.links"
              class="portfolio-view__links list-unstyled d-flex flex-wrap gap-2 ps-0"
            >
              <li v-for="(link, i) in portfolioItem.links" :key="i">
                <a :href="link.href" :target="link.target">
                  {{ link.text }}
                  <i
                    v-if="link.target && link.target === '_blank'"
                    class="fas fa-external-link-alt"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="portfolio-view__hero-image-section col col-7">
            <div class="portfolio-view__hero-image">
              <img
                class="img-fluid"
                :src="resolveImagePath(portfolioItem.images?.single?.src)"
                :alt="portfolioItem.images?.single?.alt"
              />
            </div>
          </div>
        </div>
        <div class="portfolio-view__details mt-2 py-3">
          <div class="row">
            <div v-for="(detail, i) in portfolioItem.details" :key="i" class="col">
              <dl>
                <dt>{{ detail.heading }}</dt>
                <dd class="mt-1" v-html="detail.content"></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-view__gallery mt-3">
      <div
        :class="{
          container: metadata?.gallery?.hasContainer,
        }"
      >
        <ul v-if="portfolioItem.images?.gallery" class="list-unstyled">
          <li
            v-if="metadata?.gallery?.isSequential"
            v-for="i in metadata.gallery.sequentialCount"
            :key="i"
            class="portfolio-view__gallery-item"
          >
            <img class="img-fluid" :src="getSequentialImagePath(i)" alt="" />
          </li>
          <li
            v-else
            v-for="item in portfolioItem.images?.gallery"
            :key="item.src"
            class="portfolio-view__gallery-item"
          >
            <img class="img-fluid" :src="resolveImagePath(item.src)" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-view__hero {
}
.portfolio-view__hero-image-section {
  position: relative;
}
.portfolio-view__hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.portfolio-view__hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.portfolio-view__hero h1 {
  font-family: $font-broadacre-regular;
  font-size: 80px;
  text-transform: uppercase;
  line-height: 1;
}
.portfolio-view__subheading {
  font-family: $font-oswald;
  font-size: 30px;
  text-transform: uppercase;
  color: $primary;
}
.portfolio-view__description,
.portfolio-view__description:deep(p) {
  font-weight: $font-weight-light;
  line-height: 1.5;
}
.portfolio-view__links a {
  font-weight: $font-weight-medium;
  text-decoration: none;
}
.portfolio-view__details {
  position: relative;

  &:before {
    //border
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 1px;
    border-top: 1px solid $black;
  }
}
.portfolio-view__details dl > dt {
  font-weight: $font-weight-semibold;
}
.portfolio-view__details dl > dd ::v-deep(ul) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
}
.portfolio-view__details dl > dd {
  font-weight: $font-weight-light;
}
.portfolio-view__gallery-item {
  position: relative;
}
.portfolio-view__gallery-item img {
  width: 100%;
  //max-height: 700px;
  max-height: 100vh;
  object-fit: contain;
}

//Modifiers: --2colgrid
.portfolio-view--gallery2colgrid {
  .portfolio-view__gallery ul {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include media-breakpoint-down(sm) {
      grid-template-columns: 1fr;
    }
  }
}

//PortfolioItem Modifiers:
.portfolio-view--kyc-web-app {
  .portfolio-view__gallery img {
    mask-image: linear-gradient(to top, transparent, red 20px);
  }
}
</style>
