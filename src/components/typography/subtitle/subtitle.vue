<template>
  <h3 :class="classes">
    <slot />
  </h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { withTheme } from '../../../theme'

export default defineComponent({
  name: 'Subtitle',
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise
  },
  setup() {
    const styles = withTheme('subtitle')
    let classes= [styles.base]
    return { classes }
  }
})
</script>
