<script lang="ts" setup>
import { withTheme } from '@/theme'

interface Props {
  class: string
}

const props = defineProps<Props>()

const styles = withTheme('subtitle')
const classes = [styles.base]
if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-subtitle' }
</script>

<template>
  <h3 :class="classes">
    <slot />
  </h3>
</template>
