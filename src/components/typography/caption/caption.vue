<script lang="ts" setup>
import { withTheme } from '@/theme'

export interface CaptionProps {
  class?: string
}

const props = defineProps<CaptionProps>()

const styles = withTheme('caption')
const classes = [styles.base]
if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-caption' }
</script>

<template>
  <p :class="classes">
    <slot />
  </p>
</template>
