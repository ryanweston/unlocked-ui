<script lang="ts">
export default { name: 'Headline' }
</script>

<script lang="ts" setup>
import { withTheme } from '../../../theme'
interface Props {
  class: string
}

const props = defineProps<Props>()

const styles = withTheme('headline')
let classes = [styles.base]
if (props.class) {
  classes.push(props.class)
}
</script>

<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>
