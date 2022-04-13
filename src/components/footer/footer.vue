<script lang="ts" setup>
import { withTheme } from '@/theme'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const styles = withTheme('footer')
const classes = styles
</script>

<script lang="ts">
export default { name: 'u-footer' }
</script>

<template>
  <div :class="classes.wrapper">
    <div :class="classes.container">
      <slot />
    </div>
  </div>
</template>
