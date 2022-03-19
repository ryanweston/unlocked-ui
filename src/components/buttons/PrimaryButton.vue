<template>
  <button :class="styles">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../base'
import { withTheme } from '../../theme/index'

export default defineComponent({
  name: 'PrimaryButton',
  extends: BaseButton,
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise
  },
  setup(props) {
    const styles = withTheme('button')
    console.log('styles', styles)
    console.log('styles string', styles.toString())
    console.log('props', props)
    return { styles }
  }
})
</script>


