<template>
  <section class="cont">
    <Explanation :cont="$attrs.cont" />
  </section>
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

  padding: 3vw;
  margin-bottom: 5rem;

  border-radius: 1rem;

  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

  font: 1.5rem Arial;
}
</style>