<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = defineProps<{ to?: string | { name: string; params?: Record<string, any> } }>()
const attrs = useAttrs()

const isExternal = computed(() => {
  if (typeof props.to !== 'string') return false
  props.to.startsWith('http')
})
</script>

<template>
  <template v-if="to">
    <template v-if="isExternal">
      <a :href="String(to)" target="_blank">
        <slot />
      </a>
    </template>
    <template v-else>
      <RouterLink v-bind="attrs" :to="to">
        <slot />
      </RouterLink>
    </template>
  </template>
  <template v-else>
    <p class="mb-0"><slot /></p>
  </template>
</template>
