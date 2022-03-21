<script lang="ts" setup>
import { withTheme } from '../../theme'

interface Props {
  class: string
}

const props = defineProps<Props>()

const styles = withTheme('footer')

// TODO: Fix typings for classes
let classes: any = styles.base

// if (props.class) {
//   classes.push(props.class)
// }
</script>

<template>
  <div :class="classes.wrapper">
    <div :class="classes.container">
      <slot/>
    </div>
  </div>
</template>