<template>
  <section class="cont block-style" v-if="cont">
    <div class="btn-layout">
      <button
        class="btn"
        :class="{ isactive:index == isActive }"
        v-for="(btn ,index) in btns"
        :key="index"
        @click="btnView(btn,index)"
      >
        <span v-if="index == isActive">{{ btn }}</span>
      </button>
    </div>
    <transition name="component-fade" mode="out-in">
      <Explanation v-if="btn == 'Explanation'" :explans="explans" />
      <Example v-else-if="btn == 'Example'" :exams="exams" @push-exam="getExam" />
      <Core v-else-if="btn == 'R.W.L.S'" :examed="examed" @push-cort="nextRe" />
      <Revise v-else-if="btn == 'Revise'" :examed="examed" />
    </transition>
  </section>
</template>

<script>
import Explanation from "./articles/Explanation";
import Example from "./articles/Example";
import Core from "./articles/Core";
import Revise from "./articles/Revise";

export default {
  name: "Section",

  props: { cont: null },

  data() {
    return {
      btn: "Explanation",
      isActive: 0,
      examed: null,
      btns: ["Explanation", "Example", "R.W.L.S", "Revise"],
    };
  },
  computed: {
    exams: function() {
      let exams = [];
      for (let index = 0; index < this.cont[13][0].length; index++) {
        exams.push(this.cont[13][0][index][0]);
      }
      return exams;
    },
    explans: function() {
      let explans = this.cont[12];
      return explans;
    }
  },
  methods: {
    btnView: function(btn, index) {
      this.btn = btn;
      this.isActive = index;
    },
    getExam: function(exam) {
      this.examed = exam;
      console.log(exam)
      console.log(this.examed)
      this.btn = "R.W.L.S";
      this.isActive = 2;
    },
    nextRe: function(value) {
      if (value == true) {
        this.btn = "Revise";
        this.isActive = 3;
      }
    }
  },

  components: {
    Explanation,
    Example,
    Core,
    Revise
  }
};
</script>

<style scoped>
/* 整体样式 */
h3 {
  margin: 2rem 0 0 0;
}

/* 按钮样式 */
.btn-layout {
  flex-direction: row;
  align-self: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  z-index: 5;
}

.btn {
  color: #0098f8;
  background-color: #98d0f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 2rem;
  height: 0.5rem;
  font-family: Arial;
  border: hidden;
  margin: 0 0.3rem;
  border-radius: 0.2rem;
}

.isactive {
  color: #fff;
  background-color: #0098f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 5rem;
  height: 2.5rem;
  font-family: Arial;
  border: hidden;
  margin: 0 0.3rem 0.3rem 0;
  border-radius: 5rem;
}

.isrwsl {
  color: #fff;
  background-color: #98d0f8;
}

button:hover {
  color: #fff;
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