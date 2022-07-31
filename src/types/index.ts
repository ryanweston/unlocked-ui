import type { AppContext, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type UTheme = Record<string, object>

export type UTokens = Record<string, string>

export interface UConfig {
  theme?: UTheme
}
