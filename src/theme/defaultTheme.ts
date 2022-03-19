import button from '../components/button/classes'
import test from '../components/test/classes'
import base from '../components/test/classes'

//Typography
import headline from '../components/typography/headline/classes'
import title from '../components/typography/title/classes'
import subtitle from '../components/typography/subtitle/classes'
import body from '../components/typography/body/classes'

export const defaultTheme = {
  ...button,
  ...test,
  ...base,
  ...headline,
  ...title,
  ...subtitle,
  ...body,
} as any