<template>
  <main id="app" class="flex-center">
    <Title title="Natural English" />
    <InputWord @push-word="pushReq" />
    <Request :word="word" @push-cont="getCont" />
    <keep-alive>
      <transition name="component-fade" mode="out-in">
        <Tips v-once v-if="view == 'Tips'" />
        <Error v-else-if="view == 'Error'" />
        <Section :cont="cont" v-else />
      </transition>
    </keep-alive>
  </main>
</template>

<script>
import Title from "./components/Header.vue";
import Request from "./components/engine/Request.vue";
import InputWord from "./components/sections/InputWord.vue";
import Tips from "./components/sections/Tips.vue";
import Error from "./components/sections/Error.vue";
import Section from "./components/sections/Section.vue";

export default {
  name: "App",
  data() {
    return {
      word: null,
      cont: null,
      view: "Tips"
    };
  },
  methods: {
    pushReq: function(word) {
      this.word = word;
    },
    getCont: function(cont) {
      if (cont) {
        this.cont = cont;
        this.view = "Section";
      } else {
        this.view = "Error";
      }
    }
  },
  components: {
    Title,
    InputWord,
    Request,
    Tips,
    Error,
    Section
  }
};
</script>

<style>
body {
  /* width: 100vw; */
  background-color: #e0e0e0;
  padding: 0;
  margin: 0;
  font: 1.5rem Arial;
}
:focus {
  outline: none;
}
h5,
p {
  margin: 1rem 0.5rem;
}

h3,
a:hover {
  color: #0098f8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 居中布局 */
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 块样式 */
.block-style {
  max-width: 90vw;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

  padding: 1rem 3vw;
  font: 1.5rem Arial;
  margin: 0 1rem 5rem;
  /* margin-bottom: 5rem; */
}

/* 过度样式 */
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
