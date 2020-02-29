<template>
  <section class="cont" v-if="cont">
    <div class="btn-layout">
      <button class="btn" @click="contview = 'Explanation'">Explanation</button>
      <button class="btn visBtn" @click="contview = 'Example'">Example</button>
      <button class="btn" @click="contview = 'Read'">Read</button>
      <button class="btn" @click="contview = 'Wirte'">Wirte</button>
      <button class="btn" @click="contview = 'Listen'">Listen</button>
      <button class="btn" @click="contview = 'Speak'">Speak</button>
      <button class="btn" @click="contview = 'Revise'">Revise</button>
    </div>

    <keep-alive>
      <transition name="component-fade" mode="out-in">
        <Explanation :cont="cont" />
        <Example :cont="cont" />
        <Read />
        <Write />
        <Listen />
        <Speak />
        <Revise />
      </transition>
    </keep-alive>
  </section>
</template>

<script>
import Explanation from "./articles/Explanation";
import Example from "./articles/Example";
import Read from "./articles/Read";
import Write from "./articles/Write";
import Listen from "./articles/Listen";
import Speak from "./articles/Speak";
import Revise from "./articles/Revise";

export default {
  name: "Section",

  props: { cont: null },

  data() {
    return {
      contview: null
    };
  },
  watch: {},

  methods: {
    visCont: function() {
      switch (this.contview) {
        case 1:
          this.contview = 0;
          break;
        case 2:
          // 执行代码块 2
          break;
        default:
        // 与 case 1 和 case 2 不同时执行的代码
      }
    }
  },

  components: {
    Explanation,
    Example,
    Read,
    Write,
    Listen,
    Speak,
    Revise
  }
};
</script>

<style scoped>
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