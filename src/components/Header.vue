<script setup lang="ts">
import { HeaderNavItem } from '@/interfaces/headerNavItem'
import { ref } from 'vue'

const props = defineProps<{
  headerNavItems: HeaderNavItem[]
}>()

const isMobileNavActive = ref(false)
const toggleMobileNav = () => {
  isMobileNavActive.value = isMobileNavActive.value ? false : true
}
</script>

<template>
  <header class="header py-2 py-lg-4">
    <div class="container">
      <div class="header__layout">
        <div class="header__logo">
          <Logo></Logo>
        </div>
        <div class="header__desktop-nav">
          <DesktopNav :headerNavItems="headerNavItems"></DesktopNav>
        </div>
        <div class="header__burger">
          <Burger @click="toggleMobileNav()"></Burger>
        </div>
      </div>
      <div
        class="header__mobile-nav"
        :class="{
          'is-active': isMobileNavActive,
        }"
      >
        <MobileNav :headerNavItems="headerNavItems"></MobileNav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
$z-mobile-nav: 10;
$z-logo: 20;
$z-burger: 30;

.header {
  position: relative;
  z-index: 100;

  @include media-breakpoint-down(md) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}

.header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // > * {
  //   border: 1px solid red;
  // }
}

.header__logo {
  position: relative;
  z-index: $z-logo;
}

.header__burger {
  display: none;
  position: relative;
  transform: translateY(-4px);
  z-index: $z-burger;

  @include media-breakpoint-down(md) {
    display: block;
  }
}

.header__desktop-nav {
  width: 50%;

  @include media-breakpoint-down(xl) {
    width: auto;
  }

  @include media-breakpoint-down(md) {
    display: none;
  }
}

.header__mobile-nav {
  position: relative;
  z-index: $z-mobile-nav;
  display: none;
}
.header__mobile-nav.is-active {
  display: block;
}
</style>
