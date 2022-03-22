<script lang="ts">
export default { name: 'AppBar'}
</script>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

import { withTheme } from '../../theme'

interface Items {
  name: string,
  href: string,
  current: string,
}

interface Props {
 navigation: Array<Items>
 title: string,
 logo: boolean
 logoUrl: string
}

const props = defineProps<Props>()

const styles = withTheme('appBar')
let classes: any = styles.base

// TODO: Improve functionality & modularise into individual components in order to help with
// slots and customisation of the app bar.
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    :class="classes.wrapper"
  >
    <div :class="classes.screenWrapper">
      <div :class="classes.screenContainer">
        <!-- Mobile menu button-->
        <div :class="classes.menuButton.container">
          <DisclosureButton :class="classes.menuButton.button">
            <span class="sr-only">Open main menu</span>
            <MenuIcon
              v-if="!open"
              :class="classes.menuButton.icon"
              aria-hidden="true"
            />
            <XIcon
              v-else
              :class="classes.menuButton.icon"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>

        <!-- Left side -->
        <div :class="classes.logo.wrapper">
          <div :class="classes.logo.container">
            <template v-if="logo">
              <img :class="classes.logo.image" :src="props.logoUrl" alt="Workflow" />
              <img :class="classes.logo.mobileImage" :src="props.logoUrl" alt="Workflow" />
            </template>
            <h3 v-else :class="classes.logo.text">
              Unlocked
            </h3>
          </div>
        </div>

        <!-- Right side -->
        <div :class="classes.screenMenuWrapper">
          <div :class="classes.screenMenuContainer">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[item.current ? classes.screenMenuItem.active : classes.screenMenuItem.default, classes.screenMenuItem.base]"
              :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <DisclosurePanel :class="classes.mobileWrapper">
      <div :class="classes.mobileContainer">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[item.current ? classes.mobileMenuItem.active : classes.mobileMenuItem.default, classes.mobileMenuItem.base]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>