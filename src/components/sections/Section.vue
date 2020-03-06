<template>
  <section class="cont flex-center block-style" v-if="cont">
    
    <div class="btn-layout">
      <!-- <button
        class="btn-cont"
        :class="{ isactive:index == isActive }"
        v-for="(btn ,index) in btns"
        :key="index"
        @click="btnView(btn,index)"
      >{{ btn }}</button>-->
      <button
        class="btn"
        :class="{ isactive:index == isActive }"
        v-for="(btn ,index) in btns"
        :key="index"
        @click="btnView(btn,index)"
      ></button>
    </div>
    <h3>{{ btn }}</h3>
    <keep-alive>
      <transition name="component-fade" mode="out-in">
        <Explanation v-if="btn == 'Explanation'" :cont="cont"  />
        <Example v-else-if="btn == 'Example'" :cont="cont"  />
        <Read v-else-if="btn == 'Read'"  />
        <Write v-else-if="btn == 'Write'"  />
        <Listen v-else-if="btn == 'Listen'"  />
        <Speak v-else-if="btn == 'Speak'"  />
        <Revise v-else-if="btn == 'Revise'"  />
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
      btn: "Explanation",
      isActive: 0,
      noActive: true,
      btns: [
        "Explanation",
        "Example",
        "Read",
        "Write",
        "Listen",
        "Speak",
        "Revise"
      ]
    };
  },
  watch: {},

  methods: {
    btnView: function(btn, index) {
      this.btn = btn;
      this.isActive = index;
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
/* 整体样式 */
/* .cont {
  margin-top: 1rem;
} */

/* 按钮样式 */
.btn-layout {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;

  /* margin-bottom: -3rem; */
  z-index: 5;
}

/* .btn-cont {
  color: #0098f8;
  background-color: #98d0f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 5rem;
  height: 2.5rem;
  font-family: Arial;
  border: hidden;
  margin: 0 0.3rem 0.3rem 0;
  border-radius: 0.3rem;
} */

h3{
  margin:2rem 0 0 0;
}

.btn {
  color: #0098f8;
  background-color: #98d0f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 2rem;
  height: .5rem;
  font-family: Arial;
  border: hidden;
  /* margin-right: .3rem; */
  margin: 0 0.3rem;
  border-radius: .2rem;
}

.isactive {
  color: #fff;
  background-color: #0098f8;
}

button:hover {
  color: #fff;
  /* background-color: #98d0f8; */
  background-color: #0098f8;
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