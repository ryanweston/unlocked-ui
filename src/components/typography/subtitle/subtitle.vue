<script lang="ts" setup>
import { withTheme } from '@/theme/withTheme'

export interface SubtitleProps {
  class?: string
  size?: 1 | 2
}

const props = defineProps<SubtitleProps>()

const styles = withTheme('subtitle')
const classes = [styles.base]

classes.push(styles.size[props.size])

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-subtitle' }
</script>

<template>
  <p :class="classes">
    <slot />
  </p>
</template>
