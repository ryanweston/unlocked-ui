import Button from './button.vue'

export default {
  component: Button,
  title: 'Components/Button',
}

// @ts-expect-error because it's broken
const Template = args => ({
  components: { Button },
  setup() { return { args } },
  template: '<Button v-bind="args"> {{ args.defaultSlot }} </Button',
})

export const Default = Template.bind({})
// @ts-expect-error because it's broken
Default.args = {
  disabled: true,
  defaultSlot: 'example',
}
