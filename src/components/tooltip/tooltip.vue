<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { withTheme } from '@/theme'

const open = ref(false)

const activators = {
  mouseover: (e: Event) => reveal(),
  mouseleave: (e: Event) => reveal(),
}
interface Props {
  top: boolean
  left: boolean
  right: boolean
  bottom: boolean
}

const props = withDefaults(defineProps<Props>(), {
  top: true,
})

const classes = computed(() => {
  const styles = withTheme('tooltip')
  const object = { ...styles }

  if (props.bottom)
    object.position = 'top-full mt-2'

  if (props.top)
    object.position = 'bottom-full mb-2'

  if (props.left)
    object.position = 'right-full mr-2'

  if (props.right)
    object.position = 'left-full ml-2'

  return object
})

function reveal(time?: number) {
  open.value = !open.value
  if (time)
    setTimeout(reveal, time)
}
</script>

<script lang="ts">
export default { name: 'Tooltip' }
</script>

<template>
  <Popover class="relative flex flex-col items-center">
    <PopoverButton>
      <slot name="activator" :on="activators" :reveal="reveal">
        Solutions
      </slot>
    </PopoverButton>

    <PopoverPanel v-if="open" static :class="['absolute z-10', classes.position]">
      <slot name="tooltip">
        <div class="px-4 py-2 bg-primary text-textDark rounded-full text-sm">
          <slot />
        </div>
      </slot>
    </PopoverPanel>
  </Popover>
</template>
