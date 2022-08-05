import type { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import Button from '@/components/button'

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'variant', 'success', 'error'],
    },
  },
} as Meta

const code = (args: any) => {
  if (args.group === true)
    return '<Button v-bind="args" first :active="activeRef" @click="() => {changeStatus(true)}"> {{ args.default }} </Button><Button v-bind="args" last :active="!activeRef" @click="() => {changeStatus(false)}"> {{ args.default }} </Button>'
  else
    return '<Button v-bind="args"> {{ args.default }} </Button>'
}

const Template: Story = args => ({
  components: { Button },
  setup() {
    const activeRef = ref(true)
    function changeStatus(value: boolean) {
      activeRef.value = value
    }
    return { args, activeRef, changeStatus }
  },
  template: code(args),
})

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Variant = Template.bind({})
export const Text = Template.bind({})
export const Success = Template.bind({})
export const Error = Template.bind({})
export const Group = Template.bind({})

Primary.args = {
  type: 'primary',
  default: 'Button',
}

Secondary.args = {
  ...Primary.args,
  type: 'secondary',
}

Variant.args = {
  ...Primary.args,
  type: 'variant',
}

Text.args = {
  ...Primary.args,
  type: 'text',
}

Success.args = {
  ...Primary.args,
  type: 'success',
}

Error.args = {
  ...Primary.args,
  type: 'error',
}

Group.args = {
  ...Primary.args,
  group: true,
}
