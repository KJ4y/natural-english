<template>
  <article class="write flex-center">
    <span class="iconfont icon-untitled103"></span>
    <div class="text flex-center" v-if="sentence">
      <span>{{ sentence }}</span>
      <span v-if="sentence == thistrue" class="iconfont icon-unie645"></span>
      <span v-else class="iconfont icon-unie646" @click="clearText"></span>
    </div>
    <div class="tips" v-else>{{ showplace }}</div>
    <input type="text" v-model="sentence" ref="out" @input="hideInput" />
  </article>
</template>

<script>
export default {
  name: "Write",
  props: {
    examed: null
  },
  data() {
    return {
      sentence: null,
      showplace: "请根据上节句子想象的场景输入默写一遍"
    };
  },
  computed: {
    thistrue: function() {
      return this.examed
        .replace("<b>", "")
        .replace("</b>", "")
        .trim();
    }
  },
  methods: {
    clearText: function() {
      this.sentence = null;
    },
    hideInput: function() {
      if (this.sentence == this.thistrue) {
        this.$refs.out.blur();
      }
    }
  }
};
</script>

<style scoped>
.tips {
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
}
.text {
  margin-top: 2rem;
  font-size: 2.5rem;
  box-shadow: none;
  flex-direction: row;
}

.icon-unie645,
.icon-unie646 {
  margin-top: 0;
  font-size: 2rem;
  margin-left: 1rem;
}
.icon-unie645:hover,
.icon-unie646:hover {
  cursor: pointer;
}

.show-place {
  font-size: 2rem;
}

input {
  width: 100%;
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #000;
  overflow: hidden;
  color: #0099f8;
  font: 1.5rem Arial;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff00;
  resize: none;

  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>