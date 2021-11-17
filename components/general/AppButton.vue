<template>
  <button :class="`app-button main-button-${mod}`" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AccButton',

  props: {
    mod: {
      type: String,
      default: 'yellow',
    },
  },
};
</script>

<style lang="scss" scoped>
.main-button-yellow {
  @include button-dynamic-main($yellow, 0, $baseTextColor);

  &:hover {
    background-color: $yellowHover;
  }
}

.main-button-blue {
  @include button-dynamic-main($blue, 0, $white);

  &:hover {
    background-color: $blueHover;
  }
}

.main-button-light {
  @include button-dynamic-main($blueThin, 0, $blue);

  &:hover {
    background-color: $blueThinHover;
  }
}

.main-button-white {
  @include button-dynamic-main($white, 1px solid $blue, $blue);

  &:hover {
    background-color: $blueThin;
  }
}
</style>
