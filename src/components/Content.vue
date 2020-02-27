<template>
  <div class="cont">
    <Request @give-cont="getCont" />
    <Explanation :cont="cont" />
  </div>
</template>

<script>
import Request from "./Request.vue";
import Explanation from "./Explanation.vue";

export default {
  name: "Content",

  data() {
    return {
      cont: null
    };
  },
  methods: {
    getCont: function(cont) {
      this.cont = cont;
    }
  },
  components: {
    Request,
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