<script lang="ts" setup>
import { withTheme } from '@/theme/withTheme'

export interface SubtitleProps {
  class?: string | string[]
  size?: 1 | 2
}

const props = withDefaults(defineProps<SubtitleProps>(), {
  size: 1,
})

const styles = withTheme('subtitle')
const classes = [styles.base]

classes.push(styles.size[props.size])

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'Subtitle' }
</script>

<template>
  <p :class="classes">
    <slot />
  </p>
</template>
