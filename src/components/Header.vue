<script setup lang="ts">
import { PropType, ref } from 'vue'
import { useRoute } from 'vue-router'

export interface HeaderNavItem {
  text: string
  route?: string
  href?: string
  subitems?: HeaderNavItem[]
}

const props = defineProps<{
  headerNavItems: HeaderNavItem[]
}>()

const navItemHovered = ref()
const setNavItemHovered = (id: string) => {
  navItemHovered.value = id
}
const isNavItemActive = (navItem: HeaderNavItem) => {
  return navItemHovered.value === navItem.route || navItem.href
}

const route = useRoute()
const isNavItemCurrent = (navItem: HeaderNavItem) => {
  return route.path === navItem.route
}
</script>

<template>
  <header class="header py-4">
    <div class="container">
      <div class="row">
        <div class="header__logo col">
          <Logo></Logo>
        </div>
        <div class="header__nav col-6">
          <nav>
            <!-- Main Navigation Items -->
            <ul class="header__nav-list list-unstyled mb-0 d-flex">
              <li
                v-for="(item, i) in headerNavItems"
                :key="i"
                class="header__nav-list-item"
                @mouseleave="setNavItemHovered('')"
              >
                <RouterLink
                  v-if="item.route"
                  :to="item.route"
                  class="header__nav-link d-flex align-items-center gap-1 p-2"
                  :class="{
                    'is-active': isNavItemActive(item),
                    'is-current': isNavItemCurrent(item),
                  }"
                  @mouseenter="setNavItemHovered(item.route || item.href || '')"
                >
                  {{ item.text }}
                  <i
                    v-if="item.subitems?.length && !isNavItemActive(item)"
                    class="fa fa-plus-square"
                  ></i>
                  <i
                    v-if="item.subitems?.length && isNavItemActive(item)"
                    class="far fa-minus-square"
                  ></i>
                </RouterLink>
                <!-- Sub Navigation Items -->
                <div
                  v-if="item.subitems?.length"
                  class="header__submenu"
                  :class="{
                    'is-active': isNavItemActive(item),
                  }"
                >
                  <ul class="header__submenu-list list-unstyled mb-0 d-flex flex-column gap-1">
                    <li v-for="(subitem, j) in item.subitems" :key="j">
                      <a
                        v-if="subitem.href"
                        class="header__subitem-nav-link"
                        :href="subitem.href"
                        target="_blank"
                        v-html="subitem.text"
                      ></a>
                      <RouterLink
                        v-if="subitem.route"
                        :to="subitem.route"
                        class="header__subitem-nav-link"
                        v-html="subitem.text"
                      ></RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 100;
}

.header__nav-link,
.header__subitem-nav-link {
  font-family: $font-broadacre-light;
  font-size: 14px;
  text-decoration: none;
  color: $black;
}
.header__subitem-nav-link {
  font-size: 12px;
  color: $white;
}

.header__nav-link.is-active {
  color: $primary;
}
.header__nav-link.is-current {
  color: $primary;
}

.header__nav-list {
}

.header__nav-list-item {
  position: relative;
}

.header__submenu {
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
.header__submenu-list {
  opacity: 0;
  transition: opacity 0.1s ease-out;
}
.header__submenu.is-active {
  pointer-events: auto;

  .header__submenu-list {
    opacity: 1;
    transition: opacity 0.5s ease-out 0.25s;
  }

  &:before {
    transform: scaleX(10) translateX(0);
    transition: transform 0.5s $ease-expo-out;
  }
}
</style>
