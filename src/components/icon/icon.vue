<script lang="ts" setup>
import { useSlots } from 'vue'
import { withTheme } from '@/theme'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  size?: Sizes
  type?: string
  color?: string
  width?: string
  height?: string
  path?: string
  src?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const sizes: any = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 26,
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
export default { name: 'u-icon' }
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
    :fill="props.color ? props.color : 'currentColor'"
    :className="classes"
    viewBox="0 0 24 24"
    :width="props.width ? props.width : sizes[props.size]"
    :height="props.height ? props.height : sizes[props.size]"
  >
    <path :d="path" />
  </svg>
</template>
