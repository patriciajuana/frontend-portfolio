<script setup lang="ts">
import { NavItem } from '@/interfaces/navItem'

const props = defineProps<{
  footerNavItems: NavItem[]
  footerContactItem?: NavItem
}>()
</script>

<template>
  <div class="footer pt-4">
    <div class="container">
      <div class="d-flex flex-column flex-md-row gap-4 gap-lg-0 justify-content-between">
        <div>
          <Logo type="dark"></Logo>
        </div>
        <nav>
          <div class="d-flex flex-column flex-md-row gap-2 gap-lg-4">
            <div v-for="(item, i) in footerNavItems" :key="i">
              <h2>
                <NavLink :to="item.route">{{ item.text }}</NavLink>
              </h2>
              <ul v-if="item.subitems?.length" class="d-flex flex-column list-unstyled mt-1">
                <li v-for="(subitem, j) in item.subitems" :key="j">
                  <NavLink :to="subitem.route">{{ subitem.text }}</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="footer__copy-block mt-3 py-2">
      <div class="container">
        <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
          <ul
            v-if="footerContactItem?.subitems"
            class="footer__contact list-unstyled d-flex flex-column flex-md-row gap-1 gap-lg-2 mb-0"
          >
            <li v-for="(contactSubItem, j) in footerContactItem?.subitems" :key="j">
              <NavLink :to="contactSubItem.route" class="d-flex align-items-center gap-1">
                <span>{{ contactSubItem.text }}</span>
                <i v-if="contactSubItem.iconClass" :class="contactSubItem.iconClass"></i>
              </NavLink>
            </li>
          </ul>
          <small class="footer__copyright mt-3 mt-md-0">© 2023 Patrick John Pacaña</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #1f1f1f;
}
.footer nav ul {
  gap: 5px;
}
.footer nav h2,
.footer nav h2 ::v-deep(a),
.footer nav li ::v-deep(a) {
  font-family: $font-broadacre-regular;
  font-size: 14px;
  text-decoration: none;
  color: $gray-400;
}

.footer nav h2 ::v-deep(a):hover {
  color: $primary;
}

.footer nav li ::v-deep(a) {
  font-family: $font-broadacre-light;
  font-size: 12px;

  &:hover {
    color: $primary;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
}
.footer__contact {
  gap: 5px;
}
.footer__contact ::v-deep(a) {
  font-family: $font-oswald;
  font-size: 14px;
  text-transform: lowercase;
  color: #afafaf;
  text-decoration: none;
  transition: color 0.25s ease-out;
}
.footer__contact ::v-deep(a):hover {
  color: $primary;
  text-decoration: none;

  span {
    text-decoration: underline;
  }

  i {
    text-decoration: none;
    transform: none;
  }
}
.footer__copyright {
  font-size: 12px;
  color: #afafaf;
}
.footer__copy-block {
  border-top: 1px solid rgba($white, 0.1);
}
</style>
