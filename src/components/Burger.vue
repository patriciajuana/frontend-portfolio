<script setup lang="ts">
const props = defineProps<{
  active?: boolean
}>()
</script>

<template>
  <div
    class="burger"
    :class="{
      'is-active': active,
    }"
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.burger {
  width: 26px;
  height: 18px;
  //border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > * {
    width: 100%;
    height: 1px;
    background-color: $black;
    transition: all 0.25s ease-out;
  }
}

.burger.is-active {
  //border: 1px solid red;

  > * {
    &:nth-child(1) {
      transform-origin: top left;
      transform: scaleX(1.3) rotate(39deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform-origin: bottom left;
      transform: scaleX(1.3) rotate(-39deg);
    }
  }
}
</style>
