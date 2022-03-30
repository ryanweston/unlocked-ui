<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { withTheme } from '@/theme'

interface Props {
  class: string
  size: string
  disabled: boolean
  type: string
  ariaRole: string
  external: boolean
  href: string
  target: string
  group: boolean
  first: boolean
  last: boolean
  active: boolean
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<Props>(), {
  group: false,
  active: false,
  size: 'medium',
  disabled: false,
  type: 'default',
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

const hover = ref(false)
</script>

<script lang="ts">
export default { name: 'Button' }
</script>

<template>
  <!-- TODO: Find better way to do this -->
  <a
    v-if="props.href"
    :class="classes"
    :href="props.href"
    :target="props.target"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="e => emit('click', e)"
  >
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot :hover="hover" name="prefixIcon" />
    </div>

    <slot :hover="hover" />

    <div v-if="$slots.appendIcon" :hover="hover" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </a>

  <button v-else :class="classes" :role="ariaRole" @click="e => emit('click', e)">
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot :hover="hover" name="prefixIcon" />
    </div>
    <slot :hover="hover" />
    <div v-if="$slots.appendIcon" class="ml-2">
      <slot :hover="hover" name="appendIcon" />
    </div>
  </button>
</template>
