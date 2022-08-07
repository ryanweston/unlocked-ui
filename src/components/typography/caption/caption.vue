<script lang="ts" setup>
import { withTheme } from '@/theme/withTheme'

export interface CaptionProps {
  class?: string | string[]
}

const props = defineProps<CaptionProps>()

const styles = withTheme('caption')
const classes = [styles.base]
if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'Caption' }
</script>

<template>
  <p :class="classes">
    <slot />
  </p>
</template>
