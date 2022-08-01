<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { withTheme } from '@/theme/withTheme'

export interface LinkProps {
  class?: string | string[]
  ariaRole?: string
  href: string
  target?: string
}

const emit = defineEmits(['click', 'mouseenter', 'mouseout'])

// TODO: Handle reusable props such as type & size as individual props to
// improve developer experience
const props = withDefaults(defineProps<LinkProps>(), {
  disabled: false,
  type: 'default',
  target: '_blank',
})

const slots = useSlots()

const styles = withTheme('link')

const classes = computed(() => {
  const array = [styles.base]

  if (props.class)
    array.push(props.class)

  return array
})
</script>

<script lang="ts">
export default { name: 'u-link' }
</script>

<template>
  <a
    v-if="props.href"
    :class="classes"
    :href="props.href"
    :target="props.target"
    @click="e => emit('click', e)"
    @mouseenter="e => emit('mouseenter', e)"
    @mouseout="e => emit('mouseout', e)"
  >
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </a>
</template>
