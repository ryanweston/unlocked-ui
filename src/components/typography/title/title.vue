<script lang="ts" setup>
import { withTheme } from '@/theme'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const styles = withTheme('title')
const classes = [styles.base]
if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-title' }
</script>

<template>
  <h2 :class="classes">
    <slot />
  </h2>
</template>
