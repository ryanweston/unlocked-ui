<template>
  <h2 :class="classes">
    <slot />
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { withTheme } from '../../../theme'

export default defineComponent({
  name: 'Title',
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise,
  },
  setup() {
    const styles = withTheme('title')
    let classes = [styles.base]
        
    return { classes }
  }
})
</script>
