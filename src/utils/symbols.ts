import type { InjectionKey } from 'vue'
import type { UConfig } from '@/types'
export const ConfigKey: InjectionKey<UConfig> = Symbol('u-config')
