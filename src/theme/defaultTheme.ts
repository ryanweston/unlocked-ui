import appBar from '@/components/menu/classes'
import button from '@/components/button/classes'
import dropdown from '@/components/dropdown/classes'
import footer from '@/components/footer/classes'
import tooltip from '@/components/tooltip/classes'

import icon from '@/components/icon/classes'
import item from '@/components/dropdown-item/classes'

// Typography
import headline from '@/components/typography/headline/classes'
import title from '@/components/typography/title/classes'
import subtitle from '@/components/typography/subtitle/classes'
import body from '@/components/typography/body/classes'

export const defaultTheme = {
  ...appBar,
  ...button,
  ...dropdown,
  ...item,
  ...footer,
  ...tooltip,
  ...icon,
  ...headline,
  ...title,
  ...subtitle,
  ...body,
} as any
