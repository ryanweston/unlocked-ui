import type { AppContext, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type UTheme = Record<string, object>

export interface UTokens {
  text: string
  primary: string
  layoutBackground: string
  error: string
  warning: string
  success: string
  textContrast: string
  background: string
  layoutHover: string
  layoutBorder: string
  layoutContrast: string
  layoutHeavyContrast: string
  link: string
}

export interface UConfig {
  theme?: UTheme
  tokens?: UTokens
  components?: any
}
