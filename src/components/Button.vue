<template>
  <input class="u-input" type="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button'
})
</script>

<style lang="postcss" scoped>
.u-input {
  @apply bg-black text-blue border-blue;
}
</style>