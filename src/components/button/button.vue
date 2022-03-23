<script lang="ts">
 export default { name: 'Button' }
</script>

<script lang="ts" setup>
import { withTheme } from '../../theme'

interface Props { 
  class: string,
  size: string,
  disabled: boolean,
  type: string,
  appendIcon: boolean,
  prefixIcon: boolean,
  onClick: () => {}
  ariaRole: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  disabled: false,
  type: 'default',
  appendIcon: false,
  prefixIcon: false,
  ariaRole: 'button'
})

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
  <button @click="onClick()" :class="classes" :role="ariaRole">
    <div :class="prefixIcon ? 'mr-2' : ''">
      <slot name="prefix-icon" />
    </div>
    <slot />
    <div :class="appendIcon ? 'ml-2' : ''">
      <slot name="append-icon" />
    </div>
  </button>
</template>
