<template>
  <input
    class="bg-blue-600 t-button"
    type="text"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../base'

export default defineComponent({
  name: 'PrimaryButton',
  extends: BaseButton,
  props: {
    callback: Function,
    contactsPromise: Promise
  }
})
</script>


