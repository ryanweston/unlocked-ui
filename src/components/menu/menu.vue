<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { UButton } from '@/components/button'
import { UHeadline } from '@/components/typography/headline'
import { withTheme } from '@/theme/withTheme'

// Use Button types here to avoid repitition
export interface Items {
  text: string
  href?: string
  size?: string
  type?: string
  iconSrc?: string
  disabled?: boolean
  external?: boolean
  items?: Array<Items>
}

export interface MenuProps {
  navigation?: Array<Items>
  logo?: string
  logoHref?: string
  brand?: string
}

const props = defineProps<MenuProps>()

const styles = withTheme('menu')
const classes = styles
</script>

<script lang="ts">
export default { name: 'u-menu' }
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
        <slot name="mobileMenuButton">
          <div :class="classes.menuButton.container">
            <DisclosureButton :class="classes.menuButton.button">
              <span class="sr-only">Open menu</span>
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
        </slot>

        <!-- Left side -->
        <div :class="classes.logo.wrapper">
          <div :class="classes.logo.container">
            <slot name="leftSide">
              <template v-if="logo">
                <a :href="props.logoHref">
                  <img :class="classes.logo.image" :src="props.logo" alt="Workflow">
                </a>
                <a :href="props.logoHref">
                  <img :class="classes.logo.mobileImage" :src="props.logo" alt="Workflow">
                </a>
              </template>
              <a v-else :href="props.logoHref">
                <UHeadline :size="4" :class="classes.logo.text">
                  {{ brand }}
                </UHeadline>
              </a>
            </slot>
          </div>
        </div>

        <!-- Right side -->
        <div :class="classes.screenMenuWrapper">
          <div :class="classes.screenMenuContainer">
            <slot name="rightSide">
              <UButton
                v-for="item in navigation"
                :key="item.text"
                :size="item.size"
                :type="item.type"
              >
                {{ item.text }}
              </UButton>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <!-- TODO: Add slots -->
    <DisclosurePanel :class="classes.mobileWrapper">
      <div :class="classes.mobileContainer">
        <slot name="mobileMenu">
          <UButton
            v-for="item in navigation"
            :key="item.text"
            :size="item.size"
            :type="item.type"
          >
            {{ item.text }}
          </UButton>
        </slot>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
