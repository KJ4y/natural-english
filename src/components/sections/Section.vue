<template>
  <section class="cont" v-if="$attrs.cont">
    <Explanation :cont="$attrs.cont" />
  </section>
</template>

<script>
import Explanation from "./articles/Explanation";

export default {
  name: "Content",

  props: {},

  data() {
    return {};
  },
  watch: {},

  methods: {},

  components: {
    Explanation
  }
};
</script>

<style scoped>
</style>