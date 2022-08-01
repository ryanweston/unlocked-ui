
<script lang="ts" setup>
import { withTheme } from '@/theme/withTheme'

export interface HeadlineProps {
  class?: string | string[]
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

const props = withDefaults(defineProps<HeadlineProps>(), {
  size: 1,
})

const styles = withTheme('headline')
const classes = [styles.base]

classes.push(styles.size[props.size])

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-headline' }
</script>

<!-- TODO: Render different heading depending on the size prop -->
<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>
