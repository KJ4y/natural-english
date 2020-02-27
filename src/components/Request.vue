<template>
  <div class="req">
    <span>s{{ word }}s</span>
    <input
      type="text"
      v-model="word"
      @input="updateWidth"
      @keyup.enter="getCont"
      placeholder="请输入单词"
    />
  </div>
</template>

<script>
// import Explanation from "./Explanation.vue";
import axios from "axios";

export default {
  name: "Request",
  data() {
    return {
      word: null,
      cont: null
    };
  },
  methods: {
    updateWidth: function() {},

    getCont: function() {
      let url =
        "/api/translate_a/single?client=at&sl=en&tl=zh-CN&hl=zh-CN&dt=ex&dt=md&dt=t&q=" +
        this.word;
      axios
        .get(url)
        .then(
          Response => (
            (this.cont = Response.data), this.$emit("give-cont", this.cont)
          )
        );
    }
  },
  components: {
    // Explanation
  }
};
</script>


<style scoped>
.req {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  min-width: 0vw;
  max-width: 60vw;
  /* height: 25vh; */
  background-color: #fff;

  border-radius: 1rem;

  padding: 0vh 5vw;
  margin-top: -3rem;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

input {
  /* min-width: 1vw; */
  /* max-width: 100vw; */
  margin-bottom: 1rem;
  width: 100%;
  background-color: #ffffff00;
  /* border-radius: 1rem; */
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: black;
  text-align: center;
  padding: 1.5rem 0rem 0.5rem;
  font: 2.5rem Arial;
  font-weight: bold;
  overflow: hidden;

  color: #0099f8;
}
span {
  margin-top: -2rem;
  background-color: #ffffff00;
  text-align: center;
  width: 100%;
  /* z-index: -999; */
  color: #0098f800;
  font: 2.5rem Arial;
  font-weight: bold;
}
input:-internal-autofill-selected {
  background: none;
}
</style>