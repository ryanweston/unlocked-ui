<script lang="ts" setup>
import { useSlots } from 'vue'
import { withTheme } from '@/theme'

interface Props {
  size: string
  type: string
  color: string
  fill: string
  stroke: string
  width: string
  height: string
  strokeWidth: number
  path: string
  src: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const sizes: any = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 24,
}

const styles = withTheme('icon')
const classes: any = [styles.base]

if (props.type)
  classes.push(styles.variants[props.type])

const slots = useSlots()

const path = slots.default
  ? slots.default()[0].children
  : props.path

</script>

<script lang="ts">
export default { name: 'Icon' }
</script>

<template>
  <img
    v-if="props.src"
    :src="props.src"
    class="w-auto h-full"
  >

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    :fill="props.fill ? props.fill : 'currentColor'"
    :className="classes"
    viewBox="0 0 24 24"
    :width="props.width ? props.width : sizes[props.size]"
    :height="props.height ? props.height : sizes[props.size]"
  >
    <path :d="path" />
  </svg>
</template>
