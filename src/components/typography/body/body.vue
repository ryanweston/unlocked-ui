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
export default { name: 'Body' }
</script>

<template>
  <p :class="classes">
    <slot />
  </p>
</template>
