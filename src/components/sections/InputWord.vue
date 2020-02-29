<template>
  <section class="input">
    <span>s{{ word }}s</span>
    <input type="text" v-model="word" @keyup.enter="getWord" placeholder="请输入单词" />
  </section>
</template>

<script>
export default {
  name: "InputWord",
  data() {
    return {
      word: null
    };
  },
  methods: {
    getWord: function() {
      this.$emit("push-word", this.word);
    }
  }
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 0vw;
  max-width: 60vw;

  background-color: #fff;

  border-radius: 1rem;

  padding: 0vh 5vw;
  margin-top: -3rem;

  margin-bottom: 2rem;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

input {
  margin-bottom: 1rem;
  width: 100%;
  background-color: #ffffff00;

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

  color: #0098f800;
  font: 2.5rem Arial;
  font-weight: bold;
}
input:-internal-autofill-selected {
  background: none;
}
</style>