<script lang="ts">
export default { name: 'Dropdown'}
</script>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { UButton } from '@/components/button'
import { UItem } from '@/components/item'
import { UIcon } from '@/components/icon'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { withTheme } from '@/theme'

interface Item {
  name: string,
  href: string,
  icon: string,
  iconSrc: string,
  disabled: boolean,
}

interface Props {
  text: string,
  items: Array<Item>
}

const props = defineProps<Props>()

const styles = withTheme('dropdown')

let classes: any = styles
</script>

<template>
  <Menu as="div" :class="classes.wrapper" v-slot="{ open }">
    <div>
      <MenuButton>
        <slot name="activator">
          <UButton
            type="text"
            size="small"
          >
            {{ text }}
            <template #appendIcon>
              <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
            </template>
          </UButton>
        </slot>
      </MenuButton>
    </div>

    <div v-show="open">
      <transition :enter-active-class="classes.transition.enterActiveClass" :enter-from-class="classes.transition.enterFromClass" :enter-to-class="classes.transition.enterToClass" :leave-active-class="classes.transition.leaveActiveClass" :leave-from-class="classes.transition.leaveFromClass" :leave-to-class="classes.transition.leaveToClass">
        <slot name="menu">
          <MenuItems :class="classes.menu">
            <div v-for="item in items" :key="item.name">
              <MenuItem as="div" v-slot="{ active }" :disabled="item.disabled">
                <slot :active="active" :item="item">
                  <UItem
                    :href="item.href"
                    :disabled="item.disabled"
                    :active="active"
                  > 
                    <template v-if="item.iconSrc" #prefixIcon>
                      <UIcon :src="item.iconSrc" />
                    </template>
                    <template v-else-if="item.icon" #prefixIcon>
                      <UIcon>
                        {{ item.icon }}
                      </UIcon>
                    </template>
                    {{ item.name }}
                  </UItem>
                </slot>
              </MenuItem>
            </div>
          </MenuItems>
        </slot>
      </transition>
    </div>
  </Menu>
</template>