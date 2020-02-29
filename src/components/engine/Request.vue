<template>
  <div class="reque vis" v-if="vis"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "Request",
  data() {
    return {
      cont: null,
      vis: false,
    };
  },
  props: {
    word: null
  },
  watch: {
    // 如果 `word` 发生改变，这个函数就会运行
    word: function() {
      this.getCont();
    }
  },
  methods: {
    // AJAX请求
    getCont: function() {
      // let url =
      //   "/api/translate_a/single?client=at&sl=en&tl=zh-CN&hl=zh-CN&dt=ex&dt=md&dt=t&q=" +
      //   this.word;
      let url = this.word + ".json";
      axios
        .get(url)
        .then(
          Response => (
            (this.cont = Response.data),
            this.$emit("push-cont", this.cont)
          )
        )
        .catch(error => {
          if (error) {
            let err = this
            err.cont = null;
            this.$emit("push-cont", err.cont);
          }
        });
    }
  }
};
</script>


<style scoped>
</style>