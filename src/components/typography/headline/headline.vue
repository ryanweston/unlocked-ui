<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { withTheme } from '../../../theme'

export default defineComponent({
  name: 'Headline',
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise
  },
  setup() {
    const styles = withTheme('headline')
    let classes = [styles.base]

    return { classes }
  }
})
</script>
