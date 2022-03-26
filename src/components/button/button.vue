<script lang="ts">
 export default { name: 'Button' }
</script>

<script lang="ts" setup>
import { withTheme } from '@/theme'
import { useSlots } from 'vue'

interface Props { 
  class: string,
  size: string,
  disabled: boolean,
  type: string,
  ariaRole: string,
  external: boolean,
  href: string,
  target: string
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  disabled: false,
  type: 'default',
  ariaRole: 'button'
})

console.log(props)

const slots = useSlots()

const styles = withTheme('button')

let classes = [styles[props.size]]
classes.push(styles.variants[props.type])

if (props.disabled) {
  classes.push(styles.disabled)
}

if (props.class) {
  classes.push(props.class)
}
</script>

<template>
  <!-- TODO: Find better way to do this -->
  <a 
    v-if="external" 
    @click="e => emit('click', e)"
    :class="classes"
    :href="props.href"
    :target="props.target"
  >
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </a>

  <button v-else @click="e => emit('click', e)" :class="classes" :role="ariaRole">
    <div v-if="$slots.prefixIcon" class="mr-2">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon" class="ml-2">
      <slot name="appendIcon" />
    </div>
  </button>
</template>
