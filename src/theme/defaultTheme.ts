import menu from '@/components/menu/classes'
import menuItem from '@/components/menu-item/classes'
import button from '@/components/button/classes'
import link from '@/components/link/classes'
import dropdown from '@/components/dropdown/classes'
import footer from '@/components/footer/classes'
import tooltip from '@/components/tooltip/classes'

import icon from '@/components/icon/classes'
import dropdownItem from '@/components/dropdown-item/classes'

// Typography
import headline from '@/components/typography/headline/classes'
import title from '@/components/typography/title/classes'
import subtitle from '@/components/typography/subtitle/classes'
import body from '@/components/typography/body/classes'

export const defaultTheme = {
  ...menu,
  ...menuItem,
  ...button,
  ...link,
  ...dropdown,
  ...dropdownItem,
  ...footer,
  ...tooltip,
  ...icon,
  ...headline,
  ...title,
  ...subtitle,
  ...body,
} as any
