
<script lang="ts" setup>
import { withTheme } from '@/theme'

export interface HeadlineProps {
  class?: string
}

const props = defineProps<HeadlineProps>()

const styles = withTheme('headline')
const classes = [styles.base]

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-headline' }
</script>

<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>
