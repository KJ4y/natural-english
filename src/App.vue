<template>
  <main id="app">
    <Title title="Natural English" />
    <InputWord @push-word="pushReq" />
    <Request :word="word" @push-cont="getCont" />
    <Error v-if="err" />
    <Content :cont="cont" v-else />
  </main>
</template>

<script>
import Title from "./components/Header.vue";
import Request from "./components/engine/Request.vue";
import InputWord from "./components/sections/InputWord.vue";
import Error from "./components/sections/Error.vue";
import Content from "./components/sections/Section.vue";

export default {
  name: "App",
  data() {
    return {
      word: null,
      cont: null,
      err: false
    };
  },

  watch: {
    cont: function() {
      this.vis = true;
    }
  },
  methods: {
    pushReq: function(word) {
      this.word = word;
    },
    getCont: function(cont) {
      if (cont) {
        this.cont = cont;
        this.err = false;
      } else {
        this.err = true;
      }
    }
  },
  components: {
    Title,
    InputWord,
    Request,
    Error,
    Content
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
}
body {
  background-color: #e0e0e0;
  padding: 0;
  margin: 0;
}

:focus {
  outline: none;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a:hover {
  color: #0098f8;
}

h3 {
  color: #0098f8;
}
</style>
