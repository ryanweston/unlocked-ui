import button from '../components/button/classes'
import base from '../components/base/classes'
import appBar from '../components/appBar/classes'
import footer from '../components/footer/classes'

//Typography
import headline from '../components/typography/headline/classes'
import title from '../components/typography/title/classes'
import subtitle from '../components/typography/subtitle/classes'
import body from '../components/typography/body/classes'

export const defaultTheme = {
  ...button,
  ...base,
  ...appBar,
  ...footer,
  ...headline,
  ...title,
  ...subtitle,
  ...body,
} as any