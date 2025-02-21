<script setup lang="ts">
import { NavItem } from '@/interfaces/navItem'

const props = defineProps<{
  navItems: NavItem[]
}>()
</script>

<template>
  <div class="mobile-nav" id="js-mobile-nav-accordion">
    <!-- Main Navigation Items -->
    <div class="container">
      <ul class="mobile-nav__list list-unstyled d-flex flex-column gap-1 mb-0">
        <li v-for="(item, i) in navItems" :key="i" class="mobile-nav__list-item">
          <div
            class="mobile-nav__item d-flex align-items-center justify-content-between gap-2 mb-1"
          >
            <NavLink :to="item.route" class="mobile-nav__link">{{ item.text }}</NavLink>
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
                <NavLink :to="subitem.route" class="mobile-nav__subitem-nav-link">
                  {{ subitem.text }}
                </NavLink>
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
  height: 100vh;
  background-color: rgba($white, 0.95);
  padding-top: 100px;
}

::v-deep(.mobile-nav__link),
::v-deep(.mobile-nav__subitem-nav-link) {
  font-family: $font-broadacre-light;
  font-size: 14px;
  text-decoration: none;
  color: $black;
}
::v-deep(.mobile-nav__subitem-nav-link) {
  font-size: 12px;
  color: $white;
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
}
.mobile-nav__accordion-icon-closed,
.mobile-nav__accordion-icon-open {
  display: none;
}
.mobile-nav__accordion-toggle[aria-expanded='true'] .mobile-nav__accordion-icon-open {
  display: block;
}
.mobile-nav__accordion-toggle:not([aria-expanded='true']) .mobile-nav__accordion-icon-closed {
  display: block;
}
</style>
