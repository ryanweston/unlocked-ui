import type { Plugin } from 'vue'
import { UButton } from './components/button'
import { ULink } from './components/link'
import { UFooter } from './components/footer'
import { UTooltip } from './components/tooltip'
import { UIcon } from './components/icon'
import { UHeadline } from './components/typography/headline'
import { UCaption } from './components/typography/caption'
import { USubtitle } from './components/typography/subtitle'
import { UBody } from './components/typography/body'

// Export all components in a typesafe format to
// install to a Vue instance globally.
export default [
  UButton,
  ULink,
  UFooter,
  UTooltip,
  UIcon,
  UHeadline,
  UCaption,
  USubtitle,
  UBody,
] as Plugin[]
