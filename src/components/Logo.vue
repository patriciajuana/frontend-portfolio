<script setup lang="ts">
import { computed } from 'vue'
import { resolveImagePath } from '@/utils/paths'

const props = withDefaults(defineProps<{ type?: '' | 'dark' }>(), {
  type: '',
})

const imageSrc = computed(() => {
  return resolveImagePath(`logo${props.type ? `-${props.type}` : ''}.svg`)
})
</script>

<template>
  <div class="logo">
    <a href="/">
      <img
        class="img-fluid"
        width="213"
        height="69"
        :src="imageSrc"
        alt="Patrick - Creative Frontend Developer"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 150px;
}
</style>
