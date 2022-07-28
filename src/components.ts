import type { Plugin } from 'vue'
import { UMenu } from './components/menu'
import { UMenuItem } from './components/menu-item'
import { UButton } from './components/button'
import { ULink } from './components/link'
import { UDropdown } from './components/dropdown'
import { UFooter } from './components/footer'
import { UTooltip } from './components/tooltip'
import { UIcon } from './components/icon'
import { UDropdownItem } from './components/dropdown-item'
import { UHeadline } from './components/typography/headline'
import { UTitle } from './components/typography/title'
import { USubtitle } from './components/typography/subtitle'
import { UBody } from './components/typography/body'

export default [
  UMenu,
  UMenuItem,
  UButton,
  ULink,
  UDropdown,
  UDropdownItem,
  UFooter,
  UTooltip,
  UIcon,
  UHeadline,
  UTitle,
  USubtitle,
  UBody,
] as Plugin[]
