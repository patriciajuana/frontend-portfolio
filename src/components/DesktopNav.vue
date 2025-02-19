<script setup lang="ts">
import { NavItem } from '@/interfaces/navItem'
import { resolveImagePath } from '@/utils/paths'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  navItems: NavItem[]
}>()

const navItemHovered = ref()
const setNavItemHovered = (navItem?: NavItem) => {
  if (navItem) {
    navItemHovered.value = JSON.stringify(navItem.route)
  } else {
    navItemHovered.value = ''
  }
}
const isNavItemActive = (navItem: NavItem) => {
  return navItemHovered.value === JSON.stringify(navItem.route)
}

const route = useRoute()
const isNavItemCurrent = (navItem: NavItem) => {
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
        v-for="(item, i) in navItems"
        :key="i"
        class="desktop-nav__list-item"
        @mouseleave="setNavItemHovered()"
      >
        <NavLink
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
        </NavLink>
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
              <div class="desktop-nav__subitem">
                <NavLink
                  :to="subitem.route || '#'"
                  class="desktop-nav__subitem-nav-link d-inline-flex align-items-center gap-1"
                >
                  <i v-if="subitem.iconClass" :class="subitem.iconClass"></i>
                  {{ subitem.text }}
                </NavLink>
              </div>
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

::v-deep(.desktop-nav__link),
::v-deep(.desktop-nav__subitem-nav-link) {
  font-family: $font-broadacre-light;
  font-size: 14px;
  text-decoration: none;
  color: $black;
}
::v-deep(.desktop-nav__subitem-nav-link) {
  font-size: 12px;
  color: $white;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}

::v-deep(.desktop-nav__link).is-active {
  color: $primary;
}
::v-deep(.desktop-nav__link).is-current {
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
