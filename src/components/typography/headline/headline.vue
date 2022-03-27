
<script lang="ts" setup>
import { withTheme } from '@/theme'
interface Props {
  class: string
}

const props = defineProps<Props>()

const styles = withTheme('headline')
const classes = [styles.base]

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'Headline' }
</script>

<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>
