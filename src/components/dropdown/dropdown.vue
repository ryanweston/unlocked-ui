<script lang="ts">
export default { name: 'Dropdown'}
</script>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { UButton } from '../button'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { withTheme } from '../../theme'

interface Item {
  name: string,
  href: string,
  icon: string,
}

interface Props {
 menuItems: Array<Item>
}

const props = defineProps<Props>()

const styles = withTheme('dropdown')

let classes = [styles.base]
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <UButton
          type="text"
          size="small"
        >
          Products
          <template #appendIcon>
            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
          </template>
        </UButton>
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-for="item in menuItems" :key="item.name" v-slot="{ active }">
              <a :href="item.href" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm flex flex-row items-center']"><div v-html="item.icon"></div>{{ item.name }}</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>