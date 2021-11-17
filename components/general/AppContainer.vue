<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
};
</script>

<style lang="scss" scoped>
.app-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 45px;

  @include mobile {
    padding: 0 30px;
  }
}
</style>
