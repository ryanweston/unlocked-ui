<script lang="ts" setup>
import { ref, useSlots } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { UButton } from '@/components/button'
import { UIcon } from '@/components/icon'
import { withTheme } from '@/theme'

export interface MenuItemProps {
  class?: string
  disabled?: boolean
  type?: string
  href?: string
  target?: string
  items: any
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<MenuItemProps>(), {
  disabled: false,
})

const dropdownVisible = ref(false)

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const slots = useSlots()

const styles = withTheme('menuItem')

const classes = [styles.base]

if (props.disabled)
  classes.push(styles.disabled)

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'u-menu-item' }
</script>

<template>
  <UButton
    :class="[classes]"
    :target="props.target"
    :disabled="props.disabled"
    :type="props.type"
    @click="(e: Event) => { toggleDropdown(); emit('click', e)}"
  >
    <div v-if="$slots.prefixIcon" class="mr-3 w-4 h-4">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon || items" class="ml-auto w-4 h-4">
      <slot name="appendIcon">
        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
      </slot>
    </div>
  </UButton>
  <template v-if="items && dropdownVisible">
    <UButton
      v-for="item in items"
      :key="item.name"
      :class="[classes, 'ml-4']"
      :href="item.href"
      :target="item.target"
      :disabled="item.disabled"
      type="text"
    >
      <template v-if="item.iconSrc" #prefixIcon>
        <UIcon :src="item.iconSrc" />
      </template>
      {{ item.name }}
    </UButton>
  </template>
</template>
