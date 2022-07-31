<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { withTheme } from '@/theme/withTheme'

export interface TooltipProps {
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
  hover?: boolean
  click?: boolean
}

const props = withDefaults(defineProps<TooltipProps>(), {
  hover: true,
  click: false,
})

const classes = computed(() => {
  const styles = withTheme('tooltip')

  if (props.bottom) {
    styles.position = styles.popover.positions.bottom
    return styles
  }

  if (props.left) {
    styles.position = styles.popover.positions.left
    return styles
  }

  if (props.right) {
    styles.position = styles.popover.positions.right
    return styles
  }

  if (props.top) {
    styles.position = styles.popover.positions.top
    return styles
  }
  return styles
})

const open = ref(false)

let activators: Record<string, (e: Event) => void> = {
  mouseenter: (e: Event) => reveal(),
  mouseout: (e: Event) => reveal(),
}

const clickEvent = {
  click: (e: Event) => reveal(),
}

if (props.click)
  activators = clickEvent

function reveal(time?: number) {
  open.value = !open.value
  if (time)
    setTimeout(reveal, time)
}
</script>

<script lang="ts">
export default { name: 'u-tooltip' }
</script>

<template>
  <Popover :class="classes.wrapper">
    <PopoverButton>
      <slot name="activator" :on="activators" :reveal="reveal">
        Tooltip
      </slot>
    </PopoverButton>

    <PopoverPanel v-show="open" static :class="[classes.popover.base, classes.position]">
      <slot name="tooltip">
        <div :class="classes.popover.tooltip">
          <slot />
        </div>
      </slot>
    </PopoverPanel>
  </Popover>
</template>
