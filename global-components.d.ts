// This file is intended to provide Global component
// Typescript support for the Volar extension.

// To use this, use the following code inside a types file utilised
// by your Vue3 application.

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UButton: typeof import('@unlocked/base')['UButton']
    UTooltip: typeof import('@unlocked/base')['UTooltip']
    ULink: typeof import('@unlocked/base')['ULink']
    UIcon: typeof import('@unlocked/base')['UIcon']
    UHeadline: typeof import('@unlocked/base')['UHeadline']
    USubtitle: typeof import('@unlocked/base')['USubtitle']
    UBody: typeof import('@unlocked/base')['UBody']
    UCaption: typeof import('@unlocked/base')['UCaption']
  }
}

export {}
