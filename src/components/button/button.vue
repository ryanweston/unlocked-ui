<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { withTheme } from '@/theme/withTheme'

export interface ButtonProps {
  class?: string
  size?: string
  disabled?: boolean
  type?: 'primary' | 'secondary' | 'variant' | 'text' | 'error' | 'success'
  ariaRole?: string
  href?: string
  target?: string
  group?: boolean
  first?: boolean
  last?: boolean
  active?: boolean
}

const emit = defineEmits(['click', 'mouseover', 'mouseleave'])

// TODO: Handle reusable props such as type & size as individual props to
// improve developer experience
const props = withDefaults(defineProps<ButtonProps>(), {
  group: false,
  active: false,
  size: 'medium',
  disabled: false,
  type: 'primary',
  ariaRole: 'button',
})

const slots = useSlots()

const styles = withTheme('button')

const classes = computed(() => {
  const array = [styles[props.size]]

  if (props.group) {
    if (props.active)
      array.push(styles.buttonGroup.active)
    else
      array.push(styles.buttonGroup.base)

    if (props.first)
      array.push(styles.buttonGroup.order.first)

    if (props.last)
      array.push(styles.buttonGroup.order.last)
    else
      array.push(styles.buttonGroup.order.middle)

    return array
  }

  array.push(styles.variants[props.type])

  if (props.disabled)
    array.push(styles.disabled)

  if (props.class)
    array.push(props.class)

  // TODO: potentially abstract group button logic away

  return array
})
</script>

<script lang="ts">
export default { name: 'u-button' }
</script>

<template>
  <a
    v-if="props.href"
    :class="classes"
    :href="props.href"
    :target="props.target"
    @click="e => emit('click', e)"
  >
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot name="prefixIcon" />
    </div>

    <slot />

    <div v-if="$slots.appendIcon" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </a>

  <button
    v-else
    :class="classes"
    :role="ariaRole"
    @click="e => emit('click', e)"
  >
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot name="prefixIcon" />
    </div>
    <slot name="default" />
    <div v-if="$slots.appendIcon" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </button>
</template>
