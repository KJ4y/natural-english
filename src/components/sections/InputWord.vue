<template>
  <section class="input-block flex-center block-style">
    <span class="input">s{{ word }}s</span>
    <input
      class="input"
      type="text"
      v-model.trim="word"
      @keyup.enter="getWord"
      autocomplete="off"
      placeholder="请输入单词"
    />
  </section>
</template>

<script>
export default {
  name: "InputWord",
  data() {
    return {
      word: null,
    };
  },
  methods: {
    getWord: function() {
      if (this.word != "") {
        this.$emit("push-word", this.word);
      }
    }

  }
};
</script>

<style scoped>
.input-block {
  margin-top: -3rem;
  margin-bottom: 2rem;
  padding: 0vh 3vw;
}

.input {
  width: 100%;
  font: 2rem Arial;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff00;
}

input {
  margin-bottom: 1rem;
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #000;
  padding: 2rem 0rem 0.5rem;
  overflow: hidden;
  color: #0099f8;
}

span {
  width: 10%;
  margin-top: -3rem;
  color: #0098f800;
}

input:-internal-autofill-selected {
  background: none;
}
</style>