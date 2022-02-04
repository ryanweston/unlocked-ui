<template>
  <input class="bg-blue" type="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../base/BaseButton.vue'

export default defineComponent({
  name: 'PrimaryButton',
  extends: BaseButton,
  props: {
    callback: Function,
    contactsPromise: Promise
  }
})
</script>
