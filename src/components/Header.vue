<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  navItems: {
    type: Array as PropType<
      {
        link: string
        text: string
        subitems?: { link: string; text: string }[]
      }[]
    >,
  },
})
</script>

<template>
  <header>
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="header__logo">
          <img src="@/assets/images/logo.svg" alt="Patrick - Creative Frontend Developer" />
        </div>
        <div class="header__nav">
          <nav>
            <!-- Main Navigation Items -->
            <ul class="list-unstyled d-flex gap-4">
              <li v-for="(item, i) in navItems" :key="i">
                <RouterLink :to="item.link">{{ item.text }}</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
