<template>
  <div :class="styles" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { withTheme } from '../../theme'

export default defineComponent({
  name: 'TestComponent',
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const styles = withTheme('test')
    console.log(styles)
    console.log(props)
    return { styles }
  }
})
</script>
