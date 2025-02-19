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
      <div class="d-flex flex-column flex-lg-row gap-4 gap-lg-0 justify-content-between">
        <div>
          <Logo type="dark"></Logo>
        </div>
        <nav>
          <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-4">
            <div v-for="(item, i) in footerNavItems" :key="i">
              <h2>
                <RouterLink v-if="item.route" :to="item.route">
                  {{ item.text }}
                </RouterLink>
                <span v-else>{{ item.text }}</span>
              </h2>
              <ul v-if="item.subitems?.length" class="d-flex flex-column list-unstyled mt-1">
                <li v-for="(subitem, j) in item.subitems" :key="j">
                  <a
                    v-if="subitem.href"
                    :href="subitem.href"
                    target="_blank"
                    v-html="subitem.text"
                  ></a>
                  <RouterLink
                    v-if="subitem.route"
                    :to="subitem.route"
                    v-html="subitem.text"
                  ></RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="footer__copy-block mt-3 py-2">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
          <ul
            v-if="footerContactItem?.subitems"
            class="footer__contact list-unstyled d-flex flex-column flex-lg-row gap-1 gap-lg-2 mb-0"
          >
            <li v-for="(contactSubItem, j) in footerContactItem?.subitems" :key="j">
              <RouterLink :to="contactSubItem.route || '#'" :target="contactSubItem.target">
                <span>{{ contactSubItem.text }}</span>
                <i v-if="contactSubItem.iconClass" :class="contactSubItem.iconClass"></i>
              </RouterLink>
            </li>
          </ul>
          <small class="footer__copyright mt-3 mt-lg-0">© 2023 Patrick John Pacaña</small>
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
.footer nav h2 a,
.footer nav li a {
  font-family: $font-broadacre-regular;
  font-size: 14px;
  text-decoration: none;
  color: $gray-400;
}
.footer nav li a {
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
.footer__contact a {
  font-family: $font-oswald;
  font-size: 14px;
  text-transform: lowercase;
  color: #afafaf;
  text-decoration: none;
  transition: color 0.25s ease-out;
}
.footer__contact a:hover {
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
