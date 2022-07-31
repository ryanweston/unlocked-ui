<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { withTheme } from '@/theme/withTheme'

export type Variants = 'default' | 'secondary' | 'contrast'
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IconProps {
  size?: Sizes
  type?: string
  color?: string
  width?: string
  height?: string
  path?: string
  src?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<IconProps>(), {
  type: 'default',
  size: 'md',
})

const sizes: any = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 26,
}

const classes = computed (() => {
  const theme = withTheme('icon')
  const styles = []

  if (props.disabled) {
    styles.push(theme.disabled)
    return styles
  }

  styles.push(theme.variants[props.type])

  return styles
})

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
