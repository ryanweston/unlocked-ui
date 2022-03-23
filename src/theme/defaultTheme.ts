import appBar from '../components/appBar/classes'
import button from '../components/button/classes'
import dropdown from '../components/dropdown/classes'
import footer from '../components/footer/classes'

//Typography
import headline from '../components/typography/headline/classes'
import title from '../components/typography/title/classes'
import subtitle from '../components/typography/subtitle/classes'
import body from '../components/typography/body/classes'

export const defaultTheme = {
  ...appBar,
  ...button,
  ...dropdown,
  ...footer,
  ...headline,
  ...title,
  ...subtitle,
  ...body,
} as any