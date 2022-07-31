import type { Meta, Story } from '@storybook/vue3'
import { UTooltip } from '@/components/tooltip'
import { UButton } from '@/components/button'

export default {
  component: UTooltip,
  title: 'Components/Tooltip',
} as Meta

const Template: Story = args => ({
  components: { UTooltip, UButton },
  setup() { return { args } },
  template: `
    <UTooltip 
      v-bind="args"
    > 
      <template #activator={on}>
        <UButton v-on="on">Button</UButton>
      </template>
      {{ args.default }}
    </UTooltip>
  `,
})

export const Default = Template.bind({})

Default.args = {
  bottom: true,
  default: 'Tooltip',
}
