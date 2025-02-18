<script setup lang="ts">
import { HeaderNavItem } from '@/interfaces/headerNavItem'
import { PropType, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  headerNavItems: HeaderNavItem[]
}>()
</script>

<template>
  <header class="header py-2 py-lg-4">
    <div class="container">
      <div class="header__layout">
        <div class="header__logo">
          <Logo></Logo>
        </div>
        <div class="header__nav">
          <DesktopNav :headerNavItems="headerNavItems"></DesktopNav>
        </div>
        <div class="header__burger">
          <Burger></Burger>
        </div>
        <div class="header__mobile-nav">
          <MobileNav :headerNavItems="headerNavItems"></MobileNav>
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

.header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // > * {
  //   border: 1px solid red;
  // }
}
.header__burger {
  transform: translateY(-4px);
}
.header__nav {
  width: 50%;

  @include media-breakpoint-down(xl) {
    width: auto;
  }
}

.header__logo {
  position: relative;
  z-index: 20;
}
.header__mobile-nav {
  position: relative;
  z-index: 10;
}
</style>
