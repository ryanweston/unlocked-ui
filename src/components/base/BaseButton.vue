<template>
  <input class="bg-black" type="text" />
</template>

<script lang="ts">
import { defineComponent, VueElement } from 'vue'
export default defineComponent({
  name: 'BaseButton',
  props: {
    child: VueElement,
    onFocus: Object,
    onClick: Function,
  }
})
</script>