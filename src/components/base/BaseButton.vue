<template>
  <input type="text">
</template>

<script lang="ts">
import { defineComponent, VueElement } from 'vue'
export default defineComponent({
  name: 'BaseButton',
  props: {
    child: VueElement,
    onFocus: { 
      type: Function,
      default: () => { return },
    },
    onClick: { 
      type: Function,
      default: () => { return },
    },
  }
})
</script>