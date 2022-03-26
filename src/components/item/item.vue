<script lang="ts">
 export default { name: 'Item' }
</script>

<script lang="ts" setup>
import { withTheme } from '@/theme'
import { useSlots } from 'vue'

interface Props {
  active: boolean,
  class: string,
  disabled: boolean,
  type: string,
  href: string,
  target: string
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const slots = useSlots()

const styles = withTheme('item')

let classes = [styles.base]

if (props.disabled) {
  classes.push(styles.disabled)
}

if (props.class) {
  classes.push(props.class)
}

</script>

<template>
  <a 
    @click="e => emit('click', e)"
    :class="[classes, active ? styles.hover : '']"
    :href="props.href"
    :target="props.target"
  >
    <div v-if="$slots.prefixIcon" class="mr-3">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon" class="ml-3">
      <slot name="appendIcon" />
    </div>
  </a>
</template>
