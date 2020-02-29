<template>
  <div class="cont">
    <Explanation :cont="$attrs.cont" />
  </div>
</template>

<script>
import Explanation from "./sections/Explanation.vue";

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
.cont {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70vw;
}
</style>