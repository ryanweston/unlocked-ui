<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { withTheme } from '../../../theme'

export default defineComponent({
  name: 'Body',
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const styles = withTheme('body')
    let classes = [styles.base]
    
    return { classes }
  }
})
</script>
