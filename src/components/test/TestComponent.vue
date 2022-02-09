<template>
  <div class="bg-black pa-5 ma-5 h-40 w-40" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  props: {
    callback: Function,
    contactsPromise: Promise
  }
})
</script>
