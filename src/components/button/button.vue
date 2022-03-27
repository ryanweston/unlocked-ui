<script lang="ts" setup>
import { useSlots } from 'vue'
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
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  disabled: false,
  type: 'default',
  ariaRole: 'button',
})

const slots = useSlots()

const styles = withTheme('button')

const classes = [styles[props.size]]
classes.push(styles.variants[props.type])

if (props.disabled)
  classes.push(styles.disabled)

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'Button' }
</script>

<template>
  <!-- TODO: Find better way to do this -->
  <a
    v-if="external"
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

  <button v-else :class="classes" :role="ariaRole" @click="e => emit('click', e)">
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </button>
</template>
