<script setup lang="ts"></script>

<template>
  <div class="burger">
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
  }
}
</style>
