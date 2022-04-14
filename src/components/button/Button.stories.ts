import type { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import Button from './button.vue'

export default {
  component: Button,
  title: 'Components/Button',
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

export const Default = Template.bind({})
export const Secondary = Template.bind({})
export const Alternate = Template.bind({})
export const Text = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})
export const Group = Template.bind({})

Default.args = {
  default: 'Default',
}

Secondary.args = {
  type: 'secondary',
  default: 'Secondary',
}

Alternate.args = {
  type: 'alternate',
  default: 'Alternate',
}

Text.args = {
  type: 'text',
  default: 'Text',
}

Warning.args = {
  type: 'warning',
  default: 'Warning',
}

Error.args = {
  type: 'error',
  default: 'Error',
}

Group.args = {
  group: true,
  default: 'Group',
}
