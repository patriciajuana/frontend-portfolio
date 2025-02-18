<script setup lang="ts">
import { HeaderNavItem } from '@/interfaces/headerNavItem'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  headerNavItems: HeaderNavItem[]
}>()

const navItemHovered = ref()
const setNavItemHovered = (navItem?: HeaderNavItem) => {
  if (navItem) {
    navItemHovered.value = JSON.stringify(navItem.route)
  } else {
    navItemHovered.value = ''
  }
}
const isNavItemActive = (navItem: HeaderNavItem) => {
  return navItemHovered.value === JSON.stringify(navItem.route)
}

const route = useRoute()
const isNavItemCurrent = (navItem: HeaderNavItem) => {
  if (!navItem) return

  if (typeof navItem.route === 'object' && navItem.route.params?.filterBy) {
    return (
      route.name === navItem.route.name && route.params.filterBy === navItem.route.params?.filterBy
    )
  }

  return route.path === navItem.route
}
</script>

<template>
  <nav class="desktop-nav">
    <!-- Main Navigation Items -->
    <ul class="desktop-nav__list list-unstyled mb-0 d-flex">
      <li
        v-for="(item, i) in headerNavItems"
        :key="i"
        class="desktop-nav__list-item"
        @mouseleave="setNavItemHovered()"
      >
        <RouterLink
          v-if="item.route"
          :to="item.route"
          class="desktop-nav__link d-flex align-items-center gap-1 p-2"
          :class="{
            'is-active': isNavItemActive(item),
            'is-current': isNavItemCurrent(item),
          }"
          @mouseenter="setNavItemHovered(item)"
        >
          {{ item.text }}
          <i v-if="item.subitems?.length && !isNavItemActive(item)" class="fa fa-plus-square"></i>
          <i v-if="item.subitems?.length && isNavItemActive(item)" class="far fa-minus-square"></i>
        </RouterLink>
        <!-- Sub Navigation Items -->
        <div
          v-if="item.subitems?.length"
          class="desktop-nav__submenu"
          :class="{
            'is-active': isNavItemActive(item),
          }"
        >
          <ul class="desktop-nav__submenu-list list-unstyled mb-0 d-flex flex-column gap-1">
            <li v-for="(subitem, j) in item.subitems" :key="j">
              <a
                v-if="subitem.href"
                class="desktop-nav__subitem-nav-link"
                :href="subitem.href"
                target="_blank"
                v-html="subitem.text"
              ></a>
              <RouterLink
                v-if="subitem.route"
                :to="subitem.route"
                class="desktop-nav__subitem-nav-link"
                v-html="subitem.text"
              ></RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.desktop-nav__nav {
  @include media-breakpoint-down(lg) {
    display: none;
  }
}
.desktop-nav__mobile-nav {
  //display: none;

  @include media-breakpoint-down(lg) {
    display: block;
  }
}

.desktop-nav__link,
.desktop-nav__subitem-nav-link {
  font-family: $font-broadacre-light;
  font-size: 14px;
  text-decoration: none;
  color: $black;
}
.desktop-nav__subitem-nav-link {
  font-size: 12px;
  color: $white;
}

.desktop-nav__link.is-active {
  color: $primary;
}
.desktop-nav__link.is-current {
  color: $primary;
}

.desktop-nav__list-item {
  position: relative;
}

.desktop-nav__submenu {
  position: absolute;
  left: 0;
  top: 100%;
  padding: 20px 15px;
  min-width: 200px;
  max-width: 300px;
  z-index: 0;
  pointer-events: none;

  &:before {
    //bg
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $primary;
    transform-origin: left;
    transform: scaleX(10) translateX(100%);
    transition: transform 0.25s $ease-expo-in;
    z-index: -1;
  }
}
.desktop-nav__submenu-list {
  opacity: 0;
  transition: opacity 0.1s ease-out;
}
.desktop-nav__submenu.is-active {
  pointer-events: auto;

  .desktop-nav__submenu-list {
    opacity: 1;
    transition: opacity 0.5s ease-out 0.25s;
  }

  &:before {
    transform: scaleX(10) translateX(0);
    transition: transform 0.5s $ease-expo-out;
  }
}
</style>
