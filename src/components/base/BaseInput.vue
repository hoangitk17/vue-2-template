<template>
  <input
    :value="value"
  />
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    value: { type: [String, Number], default: undefined },
  },
  methods: {
  },
});
</script>

<style lang="scss" scoped>
</style>
