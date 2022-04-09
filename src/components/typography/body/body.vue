<script lang="ts" setup>
import { withTheme } from '@/theme'

interface Props {
  class: string
}

const props = defineProps<Props>()

const styles = withTheme('body')
const classes = [styles.base]
if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-body' }
</script>

<template>
  <p :class="classes">
    <slot />
  </p>
</template>
