<script lang="ts" setup>
import { withTheme } from '@/theme/withTheme'

export interface BodyProps {
  class?: string | string[]
  size?: 1 | 2
}

const props = withDefaults(defineProps<BodyProps>(), {
  size: 1,
})

const styles = withTheme('body')
const classes = [styles.base]

classes.push(styles.size[props.size])

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
