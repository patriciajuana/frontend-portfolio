<script setup lang="ts">
import { HeaderNavItem } from '@/interfaces/headerNavItem'

const props = defineProps<{
  headerNavItems: HeaderNavItem[]
}>()
</script>

<template>
  <div class="mobile-nav" id="js-mobile-nav-accordion">
    <!-- Main Navigation Items -->
    <div class="container">
      <ul class="mobile-nav__list list-unstyled mb-0">
        <li v-for="(item, i) in headerNavItems" :key="i" class="mobile-nav__list-item">
          <div class="mobile-nav__item">
            <RouterLink v-if="item.route" :to="item.route" class="mobile-nav__link">{{
              item.text
            }}</RouterLink>
            <div
              v-if="item.subitems?.length"
              class="mobile-nav__accordion-toggle"
              data-bs-toggle="collapse"
              :data-bs-target="`#js-mobile-nav-subitems-${i}`"
            >
              <i class="mobile-nav__accordion-icon-closed fa fa-plus-square"></i>
              <i class="mobile-nav__accordion-icon-open far fa-minus-square"></i>
            </div>
          </div>
          <!-- Sub Navigation Items -->
          <div
            v-if="item.subitems?.length"
            :id="`js-mobile-nav-subitems-${i}`"
            class="mobile-nav__subitems accordion-collapse collapse"
            data-bs-parent="#js-mobile-nav-accordion"
          >
            <ul class="list-unstyled ps-2 py-1">
              <li v-for="(subitem, j) in item.subitems" :key="j">
                <a
                  v-if="subitem.href"
                  class="mobile-nav__subitem-nav-link"
                  :href="subitem.href"
                  target="_blank"
                  v-html="subitem.text"
                ></a>
                <RouterLink
                  v-if="subitem.route"
                  :to="subitem.route"
                  class="mobile-nav__subitem-nav-link"
                  v-html="subitem.text"
                ></RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  //background-color: #2d2d2d;
  background-color: rgba($white, 0.9);
  padding-top: 100px;
}

.mobile-nav__list-item:not(:first-child) {
  position: relative;

  &:before {
    //framing line
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 1px solid rgba($black, 0.1);
    transform: scaleX(10);
    pointer-events: none;
    display: none;
  }
}
.mobile-nav__item {
  display: flex;
  justify-content: space-between;
  gap: map-get($spacers, 2);

  > * {
    //border: 1px solid red;
  }
}

.mobile-nav__link,
.mobile-nav__subitem-nav-link {
  font-family: $font-broadacre-light;
  font-size: 14px;
  text-decoration: none;
  color: $black;
}
.mobile-nav__subitem-nav-link {
  font-size: 12px;
  color: $white;
}

.mobile-nav__item > a {
  flex: 0 1 auto;
  padding: map-get($spacers, 1) 0;
}

.mobile-nav__subitems {
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $primary;
    transform: scaleX(10);
    z-index: -1;
    pointer-events: none;
  }
}
.mobile-nav__subitems.collapsing {
  overflow-x: visible;
  overflow-y: clip;
}

.mobile-nav__accordion-toggle {
  width: 50px;
  text-align: right;
  cursor: pointer;
}
.mobile-nav__accordion-toggle i {
  color: $black;
  transform: translateY(12px);
}
.mobile-nav__accordion-icon-closed,
.mobile-nav__accordion-icon-open {
  display: none;
}
.mobile-nav__accordion-toggle[aria-expanded='true'] .mobile-nav__accordion-icon-open {
  display: block;
}
.mobile-nav__accordion-toggle[aria-expanded='false'] .mobile-nav__accordion-icon-closed {
  display: block;
}
</style>
