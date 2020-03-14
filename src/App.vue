<template>
  <main id="app" class="flex-center">
    <Title title="Natural English" />
    <InputWord @push-cont="getCont" />
    <keep-alive>
      <transition name="component-fade" mode="out-in">
        <Tips v-once v-if="view == 'Tips'" />
        <Error v-else-if="view == 'Error'" />
        <Section :cont="cont" :exams="exams" v-else />
      </transition>
    </keep-alive>
  </main>
</template>

<script>
import Title from "./components/Header.vue";
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
      view: "Tips",
      exams: [],
      exps: []
    };
  },
  methods: {
    getCont: function(cont) {
      if (cont[12] != null || cont[13] != null) {
        this.cont = cont;
        this.exams = [];
        for (let index = 0; index < cont[13][0].length; index++) {
          this.exams.push(cont[13][0][index][0]);
        }
        this.exps = cont[12];
        this.view = "Section";
        console.log('Section')
      } else if (cont == "") {
        this.view = "Tips";
      } else {
        this.view = "Error";
      }
    }
  },
  components: {
    Title,
    InputWord,
    Tips,
    Error,
    Section
  }
};
</script>

<style>
body {
  background-color: #e0e0e0;
  /* max-width: 95vw; */
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
b,
a:hover {
  color: #0098f8;
}
a:hover {
  cursor: pointer;
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
  flex-wrap: wrap;
}

/* 块样式 */
.block-style {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  font: 1.5rem Arial;

  max-width: 90vw;
  padding: 1rem 3vw;
  margin: 0 1rem 5rem;
}
/* 图标样式 */
.iconfont {
  color: #0098f8;
  font-size: 2rem;
  margin-top: 2rem;
}

/* 过度样式 */
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
