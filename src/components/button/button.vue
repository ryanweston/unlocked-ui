<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../base'
import { withTheme } from '../../theme/index'

export default defineComponent({
  name: 'Button',
  extends: BaseButton,
  // TODO: Create prop types
  props: {
    callback: {
      type: Function,
      default: () => { return },
      required: false
    },
    contactsPromise: Promise,
    size: {
      type: String, // TODO: create object type,
      default: 'medium',
    },
    disabled: { 
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  setup(props) {
    const styles = withTheme('button')

    let classes = [styles.base]
    classes.push(styles.variants[props.type])

    if (props.disabled) {
      classes.push(styles.disabled)
    }

    console.log('styles', styles)
    console.log('props', props)
    console.log('classes', classes)
    return { classes }
  }
})
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
